const CHIPS = ["Bose headphones", "Wireless audio", "Over-ear headphones", "Airpods Pro"];

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.5 1C9.53757 1 12 3.46243 12 6.5C12 7.83875 11.5217 9.06578 10.7266 10.0195L14.8536 14.1464C15.0488 14.3417 15.0488 14.6583 14.8536 14.8536C14.68 15.0271 14.4106 15.0464 14.2157 14.9114L14.1464 14.8536L10.0195 10.7266C9.06578 11.5217 7.83875 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1ZM6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2Z" fill="#2E2F32"/>
    </svg>
  );
}

export default function RefineSearch() {
  return (
    <div className="flex flex-col gap-4 bg-white px-4 py-4">
      <span className="text-[16px] font-bold leading-6 text-[#2E2F32]">Refine your search</span>
      <div className="flex flex-wrap gap-2">
        {CHIPS.map((label) => (
          <button
            key={label}
            className="flex h-8 items-center gap-2 rounded border border-[#BABBBE] bg-white px-4 text-[12px] leading-4 text-[#2E2F32]"
          >
            <SearchIcon />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
