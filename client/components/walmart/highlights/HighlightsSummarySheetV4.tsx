import { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, MagicIcon } from "../icons";
import TRTBInlineV2 from "./TRTBInlineV2";
import { TRTB_KEY_FEATURES, TRTB_OVERVIEW } from "./trtbData";

const PRODUCT_NAME =
  "JBL Tune 720BT Wireless Over-Ear Headphones with JBL Pure Bass Sound, Blue";

const AI_SUMMARY = TRTB_OVERVIEW;

type Sentiment = "positive" | "neutral" | "negative";

const REVIEW_HIGHLIGHTS: { label: string; count: number; sentiment: Sentiment }[] = [
  { label: "Sound quality", count: 89, sentiment: "positive" },
  { label: "Smart switching", count: 72, sentiment: "positive" },
  { label: "Comfortable ear pads", count: 26, sentiment: "positive" },
  { label: "Durable", count: 12, sentiment: "positive" },
  { label: "Limited volume", count: 8, sentiment: "neutral" },
  { label: "Bulky design", count: 6, sentiment: "negative" },
];

const SAMPLE_REVIEWS = [
  {
    rating: 5,
    name: "LearnGuitare",
    badge: "Top Reviewer",
    date: "30 Apr 2026",
    color: "Black",
    text: "Very satisfied...good sound, good noise canceling. I like the option of wireless hook up with various devices as well as direct wire plug in. Very comfortable fit too!",
  },
  {
    rating: 5,
    name: "SoundFan22",
    date: "10 Dec 2025",
    color: "Black",
    text: "Perfect fit and the battery lasts all day. Highly recommend for daily commuting and work calls.",
  },
];

const SHOP_CONFIDENTLY_DETAILS: Record<
  string,
  { rows: { label: string; value: string }[]; paragraph: string; linkText: string }
> = {
  "Free shipping": {
    rows: [
      { label: "Arrives by", value: "2 business days" },
      { label: "Ships from", value: "Walmart.com" },
    ],
    paragraph:
      "Items sold by third-party seller and fulfilled by Walmart are stored in a Walmart fulfillment center and shipped directly to you. Walmart handles the delivery, returns and customer service for these items.",
    linkText: "Learn more about shipping",
  },
  "Free 14-day returns": {
    rows: [
      { label: "Return within", value: "14 days after item is delivered" },
      { label: "Returnable to store?", value: "Yes" },
    ],
    paragraph:
      "Items sold by third-party seller and fulfilled by Walmart are stored in a Walmart fulfillment center and shipped directly to you. Walmart handles the delivery, returns and customer service for these items.",
    linkText: "Learn more about returns",
  },
  "Low return rate for this item": {
    rows: [
      { label: "Return rate", value: "Under 5%" },
      { label: "Why it matters", value: "Fewer returns than similar items" },
    ],
    paragraph:
      "This item has a lower return rate than similar products, based on recent purchase history. A low return rate can be a signal of better fit, quality, or accuracy of the product description.",
    linkText: "Learn more about this rating",
  },
};

const TYPE_INTERVAL_MS = 10;
const STAGE_DELAY_MS = 250;
const SHEET_OPEN_DURATION_MS = 500;

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path
        d="M8 0.75L10.1 5.25L15 5.95L11.5 9.4L12.3 14.25L8 11.95L3.7 14.25L4.5 9.4L1 5.95L5.9 5.25L8 0.75Z"
        fill="#FFC220"
        stroke="#FFC220"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function SentimentIcon({ sentiment }: { sentiment: Sentiment }) {
  if (sentiment === "positive") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
        <circle cx="10" cy="10" r="10" fill="#2A8703" />
        <path
          d="M8.65526 13.6553C8.36237 13.9482 7.8875 13.9482 7.5946 13.6553L5.0946 11.1553L6.15526 10.0947L8.12493 12.0643L13.8446 6.34466L14.9053 7.40532L8.65526 13.6553Z"
          fill="white"
        />
      </svg>
    );
  }
  if (sentiment === "negative") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
        <circle cx="10" cy="10" r="10" fill="#EA1100" />
        <path
          d="M13.9526 14.8365L10 10.8839L6.06699 14.817L5.18311 13.9331L9.11616 10L5.18311 6.06699L6.06699 5.18311L10 9.11616L13.9331 5.18311L14.817 6.06699L10.8839 10L14.8365 13.9526L13.9526 14.8365Z"
          fill="white"
        />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#74767C" />
      <path d="M6 10H14" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#2A8703" />
      <g transform="translate(4 4)">
        <path
          d="M0.75 3C0.75 2.58579 1.08579 2.25 1.5 2.25H6.74998C7.16419 2.25 7.49998 2.58579 7.49998 3V3.37498L8.06399 3.37498C8.29836 3.37498 8.51925 3.48453 8.66107 3.67111L9.86126 5.24998L10.5 5.24999C10.9142 5.25 11.25 5.58578 11.25 5.99999V7.87498C11.25 8.2892 10.9142 8.62498 10.5 8.62498H9.70275C9.53624 9.27195 8.94895 9.75 8.25 9.75C7.55106 9.75 6.96377 9.27196 6.79726 8.625H5.20274C5.03623 9.27196 4.44894 9.75 3.75 9.75C3.05105 9.75 2.46376 9.27195 2.29725 8.62498H1.5C1.08579 8.62498 0.75 8.28919 0.75 7.87498V3ZM5.20274 7.875H6.79726C6.96377 7.22804 7.55106 6.75 8.25 6.75C8.94893 6.75 9.53622 7.22803 9.70274 7.87498H10.5V5.99999L9.86125 5.99998C9.62689 5.99998 9.40601 5.89043 9.26419 5.70386L8.06399 4.12498H7.5V6H6.75V3.38027L6.74998 3.37498V3H1.5V7.87498L2.29726 7.87498C2.46378 7.22803 3.05107 6.75 3.75 6.75C4.44894 6.75 5.03623 7.22804 5.20274 7.875ZM9 8.25C9 7.83579 8.66421 7.5 8.25 7.5C7.83579 7.5 7.5 7.83579 7.5 8.25C7.5 8.66421 7.83579 9 8.25 9C8.66421 9 9 8.66421 9 8.25ZM3.75 9C4.16421 9 4.5 8.66421 4.5 8.25C4.5 7.83579 4.16421 7.5 3.75 7.5C3.33579 7.5 3 7.83579 3 8.25C3 8.66421 3.33579 9 3.75 9Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

function ReturnsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#2A8703" />
      <g transform="translate(4 4)">
        <path
          d="M1.5 8.51314L5.3326 10.2092L5.13613 10.9421L1.19637 9.1986C0.925 9.07851 0.75 8.80977 0.75 8.51314V3.49179C0.75 3.1952 0.924956 2.92649 1.19627 2.80637L5.69627 0.814221C5.8897 0.728593 6.1103 0.728593 6.30373 0.814221L10.8037 2.80637C11.075 2.92649 11.25 3.1952 11.25 3.49179V6.00252H10.5L10.5 3.9646L6.47148 5.82303C6.4398 5.83765 6.4076 5.85072 6.375 5.86224V7.5018H5.625V5.86221C5.59243 5.85069 5.56026 5.83763 5.5286 5.82303L1.5 3.96457L1.5 8.51314ZM1.89032 3.319L3.45847 4.04241L7.35031 2.09742L6 1.49964L1.89032 3.319ZM8.2396 2.49111L4.33054 4.44471L5.8429 5.14239C5.94261 5.18838 6.05748 5.18838 6.15719 5.14239L10.1097 3.31902L8.2396 2.49111Z"
          fill="white"
        />
        <path
          d="M6.75074 7.01326V8.35715C6.75074 8.50107 6.86827 8.61773 7.01324 8.61773H8.36701C8.60087 8.61773 8.71799 8.33705 8.55262 8.17289L8.15958 7.78271C8.74316 7.39002 9.54366 7.45028 10.0607 7.96351C10.6464 8.54502 10.6464 9.48783 10.0607 10.0693C9.47487 10.6509 8.52513 10.6509 7.93934 10.0693C7.79626 9.9273 7.68861 9.76448 7.61565 9.59105L6.92357 9.87794C7.03355 10.1394 7.19561 10.384 7.40901 10.5958C8.28769 11.4681 9.71231 11.4681 10.591 10.5958C11.4697 9.72354 11.4697 8.30931 10.591 7.43705C9.78046 6.63243 8.50538 6.57003 7.62279 7.24984L7.19886 6.829C7.03349 6.66484 6.75074 6.78111 6.75074 7.01326Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

function ThumbUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#2A8703" />
      <g transform="translate(4 4)">
        <path
          d="M9.07822 4.50025C8.91117 4.50025 8.78255 4.26156 8.8387 4.10426C8.92316 3.86758 9.00055 3.51123 9.00055 3.00015V2.62503C9.00055 1.58941 8.16103 0.75 7.12543 0.75C6.71119 0.75 6.37538 1.08584 6.37538 1.50005V2.68519C6.37538 3.12311 6.18402 3.53916 5.85152 3.82418L4.27406 5.17632C3.94156 5.46135 3.7502 5.87739 3.7502 6.31532V7.87548C3.7502 9.53242 5.09344 10.8757 6.7504 10.8757H8.94777C9.44933 10.8757 9.91772 10.625 10.1959 10.2077L10.3747 9.93958C10.4568 9.81634 10.5007 9.67159 10.5007 9.52354V9.17763C10.5007 9.10283 10.5118 9.02866 10.5336 8.95761C10.5458 8.91806 10.5612 8.87942 10.5798 8.84216L10.5978 8.80627C10.7757 8.45038 10.805 8.03845 10.6792 7.66105L10.6407 7.5455C10.5558 7.29097 10.632 7.01052 10.8339 6.8339C11.7592 6.02425 11.1865 4.50025 9.95702 4.50025H9.07822ZM9.92692 8.47079L9.90898 8.50678C9.80483 8.71507 9.7506 8.9447 9.7506 9.17763V9.52354L9.57186 9.79162C9.43273 10.0003 9.19855 10.1256 8.94777 10.1256H6.7504C5.50767 10.1256 4.50025 9.11821 4.50025 7.87548V6.31532C4.50025 6.09631 4.59593 5.88828 4.76218 5.74582L6.33965 4.39368C6.83839 3.96619 7.12543 3.34212 7.12543 2.68519V1.50005C7.74684 1.50005 8.2505 2.00372 8.2505 2.62503V3.00015C8.2505 3.43469 8.18488 3.7047 8.13228 3.85211C8.00941 4.19646 8.10433 4.5279 8.22594 4.73757C8.34401 4.94111 8.62301 5.2503 9.07822 5.2503H9.95702C10.4939 5.2503 10.744 5.91584 10.3399 6.26944C9.91067 6.64502 9.74873 7.24152 9.9291 7.78264L9.96762 7.89819C10.0305 8.08689 10.0159 8.2929 9.92692 8.47079Z"
          fill="white"
        />
        <path
          d="M2.02509 5.2503C1.32087 5.2503 0.75 5.82117 0.75 6.52535V9.22561C0.75 9.92979 1.32087 10.5007 2.02509 10.5007H2.99985V9.7506H2.02509C1.73513 9.7506 1.50005 9.51557 1.50005 9.22561V6.52535C1.50005 6.23538 1.73513 6.00035 2.02509 6.00035H2.99985V5.2503H2.02509Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

const SHOP_CONFIDENTLY: { label: string; Icon: () => JSX.Element }[] = [
  { label: "Free shipping", Icon: TruckIcon },
  { label: "Free 14-day returns", Icon: ReturnsIcon },
  { label: "Low return rate for this item", Icon: ThumbUpIcon },
];

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M6 3.5L11 8L6 12.5" stroke="#2E2F32" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M7.40039 6.99976H8.60039V11.4998H7.40039V6.99976Z" fill="#74767C" />
      <path d="M7.99961 6.29976C8.49667 6.29976 8.89961 5.89681 8.89961 5.39976C8.89961 4.9027 8.49667 4.49976 7.99961 4.49976C7.50255 4.49976 7.09961 4.9027 7.09961 5.39976C7.09961 5.89681 7.50255 6.29976 7.99961 6.29976Z" fill="#74767C" />
      <path d="M8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998ZM8 13.9998C4.68629 13.9998 2 11.3135 2 7.99976C2 4.68605 4.68629 1.99976 8 1.99976C11.3137 1.99976 14 4.68605 14 7.99976C14 11.3135 11.3137 13.9998 8 13.9998Z" fill="#74767C" />
    </svg>
  );
}

function PriceInfoCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M7.40039 6.99976H8.60039V11.4998H7.40039V6.99976Z" fill="#2E2F32" />
      <path d="M7.99961 6.29976C8.49667 6.29976 8.89961 5.89681 8.89961 5.39976C8.89961 4.9027 8.49667 4.49976 7.99961 4.49976C7.50255 4.49976 7.09961 4.9027 7.09961 5.39976C7.09961 5.89681 7.50255 6.29976 7.99961 6.29976Z" fill="#2E2F32" />
      <path d="M8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998ZM8 13.9998C4.68629 13.9998 2 11.3135 2 7.99976C2 4.68605 4.68629 1.99976 8 1.99976C11.3137 1.99976 14 4.68605 14 7.99976C14 11.3135 11.3137 13.9998 8 13.9998Z" fill="#2E2F32" />
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
          <PriceInfoCircle />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[12px] leading-4 text-[#74767C]">Price when purchased online</span>
          <PriceInfoCircle />
        </div>
      </div>
    </div>
  );
}

function KeyItemFeatures() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] font-bold leading-5 text-[#2E2F32]">Key item features</p>
      <div className="flex flex-col gap-2">
        {TRTB_KEY_FEATURES.map((feature) => (
          <div key={feature.title} className="flex items-start gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2E2F32]" />
            <div className="flex flex-col">
              <span className="text-[14px] font-bold leading-5 text-[#2E2F32]">{feature.title}</span>
              <span className="text-[14px] leading-5 text-[#515357]">{feature.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomerReviewHighlights({ onSelect }: { onSelect: (label: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] font-bold leading-5 text-[#2E2F32]">Customer review highlights</p>
      <div className="flex flex-wrap gap-2">
        {REVIEW_HIGHLIGHTS.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => onSelect(item.label)}
            className="flex h-8 items-center gap-1 rounded-full border border-[#E3E4E5] bg-white py-1.5 pl-1.5 pr-2 active:bg-walmart-gray-bg"
          >
            <SentimentIcon sentiment={item.sentiment} />
            <span className="whitespace-nowrap text-[14px] leading-5 text-[#2E2F32]">{item.label}</span>
            <span className="text-[14px] leading-5 text-[#74767C]">{item.count}</span>
            <ChevronRightIcon />
          </button>
        ))}
      </div>
    </div>
  );
}

function ShopConfidently({ onSelect }: { onSelect: (label: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] font-bold leading-5 text-[#2E2F32]">Shop confidently</p>
      <div className="flex flex-wrap gap-2">
        {SHOP_CONFIDENTLY.map(({ label, Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => onSelect(label)}
            className="flex h-8 items-center gap-1 rounded-full border border-[#E3E4E5] bg-white py-1.5 pl-1.5 pr-2 active:bg-walmart-gray-bg"
          >
            <Icon />
            <span className="whitespace-nowrap text-[14px] leading-5 text-[#2E2F32]">{label}</span>
            <ChevronRightIcon />
          </button>
        ))}
      </div>
    </div>
  );
}

function DetailBackHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="flex items-center px-3 pt-4">
      <button
        type="button"
        aria-label="Back"
        onClick={onBack}
        className="flex h-8 w-8 shrink-0 items-center justify-center text-[#2E2F32]"
      >
        <ChevronLeft size={20} />
      </button>
      <SheetTitle className="flex-1 text-center text-[16px] font-bold leading-6 text-[#2E2F32]">
        {title}
      </SheetTitle>
      <span className="w-8 shrink-0" aria-hidden="true" />
    </div>
  );
}

function DetailFooter() {
  return (
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
  );
}

function ReviewDetailContent({ activeLabel }: { activeLabel: string }) {
  const active = REVIEW_HIGHLIGHTS.find((r) => r.label === activeLabel);
  return (
    <div className="flex-1 overflow-y-auto px-4 pt-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {REVIEW_HIGHLIGHTS.map((item) => {
            const isActive = item.label === activeLabel;
            return (
              <div
                key={item.label}
                className={`flex h-8 items-center gap-1 rounded-full border bg-white py-1.5 pl-1.5 pr-2 ${
                  isActive ? "border-2 border-[#2E2F32]" : "border-[#E3E4E5]"
                }`}
              >
                <SentimentIcon sentiment={item.sentiment} />
                <span className="whitespace-nowrap text-[14px] leading-5 text-[#2E2F32]">{item.label}</span>
                <span className="text-[14px] leading-5 text-[#74767C]">{item.count}</span>
              </div>
            );
          })}
        </div>

        {active && (
          <div className="flex items-center gap-3 border-y border-[#E3E4E5] py-3">
            <span className="text-[14px] font-bold leading-5 text-[#2E2F32]">{active.count} mentions</span>
            <span className="text-[14px] leading-5 text-[#74767C]">{active.label}</span>
          </div>
        )}

        <p className="text-[14px] leading-5 text-[#74767C]">Showing 2 of 39 reviews</p>

        <div className="flex flex-col gap-4">
          {SAMPLE_REVIEWS.map((review, i) => (
            <div key={review.name} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Stars rating={review.rating} />
                <span className="text-[12px] leading-4 text-[#74767C]">{review.date}</span>
              </div>
              <div className="flex items-center gap-1 text-[12px] leading-4 text-[#74767C]">
                <span>Verified Purchase</span>
                {review.badge && (
                  <>
                    <span>·</span>
                    <span className="font-bold text-[#2E2F32]">{review.badge}</span>
                  </>
                )}
              </div>
              <p className="text-[14px] leading-5 text-[#2E2F32]">{review.text}</p>
              <span className="text-[12px] leading-4 text-[#74767C]">Color: {review.color}</span>
              {i < SAMPLE_REVIEWS.length - 1 && <div className="h-px w-full bg-[#E3E4E5]" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopConfidentlyDetailContent({ activeLabel }: { activeLabel: string }) {
  const detail = SHOP_CONFIDENTLY_DETAILS[activeLabel];
  const Icon = SHOP_CONFIDENTLY.find((s) => s.label === activeLabel)?.Icon;
  if (!detail) return null;

  return (
    <div className="flex-1 overflow-y-auto px-4 pt-4">
      <div className="flex flex-col gap-4 rounded-2xl border border-[#E3E4E5] p-4">
        <div className="flex items-center gap-2">
          {Icon && <Icon />}
          <span className="text-[16px] font-bold leading-6 text-[#2E2F32]">{activeLabel}</span>
        </div>

        <div className="flex flex-col gap-3">
          {detail.rows.map((row) => (
            <div key={row.label} className="flex flex-col gap-1">
              <span className="text-[14px] font-bold leading-5 text-[#2E2F32]">{row.label}</span>
              <span className="text-[14px] leading-5 text-[#2E2F32]">{row.value}</span>
            </div>
          ))}
        </div>

        <p className="text-[14px] leading-5 text-[#74767C]">
          {detail.paragraph}{" "}
          <span className="font-bold text-[#2E2F32] underline">{detail.linkText}</span>.
        </p>
      </div>
    </div>
  );
}

/**
 * Concept 6 — the Figma "AI Highlights" card: an AI-written summary
 * sentence, key item features, customer review highlight pills, and
 * "shop confidently" trust pills. The content types/streams in like it's
 * being generated the moment the sheet opens, replaying every time it
 * reopens since the sheet unmounts on close. The CTA wears a continuous
 * soft glow around its rim hinting that it leads to AI-generated content.
 * Tapping a review or shop-confidently pill drills into its own
 * right-sliding detail sheet with a back arrow.
 */
export default function HighlightsSummarySheetV4() {
  const [open, setOpen] = useState(false);
  const [ringMetrics, setRingMetrics] = useState({ width: 0, height: 0, perimeter: 0 });
  const [ringAnimationFinished, setRingAnimationFinished] = useState(false);
  const ringContainerRef = useRef<HTMLDivElement>(null);
  const [typedSummary, setTypedSummary] = useState("");
  const [stage, setStage] = useState(0);
  const [activeReview, setActiveReview] = useState<string | null>(null);
  const [activeShopItem, setActiveShopItem] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let charCount = 0;
    let typeInterval: number | undefined;

    const startTyping = window.setTimeout(() => {
      typeInterval = window.setInterval(() => {
        charCount += 1;
        setTypedSummary(AI_SUMMARY.slice(0, charCount));
        if (charCount >= AI_SUMMARY.length) {
          window.clearInterval(typeInterval);
        }
      }, TYPE_INTERVAL_MS);
    }, SHEET_OPEN_DURATION_MS);

    return () => {
      window.clearTimeout(startTyping);
      if (typeInterval) window.clearInterval(typeInterval);
    };
  }, [open]);

  useEffect(() => {
    if (typedSummary.length < AI_SUMMARY.length) return;
    if (stage >= 3) return;
    const timeout = window.setTimeout(() => setStage((s) => s + 1), STAGE_DELAY_MS);
    return () => window.clearTimeout(timeout);
  }, [typedSummary, stage]);

  const isTypingSummary = typedSummary.length < AI_SUMMARY.length;
  const ringPath = `M ${ringMetrics.height / 2} 0.75 H ${ringMetrics.width - ringMetrics.height / 2} A ${ringMetrics.height / 2 - 0.75} ${ringMetrics.height / 2 - 0.75} 0 0 1 ${ringMetrics.width - ringMetrics.height / 2} ${ringMetrics.height - 0.75} H ${ringMetrics.height / 2} A ${ringMetrics.height / 2 - 0.75} ${ringMetrics.height / 2 - 0.75} 0 0 1 ${ringMetrics.height / 2} 0.75`;
  const ringSegmentCount = 32;
  const ringSegmentLength = 70 / ringSegmentCount;

  useEffect(() => {
    const container = ringContainerRef.current;
    if (!container) return;

    const updatePerimeter = () => {
      const { width, height } = container.getBoundingClientRect();
      const borderInset = 0.75;
      const innerHeight = Math.max(0, height - borderInset * 2);
      const radius = innerHeight / 2;
      const straightLength = Math.max(0, width - height);
      setRingMetrics({
        width,
        height,
        perimeter: 2 * straightLength + 2 * Math.PI * radius,
      });
    };

    updatePerimeter();
    const observer = new ResizeObserver(updatePerimeter);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setTypedSummary("");
          setStage(0);
          setActiveReview(null);
          setActiveShopItem(null);
        }
      }}
    >
      <div
        ref={ringContainerRef}
        className="relative inline-flex shrink-0 rounded-full p-[1.5px]"
      >
        <SheetTrigger asChild>
          <button
            type="button"
            className="relative z-10 flex h-8 shrink-0 items-center justify-center gap-1 rounded-full bg-white px-3 text-[14px] font-semibold leading-5 text-ld-text-default active:bg-walmart-gray-bg"
          >
            <span className="text-[#0053E2]">
              <MagicIcon />
            </span>
            Highlights
          </button>
        </SheetTrigger>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
          viewBox={`0 0 ${ringMetrics.width} ${ringMetrics.height}`}
          preserveAspectRatio="none"
        >
          {ringMetrics.perimeter > 0 && (
            <>
              <path
                d={ringPath}
                fill="none"
                stroke="#E3E4E5"
                strokeWidth="1.5"
              />
              {!ringAnimationFinished && (
                Array.from({ length: ringSegmentCount }, (_, index) => {
                  const startOffset = -index * ringSegmentLength;
                  return (
                    <path
                      key={index}
                      className="animate-ai-ring motion-reduce:hidden"
                      d={ringPath}
                      fill="none"
                      stroke="#0053E2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray={`${ringSegmentLength} ${Math.max(0, ringMetrics.perimeter - ringSegmentLength)}`}
                      strokeOpacity={Math.min(1, (index + 1) / 5, (ringSegmentCount - index) / 5)}
                      style={{
                        "--ring-start-offset": `${startOffset}px`,
                        "--ring-end-offset": `${startOffset - ringMetrics.perimeter * 5}px`,
                      } as React.CSSProperties}
                      onAnimationEnd={() => setRingAnimationFinished(true)}
                    />
                  );
                })
              )}
              <path
                d={ringPath}
                fill="none"
                stroke="#0053E2"
                strokeWidth="1.5"
                className="motion-reduce:opacity-100"
                opacity={ringAnimationFinished ? 1 : 0}
              />
            </>
          )}
        </svg>
      </div>
      <SheetContent
        side="bottom"
        className="mx-auto flex h-[85dvh] max-h-[85dvh] max-w-[440px] flex-col gap-0 rounded-t-2xl p-0"
      >
        <SheetDescription className="sr-only">
          AI-generated highlights for JBL Tune 770NC Wireless Over-Ear Headphones
        </SheetDescription>

        <div className="flex items-center justify-center px-3 pt-4">
          <SheetTitle className="text-[16px] font-bold leading-6 text-[#2E2F32]">
            Highlights
          </SheetTitle>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-5 pb-4">
          <div className="flex flex-col gap-3">
            <p className="text-[14px] font-bold leading-5 text-ld-text-default">
              {PRODUCT_NAME}
            </p>

            <PriceBlock />

            <div className="relative">
              <TRTBInlineV2 className="mx-0 mb-0 mt-0" />
            </div>
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

      <Sheet open={activeReview !== null} onOpenChange={(next) => !next && setActiveReview(null)}>
        <SheetContent
          side="right"
          className="left-[calc(50%-220px)] right-[calc(50%-220px)] flex w-auto max-w-none flex-col gap-0 border-l-0 p-0 sm:max-w-none"
        >
          <SheetDescription className="sr-only">Ratings and reviews</SheetDescription>
          <DetailBackHeader title="Ratings & Reviews" onBack={() => setActiveReview(null)} />
          {activeReview && <ReviewDetailContent activeLabel={activeReview} />}
          <DetailFooter />
        </SheetContent>
      </Sheet>

      <Sheet open={activeShopItem !== null} onOpenChange={(next) => !next && setActiveShopItem(null)}>
        <SheetContent
          side="right"
          className="left-[calc(50%-220px)] right-[calc(50%-220px)] flex w-auto max-w-none flex-col gap-0 border-l-0 p-0 sm:max-w-none"
        >
          <SheetDescription className="sr-only">Shop confidently details</SheetDescription>
          <DetailBackHeader title={activeShopItem ?? "Shop confidently"} onBack={() => setActiveShopItem(null)} />
          {activeShopItem && <ShopConfidentlyDetailContent activeLabel={activeShopItem} />}
          <DetailFooter />
        </SheetContent>
      </Sheet>
    </Sheet>
  );
}
