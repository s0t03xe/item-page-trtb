import { useState } from "react";

const COLORS = [
  { name: "Blue", fill: "#4B576F" },
  { name: "White", fill: "#F7F7F7" },
  { name: "Lilac", fill: "#A099C2" },
  { name: "Black", fill: "#333333" },
  { name: "Teal", fill: "#135563" },
  { name: "Purple", fill: "#61499B" },
];


function ColorSwatch({ color, selected, onClick }: { color: typeof COLORS[0]; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={color.name}
      onClick={onClick}
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: 56,
        height: 56,
        border: selected ? "3px solid #2E2F32" : "3px solid transparent",
        borderRadius: 28,
      }}
    >
      <span
        className="block rounded-full"
        style={{
          width: 44,
          height: 44,
          background: color.fill,
          boxShadow: "0 0 0 0.5px #74767C",
        }}
      />
    </button>
  );
}

export default function VariantSelector() {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="flex flex-col gap-3 overflow-visible pt-3">
      {/* Color */}
      <div className="flex flex-col gap-1">
        <p className="text-[14px] leading-5 text-ld-text-default">
          <span className="font-bold">Color:</span>{" "}
          <span className="font-normal">{COLORS[selectedColor].name}</span>
        </p>
        <div className="flex items-center gap-1.5 overflow-visible">
          {COLORS.map((color, i) => (
            <ColorSwatch
              key={color.name}
              color={color}
              selected={i === selectedColor}
              onClick={() => setSelectedColor(i)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
