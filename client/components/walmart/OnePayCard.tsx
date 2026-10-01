const CARD_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fb2fcb74ae39e40d0ad6d6af6a6728bf4";

export default function OnePayCard() {
  return (
    <div className="flex items-center gap-4 bg-white px-4 py-4">
      <img
        src={CARD_IMG}
        alt="OnePay CashRewards Card"
        className="h-[44px] w-[70px] shrink-0 rounded-sm object-contain"
      />
      <p className="flex-1 text-[12px] leading-[16px] text-[#2E2F32]">
        <span className="font-bold">OnePay CashRewards Card.</span>
        {" "}Earn unlimited 3% cash back at Walmart and 1.5% back on all other
        purchases.{" "}
        <button className="underline">Learn more</button>
      </p>
    </div>
  );
}
