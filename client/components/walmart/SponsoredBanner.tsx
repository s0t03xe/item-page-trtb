const PRODUCT_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F4c3f8ed60d9e4877b13fb7643de2a542";
const SAMSUNG_LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F8a64cb6d414c4a0480bed98aa713f8fc";

export default function SponsoredBanner() {
  return (
    <div className="px-4 pb-0 pt-3">
      <div className="relative flex h-[44px] items-center gap-4 overflow-hidden rounded-xl bg-white pl-[80px] pr-4 shadow-[0_-1px_2px_0_rgba(0,0,0,0.10),0_1px_2px_1px_rgba(0,0,0,0.15)]">
        <img
          src={PRODUCT_IMG}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 h-full w-[calc(100%+12px)] max-w-none -translate-x-1/2 object-cover"
        />
        <img
          src={SAMSUNG_LOGO}
          alt="Samsung"
          width={59}
          height={12}
          className="relative shrink-0"
        />
        <p className="relative text-[8px] leading-[10px] text-[#515357]">
          <span className="font-extrabold">
            Galaxy Buds 3. Galaxy AI is here.
          </span>
          <br />
          <span className="font-normal">Sponsored</span>
        </p>
      </div>
    </div>
  );
}
