import Seo from "./components/Seo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DepartmentsSection from "./components/DepartmentsSection";
import BenefitsStrip from "./components/BenefitsStrip";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Seo
        title="Dominion Health"
        description="Dominion Health is a trusted San Antonio healthcare organization connecting Primary Care, Aesthetics & Wellness, Hormones & Wellness, Access Care, Research, and Imaging under one name."
        path="/"
      />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <DepartmentsSection />
        <BenefitsStrip />
      </main>

      <Footer />
    </>
  );
}
