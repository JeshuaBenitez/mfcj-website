import React from "react";
import HeroSection from "./components/HeroSection";
import InfoJovenes from "./components/InfoJovenes";
import InfoAdolescentes from "./components/InfoAdolescentes";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import InfoSeccion from "./components/InfoSecction";


function App() {
  return (
    <>
      <HeroSection />
      <InfoSeccion />
      <InfoJovenes />
      <InfoAdolescentes />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
