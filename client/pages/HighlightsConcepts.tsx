import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/walmart/Header";
import SponsoredBanner from "@/components/walmart/SponsoredBanner";
import ProductGallery from "@/components/walmart/ProductGallery";
import ProductActions from "@/components/walmart/ProductActions";
import ProductInfo from "@/components/walmart/ProductInfo";
import PurchaseBar from "@/components/walmart/PurchaseBar";
import type { HighlightsVariant } from "@/components/walmart/highlights/data";

interface Concept {
  value: HighlightsVariant;
  tabLabel: string;
}

const CONCEPTS: Concept[] = [
  { value: "overlay", tabLabel: "Proposed - overlay" },
  { value: "summaryV3", tabLabel: "Expl. - Bottom sheet v3" },
  { value: "summary", tabLabel: "Expl. - Bottom sheet" },
  { value: "summaryV2", tabLabel: "Expl. - Bottom sheet v2" },
  { value: "chips", tabLabel: "Expl. - upfront" },
  { value: "summaryV4", tabLabel: "Expl. - Bottom sheet v4" },
];

function HeadphonesScreenPreview({
  highlightsVariant,
}: {
  highlightsVariant: HighlightsVariant;
}) {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <div className="flex w-full max-w-[440px] flex-col overflow-hidden rounded-[24px] bg-white shadow-xl">
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
      <ProductInfo />
      <PurchaseBar />
    </div>
  );
}

export default function HighlightsConcepts() {
  const [active, setActive] = useState<HighlightsVariant>("overlay");

  return (
    <div className="min-h-screen bg-walmart-gray-bg pb-10">
      <Tabs
        value={active}
        onValueChange={(v) => setActive(v as HighlightsVariant)}
        className="mx-auto flex max-w-[440px] flex-col items-center px-4 pt-3"
      >
        <TabsList className="grid w-full grid-cols-6 gap-1 rounded-full bg-white p-1 shadow-sm">
          {CONCEPTS.map((c) => (
            <TabsTrigger
              key={c.value}
              value={c.value}
              className="whitespace-normal rounded-full px-1 text-[11px] font-bold leading-tight text-ld-text-default data-[state=active]:bg-walmart-blue data-[state=active]:text-white"
            >
              {c.tabLabel}
            </TabsTrigger>
          ))}
        </TabsList>

        {CONCEPTS.map((c) => (
          <TabsContent
            key={c.value}
            value={c.value}
            className="mt-3 flex w-full flex-col items-center"
          >
            <HeadphonesScreenPreview highlightsVariant={c.value} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
