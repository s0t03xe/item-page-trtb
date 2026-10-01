const TOTAL_LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F3fd1db66d73b44969d0542bda9b85385";
const TOP_LEFT =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F8244a4e58dcb4b138c4f3eacf9d37e40";
const PHONE_BANNER =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fb0a2d0f09df845b2827cc69ab656f4ad";
const BOTTOM_RIGHT =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F0efc66262e0140e3b6ebec969939a836";

export default function TotalWirelessBanner() {
  return (
    <div className="flex flex-col gap-2 bg-white px-4 py-4">
      <div className="overflow-hidden rounded-xl border border-[#E3E4E5]">
        {/* Teal hero — decorations behind, phone + price on top */}
        <div className="relative aspect-[800/310] bg-[#44C8B4]">
          {/* Phone + pricing (behind) */}
          <img
            src={PHONE_BANNER}
            alt="iPhone 13 — Now $249 (was $399)"
            className="absolute inset-0 z-0 h-full w-full object-contain"
          />
          {/* Corner decorations (on top) */}
          <img
            src={TOP_LEFT}
            alt=""
            aria-hidden="true"
            className="absolute left-0 top-0 z-10 h-9 w-auto"
          />
          <img
            src={BOTTOM_RIGHT}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-0 z-10 h-[50px] w-auto"
          />
        </div>

        {/* White info row */}
        <div className="flex items-center justify-between gap-4 bg-white p-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] font-bold leading-6 text-ld-text-default">
              Save big on iPhone 13
            </h3>
            <p className="text-[14px] leading-5 text-ld-text-default">
              Pair with plans starting at $25 per line/mo.
            </p>
          </div>
          <img src={TOTAL_LOGO} alt="Total Wireless" className="h-12 w-auto shrink-0" />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-center justify-end gap-1 text-[14px] leading-5 text-[#74767C]">
        <span>Sponsored</span>
        <span>|</span>
        <button className="underline">Terms apply</button>
      </div>
    </div>
  );
}
