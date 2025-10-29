import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-solar-installation.jpg";
import logoImage from "@/assets/logo-intiwatt.png";

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
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 to-tech-black/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={logoImage}
              alt="IntiWatt Logo"
              className="h-12 w-12"
            />
            <span className="text-solar-gold text-2xl font-bold">IntiWatt</span>
          </div>
          
          <div className="panel-opaque-light p-6 rounded-xl mb-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-solar-gold">La insurgencia</span>
              <span className="block text-golden-accent">
                energética
              </span>
            </h1>
          </div>
          
          <div className="panel-opaque-light p-5 rounded-xl mb-8 inline-block">
            <p className="text-xl md:text-2xl mb-3 text-solar-gold/90 leading-relaxed">
              Donde otros venden equipos,
            </p>
            <p className="text-xl md:text-2xl text-golden-accent leading-relaxed font-semibold">
              nosotros diseñamos resultados
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Solicitá tu estudio solar gratis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="border-solar-gold/50 text-solar-gold hover:bg-solar-gold/10">
              Ver soluciones
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-solar-gold/10 backdrop-blur-sm rounded-lg p-4 border border-solar-gold/20">
              <div className="text-3xl font-bold text-solar-gold mb-1">25+</div>
              <div className="text-sm text-solar-gold/70">Años de garantía</div>
            </div>
            <div className="bg-golden-accent/10 backdrop-blur-sm rounded-lg p-4 border border-golden-accent/20">
              <div className="text-3xl font-bold text-golden-accent mb-1">45%</div>
              <div className="text-sm text-golden-accent/70">Ahorro promedio</div>
            </div>
            <div className="bg-solar-gold/10 backdrop-blur-sm rounded-lg p-4 border border-solar-gold/20">
              <div className="text-3xl font-bold text-solar-gold mb-1">100%</div>
              <div className="text-sm text-solar-gold/70">Personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;