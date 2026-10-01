import type { SVGProps } from "react";

/**
 * Walmart Living Design (LD) icon set.
 *
 * chevron-left / search / barcode / cart are the exact LD SVGs exported from
 * the Figma LD kit. The remaining glyphs are drawn to LD's visual spec
 * (24px grid, 1.5px stroke, rounded joins) so the whole app reads as one
 * coherent icon family. All icons paint with `currentColor` unless an
 * explicit `fill` is passed, so colour is driven by Tailwind text utilities.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function svgProps({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
  };
}

/* ---- Exact LD glyphs (from Figma) ---------------------------------- */

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path
        d="M7.74897 12.5652L16.9624 21L18 19.8695L9.40402 12L18 4.13049L16.9624 3L7.74897 11.4348C7.59033 11.58 7.5 11.7851 7.5 12C7.5 12.2149 7.59033 12.42 7.74897 12.5652Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Search({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })} viewBox="0 0 16 16">
      <path
        d="M11.3018 12.0211C10.2107 12.951 8.79592 13.5123 7.25 13.5123C3.79822 13.5123 1 10.714 1 7.26227C1 3.81049 3.79822 1.01227 7.25 1.01227C10.7018 1.01227 13.5 3.81049 13.5 7.26227C13.5 8.80815 12.9388 10.223 12.0089 11.314L14.3536 13.6587L13.6465 14.3658L11.3018 12.0211ZM12.5 7.26227C12.5 4.36277 10.1495 2.01227 7.25 2.01227C4.35051 2.01227 2 4.36277 2 7.26227C2 10.1618 4.35051 12.5123 7.25 12.5123C10.1495 12.5123 12.5 10.1618 12.5 7.26227Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Barcode(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path
        d="M1.5 4.05C1.5 3.4701 1.9701 3 2.55 3H8.25V4.5H3V19.5H8.25V21H2.55C1.9701 21 1.5 20.5299 1.5 19.95V4.05Z"
        fill="currentColor"
      />
      <path
        d="M21.0002 4.5H15.7502V3H21.4502C22.0301 3 22.5002 3.4701 22.5002 4.05V19.95C22.5002 20.5299 22.0301 21 21.4502 21H15.7502V19.5H21.0002V4.5Z"
        fill="currentColor"
      />
      <path d="M8.25018 9V15H9.75018V9H8.25018Z" fill="currentColor" />
      <path d="M17.2502 15V9H18.7502V15H17.2502Z" fill="currentColor" />
      <path d="M14.2502 9V15H15.7502V9H14.2502Z" fill="currentColor" />
      <path d="M11.2502 15V9H12.7502V15H11.2502Z" fill="currentColor" />
      <path d="M5.25018 9V15H6.75018V9H5.25018Z" fill="currentColor" />
    </svg>
  );
}

export function Cart(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path
        d="M4.27679 3H1.5V4.5H3.94198L6.03163 11.4655L7.46837 11.0345L5.95802 6H20.8901L19.7093 11.3138L7.79844 12.6372C6.81733 12.7462 6.07507 13.5755 6.07507 14.5627C6.07507 15.6326 6.94244 16.5 8.01238 16.5H20.25V15H8.01238C7.77086 15 7.57507 14.8042 7.57507 14.5627C7.57507 14.3399 7.74262 14.1527 7.96409 14.1281L20.1947 12.7691C20.641 12.7195 21.0063 12.3916 21.1037 11.9533L22.4761 5.77778C22.6218 5.12204 22.1228 4.5 21.4511 4.5H5.50802L5.28251 3.74828C5.14927 3.30415 4.74048 3 4.27679 3Z"
        fill="currentColor"
      />
      <path
        d="M9 21C9.82843 21 10.5 20.3284 10.5 19.5C10.5 18.6716 9.82843 18 9 18C8.17157 18 7.5 18.6716 7.5 19.5C7.5 20.3284 8.17157 21 9 21Z"
        fill="currentColor"
      />
      <path
        d="M18.75 21C19.5784 21 20.25 20.3284 20.25 19.5C20.25 18.6716 19.5784 18 18.75 18C17.9216 18 17.25 18.6716 17.25 19.5C17.25 20.3284 17.9216 21 18.75 21Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---- LD-spec glyphs ------------------------------------------------- */

export function Store({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M4 9.5V19.5C4 20.0523 4.44772 20.5 5 20.5H19C19.5523 20.5 20 20.0523 20 19.5V9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.2 9.5C2.4 9.5 1.9 8.7 2.2 7.96L3.74 4.13C3.89 3.75 4.26 3.5 4.67 3.5H19.33C19.74 3.5 20.11 3.75 20.26 4.13L21.8 7.96C22.1 8.7 21.6 9.5 20.8 9.5C19.81 9.5 19 8.69 19 7.7V7.5C19 8.6 18.1 9.5 17 9.5C15.9 9.5 15 8.6 15 7.5C15 8.6 14.1 9.5 13 9.5H11C9.9 9.5 9 8.6 9 7.5C9 8.6 8.1 9.5 7 9.5C5.9 9.5 5 8.6 5 7.5V7.7C5 8.69 4.19 9.5 3.2 9.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heart({ size = 24, ...props }: IconProps) {
  if (size <= 16) {
    return (
      <svg {...svgProps({ size, ...props })} viewBox="0 0 16 16">
        <path
          d="M10.81 3.03381C11.656 3.03381 12.4674 3.37445 13.0657 3.9808C13.6639 4.58714 14 5.40953 14 6.26703V6.34811C14 7.80761 12.94 9.26712 11.59 10.5138C10.5603 11.4352 9.43738 12.2438 8.24001 12.926C8.16615 12.966 8.08372 12.9868 8.00001 12.9868C7.9163 12.9868 7.83388 12.966 7.76001 12.926C6.56264 12.2438 5.43975 11.4352 4.41002 10.5138C3.06003 9.26712 2.00002 7.80761 2.00002 6.34811V6.26703C1.99292 5.63706 2.16813 5.01878 2.504 4.48865C2.83986 3.95852 3.32165 3.53979 3.88981 3.28422C4.45796 3.02864 5.08756 2.94744 5.70075 3.05065C6.31395 3.15386 6.88385 3.43695 7.34001 3.86492L7.63001 4.13858C7.73226 4.22979 7.8638 4.28012 8.00001 4.28012C8.13622 4.28012 8.26777 4.22979 8.37001 4.13858L8.66001 3.86492C9.2467 3.31906 10.0136 3.01538 10.81 3.01355M10.81 2C9.76771 2.0068 8.76552 2.40804 8.00001 3.12503C7.40066 2.56981 6.65472 2.20354 5.85334 2.07096C5.05196 1.93839 4.22984 2.04525 3.4874 2.3785C2.74497 2.71175 2.11436 3.25695 1.67264 3.9475C1.23091 4.63805 0.997194 5.44405 1.00003 6.26703V6.34811C1.00003 7.93938 1.92002 9.59146 3.74002 11.2638C4.82428 12.2364 6.00761 13.0892 7.27001 13.8078C7.49322 13.9338 7.7445 14 8.00001 14C8.25552 14 8.5068 13.9338 8.73001 13.8078C9.99242 13.0892 11.1758 12.2364 12.26 11.2638C14.08 9.59146 15 7.9191 15 6.34811V6.26703C14.9974 5.14154 14.5551 4.06291 13.7699 3.26707C12.9847 2.47123 11.9204 2.02294 10.81 2.02027V2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.125 3C19.6458 3 22.5 5.85418 22.5 9.375C22.5 13.625 19 17.5 12 21C4.99999 17.5 1.5 13.625 1.5 9.375C1.5 5.85418 4.35418 3 7.875 3C9.44849 3 10.8888 3.57006 12.0008 4.51493C13.1118 3.56981 14.5519 3 16.125 3ZM16.125 4.5C15.0419 4.5 14.0171 4.85276 13.1784 5.49178L12.9727 5.65746L12.0013 6.48379L11.0295 5.65798C10.1541 4.91414 9.04851 4.5 7.875 4.5C5.18261 4.5 3 6.68261 3 9.375C3 12.7071 5.75078 15.9581 11.4986 19.0507L12 19.315L12.1137 19.2566C17.9977 16.1697 20.8763 12.9224 20.9961 9.5923L21 9.375C21 6.68261 18.8174 4.5 16.125 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Share({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })} viewBox="0 0 16 16">
      <path
        d="M7.64648 1.1462L5.14648 3.6462L5.85359 4.35331L7.5 2.7069V9.99973H8.5V2.70682L10.1465 4.35331L10.8536 3.6462L8.35359 1.1462C8.15833 0.95094 7.84175 0.95094 7.64648 1.1462Z"
        fill="currentColor"
      />
      <path
        d="M3 4.99973C2.44772 4.99973 2 5.44745 2 5.99973V13.9997C2 14.552 2.44771 14.9997 3 14.9997H13C13.5523 14.9997 14 14.552 14 13.9997V5.99973C14 5.44745 13.5523 4.99973 13 4.99973H11V5.99973H13V13.9997H3V5.99973H5V4.99973H3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Gift({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <rect x="3.75" y="7.75" width="16.5" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 11.75V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7.75V20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.75S10.5 4 8.5 4 6 5 6 5.875 6.75 7.75 8.5 7.75H12ZM12 7.75S13.5 4 15.5 4 18 5 18 5.875 17.25 7.75 15.5 7.75H12Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Card({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <rect x="2.75" y="5.25" width="18.5" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9.25H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 14.75H10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Services({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <rect x="3.75" y="3.75" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.75" y="3.75" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3.75" y="13.75" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.75" y="13.75" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function User({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <circle cx="12" cy="8" r="3.75" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.75 20C4.75 16.5482 7.99 13.75 12 13.75C16.01 13.75 19.25 16.5482 19.25 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Play({ size = 13, fill = "none", ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M7 4.5L17 12L7 19.5V4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={fill}
      />
    </svg>
  );
}

export function Dot({ size = 9, fill = "currentColor", ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <circle cx="12" cy="12" r="7" fill={fill} />
    </svg>
  );
}

export function Cube({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 7.5L12 12M12 12L20 7.5M12 12V21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Headphones({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M4.5 16V12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="3" y="13.5" width="3.5" height="6" rx="1.75" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.5" y="13.5" width="3.5" height="6" rx="1.75" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Repeat({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M4 9C4 6.79086 5.79086 5 8 5H17M17 5L14 2M17 5L14 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 15C20 17.2091 18.2091 19 16 19H7M7 19L10 22M7 19L10 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Star({ size = 15, fill = "currentColor", ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M12 2.5L14.81 8.45L21 9.27L16.5 13.97L17.62 20.5L12 17.27L6.38 20.5L7.5 13.97L3 9.27L9.19 8.45L12 2.5Z"
        fill={fill}
      />
    </svg>
  );
}

export function MagicIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })} viewBox="0 0 16 16">
      <path d="M11.1458 2.79167L12.3333 2.33333L12.7708 1.16667C12.7917 1.0625 12.8958 1 13 1C13.0833 1 13.1875 1.0625 13.2083 1.16667L13.6667 2.33333L14.8333 2.79167C14.9375 2.8125 15 2.91667 15 3C15 3.10417 14.9375 3.20833 14.8333 3.22917L13.6667 3.66667L13.2083 4.85417C13.1875 4.9375 13.0833 5 13 5C12.8958 5 12.7917 4.9375 12.7708 4.85417L12.3333 3.66667L11.1458 3.22917C11.0625 3.20833 11 3.10417 11 3C11 2.91667 11.0625 2.8125 11.1458 2.79167Z" fill="currentColor"/>
      <path d="M1.28346 8.5288L1.8189 8.3089L2.07087 8.18325H2.10236L4.87402 6.89529L6.16535 4.09948L6.29134 3.84817L6.54331 3.31414C6.6063 3.12565 6.79528 3 6.98425 3C7.17323 3 7.3622 3.12565 7.45669 3.31414L7.70866 3.84817L7.80315 4.09948L7.83465 4.13089L9.09449 6.89529L11.8976 8.18325L12.1496 8.3089L12.685 8.56021C12.874 8.62304 13 8.81152 13 9C13 9.18848 12.874 9.37696 12.685 9.4712L12.1496 9.6911L11.8976 9.81675L9.09449 11.1047L7.80315 13.8691V13.9005L7.67717 14.1518L7.45669 14.6859C7.3622 14.8743 7.17323 15 6.98425 15C6.79528 15 6.6063 14.8743 6.54331 14.6859L6.29134 14.1518L6.16535 13.9005V13.8691L4.87402 11.1047L2.10236 9.81675H2.07087L1.8189 9.6911L1.28346 9.4712C1.09449 9.37696 1 9.18848 1 9C1 8.81152 1.09449 8.62304 1.28346 8.5288ZM3.89764 9L5.50394 9.75393C5.8189 9.87958 6.10236 10.1623 6.25984 10.4764L6.98425 12.0785L7.74016 10.4764C7.89764 10.1623 8.14961 9.87958 8.46457 9.75393L10.0709 9L8.46457 8.24607C8.14961 8.12042 7.89764 7.8377 7.74016 7.52356L6.98425 5.92147L6.25984 7.52356C6.10236 7.8377 5.8189 8.12042 5.50394 8.24607L3.89764 9Z" fill="currentColor"/>
    </svg>
  );
}

/** Sparky AI face — Walmart's spark mark on the assistant nav item. */
export function SparkyFace() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-walmart-yellow">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="4.5" cy="5.5" r="1.1" fill="#16191f" />
        <circle cx="9.5" cy="5.5" r="1.1" fill="#16191f" />
        <path
          d="M3.8 8.4a3.6 3.6 0 0 0 6.4 0"
          stroke="#16191f"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
