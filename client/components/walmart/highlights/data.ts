export interface GalleryHighlight {
  title: string;
  text: string;
}

export const HIGHLIGHTS_TITLE = "Highlights";

// The product attributes surfaced identically across every highlights
// concept — same "Highlights" header, each item an attribute label paired
// with its value.
export const HEADPHONE_HIGHLIGHTS: GalleryHighlight[] = [
  {
    title: "Noise control technology",
    text: "Adaptive Noise Cancellation",
  },
  {
    title: "Battery life",
    text: "70 h",
  },
  {
    title: "Wireless technology",
    text: "Bluetooth",
  },
  {
    title: "Headphone style",
    text: "Over-Ear",
  },
  {
    title: "Features",
    text: "Built-in Microphone",
  },
  {
    title: "Color category",
    text: "Black",
  },
  {
    title: "Brand",
    text: "JBL",
  },
];

export type HighlightsVariant = "overlay" | "chips" | "summary" | "summaryV2" | "summaryV3" | "summaryV4" | "trtbV2";
