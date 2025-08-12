"use client";
import FeaturedSection from "./FeaturedSection";
import CallToActionSection from "./CallToActionSection";
import FooterSection from "./FooterSection";
import OrderProcessSection from "./OrderProcessSection";
import ContactSection from "./ContactSection";

const Landing = () => {
  return (
    <div>
      <FeaturedSection />
      <CallToActionSection />
      <OrderProcessSection />
      <ContactSection />
      {/* accordian
      <FAQSection /> */}
      <FooterSection />
    </div>
  );
};

export default Landing;
