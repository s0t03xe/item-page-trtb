import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MagicIcon } from "../icons";

function InfoCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.40039 6.99976H8.60039V11.4998H7.40039V6.99976Z" fill="#2E2F32"/>
      <path d="M7.99961 6.29976C8.49667 6.29976 8.89961 5.89681 8.89961 5.39976C8.89961 4.9027 8.49667 4.49976 7.99961 4.49976C7.50255 4.49976 7.09961 4.9027 7.09961 5.39976C7.09961 5.89681 7.50255 6.29976 7.99961 6.29976Z" fill="#2E2F32"/>
      <path d="M8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998ZM8 13.9998C4.68629 13.9998 2 11.3135 2 7.99976C2 4.68605 4.68629 1.99976 8 1.99976C11.3137 1.99976 14 4.68605 14 7.99976C14 11.3135 11.3137 13.9998 8 13.9998Z" fill="#2E2F32"/>
    </svg>
  );
}

function PriceBlock() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <span className="text-[20px] font-bold leading-7 text-[#2A8703]">Now</span>
        <div className="flex items-end">
          <span className="pb-[10px] text-[16px] font-bold leading-6 text-[#2A8703]">$</span>
          <span className="text-[24px] font-bold leading-8 text-[#2A8703]">44</span>
          <span className="pb-[10px] text-[16px] font-bold leading-6 text-[#2A8703]">95</span>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="rounded-[2px] bg-[#EAF3E6] px-1 py-0.5 text-[12px] font-bold leading-4 text-[#2A8703]">
            You save $35.00
          </span>
          <span className="text-[12px] leading-4 text-[#74767C] line-through">$79.95</span>
          <InfoCircle />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[12px] leading-4 text-[#74767C]">Price when purchased online</span>
          <InfoCircle />
        </div>
      </div>
    </div>
  );
}

// Same top highlights shown in concepts 1 and 2.
const HIGHLIGHT_SPECS = [
  { label: "Battery life", value: "70 h" },
  { label: "Wireless technology", value: "Bluetooth" },
  { label: "Headphone style", value: "Over-Ear" },
  { label: "Noise control technology", value: "Adaptive Noise Cancellation" },
  { label: "Features", value: "Built-in Microphone" },
];

function HighlightsTable() {
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#E3E4E5]">
      {HIGHLIGHT_SPECS.map((spec, i) => (
        <div
          key={spec.label}
          className={`grid grid-cols-2 ${i > 0 ? "border-t border-[#E3E4E5]" : ""}`}
        >
          <div className="bg-[#E6F1FC] px-3 py-3 text-[14px] leading-5 text-[#2E2F32]">
            {spec.label}
          </div>
          <div className="bg-white px-3 py-3 text-[14px] font-bold leading-5 text-[#2E2F32]">
            {spec.value}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Concept 5 — variation of concept 2 (Bottom sheet v2) that opens straight
 * into just the Highlights table, with no tab row and no drill-in.
 */
export default function HighlightsSummarySheetV3() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border border-walmart-gray-line bg-white px-3 text-[14px] font-semibold leading-5 text-ld-text-default active:bg-walmart-gray-bg"
        >
          <MagicIcon />
          Key specs
        </button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="mx-auto flex max-h-[85vh] max-w-[440px] flex-col rounded-t-2xl p-0"
      >
        <SheetDescription className="sr-only">
          Highlights for JBL Tune 770NC Wireless Over-Ear Headphones
        </SheetDescription>

        <div className="flex items-center justify-center px-3 pt-4">
          <SheetTitle className="text-[16px] font-bold leading-6 text-[#2E2F32]">
            Highlights
          </SheetTitle>
        </div>

        <div className="overflow-y-auto px-4 pt-5 pb-5">
          <div className="flex flex-col gap-3">
            <p className="text-[14px] font-bold leading-5 text-ld-text-default">
              JBL Tune 720BT Wireless Over-Ear Headphones with JBL Pure Bass Sound, Blue
            </p>

            <PriceBlock />

            <HighlightsTable />
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-[#E3E4E5] px-4 py-3">
          <SheetClose asChild>
            <button
              type="button"
              className="flex h-11 flex-1 items-center justify-center rounded-full border border-walmart-gray-line bg-white text-[16px] font-bold text-ld-text-default active:bg-walmart-gray-bg"
            >
              Buy now
            </button>
          </SheetClose>
          <SheetClose asChild>
            <button
              type="button"
              className="flex h-11 flex-1 items-center justify-center rounded-full bg-walmart-blue text-[16px] font-bold text-white active:bg-walmart-blue-dark"
            >
              Add to cart
            </button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
