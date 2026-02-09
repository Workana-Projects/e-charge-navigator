import Navbar from '../features/landing/components/Navbar';
import HeroSection from '../features/landing/sections/HeroSection';
import StatsSection from '../features/landing/sections/StatsSection';
import FeaturesSection from '../features/landing/sections/FeaturesSection';
import HowItWorksSection from '../features/landing/sections/HowItWorksSection';
import CTASection from '../features/landing/sections/CTASection';
import Footer from '../features/landing/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <FeaturesSection />
    <HowItWorksSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
