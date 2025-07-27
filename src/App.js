import React from "react";
import HeroSection from "./components/HeroSection";
import InfoJovenes from "./components/InfoJovenes";
import InfoAdolescentes from "./components/InfoAdolescentes";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import InfoSeccion from "./components/InfoSecction";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-purple-900 to-purple-500">
      <HeroSection />
      <InfoSeccion />
      <InfoJovenes />
      <InfoAdolescentes />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
