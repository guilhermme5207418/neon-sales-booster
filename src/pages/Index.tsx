
import Hero from "@/components/Hero";
import ProductDescription from "@/components/ProductDescription";
import Deliverables from "@/components/Deliverables";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import DynamicTimerBanner from "@/components/DynamicTimerBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <DynamicTimerBanner />
      <div className="pt-12 md:pt-0">
        <Hero />
        <ProductDescription />
        <Deliverables />
        <Benefits />
        <SocialProof />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
