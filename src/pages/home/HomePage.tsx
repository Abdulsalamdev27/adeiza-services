// import AboutSection from "../../components/Home/AboutSection";
import CTASection from "../../components/Home/CTASection";
import HeroSection from "../../components/Home/HeroSection";
import PortfolioSection from "../../components/Home/PortfolioSection";
// import ProcessSection from "../../components/Home/ProcessSection";
import ServicesSection from "../../components/Home/ServicesSection";
import TestimonialsSection from "../../components/Home/TestTimonialsSection";

export function HomePage() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            {/* <AboutSection /> */}
            <PortfolioSection />
            {/* <ProcessSection /> */}
            <TestimonialsSection />
            <CTASection />
        </>
    );
}