import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Monitoring from "@/components/Monitoring";

const MonitoreoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="py-8 bg-tech-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
            <img 
              src="/lovable-uploads/f97859da-5fec-4745-aead-162afc78c4f0.png"
              alt="IntiWatt Logo"
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">Monitoreo Energético</h1>
              <p className="text-white/80">Medición y control inteligente del consumo</p>
            </div>
          </div>
        </div>
        <Monitoring />
      </main>
      <Footer />
    </div>
  );
};

export default MonitoreoPage;