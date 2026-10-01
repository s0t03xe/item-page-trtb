import { forwardRef, useEffect, useRef } from "react";
import HighlightsSummarySheet from "./highlights/HighlightsSummarySheet";
import HighlightsSummarySheetV2 from "./highlights/HighlightsSummarySheetV2";
import HighlightsSummarySheetV3 from "./highlights/HighlightsSummarySheetV3";
import HighlightsSummarySheetV4 from "./highlights/HighlightsSummarySheetV4";
import { OverlayHighlightsPanel } from "./highlights/OverlayHighlights";
import { MagicIcon } from "./icons";
import type { HighlightsVariant } from "./highlights/data";

const ICON_3D = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F2bb59b505bf34ba187e9408edee4804e";
const ICON_SPEAKER = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F88e0aaad88b94d5fb8a52ab8bc6cbbed";

// Re-use Figma shop-similar SVG
function ShopSimilarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <path d="M1.84668 4.83029C1.96298 4.74973 2.12394 4.76091 2.22754 4.86447L2.26172 4.90549C2.34229 5.0218 2.33113 5.18275 2.22754 5.28635L1.0498 6.46408H6.38672L6.48047 6.46115C7.1948 6.41285 7.75879 5.81761 7.75879 5.09104C7.759 4.92642 7.89296 4.79323 8.05762 4.79318C8.22231 4.79318 8.35624 4.92639 8.35645 5.09104C8.35645 6.17876 7.47441 7.06063 6.38672 7.06076H1.04688L2.22754 8.24045L2.26172 8.28244C2.34229 8.39875 2.33113 8.55971 2.22754 8.6633C2.11106 8.77946 1.92213 8.77949 1.80566 8.6633L0.117188 6.97482L0.0830078 6.93283C0.00272123 6.81666 0.0139509 6.65647 0.117188 6.55295L1.80566 4.86447L1.84668 4.83029ZM6.12891 0.0871288C6.24545 -0.028922 6.43438 -0.0291638 6.55078 0.0871288L8.23828 1.77561L8.27344 1.8176C8.35369 1.93387 8.34175 2.09401 8.23828 2.19748L6.55078 3.88596L6.50879 3.92014C6.39256 4.00061 6.23249 3.98935 6.12891 3.88596L6.09375 3.84494C6.01318 3.72863 6.02531 3.56768 6.12891 3.46408L7.30566 2.28635H1.96973L1.87598 2.28928C1.16165 2.33758 0.59668 2.93282 0.59668 3.65939C0.596471 3.8239 0.463333 3.95703 0.298828 3.95725C0.134138 3.95725 0.000208624 3.82404 0 3.65939C0 2.57159 0.881922 1.68967 1.96973 1.68967H7.30859L6.12891 0.50998L6.09375 0.467988C6.01341 0.351703 6.0254 0.190633 6.12891 0.0871288Z" fill="#2E2F32"/>
    </svg>
  );
}

const Chip = forwardRef<
  HTMLButtonElement,
  {
    icon: React.ReactNode;
    children: React.ReactNode;
    grow?: boolean;
    onClick?: () => void;
    pressed?: boolean;
    accent?: boolean;
  }
>(function Chip({ icon, children, grow, onClick, pressed, accent }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-pressed={pressed}
      className={`flex h-8 items-center justify-center gap-1 whitespace-nowrap rounded-full border px-3 text-[14px] leading-5 ${
        pressed
          ? "border-walmart-blue-dark bg-walmart-blue-dark font-bold text-white"
          : accent
            ? "border-walmart-blue bg-white font-semibold text-ld-text-default active:bg-walmart-blue-tint"
            : "border-walmart-gray-line bg-white font-semibold text-ld-text-default active:bg-walmart-gray-bg"
      } ${grow ? "flex-1" : "shrink-0"}`}
    >
      {accent && !pressed ? <span className="text-walmart-blue">{icon}</span> : icon}
      {children}
    </button>
  );
});

export default function ProductActions({
  highlightsVariant = "overlay",
  overlayOpen = false,
  onOverlayOpenChange,
}: {
  highlightsVariant?: HighlightsVariant;
  overlayOpen?: boolean;
  onOverlayOpenChange?: (open: boolean) => void;
} = {}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  if (highlightsVariant === "trtbV2") return null;

  // Tapping anywhere outside the CTA/panel closes the overlay.
  useEffect(() => {
    if (!overlayOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      onOverlayOpenChange?.(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [overlayOpen, onOverlayOpenChange]);

  return (
    <div className="relative bg-white">
      <div className="flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {highlightsVariant === "summary" && <HighlightsSummarySheet />}
        {highlightsVariant === "summaryV2" && <HighlightsSummarySheetV2 />}
        {highlightsVariant === "summaryV3" && <HighlightsSummarySheetV3 />}
        {highlightsVariant === "summaryV4" && <HighlightsSummarySheetV4 />}
        {highlightsVariant === "overlay" && (
          <Chip
            ref={triggerRef}
            icon={<MagicIcon size={16} />}
            onClick={() => onOverlayOpenChange?.(!overlayOpen)}
            pressed={overlayOpen}
            accent
          >
            Highlights
          </Chip>
        )}
        <Chip icon={<img src={ICON_3D} alt="" width={16} height={16} className="h-4 w-4" />}>
          View in 3D
        </Chip>
        <Chip icon={<img src={ICON_SPEAKER} alt="" width={16} height={16} className="h-4 w-4" />} grow>
          Hear summary (01:15)
        </Chip>
        <Chip icon={<ShopSimilarIcon />}>Shop similar</Chip>
      </div>

      {highlightsVariant === "overlay" && (
        <OverlayHighlightsPanel
          ref={panelRef}
          open={overlayOpen}
          onClose={() => onOverlayOpenChange?.(false)}
        />
      )}
    </div>
  );
}
