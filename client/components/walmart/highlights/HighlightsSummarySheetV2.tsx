import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, MagicIcon } from "../icons";
import SpecsTabContent from "./SpecsTabContent";

/**
 * Concept 4 — UI-only variant of concept 1. Reuses concept 1's spec
 * content as two labeled tables: "Highlights" uses the same light-blue
 * row treatment as concept 1's highlight cards, and "Other
 * specifications" uses the plain gray/white row styling.
 */
export default function HighlightsSummarySheetV2() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border border-walmart-gray-line bg-white px-3 text-[14px] font-semibold leading-5 text-ld-text-default active:bg-walmart-gray-bg"
        >
          <MagicIcon />
          Highlights
        </button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="mx-auto flex h-[75vh] max-w-[440px] flex-col rounded-t-2xl p-0"
      >
        <SheetDescription className="sr-only">
          Specifications for JBL Tune 770NC Wireless Over-Ear Headphones
        </SheetDescription>

        <div className="flex items-center px-3 pt-4">
          <SheetClose asChild>
            <button
              type="button"
              aria-label="Back"
              className="flex h-8 w-8 items-center justify-center text-[#2E2F32]"
            >
              <ChevronLeft size={20} />
            </button>
          </SheetClose>
          <SheetTitle className="sr-only">Specifications</SheetTitle>
        </div>

        <SpecsTabContent />

        <div className="flex items-center justify-between border-t border-[#E3E4E5] px-4 py-3">
          <span className="text-[24px] font-bold text-[#2E2F32]">$88.95</span>
          <SheetClose asChild>
            <button
              type="button"
              className="flex h-11 items-center justify-center rounded-full bg-walmart-blue px-8 text-[16px] font-bold text-white active:bg-walmart-blue-dark"
            >
              Add to cart
            </button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
