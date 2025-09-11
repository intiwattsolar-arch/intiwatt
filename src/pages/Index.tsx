import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Solutions from "@/components/Solutions";
import Automation from "@/components/Automation";
import Monitoring from "@/components/Monitoring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Solutions />
        <Automation />
        <Monitoring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
