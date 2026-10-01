import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, MagicIcon } from "../icons";

const SPEC_TABS = ["Item details", "Specifications", "Review summary", "Warranty", "Warnings"] as const;
type SpecTab = (typeof SPEC_TABS)[number];

const HIGHLIGHT_SPECS = [
  { label: "Battery life", value: "70 h" },
  { label: "Wireless technology", value: "Bluetooth" },
  { label: "Headphone style", value: "Over-Ear" },
  { label: "Noise control technology", value: "Adaptive Noise Cancellation" },
  { label: "Features", value: "Built-in Microphone" },
  { label: "Battery consumption type", value: "Integrated Rechargeable Battery" },
];

const OTHER_SPECS = [
  { label: "Model name", value: "Tune 770NC" },
  { label: "Wireless", value: "Y" },
  { label: "Accessories", value: "Charging Cable, Audio Cable, User Manual, Carrying Case" },
  { label: "Battery consumption type", value: "Integrated Rechargeable Battery" },
  { label: "Rec. use", value: "Casual Listening" },
  { label: "Assembled product weight", value: "1 lb" },
  { label: "Has written warranty", value: "No" },
];

const SENTIMENT_TAGS: { label: string; count: number; positive: boolean }[] = [
  { label: "Superior sound quality", count: 7, positive: true },
  { label: "Fit profile", count: 5, positive: false },
];

function StarFull() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.21273 0.0530012C6.30351 0.100832 6.37718 0.177984 6.42286 0.273051L8.0405 3.64013L11.5982 4.21078C11.8566 4.25224 12.0341 4.50524 11.9945 4.77589C11.9791 4.88108 11.9318 4.9783 11.8596 5.05317L9.30162 7.70479L10.0569 11.4004C10.1116 11.6681 9.94869 11.9316 9.69303 11.9889C9.58941 12.0121 9.48135 11.9983 9.38613 11.9496L5.99997 10.2169L2.6138 11.9496C2.37889 12.0698 2.09541 11.9678 1.98063 11.7218C1.93411 11.6221 1.92088 11.5089 1.94306 11.4004L2.69832 7.70479L0.140365 5.05317C-0.045448 4.86055 -0.0469752 4.54666 0.136954 4.35207C0.208444 4.27643 0.301276 4.2269 0.401726 4.21078L3.95944 3.64013L5.57708 0.273051C5.69458 0.0284626 5.97918 -0.0700572 6.21273 0.0530012Z" fill="#FFC220"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.36564 4.54466L5.99997 1.70204L4.63429 4.54466L1.52101 5.04403L3.78346 7.38933L3.13563 10.5592L5.99997 9.09359L8.8643 10.5592L8.21648 7.38933L10.4789 5.04403L7.36564 4.54466ZM8.0405 3.64013L6.42286 0.273051C6.37718 0.177984 6.30351 0.100832 6.21273 0.0530012C5.97918 -0.0700572 5.69458 0.0284626 5.57708 0.273051L3.95944 3.64013L0.401726 4.21078C0.301276 4.2269 0.208444 4.27643 0.136954 4.35207C-0.0469752 4.54666 -0.045448 4.86055 0.140365 5.05317L2.69832 7.70479L1.94306 11.4004C1.92088 11.5089 1.93411 11.6221 1.98063 11.7218C2.09541 11.9678 2.37889 12.0698 2.6138 11.9496L5.99997 10.2169L9.38613 11.9496C9.48135 11.9983 9.58941 12.0121 9.69303 11.9889C9.94869 11.9316 10.1116 11.6681 10.0569 11.4004L9.30162 7.70479L11.8596 5.05317C11.9318 4.9783 11.9791 4.88108 11.9945 4.77589C12.0341 4.50524 11.8566 4.25224 11.5982 4.21078L8.0405 3.64013Z" fill="#995213"/>
    </svg>
  );
}

function StarHalf() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.00038 10.2168L2.61366 11.9492C2.37876 12.0693 2.09561 11.9677 1.98084 11.7217C1.93436 11.622 1.92061 11.5089 1.94276 11.4004L2.69862 7.70508L0.140024 5.05273C-0.0452623 4.86016 -0.0464478 4.54699 0.137094 4.35254C0.208549 4.27694 0.301349 4.22707 0.401742 4.21094L3.95936 3.63965L5.57752 0.273438C5.66067 0.100362 5.82718 0.00199418 6.00038 0.00195312V10.2168Z" fill="#FFC220"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 1C6.27614 1 6.5 1.22386 6.5 1.5L6.5 9.5C6.5 9.77614 6.27614 10 6 10C5.72386 10 5.5 9.77614 5.5 9.5L5.5 1.5C5.5 1.22386 5.72386 1 6 1Z" fill="#995213"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.36564 4.54466L5.99997 1.70204L4.63429 4.54466L1.52101 5.04403L3.78346 7.38933L3.13563 10.5592L5.99997 9.09359L8.8643 10.5592L8.21648 7.38933L10.4789 5.04403L7.36564 4.54466ZM8.0405 3.64013L6.42286 0.273051C6.37718 0.177984 6.30351 0.100832 6.21273 0.0530012C5.97918 -0.0700572 5.69458 0.0284626 5.57708 0.273051L3.95944 3.64013L0.401726 4.21078C0.301276 4.2269 0.208444 4.27643 0.136954 4.35207C-0.0469752 4.54666 -0.045448 4.86055 0.140365 5.05317L2.69832 7.70479L1.94306 11.4004C1.92088 11.5089 1.93411 11.6221 1.98063 11.7218C2.09541 11.9678 2.37889 12.0698 2.6138 11.9496L5.99997 10.2169L9.38613 11.9496C9.48135 11.9983 9.58941 12.0121 9.69303 11.9889C9.94869 11.9316 10.1116 11.6681 10.0569 11.4004L9.30162 7.70479L11.8596 5.05317C11.9318 4.9783 11.9791 4.88108 11.9945 4.77589C12.0341 4.50524 11.8566 4.25224 11.5982 4.21078L8.0405 3.64013Z" fill="#995213"/>
    </svg>
  );
}

function InfoCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M7.40039 6.99976H8.60039V11.4998H7.40039V6.99976Z" fill="#74767C" />
      <path d="M7.99961 6.29976C8.49667 6.29976 8.89961 5.89681 8.89961 5.39976C8.89961 4.9027 8.49667 4.49976 7.99961 4.49976C7.50255 4.49976 7.09961 4.9027 7.09961 5.39976C7.09961 5.89681 7.50255 6.29976 7.99961 6.29976Z" fill="#74767C" />
      <path d="M8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998ZM8 13.9998C4.68629 13.9998 2 11.3135 2 7.99976C2 4.68605 4.68629 1.99976 8 1.99976C11.3137 1.99976 14 4.68605 14 7.99976C14 11.3135 11.3137 13.9998 8 13.9998Z" fill="#74767C" />
    </svg>
  );
}

function SentimentCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="8" fill="#2A8703" />
      <path d="M4.5 8.2L6.5 10.2L11.5 5.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SentimentNeutralIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="8" fill="#74767C" />
      <path d="M5 8H11" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// "At a glance" style: a 2-column grid of light-blue cards, each row
// stretching so both cards match height even if a value wraps to 2 lines.
// Title renders in regular weight, description in bold.
function HighlightChips() {
  const rows = [
    HIGHLIGHT_SPECS.slice(0, 2),
    HIGHLIGHT_SPECS.slice(2, 4),
  ];

  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, i) => (
        <div key={i} className="flex items-stretch gap-2">
          {row.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-1 flex-col gap-1 rounded-lg bg-[#E6F1FC] px-3 py-3"
            >
              <span className="text-[14px] leading-5 text-[#74767C]">{spec.label}</span>
              <span className="text-[14px] font-bold leading-5 text-[#2E2F32]">{spec.value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Full spec table — repeats the highlighted specs first, then the rest,
// so the complete list is visible in one place (matching the "At a
// glance" + "Key Information" pattern where highlighted specs show up
// again below).
const ALL_SPECS = [...HIGHLIGHT_SPECS, ...OTHER_SPECS];

function OtherSpecsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3E4E5]">
      {ALL_SPECS.map((spec, i) => (
        <div
          key={`${spec.label}-${i}`}
          className={`grid grid-cols-2 ${i > 0 ? "border-t border-[#E3E4E5]" : ""}`}
        >
          <div className="bg-walmart-gray-bg px-3 py-3 text-[14px] leading-5 text-[#2E2F32]">
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

// Rating + top sentiment tags mentioned across customer reviews.
function ReviewSummaryContent() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-bold text-[#2E2F32]">Reviews summary</p>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-px">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
          </div>
          <span className="text-[13px] leading-4 text-[#74767C]">(4.4)</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {SENTIMENT_TAGS.map((tag) => (
          <div
            key={tag.label}
            className="flex items-center gap-1.5 rounded-full border border-walmart-gray-line bg-white px-3 py-1.5"
          >
            {tag.positive ? <SentimentCheckIcon /> : <SentimentNeutralIcon />}
            <span className="text-[13px] font-bold leading-4 text-walmart-blue">{tag.label}</span>
            <span className="text-[13px] leading-4 text-[#74767C]">{tag.count}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button type="button" className="text-[14px] leading-5 text-[#2E2F32] underline">
          View all reviews
        </button>
        <div className="flex items-center gap-1">
          <span className="text-[12px] leading-4 text-[#74767C]">Generated by AI</span>
          <InfoCircleIcon />
        </div>
      </div>
    </div>
  );
}

/**
 * Concept D — duplicates concept B's CTA-pill + bottom-sheet pattern and
 * chrome, but visually separates a "Highlights" chip grid (the specs
 * shoppers rely on most) from an "Other Specifications" table. A "Review
 * summary" sub-tab, right after "Specifications", surfaces the same idea
 * sourced from customer-review sentiment instead of product specs.
 */
export default function HighlightsSummarySheet() {
  const [activeTab, setActiveTab] = useState<SpecTab>("Specifications");

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

        <div className="flex gap-5 overflow-x-auto border-b border-[#E3E4E5] px-4 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SPEC_TABS.map((tab) => {
            const isActive = tab === activeTab;
            const isInteractive = tab === "Specifications" || tab === "Review summary";
            const className = `shrink-0 whitespace-nowrap pb-3 text-[15px] ${
              isActive
                ? "border-b-2 border-walmart-blue font-bold text-[#2E2F32]"
                : "text-[#74767C]"
            }`;

            if (!isInteractive) {
              return (
                <span key={tab} className={className}>
                  {tab}
                </span>
              );
            }

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={className}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {activeTab === "Specifications" && (
            <>
              <div className="flex flex-col gap-3">
                <p className="text-[16px] font-bold text-[#2E2F32]">Highlights</p>
                <HighlightChips />
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-[#E3E4E5] pt-4">
                <p className="text-[16px] font-bold text-[#2E2F32]">All specifications</p>
                <OtherSpecsTable />
              </div>
            </>
          )}

          {activeTab === "Review summary" && <ReviewSummaryContent />}
        </div>

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
