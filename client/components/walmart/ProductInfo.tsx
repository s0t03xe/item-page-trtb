import VariantSelector from "./VariantSelector";
import ReviewHighlights from "./ReviewHighlights";

function StarFull() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.21273 0.0530012C6.30351 0.100832 6.37718 0.177984 6.42286 0.273051L8.0405 3.64013L11.5982 4.21078C11.8566 4.25224 12.0341 4.50524 11.9945 4.77589C11.9791 4.88108 11.9318 4.9783 11.8596 5.05317L9.30162 7.70479L10.0569 11.4004C10.1116 11.6681 9.94869 11.9316 9.69303 11.9889C9.58941 12.0121 9.48135 11.9983 9.38613 11.9496L5.99997 10.2169L2.6138 11.9496C2.37889 12.0698 2.09541 11.9678 1.98063 11.7218C1.93411 11.6221 1.92088 11.5089 1.94306 11.4004L2.69832 7.70479L0.140365 5.05317C-0.045448 4.86055 -0.0469752 4.54666 0.136954 4.35207C0.208444 4.27643 0.301276 4.2269 0.401726 4.21078L3.95944 3.64013L5.57708 0.273051C5.69458 0.0284626 5.97918 -0.0700572 6.21273 0.0530012Z" fill="#FFC220"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.36564 4.54466L5.99997 1.70204L4.63429 4.54466L1.52101 5.04403L3.78346 7.38933L3.13563 10.5592L5.99997 9.09359L8.8643 10.5592L8.21648 7.38933L10.4789 5.04403L7.36564 4.54466ZM8.0405 3.64013L6.42286 0.273051C6.37718 0.177984 6.30351 0.100832 6.21273 0.0530012C5.97918 -0.0700572 5.69458 0.0284626 5.57708 0.273051L3.95944 3.64013L0.401726 4.21078C0.301276 4.2269 0.208444 4.27643 0.136954 4.35207C-0.0469752 4.54666 -0.045448 4.86055 0.140365 5.05317L2.69832 7.70479L1.94306 11.4004C1.92088 11.5089 1.93411 11.6221 1.98063 11.7218C2.09541 11.9678 2.37889 12.0698 2.6138 11.9496L5.99997 10.2169L9.38613 11.9496C9.48135 11.9983 9.58941 12.0121 9.69303 11.9889C9.94869 11.9316 10.1116 11.6681 10.0569 11.4004L9.30162 7.70479L11.8596 5.05317C11.9318 4.9783 11.9791 4.88108 11.9945 4.77589C12.0341 4.50524 11.8566 4.25224 11.5982 4.21078L8.0405 3.64013Z" fill="#995213"/>
    </svg>
  );
}

function StarHalf() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.00038 10.2168L2.61366 11.9492C2.37876 12.0693 2.09561 11.9677 1.98084 11.7217C1.93436 11.622 1.92061 11.5089 1.94276 11.4004L2.69862 7.70508L0.140024 5.05273C-0.0452623 4.86016 -0.0464478 4.54699 0.137094 4.35254C0.208549 4.27694 0.301349 4.22707 0.401742 4.21094L3.95936 3.63965L5.57752 0.273438C5.66067 0.100362 5.82718 0.00199418 6.00038 0.00195312V10.2168Z" fill="#FFC220"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 1C6.27614 1 6.5 1.22386 6.5 1.5L6.5 9.5C6.5 9.77614 6.27614 10 6 10C5.72386 10 5.5 9.77614 5.5 9.5L5.5 1.5C5.5 1.22386 5.72386 1 6 1Z" fill="#995213"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.36564 4.54466L5.99997 1.70204L4.63429 4.54466L1.52101 5.04403L3.78346 7.38933L3.13563 10.5592L5.99997 9.09359L8.8643 10.5592L8.21648 7.38933L10.4789 5.04403L7.36564 4.54466ZM8.0405 3.64013L6.42286 0.273051C6.37718 0.177984 6.30351 0.100832 6.21273 0.0530012C5.97918 -0.0700572 5.69458 0.0284626 5.57708 0.273051L3.95944 3.64013L0.401726 4.21078C0.301276 4.2269 0.208444 4.27643 0.136954 4.35207C-0.0469752 4.54666 -0.045448 4.86055 0.140365 5.05317L2.69832 7.70479L1.94306 11.4004C1.92088 11.5089 1.93411 11.6221 1.98063 11.7218C2.09541 11.9678 2.37889 12.0698 2.6138 11.9496L5.99997 10.2169L9.38613 11.9496C9.48135 11.9983 9.58941 12.0121 9.69303 11.9889C9.94869 11.9316 10.1116 11.6681 10.0569 11.4004L9.30162 7.70479L11.8596 5.05317C11.9318 4.9783 11.9791 4.88108 11.9945 4.77589C12.0341 4.50524 11.8566 4.25224 11.5982 4.21078L8.0405 3.64013Z" fill="#995213"/>
    </svg>
  );
}

const BADGE_ROLLBACK = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fcb4e5a31f0374fdeba9836168d434f94";
const BADGE_BESTSELLER = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fd92c8266daeb4d19bc54048116c946cc";
const BADGE_BOUGHT = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F3efa4af0c3a04ecdba8f360a6fa984cd";

function InfoCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.40039 6.99976H8.60039V11.4998H7.40039V6.99976Z" fill="#2E2F32"/>
      <path d="M7.99961 6.29976C8.49667 6.29976 8.89961 5.89681 8.89961 5.39976C8.89961 4.9027 8.49667 4.49976 7.99961 4.49976C7.50255 4.49976 7.09961 4.9027 7.09961 5.39976C7.09961 5.89681 7.50255 6.29976 7.99961 6.29976Z" fill="#2E2F32"/>
      <path d="M8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998ZM8 13.9998C4.68629 13.9998 2 11.3135 2 7.99976C2 4.68605 4.68629 1.99976 8 1.99976C11.3137 1.99976 14 4.68605 14 7.99976C14 11.3135 11.3137 13.9998 8 13.9998Z" fill="#2E2F32"/>
    </svg>
  );
}

function PriceBlock() {
  return (
    <div className="flex flex-col gap-2 pt-3">
      {/* Price row */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          {/* Now $44.95 */}
          <div className="flex items-center gap-1">
            <span className="text-[20px] font-bold leading-7 text-[#2A8703]">Now</span>
            <div className="flex items-end">
              <span className="pb-[10px] text-[16px] font-bold leading-6 text-[#2A8703]">$</span>
              <span className="text-[24px] font-bold leading-8 text-[#2A8703]">44</span>
              <span className="pb-[10px] text-[16px] font-bold leading-6 text-[#2A8703]">95</span>
            </div>
          </div>
          {/* Savings + original price */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="rounded-[2px] bg-[#EAF3E6] px-1 py-0.5 text-[12px] font-bold leading-4 text-[#2A8703]">
                You save $35.00
              </span>
              <span className="text-[12px] leading-4 text-[#74767C] line-through">$79.95</span>
              <InfoCircle />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[12px] leading-4 text-[#74767C]">Price when purchased online</span>
              <InfoCircle />
            </div>
          </div>
        </div>
      </div>

      {/* Affirm row */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="text-[12px] leading-4 text-ld-text-default">
            <span className="font-bold">As low as $23/mo</span> with
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fec282f44e2214a8cb4b89d497acd79a5"
            alt="Affirm Logo"
            className="h-[15px] w-auto"
          />
        </div>
        <button className="text-[14px] leading-5 text-ld-text-default underline">Learn how</button>
      </div>

      {/* Trust building row */}
      <div className="inline-flex w-fit items-center gap-2 self-start rounded-[4px] bg-[#E9F1FE] py-1 pl-2 pr-2">
        <div className="flex items-end gap-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M1 3.99976C1 3.44747 1.44772 2.99976 2 2.99976H8.99998C9.55226 2.99976 9.99998 3.44747 9.99998 3.99976V4.49973L10.752 4.49973C11.0645 4.49973 11.359 4.6458 11.5481 4.89457L13.1484 6.99974L14 6.99975C14.5523 6.99976 15 7.44747 15 7.99975V10.4997C15 11.052 14.5523 11.4997 14 11.4997H12.937C12.715 12.3624 11.9319 12.9998 11 12.9998C10.0681 12.9998 9.28503 12.3624 9.06301 11.4998H6.93699C6.71497 12.3624 5.93192 12.9998 5 12.9998C4.06807 12.9998 3.28502 12.3624 3.063 11.4997H2C1.44771 11.4997 1 11.052 1 10.4997V3.99976ZM6.93699 10.4998H9.06301C9.28503 9.63714 10.0681 8.99976 11 8.99976C11.9319 8.99976 12.715 9.63713 12.937 10.4997H14V7.99975L13.1483 7.99974C12.8359 7.99973 12.5413 7.85366 12.3522 7.6049L10.752 5.49973H10V7.99976H9V4.50678L8.99998 4.49973V3.99976H2V10.4997L3.06301 10.4997C3.28504 9.63713 4.06809 8.99976 5 8.99976C5.93192 8.99976 6.71497 9.63714 6.93699 10.4998ZM12 10.9998C12 10.4475 11.5523 9.99976 11 9.99976C10.4477 9.99976 10 10.4475 10 10.9998C10 11.552 10.4477 11.9998 11 11.9998C11.5523 11.9998 12 11.552 12 10.9998ZM5 11.9998C5.55228 11.9998 6 11.552 6 10.9998C6 10.4475 5.55228 9.99976 5 9.99976C4.44772 9.99976 4 10.4475 4 10.9998C4 11.552 4.44772 11.9998 5 11.9998Z" fill="#2E2F32"/>
          </svg>
          <span className="text-[11px] leading-4 text-ld-text-default">Free shipping</span>
        </div>
        <div className="flex items-end gap-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M2 11.3506L7.11014 13.612L6.84818 14.5892L1.59516 12.2646C1.23333 12.1044 1 11.7461 1 11.3506V4.65548C1 4.26002 1.23327 3.90174 1.59503 3.74159L7.59503 1.08538C7.85293 0.971213 8.14707 0.971213 8.40497 1.08538L14.405 3.74159C14.7667 3.90174 15 4.26002 15 4.65548V8.00311H14L14 5.28589L8.62864 7.76379C8.5864 7.78328 8.54347 7.80071 8.5 7.81607V10.0022H7.5V7.81603C7.45657 7.80068 7.41368 7.78327 7.37147 7.76379L2 5.28584L2 11.3506ZM2.52043 4.42508L4.61129 5.38964L9.80041 2.79632L8 1.99928L2.52043 4.42508ZM10.9861 3.32124L5.77405 5.92603L7.79053 6.85627C7.92347 6.9176 8.07664 6.9176 8.20959 6.85627L13.4796 4.42511L10.9861 3.32124Z" fill="#2E2F32"/>
            <path d="M9.00099 9.35077V11.1426C9.00099 11.3345 9.15769 11.4901 9.35099 11.4901H11.156C11.4678 11.4901 11.624 11.1158 11.4035 10.8969L10.8794 10.3767C11.6575 9.85311 12.7249 9.93347 13.4142 10.6178C14.1953 11.3931 14.1953 12.6502 13.4142 13.4255C12.6332 14.2009 11.3668 14.2009 10.5858 13.4255C10.395 13.2362 10.2515 13.0191 10.1542 12.7878L9.23143 13.1703C9.37806 13.5189 9.59414 13.845 9.87868 14.1275C11.0503 15.2905 12.9497 15.2905 14.1213 14.1275C15.2929 12.9645 15.2929 11.0788 14.1213 9.91582C13.0406 8.843 11.3405 8.7598 10.1637 9.66621L9.59847 9.10509C9.37799 8.88621 9.00099 9.04123 9.00099 9.35077Z" fill="#2E2F32"/>
          </svg>
          <span className="text-[11px] leading-4 text-ld-text-default">Free 90-day returns</span>
          <InfoCircle />
        </div>
      </div>
    </div>
  );
}

export default function ProductInfo({
  showReviewHighlights = true,
  showDivider = true,
  compactBottom = false,
}: {
  showReviewHighlights?: boolean;
  showDivider?: boolean;
  compactBottom?: boolean;
}) {
  return (
    <div className={`bg-white px-3 pt-4 ${compactBottom ? "pb-0" : "pb-4"}`}>
        {/* badges */}
        <div className="flex flex-wrap items-center gap-2">
          <img src={BADGE_ROLLBACK} alt="Rollback" className="h-[26px] w-auto" />
          <img src={BADGE_BESTSELLER} alt="Best seller" className="h-[26px] w-auto" />
          <img src={BADGE_BOUGHT} alt="500+ bought today" className="h-[26px] w-auto" />
        </div>

        {/* store + rating + title */}
        <div className="mt-3 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <button className="text-[12px] text-ld-text-default underline">
              Visit the JBL store
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-px">
                  <StarFull /><StarFull /><StarFull /><StarFull /><StarHalf />
                </div>
                <span className="text-[11px] text-ld-text-default">(4.8)</span>
                <span className="text-[11px] text-ld-text-default underline">4,960</span>
              </div>
            </div>
          </div>
          <h1 className="text-[14px] font-bold leading-5 text-ld-text-default">
            JBL Tune 720BT Wireless Over-Ear Headphones with JBL Pure Bass Sound, Blue
          </h1>
        </div>

        <VariantSelector />
        <PriceBlock />
        {showDivider && <div className="mt-3 h-px w-full bg-[#E3E4E5]" />}
      {showReviewHighlights && <ReviewHighlights />}
    </div>
  );
}
