declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-18071571491";
export const GOOGLE_ADS_CONVERSION_LABEL = "pwVQCMHQnKAcEKOYma1D";
export const GOOGLE_ADS_CONVERSION_SEND_TO = `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`;
