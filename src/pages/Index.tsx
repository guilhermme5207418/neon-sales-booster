
import Hero from "@/components/Hero";
import ProductDescription from "@/components/ProductDescription";
import Deliverables from "@/components/Deliverables";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Deliverables />
      <ProductDescription />
      <Benefits />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
