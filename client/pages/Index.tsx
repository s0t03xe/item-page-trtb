import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { HighlightsVariant } from "@/components/walmart/highlights/data";
import StatusBar from "@/components/walmart/StatusBar";
import Header from "@/components/walmart/Header";
import SponsoredBanner from "@/components/walmart/SponsoredBanner";
import ProductGallery from "@/components/walmart/ProductGallery";
import ProductActions from "@/components/walmart/ProductActions";
import ProductInfo from "@/components/walmart/ProductInfo";
import FulfillmentSection from "@/components/walmart/FulfillmentSection";
import EligibilityActions from "@/components/walmart/EligibilityActions";
import ItemDetails from "@/components/walmart/ItemDetails";
import ProtectionPlan from "@/components/walmart/ProtectionPlan";
import BuyBoxAd from "@/components/walmart/BuyBoxAd";
import P13NCarousel from "@/components/walmart/P13NCarousel";
import TotalWirelessBanner from "@/components/walmart/TotalWirelessBanner";
import SparkyCopilot from "@/components/walmart/SparkyCopilot";
import OnePayCard from "@/components/walmart/OnePayCard";
import SimilarItemsCarousel from "@/components/walmart/SimilarItemsCarousel";
import AboutThisItem from "@/components/walmart/AboutThisItem";
import RefineSearch from "@/components/walmart/RefineSearch";
import CustomerReviews from "@/components/walmart/CustomerReviews";
import RewardsDebitCard from "@/components/walmart/RewardsDebitCard";
import CustomersAlsoConsidered from "@/components/walmart/CustomersAlsoConsidered";
import FeedbackBanner from "@/components/walmart/FeedbackBanner";
import PurchaseBar from "@/components/walmart/PurchaseBar";
import BottomNav from "@/components/walmart/BottomNav";
import TRTBInlineV2 from "@/components/walmart/highlights/TRTBInlineV2";
const HIGHLIGHTS_CONCEPTS: {
  value: string;
  label: string;
  variant: HighlightsVariant;
}[] = [
  { value: "key-specs", label: "Key specs", variant: "summaryV3" },
  { value: "full-highlights", label: "Full highlights", variant: "summaryV4" },
  { value: "highlights-overlay", label: "Highlights overlay", variant: "overlay" },
  { value: "specs-v1", label: "Specs v1", variant: "summary" },
  { value: "specs-v2", label: "Specs v2", variant: "summaryV2" },
  { value: "upfront", label: "Upfront", variant: "chips" },
];
const DEFAULT_CONCEPT = HIGHLIGHTS_CONCEPTS[0];

export default function Index({ trtbOnly = false }: { trtbOnly?: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const normalizedTabParam = tabParam === "trtb-v2" ? "full-highlights" : tabParam;
  const initialConcept = trtbOnly
    ? DEFAULT_CONCEPT
    : HIGHLIGHTS_CONCEPTS.find(
        (concept) => concept.value === normalizedTabParam || concept.variant === normalizedTabParam,
      ) ?? DEFAULT_CONCEPT;

  const [activeConcept, setActiveConcept] = useState(initialConcept.value);
  const highlightsVariant =
    HIGHLIGHTS_CONCEPTS.find((concept) => concept.value === activeConcept)?.variant ??
    DEFAULT_CONCEPT.variant;
  const [overlayOpen, setOverlayOpen] = useState(false);

  // Highlights overlay opens only on click; start fresh (closed) on every tab switch.
  useEffect(() => {
    setOverlayOpen(false);
  }, [highlightsVariant]);

  const handleConceptChange = (value: string) => {
    setActiveConcept(value);
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("tab", value);
        return next;
      },
      { replace: true },
    );
  };

  return (
    <div className="flex min-h-screen justify-center bg-walmart-gray-bg [overflow-anchor:none]">
      <div className="flex w-full max-w-[440px] flex-col">
        {!trtbOnly && (
          <Tabs
            value={activeConcept}
            onValueChange={handleConceptChange}
            className="shrink-0 bg-walmart-gray-bg px-3 py-2"
          >
            <TabsList className="flex w-full flex-wrap gap-1 rounded-full bg-white p-1 shadow-sm">
              {HIGHLIGHTS_CONCEPTS.map((c) => (
                <TabsTrigger
                  key={c.value}
                  value={c.value}
                  className="min-h-[38px] min-w-[74px] flex-1 basis-[calc(16.666%-0.34rem)] whitespace-normal rounded-full px-0.5 text-[9px] font-bold leading-[1.1] text-ld-text-default data-[state=active]:bg-walmart-blue data-[state=active]:text-white"
                >
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
        <div className="relative flex min-h-screen w-full flex-col bg-white shadow-xl">
          <div className="sticky top-0 z-40">
            <StatusBar />
          </div>

          <main className="flex-1 pb-[136px]">
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
              <ProductInfo showReviewHighlights={!trtbOnly} showDivider={!trtbOnly} compactBottom={trtbOnly} />
              {highlightsVariant === "trtbV2" && <TRTBInlineV2 />}
              <FulfillmentSection showShopConfidently={!trtbOnly} />
              <EligibilityActions />
              <div className="mx-4 h-px bg-[#E3E4E5]" />
              {!trtbOnly && <ItemDetails />}
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
              {!trtbOnly && <AboutThisItem />}
              <div className="h-px w-full bg-[#E3E4E5]" />
              <RefineSearch />
              <div className="h-px w-full bg-[#E3E4E5]" />
              <CustomerReviews showTRTBHighlights={trtbOnly} />
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
