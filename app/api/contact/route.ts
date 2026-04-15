import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter: max 5 submissions per IP per 10 minutes
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// Basic validation helpers
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  // Strip spaces, dashes, parentheses and check for 7-15 digits
  const digits = phone.replace(/[\s\-().+]/g, "");
  return /^\d{7,15}$/.test(digits);
}

function isValidText(str: string, maxLen: number): boolean {
  return typeof str === "string" && str.length <= maxLen;
}

const ALLOWED_BILLING = [
  "", "Menos de $10M", "$10M – $20M", "$20M – $70M", "+$70M",
];

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: "Demasiados intentos. Intentá en unos minutos." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Datos inválidos." }, { status: 400 });
  }

  const { nombre, empresa, facturacion, email, whatsapp, _honey } = body;

  // Honeypot check — bots fill this, humans don't
  if (_honey) {
    return NextResponse.json({ success: true }); // silent discard
  }

  // Input validation
  if (!nombre || !isValidText(nombre, 100)) {
    return NextResponse.json({ success: false, message: "Nombre inválido." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, message: "Email inválido." }, { status: 400 });
  }
  if (!isValidPhone(whatsapp)) {
    return NextResponse.json({ success: false, message: "WhatsApp inválido." }, { status: 400 });
  }
  if (!isValidText(empresa, 100)) {
    return NextResponse.json({ success: false, message: "Empresa inválida." }, { status: 400 });
  }
  if (!ALLOWED_BILLING.includes(facturacion)) {
    return NextResponse.json({ success: false, message: "Rango inválido." }, { status: 400 });
  }

  // Forward to Web3Forms using server-side key (never exposed to client)
  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    return NextResponse.json({ success: false, message: "Error de configuración." }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: key,
        nombre,
        empresa: empresa || "—",
        facturacion: facturacion || "No especificado",
        email,
        whatsapp,
      }),
    });

    const data = await res.json();
    if (data.success) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, message: "Error al enviar." }, { status: 502 });
  } catch {
    return NextResponse.json({ success: false, message: "Error al enviar." }, { status: 502 });
  }
}
