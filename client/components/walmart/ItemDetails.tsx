import { useState } from "react";

const KEY_FEATURES = [
  { title: "Rich bass", desc: "JBL Pure Bass sound used in major venues" },
  { title: "Wireless audio", desc: "Bluetooth 5.3 streaming from your smartphone" },
  { title: "Personalized sound", desc: "JBL App with EQ tuning and voice prompts" },
  { title: "Long playtime", desc: "Up to 57 hours plus 3 hours from 5-minute charge" },
  { title: "Rich bass", desc: "JBL Pure Bass sound used in major venues" },
  { title: "Wireless audio", desc: "Bluetooth 5.3 streaming from your smartphone" },
  { title: "Personalized sound", desc: "JBL App with EQ tuning and voice prompts" },
  { title: "Long playtime", desc: "Up to 57 hours plus 3 hours from 5-minute charge" },
];

const PROS = [
  "Soft and comfortable",
  "Snug fit",
  "Affordable price",
  "Clear sound quality",
  "Clear sound quality for gaming",
];
const CONS = ["Fragile break"];

// Same top highlights shown in concept 1's bottom sheet.
const TOP_HIGHLIGHTS = [
  { label: "Battery life", value: "70 h" },
  { label: "Wireless technology", value: "Bluetooth" },
  { label: "Headphone style", value: "Over-Ear" },
  { label: "Noise control technology", value: "Adaptive Noise Cancellation" },
];

const SPEC_ROWS = [
  { label: "Model name", value: "Tune 770NC" },
  { label: "Wireless", value: "Y" },
  { label: "Accessories", value: "Charging Cable, Audio Cable, User Manual, Carrying Case" },
  { label: "Battery consumption type", value: "Integrated Rechargeable Battery" },
  { label: "Rec. use", value: "Casual Listening" },
];

function RatingStar({ half = false }: { half?: boolean }) {
  if (half) {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1C5.82689 1.00013 5.66019 1.10005 5.57707 1.27305L4.5 4L1.26478 4.35872C1.16433 4.37483 1.0715 4.42437 1.00001 4.5C0.816077 4.69459 0.817604 5.00848 1.00342 5.2011L3.00001 7.5L2.32925 10.9508C2.30707 11.0593 2.3203 11.1725 2.36682 11.2722C2.4816 11.5182 2.76508 11.6202 2.99998 11.5L5.99998 9.5L6 1Z" fill="#FFC220" />
        <path fillRule="evenodd" clipRule="evenodd" d="M6.42286 0.273051L8.0405 3.64013L11.5982 4.21078C11.8566 4.25224 12.0341 4.50524 11.9945 4.77589C11.9791 4.88108 11.9318 4.9783 11.8596 5.05317L9.30162 7.70479L10.0569 11.4004C10.1116 11.6681 9.94869 11.9316 9.69303 11.9889C9.58941 12.0121 9.48135 11.9983 9.38613 11.9496L5.99997 10.2169L2.6138 11.9496C2.37889 12.0698 2.09541 11.9678 1.98063 11.7218C1.93411 11.6221 1.92088 11.5089 1.94306 11.4004L2.69832 7.70479L0.140365 5.05317C-0.045448 4.86055 -0.0469752 4.54666 0.136954 4.35207C0.208444 4.27643 0.301276 4.2269 0.401726 4.21078L3.95944 3.64013L5.57708 0.273051C5.69458 0.0284626 5.97918 -0.0700572 6.21273 0.0530013C6.30351 0.100832 6.37718 0.177984 6.42286 0.273051ZM7.36564 4.54466L10.4789 5.04403L8.21648 7.38933L8.8643 10.5592L6.5 9.34945V2.74285L7.36564 4.54466ZM5.5 2.74271V9.34941L3.13563 10.5592L3.78346 7.38933L1.52101 5.04403L4.63429 4.54466L5.5 2.74271Z" fill="#CC851A" />
      </svg>
    );
  }

  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.17728 1.04417C6.25293 1.08403 6.31432 1.14832 6.35238 1.22754L7.70041 4.03344L10.6652 4.50899C10.8805 4.54353 11.0284 4.75437 10.9954 4.97991C10.9826 5.06757 10.9432 5.14858 10.883 5.21097L8.75135 7.42066L9.38073 10.5003C9.42633 10.7234 9.29058 10.943 9.07753 10.9908C8.99118 11.0101 8.90112 10.9986 8.82178 10.958L5.99997 9.51408L3.17817 10.958C2.98241 11.0581 2.74618 10.9731 2.65053 10.7681C2.61176 10.6851 2.60074 10.5907 2.61922 10.5003L3.2486 7.42066L1.11697 5.21097C0.962127 5.05046 0.960854 4.78888 1.11413 4.62672C1.1737 4.56369 1.25106 4.52241 1.33477 4.50899L4.29953 4.03344L5.64756 1.22754C5.74549 1.02372 5.98265 0.941619 6.17728 1.04417Z" fill="#FFC220" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.36564 4.54466L5.99997 1.70204L4.63429 4.54466L1.52101 5.04403L3.78346 7.38933L3.13563 10.5592L5.99997 9.09359L8.8643 10.5592L8.21648 7.38933L10.4789 5.04403L7.36564 4.54466ZM8.0405 3.64013L6.42286 0.273051C6.37718 0.177984 6.30351 0.100832 6.21273 0.0530012C5.97918 -0.0700572 5.69458 0.0284626 5.57708 0.273051L3.95944 3.64013L0.401726 4.21078C0.301276 4.2269 0.208444 4.27643 0.136954 4.35207C-0.0469752 4.54666 -0.045448 4.86055 0.140365 5.05317L2.69832 7.70479L1.94306 11.4004C1.92088 11.5089 1.93411 11.6221 1.98063 11.7218C2.09541 11.9678 2.37889 12.0698 2.6138 11.9496L5.99997 10.2169L9.38613 11.9496C9.48135 11.9983 9.58941 12.0121 9.69303 11.9889C9.94869 11.9316 10.1116 11.6681 10.0569 11.4004L9.30162 7.70479L11.8596 5.05317C11.9318 4.9783 11.9791 4.88108 11.9945 4.77589C12.0341 4.50524 11.8566 4.25224 11.5982 4.21078L8.0405 3.64013Z" fill="#CC851A" />
    </svg>
  );
}

function RatingStars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-px" aria-label={`${value} stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.floor(value);
        const half = !filled && i < value;
        return <RatingStar key={i} half={half} />;
      })}
    </div>
  );
}

function InfoCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.40039 6.99976H8.60039V11.4998H7.40039V6.99976Z" fill="#74767C" />
      <path d="M7.99961 6.29976C8.49667 6.29976 8.89961 5.89681 8.89961 5.39976C8.89961 4.9027 8.49667 4.49976 7.99961 4.49976C7.50255 4.49976 7.09961 4.9027 7.09961 5.39976C7.09961 5.89681 7.50255 6.29976 7.99961 6.29976Z" fill="#74767C" />
      <path d="M8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998ZM8 13.9998C4.68629 13.9998 2 11.3135 2 7.99976C2 4.68605 4.68629 1.99976 8 1.99976C11.3137 1.99976 14 4.68605 14 7.99976C14 11.3135 11.3137 13.9998 8 13.9998Z" fill="#74767C" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
    >
      <path
        d="M3 5.5L8 10.5L13 5.5"
        stroke="#2E2F32"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GeneratedByAI() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[12px] leading-4 text-[#74767C]">Generated by AI</span>
      <InfoCircle />
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-[#E3E4E5]" />;
}

export default function ItemDetails({ specsLabel = "Specifications" }: { specsLabel?: string }) {
  const [featuresOpen, setFeaturesOpen] = useState(true);
  const [specsOpen, setSpecsOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(true);

  return (
    <div id="item-details" className="flex flex-col bg-white px-4 py-4 gap-3">
      {/* ── Key item features ── */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setFeaturesOpen((v) => !v)}
          className="flex w-full items-center justify-between py-1"
        >
          <span className="text-[16px] font-bold leading-6 text-ld-text-default">
            Key item features
          </span>
          <Chevron open={featuresOpen} />
        </button>

        {featuresOpen && (
          <>
            <div className="flex flex-col gap-2">
              {KEY_FEATURES.map((f, i) => (
                <div key={`${f.title}-${i}`} className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px] shrink-0">
                    <circle cx="10" cy="10" r="2" fill="#2E2F32" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold leading-5 text-ld-text-default">{f.title}</span>
                    <span className="text-[14px] leading-5 text-[#74767C]">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-1">
              <button className="text-[12px] leading-4 text-ld-text-default underline">
                View full item details
              </button>
              <GeneratedByAI />
            </div>
          </>
        )}
      </div>

      <Divider />

      {/* ── Specifications ── */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setSpecsOpen((v) => !v)}
          className="flex w-full items-center justify-between py-1"
        >
          <span className="text-[16px] font-bold leading-6 text-ld-text-default">{specsLabel}</span>
          <Chevron open={specsOpen} />
        </button>
        {specsOpen && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {[TOP_HIGHLIGHTS.slice(0, 2), TOP_HIGHLIGHTS.slice(2, 4)].map((row, i) => (
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

            <div className="overflow-hidden rounded-2xl border border-[#E3E4E5]">
              {SPEC_ROWS.map((spec, i) => (
                <div
                  key={spec.label}
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

            <button className="self-start text-[16px] leading-6 text-ld-text-default underline">
              View all specifications
            </button>
          </div>
        )}
      </div>

      <Divider />

      {/* ── Reviews summary ── */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setReviewsOpen((v) => !v)}
          className="flex w-full items-center justify-between py-1"
        >
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-bold leading-6 text-ld-text-default">
              Reviews summary
            </span>
            {reviewsOpen && (
              <div className="flex items-center gap-1">
                <RatingStars value={4.8} />
                <span className="text-[14px] leading-5 text-[#74767C]">(4.8)</span>
              </div>
            )}
          </div>
          <Chevron open={reviewsOpen} />
        </button>

        {reviewsOpen && (
          <div className="flex flex-col gap-3">
            {/* Pros */}
            <div className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 rounded-full bg-[#EAF3E6] px-2 py-0.5 text-[12px] font-semibold leading-4 text-[#1D5F02]">
                Pros
              </span>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {PROS.map((p) => (
                  <button key={p} className="text-[14px] leading-5 text-ld-text-default underline">
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 rounded-full bg-[#FFF0E6] px-2 py-0.5 text-[12px] font-semibold leading-4 text-[#A20C00]">
                Cons
              </span>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {CONS.map((c) => (
                  <button key={c} className="text-[14px] leading-5 text-ld-text-default underline">
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="text-[12px] leading-4 text-ld-text-default underline">
                View all reviews
              </button>
              <GeneratedByAI />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
