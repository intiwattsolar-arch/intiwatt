import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Automation from "@/components/Automation";

const DomoticaPage = () => {
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
              <h1 className="text-3xl font-bold text-white">Domótica Inteligente</h1>
              <p className="text-white/80">Automatización para maximizar el autoconsumo solar</p>
            </div>
          </div>
        </div>
        <Automation />
      </main>
      <Footer />
    </div>
  );
};

export default DomoticaPage;