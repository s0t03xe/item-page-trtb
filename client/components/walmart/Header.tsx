import { Barcode, Cart, ChevronLeft, Search } from "./icons";

export default function Header() {
  return (
    <div className="flex items-center gap-5 bg-walmart-blue py-3 pl-4 pr-4">
      {/* Back chevron */}
      <button aria-label="Go back" className="shrink-0 text-white">
        <ChevronLeft size={24} />
      </button>

      {/* Search pill */}
      <div className="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-full bg-white py-1.5 pl-4 pr-2">
        <div className="flex flex-1 items-center gap-2">
          <Search size={16} className="shrink-0 text-ld-base-subtle" />
          <span className="flex-1 truncate text-base leading-6 text-ld-base-subtle">
            Search Walmart
          </span>
        </div>

        <Barcode size={24} className="shrink-0 text-ld-text-default" />
      </div>

      {/* Cart */}
      <button
        aria-label="Cart"
        className="relative flex shrink-0 flex-col items-center"
      >
        <div className="relative text-white">
          <Cart size={24} />

          {/* badge */}
          <span className="absolute -right-1.5 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full border border-ld-warning-max bg-walmart-yellow px-1 text-[12px] font-bold leading-none text-ld-text-default">
            1
          </span>
        </div>

        {/* price */}
        <span className="mt-0.5 text-[12px] leading-4 text-white">$4.75</span>
      </button>
    </div>
  );
}
