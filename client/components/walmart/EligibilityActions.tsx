import { Heart, Card, Gift } from "./icons";

const FSA_HSA_LOGO = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F45c40d0d8baf47c1bc0e1278eccb2603";
const GIFT_ICON = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F7653f6f7c59846049d3a6d8dd4aeeabf";

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1L5.5 3.5M8 1L10.5 3.5M8 1V10M3 7V14H13V7" stroke="#2E2F32" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function EligibilityActions() {
  return (
    <div className="flex flex-col gap-3 bg-white py-4">
      {/* SNAP eligible — icon 16px + gap ~25px = text aligns at ~41px */}
      <div className="flex items-center px-4" style={{ gap: "25px" }}>
        <Card size={16} className="shrink-0" />
        <span className="text-[14px] leading-5 text-ld-text-default">SNAP eligible</span>
      </div>

      {/* FSA and HSA eligible — logo 25px + gap 16px = text aligns at ~41px */}
      <div className="flex items-center px-4" style={{ gap: "16px" }}>
        <img src={FSA_HSA_LOGO} alt="FSA/HSA" className="h-[14px] w-[25px] shrink-0" />
        <div className="flex items-center gap-2">
          <span className="text-[14px] leading-5 text-ld-text-default">FSA and HSA eligible</span>
          <button className="text-[14px] leading-5 text-ld-text-default underline">Details</button>
        </div>
      </div>

      {/* Gift eligible — icon 16px + gap ~25px = text aligns at ~41px */}
      <div className="flex items-center px-4" style={{ gap: "25px" }}>
        <img src={GIFT_ICON} alt="" className="h-4 w-4 shrink-0" />
        <div className="flex items-center gap-2">
          <span className="text-[14px] leading-5 text-ld-text-default">This item is gift eligible</span>
          <button className="text-[14px] leading-5 text-ld-text-default underline">Learn more</button>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 h-px bg-[#E3E4E5]" />

      {/* Add to list / Add to registry / Share */}
      <div className="flex items-center gap-6 px-4">
        <button className="flex items-center gap-2 text-[14px] leading-5 text-ld-text-default">
          <Heart size={16} />
          Add to list
        </button>
        <button className="flex items-center gap-2 text-[14px] leading-5 text-ld-text-default">
          <Gift size={16} />
          Add to registry
        </button>
        <button className="flex items-center gap-2 text-[14px] leading-5 text-ld-text-default">
          <ShareIcon />
          Share
        </button>
      </div>
    </div>
  );
}
