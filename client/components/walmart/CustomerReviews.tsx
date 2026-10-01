import { useState } from "react";
import ReviewHighlights from "./ReviewHighlights";

// ─── Assets ─────────────────────────────────────────────────────────────────
const UGC_1 = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fb672f89edaaf40f28a9e69042f91f908";
const UGC_2 = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Ff1365c14e6a14d68bc8df7ef195dedd9";
const UGC_3 = "https://cdn.builder.io/api/v1/file/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F2b056b0b5a724506b3b467bbe3ea5409";
const RECT2 = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F2615b52f07a94263ae55b09d4d4b5451";
const RECT3 = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fe037a8c149a9468aa61fdb34b3fe71a2";

// ─── Icons ───────────────────────────────────────────────────────────────────
function ChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.62317 4.66598L2 10.8083L2.75366 11.5L8 5.76935L13.2463 11.5L14 10.8083L8.37683 4.66598C8.28001 4.56022 8.14329 4.5 8 4.5C7.85671 4.5 7.72 4.56022 7.62317 4.66598Z" fill="#2E2F32"/>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.37683 11.334L14 5.19175L13.2463 4.5L8 10.2307L2.75366 4.5L2 5.19175L7.62317 11.334C7.71999 11.4398 7.85671 11.5 8 11.5C8.14329 11.5 8.28 11.4398 8.37683 11.334Z" fill="#2E2F32"/>
    </svg>
  );
}

function InfoCircle({ color = "#74767C" }: { color?: string }) {
  return (
    <svg className="block shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 10.5V6.5H7L6.91012 6.50806C6.67688 6.55039 6.5 6.75454 6.5 7L6.50806 7.08988C6.55039 7.32312 6.75454 7.5 7 7.5H7.499L7.49986 10.5H7L6.91012 10.5081C6.67688 10.5504 6.5 10.7545 6.5 11C6.5 11.2761 6.72386 11.5 7 11.5H9L9.08988 11.4919C9.32312 11.4496 9.5 11.2455 9.5 11C9.5 10.7239 9.27614 10.5 9 10.5H8.5Z" fill={color} />
      <path d="M8.5 5C8.5 5.34317 8.2218 5.62137 7.87863 5.62137C7.53546 5.62137 7.25726 5.34317 7.25726 5C7.25726 4.65683 7.53546 4.37863 7.87863 4.37863C8.2218 4.37863 8.5 4.65683 8.5 5Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill={color} />
    </svg>
  );
}

function AvatarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="m" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <circle cx="10" cy="10" r="10" fill="#E3E4E5"/>
      </mask>
      <g mask="url(#m)">
        <circle cx="10" cy="10" r="10" fill="#E9F1FE"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10 3.7002C12.8995 3.7002 15.25 6.0507 15.25 8.9502C15.25 10.4366 14.6323 11.7787 13.6395 12.7339C16.6526 13.0531 19 15.6025 19 18.7002V24.7002H1V18.7002C1 15.6025 3.34744 13.0531 6.36045 12.7339C5.36772 11.7787 4.75 10.4366 4.75 8.9502C4.75 6.0507 7.1005 3.7002 10 3.7002ZM7 14.2002C4.58573 14.2002 2.61551 16.1014 2.5049 18.4884L2.5 18.7002V23.2002H17.5V18.7002C17.5 16.2859 15.5988 14.3157 13.2118 14.2051L13 14.2002H7ZM10 12.7002C12.0711 12.7002 13.75 11.0213 13.75 8.9502C13.75 6.87913 12.0711 5.2002 10 5.2002C7.92893 5.2002 6.25 6.87913 6.25 8.9502C6.25 11.0213 7.92893 12.7002 10 12.7002Z" fill="#2E2F32"/>
      </g>
    </svg>
  );
}

function StarIcon({ half = false }: { half?: boolean }) {
  if (half) {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1C5.82689 1.00013 5.66019 1.10005 5.57707 1.27305L4.5 4L1.26478 4.35872C1.16433 4.37483 1.0715 4.42437 1.00001 4.5C0.816077 4.69459 0.817604 5.00848 1.00342 5.2011L3.00001 7.5L2.32925 10.9508C2.30707 11.0593 2.3203 11.1725 2.36682 11.2722C2.4816 11.5182 2.76508 11.6202 2.99998 11.5L5.99998 9.5L6 1Z" fill="#FFC220"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.42286 0.273051L8.0405 3.64013L11.5982 4.21078C11.8566 4.25224 12.0341 4.50524 11.9945 4.77589C11.9791 4.88108 11.9318 4.9783 11.8596 5.05317L9.30162 7.70479L10.0569 11.4004C10.1116 11.6681 9.94869 11.9316 9.69303 11.9889C9.58941 12.0121 9.48135 11.9983 9.38613 11.9496L5.99997 10.2169L2.6138 11.9496C2.37889 12.0698 2.09541 11.9678 1.98063 11.7218C1.93411 11.6221 1.92088 11.5089 1.94306 11.4004L2.69832 7.70479L0.140365 5.05317C-0.045448 4.86055 -0.0469752 4.54666 0.136954 4.35207C0.208444 4.27643 0.301276 4.2269 0.401726 4.21078L3.95944 3.64013L5.57708 0.273051C5.69458 0.0284626 5.97918 -0.0700572 6.21273 0.0530013C6.30351 0.100832 6.37718 0.177984 6.42286 0.273051ZM7.36564 4.54466L10.4789 5.04403L8.21648 7.38933L8.8643 10.5592L6.5 9.34945V2.74285L7.36564 4.54466ZM5.5 2.74271V9.34941L3.13563 10.5592L3.78346 7.38933L1.52101 5.04403L4.63429 4.54466L5.5 2.74271Z" fill="#CC851A"/>
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.17728 1.04417C6.25293 1.08403 6.31432 1.14832 6.35238 1.22754L7.70041 4.03344L10.6652 4.50899C10.8805 4.54353 11.0284 4.75437 10.9954 4.97991C10.9826 5.06757 10.9432 5.14858 10.883 5.21097L8.75135 7.42066L9.38073 10.5003C9.42633 10.7234 9.29058 10.943 9.07753 10.9908C8.99118 11.0101 8.90112 10.9986 8.82178 10.958L5.99997 9.51408L3.17817 10.958C2.98241 11.0581 2.74618 10.9731 2.65053 10.7681C2.61176 10.6851 2.60074 10.5907 2.61922 10.5003L3.2486 7.42066L1.11697 5.21097C0.962127 5.05046 0.960854 4.78888 1.11413 4.62672C1.1737 4.56369 1.25106 4.52241 1.33477 4.50899L4.29953 4.03344L5.64756 1.22754C5.74549 1.02372 5.98265 0.941619 6.17728 1.04417Z" fill="#FFC220"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.36564 4.54466L5.99997 1.70204L4.63429 4.54466L1.52101 5.04403L3.78346 7.38933L3.13563 10.5592L5.99997 9.09359L8.8643 10.5592L8.21648 7.38933L10.4789 5.04403L7.36564 4.54466ZM8.0405 3.64013L6.42286 0.273051C6.37718 0.177984 6.30351 0.100832 6.21273 0.0530012C5.97918 -0.0700572 5.69458 0.0284626 5.57708 0.273051L3.95944 3.64013L0.401726 4.21078C0.301276 4.2269 0.208444 4.27643 0.136954 4.35207C-0.0469752 4.54666 -0.045448 4.86055 0.140365 5.05317L2.69832 7.70479L1.94306 11.4004C1.92088 11.5089 1.93411 11.6221 1.98063 11.7218C2.09541 11.9678 2.37889 12.0698 2.6138 11.9496L5.99997 10.2169L9.38613 11.9496C9.48135 11.9983 9.58941 12.0121 9.69303 11.9889C9.94869 11.9316 10.1116 11.6681 10.0569 11.4004L9.30162 7.70479L11.8596 5.05317C11.9318 4.9783 11.9791 4.88108 11.9945 4.77589C12.0341 4.50524 11.8566 4.25224 11.5982 4.21078L8.0405 3.64013Z" fill="#CC851A"/>
    </svg>
  );
}

function ReviewStars({ value }: { value: number }) {
  return (
    <div className="flex h-5 items-center gap-px">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.floor(value);
        const half = !filled && i < value;
        return <StarIcon key={i} half={half && !filled} />;
      })}
    </div>
  );
}

// ─── Rating Histogram ────────────────────────────────────────────────────────
const HISTOGRAM = [
  { label: "5 stars", pct: 75, count: 600 },
  { label: "4 stars", pct: 18, count: 118 },
  { label: "3 stars", pct: 5,  count: 40  },
  { label: "2 stars", pct: 2,  count: 16  },
  { label: "1 star",  pct: 5,  count: 2   },
];

function RatingHistogram() {
  return (
    <div className="flex flex-col gap-1">
      {HISTOGRAM.map(({ label, pct, count }) => (
        <div key={label} className="flex items-center gap-2 py-0.5">
          <button className="w-[44px] shrink-0 text-left text-[14px] leading-5 text-[#2E2F32] underline">
            {label}
          </button>
          <div className="relative h-2 flex-1 overflow-hidden rounded-sm bg-[#F1F1F2]">
            <div
              className="absolute inset-y-0 left-0 rounded-sm bg-[#0053E2]"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="w-[64px] shrink-0 text-right text-[14px] leading-5 text-[#2E2F32]">
            {pct}% ({count})
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Reviews Summary Card ────────────────────────────────────────────────────
function ReviewsSummaryCard() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="rounded-2xl border border-[#E3E4E5] px-3 py-2">
      <p className="mb-3 text-[14px] font-bold leading-5 text-[#2E2F32]">Reviews summary</p>
      {expanded && (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center rounded-full bg-[#EAF3E6] px-2 py-0.5 text-[14px] leading-5 text-[#1D5F02]">
              Pros
            </span>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2 text-[14px] leading-5 text-[#2E2F32]">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E2F32]" />
                <span><span className="underline">Long-lasting battery life:</span> Lasts for days with minimal charging.</span>
              </li>
              <li className="flex items-start gap-2 text-[14px] leading-5 text-[#2E2F32]">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E2F32]" />
                <span><span className="underline">Clear and rich sound:</span> Delivers good bass and crisp highs.</span>
              </li>
              <li className="flex items-start gap-2 text-[14px] leading-5 text-[#2E2F32]">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E2F32]" />
                <span><span className="underline">Lightweight design:</span> Has a build that allows for comfort during prolonged use.</span>
              </li>
              <li className="flex items-start gap-2 text-[14px] leading-5 text-[#2E2F32]">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E2F32]" />
                <span><span className="underline">Straightforward controls:</span> Features are easy to navigate and operate.</span>
              </li>
              <li className="flex items-start gap-2 text-[14px] leading-5 text-[#2E2F32]">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E2F32]" />
                <span><span className="underline">Competitive price point:</span> Offers great sound quality at this price.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center rounded-full bg-[#F1F1F2] px-2 py-0.5 text-[14px] leading-5 text-[#2E2F32]">
              Neutral
            </span>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2 text-[14px] leading-5 text-[#2E2F32]">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E2F32]" />
                <span><span className="underline">Fit profile:</span> Can be snug and comfortable, but also too small or loose for some users.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-[14px] leading-5 text-[#74767C]">Generated by AI</span>
          <InfoCircle color="#2E2F32" />
        </div>
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1 text-[14px] leading-5 text-[#2E2F32] underline"
        >
          {expanded ? "View less" : "View more"}
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
    </div>
  );
}

// ─── Single Review Card ──────────────────────────────────────────────────────
type Review = {
  name: string;
  date: string;
  rating: number;
  body: string;
  photos?: string[];
};

const REVIEWS: Review[] = [
  {
    name: "Robert",
    date: "Mar 7, 2025",
    rating: 5,
    body: "I've been using the iPhone 16 Pro Max for a few weeks, and I'm really impressed. The design is sleek and feels solid, and the 6.7-inch display is stunning—bright, clear, and perfect for outdoor use. The camera is amazing, especially with the 48MP main lens; photos are sharp, even in low light, and the video quality is top-notch.",
    photos: [RECT2, RECT3],
  },
  {
    name: "Shannon",
    date: "Mar 11, 2025",
    rating: 5,
    body: "I recently upgraded to the iPhone 16 Pro Max, and wow, it's been a solid experience. The display is gorgeous—bright, sharp, and easy to see outdoors. The camera is by far the best part for me; the photos come out clear and detailed, even in low light, and the video quality is amazing.",
  },
  {
    name: "Fred",
    date: "Mar 16, 2025",
    rating: 5,
    body: "I recently picked up the iPhone 16 Pro Max, and after checking it out, I have to say, it's pretty impressive. The display is stunning—everything looks sharp, and even in bright sunlight, it's easy to see. The camera is incredible too, with crystal-clear photos and videos that look almost professional.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-4 py-4 px-4">
      <div className="flex h-5 items-center justify-between gap-2">
        <div className="flex h-5 items-center gap-2">
          <ReviewStars value={review.rating} />
          <div className="flex h-5 items-center gap-1">
            <span className="text-[14px] font-bold leading-5 text-[#2E2F32]">Verified purchase</span>
            <InfoCircle />
          </div>
        </div>
        <span className="flex h-5 shrink-0 items-center text-[14px] leading-5 text-[#2E2F32]">{review.date}</span>
      </div>

      {/* Username */}
      <div className="flex items-center gap-1">
        <AvatarIcon />
        <span className="text-[14px] font-bold leading-5 text-[#2E2F32]">{review.name}</span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-1">
        <p className="line-clamp-3 text-[14px] leading-5 text-[#2E2F32]">{review.body}</p>
        <button className="self-start text-[14px] leading-5 text-[#2E2F32] underline">Read more</button>
      </div>

      {/* Photos */}
      {review.photos && (
        <div className="flex items-center gap-2">
          {review.photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-[60px] w-[60px] rounded object-cover"
            />
          ))}
        </div>
      )}

      {/* Metadata */}
      <div className="flex items-center gap-3">
        <span className="text-[14px] leading-5 text-[#2E2F32]">
          <span className="font-bold">Condition:</span> New
        </span>
        <span className="text-[14px] leading-5 text-[#2E2F32]">
          <span className="font-bold">Capacity:</span> 256 GB
        </span>
      </div>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export default function CustomerReviews({ showTRTBHighlights = false }: { showTRTBHighlights?: boolean }) {
  return (
    <div className="flex flex-col gap-4 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <span className="text-[16px] font-bold leading-6 text-[#2E2F32]">
          Customer ratings &amp; reviews
        </span>
        <ChevronUp />
      </div>

      <div className="flex flex-col gap-4 px-4">
        {/* Overall rating */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[18px] font-bold leading-6 text-[#2E2F32]">4.6 out of 5</span>
            <ReviewStars value={4.5} />
          </div>
          <div className="flex items-center gap-1 text-[12px] leading-4 text-[#2E2F32]">
            <span>800 ratings</span>
            <span>|</span>
            <button className="underline">396 reviews</button>
          </div>
        </div>

        {/* Histogram */}
        <RatingHistogram />

        {/* How rating is calculated */}
        <div className="flex items-center gap-1">
          <button className="text-[14px] leading-5 text-[#2E2F32] underline">
            How item rating is calculated
          </button>
          <InfoCircle color="#2E2F32" />
        </div>
      </div>

      {/* Customer images */}
      <div className="flex flex-col gap-4 px-4">
        <div className="flex items-center justify-between">
          <span className="text-[16px] font-bold leading-6 text-[#2E2F32]">Customer images</span>
          <button className="text-[14px] leading-5 text-[#2E2F32] underline">View all</button>
        </div>
        <div className="flex h-[98px] items-start gap-2">
          <div
            className="h-full min-w-0 flex-1 basis-0 overflow-hidden rounded-lg bg-no-repeat"
            style={{ backgroundImage: `url(${UGC_1})`, backgroundSize: "150% auto", backgroundPosition: "center" }}
          />
          <div
            className="h-full min-w-0 flex-1 basis-0 overflow-hidden rounded-lg bg-no-repeat"
            style={{ backgroundImage: `url(${UGC_2})`, backgroundSize: "150% auto", backgroundPosition: "center" }}
          />
          <div
            className="relative h-full min-w-0 flex-1 basis-0 overflow-hidden rounded-lg bg-no-repeat"
            style={{ backgroundImage: `url(${UGC_3})`, backgroundSize: "150% auto", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-[16px] leading-6 text-white">+47 images</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews summary */}
      <div className="px-4">
        {showTRTBHighlights ? <ReviewHighlights /> : <ReviewsSummaryCard />}
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {["Sort and filter", "Star rating", "Verified"].map((label, i) => (
          <button
            key={label}
            className="flex shrink-0 items-center gap-2 rounded-full bg-[#F1F1F2] px-4 py-2 text-[14px] leading-5 text-[#2E2F32]"
          >
            {i === 1 && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.24819 1.06183C8.3541 1.11764 8.44005 1.20765 8.49333 1.31856L10.3806 5.24681L14.5312 5.91258C14.8328 5.96094 15.0397 6.25612 14.9936 6.57187C14.9756 6.6946 14.9204 6.80802 14.8362 6.89536L11.8519 9.98892L12.733 14.3004C12.7969 14.6128 12.6068 14.9202 12.3085 14.9871C12.1876 15.0142 12.0616 14.998 11.9505 14.9412L7.99996 12.9197L4.04943 14.9412C3.77537 15.0814 3.44465 14.9624 3.31074 14.6754C3.25646 14.5591 3.24103 14.427 3.2669 14.3004L4.14804 9.98892L1.16376 6.89536C0.946977 6.67064 0.945196 6.30443 1.15978 6.07741C1.24318 5.98917 1.35149 5.93138 1.46868 5.91258L5.61934 5.24681L7.50659 1.31856C7.64368 1.03321 7.97571 0.918267 8.24819 1.06183ZM9.70573 6.15135L7.999 2.6L6.2942 6.15135L2.432 6.77L5.23318 9.67346L4.425 13.624L7.99996 11.7964L11.574 13.624L10.7667 9.67346L13.567 6.77L9.70573 6.15135Z" fill="#2E2F32"/>
              </svg>
            )}
            {label}
            {i < 2 && <ChevronDown />}
          </button>
        ))}
      </div>

      {/* Frequent mention chips */}
      <div className="flex flex-wrap gap-2 px-4">
        {["Quality (38)", "Price (23)", "Sound (32)"].map((label) => (
          <button
            key={label}
            className="flex h-8 items-center rounded border border-[#74767C] bg-white px-4 text-[14px] leading-5 text-[#2E2F32]"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Review count */}
      <div className="px-4">
        <p className="text-[16px] font-bold leading-6 text-[#2E2F32]">Showing 1-3 of 396 reviews</p>
      </div>

      {/* Review cards */}
      <div className="flex flex-col">
        {REVIEWS.map((review, i) => (
          <div key={review.name}>
            <ReviewCard review={review} />
            {i < REVIEWS.length - 1 && <div className="h-px w-full bg-[#F1F1F2]" />}
          </div>
        ))}
      </div>

      {/* View all button */}
      <div className="px-4 pb-4">
        <button className="w-full rounded-full border border-[#2E2F32] bg-white py-2 text-[14px] font-bold leading-5 text-[#2E2F32]">
          View all reviews (396)
        </button>
      </div>
    </div>
  );
}
