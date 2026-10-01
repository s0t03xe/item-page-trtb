import { Fragment } from "react";
import { MagicIcon } from "../icons";
import { HEADPHONE_HIGHLIGHTS, HIGHLIGHTS_TITLE } from "./data";

// Concept-specific subset/order; the other concepts keep the full list.
const CHIP_HIGHLIGHT_TITLES = [
  "Battery life",
  "Wireless technology",
  "Noise control technology",
  "Headphone style",
];

const CHIP_HIGHLIGHTS = CHIP_HIGHLIGHT_TITLES.map(
  (title) => HEADPHONE_HIGHLIGHTS.find((item) => item.title === title)!,
);

/**
 * Concept C — highlights are always visible directly under the pagination
 * dots (zero taps to discover, no click-through). Plain text pairs
 * separated by vertical dividers, avoiding pill/chip styling since that
 * treatment is already used heavily elsewhere on the page.
 */
export default function ChipHighlights() {
  return (
    <div className="flex items-center gap-3 overflow-x-auto px-4 pb-3 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-walmart-blue">
        <MagicIcon size={14} />
        <span className="text-[12px] font-bold leading-4">{HIGHLIGHTS_TITLE}</span>
      </div>
      {CHIP_HIGHLIGHTS.map((item) => (
        <Fragment key={item.title}>
          <span className="h-6 w-px shrink-0 bg-[#E3E4E5]" aria-hidden="true" />
          <div className="flex shrink-0 flex-col whitespace-nowrap">
            <span className="text-[12px] font-bold leading-4 text-[#2E2F32]">{item.title}</span>
            <span className="text-[11px] leading-4 text-[#74767C]">{item.text}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
