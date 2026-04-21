declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-18071571491";
export const GOOGLE_ADS_CONVERSION_LABEL = "pwVQCMHQnKAcEKOYma1D";
export const GOOGLE_ADS_CONVERSION_SEND_TO = `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`;

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
