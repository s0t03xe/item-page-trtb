export default function PurchaseBar() {
  return (
    <div className="relative z-10 flex items-center gap-2 bg-white px-4 pb-3 pt-2">
      <button className="flex h-10 flex-1 items-center justify-center rounded-full border border-walmart-gray-line bg-white text-[16px] font-bold text-ld-text-default active:bg-walmart-gray-bg">
        Buy now
      </button>
      <button className="flex h-10 flex-1 items-center justify-center rounded-full bg-walmart-blue text-[16px] font-bold text-white active:bg-walmart-blue-dark">
        Add to cart
      </button>
    </div>
  );
}
