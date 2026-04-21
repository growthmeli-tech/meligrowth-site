declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-18071571491";
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "";

export const PENDING_CONVERSION_KEY = "meli_growth_pending_google_ads_conversion";
export const LAST_FIRED_CONVERSION_KEY = "meli_growth_last_fired_google_ads_conversion";
export const CALENDLY_INTENT_KEY = "meli_growth_calendly_intent_tracked";

export function trackGoogleEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): boolean {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return false;
  }
  window.gtag("event", eventName, params);
  return true;
}

export function trackGoogleAdsConversion() {
  if (!GOOGLE_ADS_CONVERSION_LABEL) return false;

  return trackGoogleEvent("conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
  });
}
