import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import AboutSection from "./components/aboutsection";
import VisiMisiSection from "./components/visimisi";
import DNASection from "./components/dnasection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisiMisiSection />
      <DNASection />
    </main> 
  );
}
