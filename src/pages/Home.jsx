import Approach from "../components/Approach";
import CaseStudy from "../components/CaseStudy";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      {/* Approach Section */}
      <Approach />

      {/* Case Studies Section */}
      <CaseStudy />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
