declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Google tag confirmado. Único ID para cargar gtag.js y gtag('config'). */
export const GOOGLE_TAG_ID = "GT-K466NNFJ";

/** Destino de Google Ads asociado al Google tag. No usar para cargar el snippet. */
export const GOOGLE_ADS_ID = "AW-18071571491";

export const GOOGLE_ADS_CONVERSION_LABEL = "pwVQCMHQnKAcEKOYmalD";

export const GOOGLE_ADS_CONVERSION_SEND_TO = `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`;
