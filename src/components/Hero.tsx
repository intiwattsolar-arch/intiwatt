import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Instalación de paneles solares profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tech-navy/90 to-ocean-blue/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/lovable-uploads/f97859da-5fec-4745-aead-162afc78c4f0.png"
              alt="IntiWatt Logo"
              className="h-8 w-8"
            />
            <span className="text-white text-xl font-semibold">IntiWatt</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            La insurgencia
            <span className="block bg-gradient-to-r from-solar-gold to-energy-green bg-clip-text text-transparent">
              energética
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 leading-relaxed">
            Donde otros venden equipos,
          </p>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed font-semibold">
            nosotros diseñamos resultados
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              Solicitá tu estudio solar gratis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Ver soluciones
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-solar-gold mb-1">25+</div>
              <div className="text-sm text-white/80">Años de garantía</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-energy-green mb-1">45%</div>
              <div className="text-sm text-white/80">Ahorro promedio</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-solar-gold mb-1">100%</div>
              <div className="text-sm text-white/80">Personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;