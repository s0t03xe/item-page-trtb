import { useEffect, useRef, useState } from "react";
import { MagicIcon } from "../icons";
import { TRTB_KEY_FEATURES, TRTB_OVERVIEW, TRTB_REVIEW_HIGHLIGHTS } from "./trtbData";
import TRTBItemDetailsSheet from "./TRTBItemDetailsSheet";

const SHOP_CONFIDENTLY = ["Free shipping", "Free 14-day returns", "Low return rate for this item"];
const TYPE_INTERVAL_MS = 10;
const START_DELAY_MS = 350;
const SECTION_REVEAL_DELAY_MS = 280;
const VIEW_MORE_RESERVED_WIDTH = 70;

function getTwoLinePreviewLayout(text: string, width: number, font: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context || width <= VIEW_MORE_RESERVED_WIDTH) {
    return { firstLine: "", secondLine: "", isTruncated: false, sourceLength: 0 };
  }
  context.font = font;

  const words = text.trimStart().split(/\s+/);
  let firstLine = "";
  let consumedWords = 0;

  while (consumedWords < words.length) {
    const candidate = firstLine ? `${firstLine} ${words[consumedWords]}` : words[consumedWords];
    if (context.measureText(candidate).width > width) break;
    firstLine = candidate;
    consumedWords += 1;
  }

  const remainder = words.slice(consumedWords).join(" ");
  if (!remainder) return { firstLine, secondLine: "", isTruncated: false, sourceLength: text.length };

  const ellipsis = "...";
  const secondLineWidth = width - VIEW_MORE_RESERVED_WIDTH - context.measureText(ellipsis).width;
  let secondLine = "";
  for (const character of remainder) {
    const candidate = secondLine + character;
    if (context.measureText(candidate).width > secondLineWidth) break;
    secondLine = candidate;
  }

  const isTruncated = secondLine.length < remainder.length;
  return {
    firstLine,
    secondLine,
    isTruncated,
    sourceLength: firstLine.length + (firstLine ? 1 : 0) + secondLine.length,
  };
}

function SentimentIcon({ sentiment }: { sentiment: (typeof TRTB_REVIEW_HIGHLIGHTS)[number]["sentiment"] }) {
  const color = sentiment === "positive" ? "#2A8703" : sentiment === "negative" ? "#EA1100" : "#74767C";
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[16px] leading-none text-white" style={{ backgroundColor: color }}>
      {sentiment === "positive" ? "✓" : sentiment === "negative" ? "×" : "−"}
    </span>
  );
}

function InfoCircle() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M7.4 7H8.6V11.5H7.4V7Z" fill="#74767C" />
      <circle cx="8" cy="5.4" r=".9" fill="#74767C" />
      <circle cx="8" cy="8" r="6.5" stroke="#74767C" />
    </svg>
  );
}

export default function TRTBInlineV2({
  className = "",
  version = "v2",
}: {
  className?: string;
  version?: "v1" | "v2";
}) {
  const rootRef = useRef<HTMLElement>(null);
  const overviewRef = useRef<HTMLParagraphElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [typedOverview, setTypedOverview] = useState("");
  const [overviewWidth, setOverviewWidth] = useState(0);
  const [revealStage, setRevealStage] = useState(0);
  const isV1 = version === "v1";
  const overviewContent = isV1 ? typedOverview : TRTB_OVERVIEW;
  const currentRevealStage = isV1 ? revealStage : 3;

  useEffect(() => {
    if (!isV1) return;
    const paragraph = overviewRef.current;
    if (!paragraph) return;

    const updatePreview = () => {
      setOverviewWidth(paragraph.clientWidth);
    };

    updatePreview();
    const observer = new ResizeObserver(updatePreview);
    observer.observe(paragraph);
    return () => observer.disconnect();
  }, [isV1]);

  const overviewStyle = overviewRef.current ? window.getComputedStyle(overviewRef.current) : null;
  const collapsedPreviewTarget = isV1
    ? getTwoLinePreviewLayout(TRTB_OVERVIEW, overviewWidth, overviewStyle?.font ?? "12px 'Everyday Sans UI'")
    : { firstLine: TRTB_OVERVIEW, secondLine: "", isTruncated: false, sourceLength: TRTB_OVERVIEW.length };
  const isCollapsedPreviewComplete =
    collapsedPreviewTarget.isTruncated && typedOverview.length >= collapsedPreviewTarget.sourceLength;
  const visibleTypedText = typedOverview.slice(0, collapsedPreviewTarget.sourceLength);
  const collapsedPreviewText = visibleTypedText.length <= collapsedPreviewTarget.firstLine.length
    ? visibleTypedText
    : `${visibleTypedText.slice(0, collapsedPreviewTarget.firstLine.length)}\n${visibleTypedText.slice(collapsedPreviewTarget.firstLine.length + 1, collapsedPreviewTarget.sourceLength)}${isCollapsedPreviewComplete ? "..." : ""}`;

  useEffect(() => {
    if (!isV1) return;
    const root = rootRef.current;
    if (!root || isInView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsInView(true);
      observer.disconnect();
    }, { rootMargin: "0px 0px -48px 0px", threshold: 0 });

    observer.observe(root);
    return () => observer.disconnect();
  }, [isInView, isV1]);

  useEffect(() => {
    if (!isV1 || !isInView) return;
    let typingInterval: number | undefined;

    const startTyping = window.setTimeout(() => {
      let characterCount = 0;
      typingInterval = window.setInterval(() => {
        characterCount += 1;
        setTypedOverview(TRTB_OVERVIEW.slice(0, characterCount));
        if (characterCount >= TRTB_OVERVIEW.length) window.clearInterval(typingInterval);
      }, TYPE_INTERVAL_MS);
    }, START_DELAY_MS);

    return () => {
      window.clearTimeout(startTyping);
      if (typingInterval !== undefined) window.clearInterval(typingInterval);
    };
  }, [isInView, isV1]);

  useEffect(() => {
    if (!isV1 || !isExpanded || revealStage >= 3 || typedOverview.length < TRTB_OVERVIEW.length) return;
    const timeout = window.setTimeout(
      () => setRevealStage((stage) => stage + 1),
      SECTION_REVEAL_DELAY_MS,
    );
    return () => window.clearTimeout(timeout);
  }, [typedOverview, revealStage, isExpanded, isV1]);

  const isTypingOverview = typedOverview.length < TRTB_OVERVIEW.length;

  return (
    <section ref={rootRef} className={`mx-4 mb-3 mt-2 w-auto rounded-[16px] border border-[#E3E4E5] bg-gradient-to-b from-[#EAF0FF] to-white p-3 text-[12px] leading-[18px] text-[#2E2F32] ${className}`}>
      <div className="grid grid-cols-[18px_minmax(0,1fr)] items-start gap-2">
        <MagicIcon size={18} className="mt-0.5 text-[#2E2F32]" />
        <div className="relative min-w-0">
          <p ref={overviewRef} className={isV1 && !isExpanded ? "line-clamp-2 whitespace-pre-line" : "min-w-0"}>
            {isV1 && !isExpanded ? collapsedPreviewText : overviewContent}
            {isV1 && isExpanded && <span className={`text-[#2E2F32] ${isTypingOverview ? "opacity-100" : "opacity-0"}`} aria-hidden="true">|</span>}
            {isV1 && <span className="sr-only">{TRTB_OVERVIEW.slice(typedOverview.length)}</span>}
            {isV1 && !isExpanded && isCollapsedPreviewComplete && collapsedPreviewTarget.isTruncated && (
              <>
                {" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsExpanded(true);
                    setRevealStage(3);
                  }}
                  className="inline p-0 text-[12px] leading-[18px] text-[#2E2F32] underline"
                >
                  View more
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      <div className={isV1 && !isExpanded ? "hidden" : currentRevealStage >= 1 ? (isV1 ? "animate-in fade-in slide-in-from-bottom-1 duration-300" : "") : "invisible h-0 overflow-hidden"}>
          <div className="mt-3 text-[12px] leading-[18px]">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-bold text-[#2E2F32]">Key item features</h2>
                <TRTBItemDetailsSheet />
              </div>
          </div>
          <ul className="mt-2 flex flex-col gap-2 pl-5 text-[12px] leading-[18px]">
            {TRTB_KEY_FEATURES.map((feature) => (
              <li key={feature.title} className="list-disc pl-0.5 text-[#515357]">
                <span className="font-bold text-[#2E2F32]">{feature.title}</span>
                <span className="block">{feature.desc}</span>
              </li>
            ))}
          </ul>
      </div>

      <div className={isV1 && !isExpanded ? "hidden" : currentRevealStage >= 2 ? (isV1 ? "animate-in fade-in slide-in-from-bottom-1 duration-300" : "") : "invisible h-0 overflow-hidden"}>
          <div className="my-3 h-px bg-[#E3E4E5]" />

          <div>
            <h2 className="text-[12px] font-bold leading-[18px] text-[#2E2F32]">What customers say</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {TRTB_REVIEW_HIGHLIGHTS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="flex min-h-8 items-center gap-1.5 rounded-full border border-[#E3E4E5] bg-white px-2.5 py-1 text-[12px] leading-4 text-[#123B82]"
                >
                  <SentimentIcon sentiment={item.sentiment} />
                  <span className="font-bold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
      </div>

      <div className={isV1 && !isExpanded ? "hidden" : currentRevealStage >= 3 ? (isV1 ? "animate-in fade-in slide-in-from-bottom-1 duration-300" : "") : "invisible h-0 overflow-hidden"}>
          <div className="my-3 h-px bg-[#E3E4E5]" />

          <div className="text-[12px] leading-4">
            <h2 className="font-bold leading-[18px] text-[#2E2F32]">Shop confidently</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {SHOP_CONFIDENTLY.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex min-h-9 items-center gap-2 rounded-full border border-[#E3E4E5] bg-white px-2.5 py-1 text-[#2E2F32]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2A8703] text-[16px] leading-none text-white">✓</span>
                  {item}
                </button>
              ))}
            </div>
          </div>
      </div>

      <div className={isV1 && !isExpanded ? "hidden" : currentRevealStage >= 3 ? `mt-3 flex items-center justify-between gap-3 ${isV1 ? "animate-in fade-in duration-300" : ""}` : "invisible h-0 overflow-hidden"}>
          <div className="flex items-center gap-1.5 text-[#74767C]">
            <span className="text-[12px] leading-4">Generated by AI</span>
            <InfoCircle />
          </div>
          {isV1 && isExpanded && (
            <button
              type="button"
              onClick={() => {
                setIsExpanded(false);
                setRevealStage(0);
                setTypedOverview(TRTB_OVERVIEW);
              }}
              className="text-[12px] leading-4 text-[#2E2F32] underline"
            >
              View less
            </button>
          )}
      </div>
    </section>
  );
}