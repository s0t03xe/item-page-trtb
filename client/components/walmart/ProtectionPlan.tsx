import { useState } from "react";

const APPLE_CARE_LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F9464c42f9b044f29a1bc1606758cd593";
const WALMART_PLAN_LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F4d3593e6df4c4d2eaf9889da4b3beaf9";

type PlanId = "apple-2yr" | "walmart-2yr" | "walmart-3yr" | null;

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border border-ld-text-default bg-white">
      {checked && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 6L4.5 8.5L10 3"
            stroke="#2E2F32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

function PlanOption({
  id,
  label,
  selected,
  onSelect,
}: {
  id: PlanId;
  label: string;
  selected: boolean;
  onSelect: (id: PlanId) => void;
}) {
  return (
    <button
      role="checkbox"
      aria-checked={selected}
      onClick={() => onSelect(selected ? null : id)}
      className="flex items-start gap-3"
    >
      <Checkbox checked={selected} />
      <span className="text-[14px] leading-5 text-ld-text-default">{label}</span>
    </button>
  );
}

export default function ProtectionPlan() {
  const [selected, setSelected] = useState<PlanId>(null);

  return (
    <div className="bg-white px-4 pb-4 pt-4">
      <div className="rounded-lg bg-[#E9F1FE] p-4 flex flex-col gap-4">
        {/* Header */}
        <div>
          <p className="text-[18px] font-bold leading-6 text-ld-text-default">
            Add a protection plan
          </p>
          <p className="text-[12px] leading-4 text-ld-text-default">
            (Only one option can be selected at a time)
          </p>
        </div>

        {/* AppleCare+ */}
        <div className="flex items-start gap-[18px]">
          <img
            src={APPLE_CARE_LOGO}
            alt="AppleCare+"
            className="mt-0.5 h-8 w-8 shrink-0 object-contain"
          />
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-bold leading-5 text-ld-text-default">
                AppleCare+
              </span>
              <button className="text-[14px] leading-5 text-ld-text-default underline">
                What's covered
              </button>
            </div>
            <PlanOption
              id="apple-2yr"
              label="2-Year plan - $69.00"
              selected={selected === "apple-2yr"}
              onSelect={setSelected}
            />
          </div>
        </div>

        {/* Walmart Protection Plan by Allstate */}
        <div className="flex items-start gap-4">
          <img
            src={WALMART_PLAN_LOGO}
            alt="Walmart Protection Plan by Allstate"
            className="mt-0.5 h-[43px] w-[34px] shrink-0 object-contain"
          />
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex flex-col">
              <span className="text-[14px] font-bold leading-5 text-ld-text-default">
                Walmart Protection Plan by Allstate
              </span>
              <button className="self-start text-[14px] leading-5 text-ld-text-default underline">
                What's covered
              </button>
            </div>
            <PlanOption
              id="walmart-2yr"
              label="2-Year plan - $49.00"
              selected={selected === "walmart-2yr"}
              onSelect={setSelected}
            />
            <PlanOption
              id="walmart-3yr"
              label="3-Year plan - $64.00"
              selected={selected === "walmart-3yr"}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
