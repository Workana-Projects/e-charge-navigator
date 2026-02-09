import Navbar from '../features/landing/components/Navbar';
import HeroSection from '../features/landing/sections/HeroSection';
import StatsSection from '../features/landing/sections/StatsSection';
import ShowcaseSection from '../features/landing/sections/ShowcaseSection';
import FeaturesSection from '../features/landing/sections/FeaturesSection';
import CoverageSection from '../features/landing/sections/CoverageSection';
import HowItWorksSection from '../features/landing/sections/HowItWorksSection';
import DifferentialSection from '../features/landing/sections/DifferentialSection';
import TestimonialsSection from '../features/landing/sections/TestimonialsSection';
import PricingSection from '../features/landing/sections/PricingSection';
import FAQSection from '../features/landing/sections/FAQSection';
import CTASection from '../features/landing/sections/CTASection';
import FinalCTASection from '../features/landing/sections/FinalCTASection';
import Footer from '../features/landing/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ShowcaseSection />
    <FeaturesSection />
    <CoverageSection />
    <HowItWorksSection />
    <DifferentialSection />
    <TestimonialsSection />
    <PricingSection />
    <CTASection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
