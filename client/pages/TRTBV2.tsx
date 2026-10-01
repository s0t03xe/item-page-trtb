import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { HighlightsVariant } from "@/components/walmart/highlights/data";
import StatusBar from "@/components/walmart/StatusBar";
import Header from "@/components/walmart/Header";
import SponsoredBanner from "@/components/walmart/SponsoredBanner";
import ProductGallery from "@/components/walmart/ProductGallery";
import ProductActions from "@/components/walmart/ProductActions";
import ProductInfo from "@/components/walmart/ProductInfo";
import ItemDetails from "@/components/walmart/ItemDetails";
import FulfillmentSection from "@/components/walmart/FulfillmentSection";
import EligibilityActions from "@/components/walmart/EligibilityActions";
import ProtectionPlan from "@/components/walmart/ProtectionPlan";
import BuyBoxAd from "@/components/walmart/BuyBoxAd";
import P13NCarousel from "@/components/walmart/P13NCarousel";
import TotalWirelessBanner from "@/components/walmart/TotalWirelessBanner";
import SparkyCopilot from "@/components/walmart/SparkyCopilot";
import OnePayCard from "@/components/walmart/OnePayCard";
import SimilarItemsCarousel from "@/components/walmart/SimilarItemsCarousel";
import RefineSearch from "@/components/walmart/RefineSearch";
import CustomerReviews from "@/components/walmart/CustomerReviews";
import RewardsDebitCard from "@/components/walmart/RewardsDebitCard";
import CustomersAlsoConsidered from "@/components/walmart/CustomersAlsoConsidered";
import FeedbackBanner from "@/components/walmart/FeedbackBanner";
import PurchaseBar from "@/components/walmart/PurchaseBar";
import BottomNav from "@/components/walmart/BottomNav";
import TRTBInlineV2 from "@/components/walmart/highlights/TRTBInlineV2";

export default function TRTBV2({ version = "v2" }: { version?: "v1" | "v2" }) {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeVersion = version;
  const highlightsVariant: HighlightsVariant = "trtbV2";

  return (
    <div className="flex min-h-screen justify-center bg-walmart-gray-bg [overflow-anchor:none]">
      <div className="flex w-full max-w-[440px] flex-col">
        <div className="flex gap-1 bg-walmart-gray-bg px-3 py-2" role="tablist" aria-label="TRTB concepts">
          {(["v1", "v2"] as const).map((version) => (
            <button
              key={version}
              id={`trtb-${version}-tab`}
              type="button"
              role="tab"
              aria-selected={activeVersion === version}
              aria-controls="trtb-concept-panel"
              onClick={() => {
                const nextPath = `/trtb-${version}`;
                if (location.pathname !== nextPath) navigate(nextPath);
              }}
              className={`min-h-10 flex-1 rounded-full px-4 text-[14px] font-bold ${activeVersion === version ? "bg-walmart-blue text-white" : "bg-white text-ld-text-default"}`}
            >
              TRTB {version.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="relative flex min-h-screen w-full flex-col bg-white shadow-xl">
          <div className="sticky top-0 z-40">
            <StatusBar />
          </div>

          <main id="trtb-concept-panel" role="tabpanel" aria-labelledby={`trtb-${activeVersion}-tab`} className="flex-1 pb-[136px]">
            <Header />
            <SponsoredBanner />

            <ProductGallery
              highlightsVariant={highlightsVariant}
              onOverlayOpenChange={setOverlayOpen}
            />
            <ProductActions
              highlightsVariant={highlightsVariant}
              overlayOpen={overlayOpen}
              onOverlayOpenChange={setOverlayOpen}
            />

            <div className="bg-white">
              <ProductInfo showReviewHighlights={false} showDivider={false} compactBottom />
              <TRTBInlineV2 key={activeVersion} version={activeVersion} />
              <FulfillmentSection showShopConfidently={activeVersion === "v1"} />
              <EligibilityActions />
              {activeVersion === "v1" && <ItemDetails specsLabel="Specs" />}
              <div className="mx-4 h-px bg-[#E3E4E5]" />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <ProtectionPlan />
              <BuyBoxAd />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <P13NCarousel />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <TotalWirelessBanner />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <SparkyCopilot />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <OnePayCard />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <SimilarItemsCarousel />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <RefineSearch />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <CustomerReviews showTRTBHighlights />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <RewardsDebitCard />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <CustomersAlsoConsidered />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <FeedbackBanner />
              <div className="h-px w-full bg-[#E3E4E5]" />
            </div>
          </main>

          <div className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[440px] border-t border-[#E3E4E5] bg-white">
            <PurchaseBar />
            <BottomNav />
            <div className="flex h-[17px] items-center justify-center bg-white">
              <div className="h-[5px] w-[135px] rounded-full bg-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
