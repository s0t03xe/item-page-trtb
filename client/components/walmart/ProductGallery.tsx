import { useState, useRef, useEffect } from "react";
import { Heart, Share } from "./icons";
import VideoSlide from "./VideoSlide";
import ChipHighlights from "./highlights/ChipHighlights";
import type { HighlightsVariant } from "./highlights/data";

// Slide image URLs from Figma
const HERO_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F79eeffa60ce145bea5091a2d24a456d9";
const INFOGRAPHIC_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F79eeffa60ce145bea5091a2d24a456d9";
const PACKAGING_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F7a5e8eed186b4dd3897d7f7b767abddb";

// Video sources + posters for the gallery's video slides.
const VIDEO_1_SRC = "https://cdn.builder.io/o/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Ff07cd24b29d5426e9b88a0453d173ffc%2Fcompressed?apiKey=02297b1ff48d4a2f8e4d9ed415c47ecf&token=f07cd24b29d5426e9b88a0453d173ffc&alt=media&optimized=true";
const VIDEO_1_POSTER = HERO_IMG;
const VIDEO_2_SRC = "https://cdn.builder.io/o/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F4eaed7321c8b465ba02d6086db7470a5%2Fcompressed?apiKey=02297b1ff48d4a2f8e4d9ed415c47ecf&token=4eaed7321c8b465ba02d6086db7470a5&alt=media&optimized=true";
const VIDEO_2_POSTER = INFOGRAPHIC_IMG;

function InfoCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M7.40039 6.99976H8.60039V11.4998H7.40039V6.99976Z" fill="currentColor" />
      <path d="M7.99961 6.29976C8.49667 6.29976 8.89961 5.89681 8.89961 5.39976C8.89961 4.9027 8.49667 4.49976 7.99961 4.49976C7.50255 4.49976 7.09961 4.9027 7.09961 5.39976C7.09961 5.89681 7.50255 6.29976 7.99961 6.29976Z" fill="currentColor" />
      <path d="M8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998ZM8 13.9998C4.68629 13.9998 2 11.3135 2 7.99976C2 4.68605 4.68629 1.99976 8 1.99976C11.3137 1.99976 14 4.68605 14 7.99976C14 11.3135 11.3137 13.9998 8 13.9998Z" fill="currentColor" />
    </svg>
  );
}

// Pagination play icon — no container, SVG is 24×24 with internal path spacing
function VideoPageIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.0825 12.3688L9.37853 15.9338C9.17481 16.0611 8.90645 15.9992 8.77913 15.7955C8.73592 15.7264 8.71301 15.6465 8.71301 15.565V8.43498C8.71301 8.19475 8.90776 8 9.14799 8C9.22952 8 9.3094 8.02291 9.37853 8.06612L15.0825 11.6311C15.2862 11.7584 15.3482 12.0268 15.2208 12.2305C15.1858 12.2865 15.1385 12.3338 15.0825 12.3688Z"
        fill={active ? "#74767C" : "white"}
        stroke="#515357"
      />
    </svg>
  );
}

const VIDEO_INDICES = new Set([1, 2]);
const TOTAL_SLIDES = 5;

type Slide =
  | { kind: "photo"; img: string }
  | { kind: "video"; src: string; poster: string; variant: "product" | "social"; handle?: string; fill?: boolean }
  | { kind: "infographic"; img: string };

const SLIDES: Slide[] = [
  { kind: "photo", img: HERO_IMG },
  { kind: "video", src: VIDEO_1_SRC, poster: VIDEO_1_POSTER, variant: "product", fill: true },
  { kind: "video", src: VIDEO_2_SRC, poster: VIDEO_2_POSTER, variant: "product" },
  { kind: "infographic", img: INFOGRAPHIC_IMG },
  { kind: "photo", img: PACKAGING_IMG },
];

export default function ProductGallery({
  highlightsVariant = "overlay",
  onOverlayOpenChange,
}: {
  highlightsVariant?: HighlightsVariant;
  onOverlayOpenChange?: (open: boolean) => void;
} = {}) {
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync active dot on scroll, and close the highlights overlay as soon as
  // the gallery starts scrolling (not just once it settles on a new slide).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      onOverlayOpenChange?.(false);
      const first = el.children[0] as HTMLElement | undefined;
      const second = el.children[1] as HTMLElement | undefined;
      const stride =
        first && second
          ? second.offsetLeft - first.offsetLeft
          : el.scrollWidth / TOTAL_SLIDES;
      const idx = Math.round(el.scrollLeft / stride);
      setActive(Math.max(0, Math.min(idx, TOTAL_SLIDES - 1)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Close the highlights overlay whenever the visible slide changes.
  useEffect(() => {
    onOverlayOpenChange?.(false);
  }, [active]);

  const goTo = (i: number) => {
    setActive(i);
    const el = scrollRef.current;
    if (!el) return;
    const target = el.children[i] as HTMLElement | undefined;
    if (target) el.scrollTo({ left: target.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <div className="pt-2">
      {/* ── Carousel ── */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory overflow-x-auto px-4 gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="relative aspect-square w-full flex-shrink-0 snap-center overflow-hidden rounded-2xl"
            >
              {slide.kind === "photo" && (
                <img
                  src={slide.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}

              {slide.kind === "infographic" && (
                <>
                  <img src={slide.img} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-y-0 right-0 flex w-1/2 flex-col justify-between p-4 bg-[rgba(46,47,50,0.80)]">
                    <div />
                    <div className="flex flex-col gap-3">
                      <p className="text-[16px] font-bold leading-6 text-white">Key item features</p>
                      <div className="flex flex-col gap-3 text-[12px] leading-4 text-white">
                        <p>Signature JBL Pure Bass sound experience</p>
                        <p>Long wireless playtime — up to 76 hrs</p>
                        <p>Bluetooth 5.3 for stable connections</p>
                        <p>Customize EQ with JBL Headphones app</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-white">
                      <span className="text-[12px] leading-4">Generated by AI</span>
                      <InfoCircleIcon />
                    </div>
                  </div>
                </>
              )}

              {slide.kind === "video" && (
                <VideoSlide
                  src={slide.src}
                  poster={slide.poster}
                  variant={slide.variant}
                  handle={slide.handle}
                  fill={slide.fill}
                  isActive={i === active}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Pagination row: dots (center) · heart + share (right) ── */}
      <div className="flex items-center py-2 px-4">
        <div className="flex flex-1 items-center justify-center">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => {
            const isVideo = VIDEO_INDICES.has(i);
            const isActive = i === active;
            return (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`flex items-center justify-center ${isVideo ? "" : isActive ? "p-[7px]" : "p-[8px]"}`}
              >
                {isVideo ? (
                  <VideoPageIcon active={isActive} />
                ) : isActive ? (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#74767C]" />
                ) : (
                  <div className="h-[8px] w-[8px] rounded-full border border-[#74767C] bg-transparent" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex w-[52px] shrink-0 items-center justify-end gap-1 text-[#2E2F32]">
          <button
            type="button"
            aria-label="Add to favorites"
            onClick={() => setLiked((v) => !v)}
            className={`flex h-6 w-6 items-center justify-center active:scale-95 ${liked ? "text-walmart-rollback" : ""}`}
          >
            <Heart size={16} fill={liked ? "currentColor" : "none"} />
          </button>
          <button
            type="button"
            aria-label="Share"
            className="flex h-6 w-6 items-center justify-center active:scale-95"
          >
            <Share size={16} />
          </button>
        </div>
      </div>

      {highlightsVariant === "chips" && <ChipHighlights />}
    </div>
  );
}
