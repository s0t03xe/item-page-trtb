export default function Headphones({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="JBL Tune 720BT Wireless Over-Ear Headphones in blue"
    >
      <defs>
        <linearGradient id="cup" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a5c86" />
          <stop offset="1" stopColor="#243f63" />
        </linearGradient>
        <linearGradient id="cupR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#33527a" />
          <stop offset="1" stopColor="#1f3656" />
        </linearGradient>
        <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#41618c" />
          <stop offset="1" stopColor="#2c4a72" />
        </linearGradient>
      </defs>

      {/* headband */}
      <path
        d="M40 175 C40 70 120 30 160 30 C200 30 280 70 280 175"
        stroke="url(#band)"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M40 175 C40 70 120 30 160 30 C200 30 280 70 280 175"
        stroke="#5e7ba6"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* left arm */}
      <rect x="44" y="150" width="22" height="60" rx="11" fill="#2c4a72" />
      {/* right arm */}
      <rect x="254" y="150" width="22" height="60" rx="11" fill="#243f63" />

      {/* left cup */}
      <ellipse cx="78" cy="215" rx="62" ry="72" fill="url(#cup)" />
      <ellipse cx="78" cy="215" rx="40" ry="50" fill="#14253b" />
      <ellipse cx="78" cy="215" rx="30" ry="40" fill="#1c3149" />

      {/* right cup */}
      <ellipse cx="242" cy="215" rx="58" ry="70" fill="url(#cupR)" />
      <ellipse cx="242" cy="215" rx="38" ry="48" fill="#12203a" />
      <ellipse cx="242" cy="215" rx="28" ry="38" fill="#1a2d47" />

      {/* JBL hint on right cup */}
      <text
        x="242"
        y="222"
        textAnchor="middle"
        fontFamily="'Everyday Sans UI', system-ui, sans-serif"
        fontWeight="800"
        fontSize="15"
        fill="#9fb4d1"
        opacity="0.75"
      >
        JBL
      </text>
    </svg>
  );
}
