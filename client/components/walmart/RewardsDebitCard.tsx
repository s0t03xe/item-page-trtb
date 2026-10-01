const CARD_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F257b38b1fac245cf85ba586fdc49705a";

export default function RewardsDebitCard() {
  return (
    <div className="flex items-center gap-4 bg-white px-4 py-4">
      <img
        src={CARD_IMG}
        alt="OnePay Rewards Debit Card"
        className="h-[44px] w-[70px] shrink-0 rounded-sm object-contain"
      />
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-[12px] leading-4 text-[#2E2F32]">
          <span className="font-extrabold">Rewards debit card.</span>
          {" "}Earn 3% cash back, on up to $150 spent each month. Terms apply.
        </p>
        <button className="self-start text-[12px] leading-4 text-[#2E2F32] underline">
          Join OnePay Cash
        </button>
      </div>
    </div>
  );
}
