import { useState } from "react";

const SECTIONS = ["Product details", "Specs", "Warranty", "Warnings"];

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.37683 11.334L14 5.19175L13.2463 4.5L8 10.2307L2.75366 4.5L2 5.19175L7.62317 11.334C7.71999 11.4398 7.85671 11.5 8 11.5C8.14329 11.5 8.28 11.4398 8.37683 11.334Z" fill="#2E2F32"/>
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.62317 4.666L2 10.8083L2.75366 11.5L8 5.7693L13.2463 11.5L14 10.8083L8.37683 4.666C8.28 4.5602 8.14329 4.5 8 4.5C7.85671 4.5 7.71999 4.5602 7.62317 4.666Z" fill="#2E2F32"/>
    </svg>
  );
}

function AccordionRow({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="flex w-full items-center justify-between py-1 text-left"
    >
      <span className="text-[14px] font-bold leading-5 text-[#2E2F32]">{label}</span>
      {open ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
}

export default function AboutThisItem() {
  return (
    <div className="flex flex-col gap-3 bg-white p-4">
      <div className="py-1">
        <span className="text-[16px] font-bold leading-6 text-[#2E2F32]">About this item</span>
      </div>
      <div className="flex flex-col gap-2">
        {SECTIONS.map((section, i) => (
          <div key={section} className="flex flex-col gap-2">
            <AccordionRow label={section} />
            {i < SECTIONS.length - 1 && (
              <div className="h-px w-full bg-[#E3E4E5]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
