import { useState } from "react";
import HeroSection from "../components/pages/home/HeroSection";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/footer/Header/Header";
import logo from "../assets/images/Genix_AI_Healthcare_Logo_Transparent 1.png";
import IntegrationSection from "../components/pages/home/IntegrationSection";
const Home = () => {
  const [mode, setMode] = useState("signup"); // 'signup' & 'login'
  // const navLinks = [
  //   { to: "/features", label: "Features" },
  //   { to: "/pricing", label: "Pricing" },
  //   { to: "/resources", label: "Resources" },
  // ];

  const ctaButtons = [
    { to: "/signin", label: "Sign In", type: "text" },
    { to: "/book-demo", label: "Book a Demo", type: "primary" },
  ];
  const navLinks = [
    { label: "Home", path: "/", active: true },
    { label: "Products", dropdown: true },
    { label: "Resources", path: "/resources" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <div>
      <Header
        logo={logo}
        navLinks={navLinks}
        ctaButtons={ctaButtons}
      />
      <main>
        <HeroSection />
        <IntegrationSection />
      {/* <WhyCliniciansLove />
      <EMRShowcase />
      <PatientExperience />
      <MobileAppFeature />
      <TrustedByProfessionals />
      <BlogSection />
      <FAQSection />
      <FooterCTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
