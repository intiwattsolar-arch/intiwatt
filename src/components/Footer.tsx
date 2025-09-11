import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-solar-gold to-energy-green bg-clip-text text-transparent">
                IW
              </div>
              <div className="ml-2 text-xl font-semibold">INTIWATT</div>
            </div>
            <p className="text-white/80 text-sm">
              Técnica con propósito. Energía con rebeldía.
            </p>
            <p className="text-white/60 text-xs italic">
              La insurgencia energética
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <nav className="space-y-2">
              <a href="#soluciones" className="block text-white/80 hover:text-solar-gold transition-colors text-sm">
                Soluciones
              </a>
              <a href="#domotica" className="block text-white/80 hover:text-solar-gold transition-colors text-sm">
                Domótica
              </a>
              <a href="#monitoreo" className="block text-white/80 hover:text-solar-gold transition-colors text-sm">
                Monitoreo
              </a>
              <a href="#contacto" className="block text-white/80 hover:text-solar-gold transition-colors text-sm">
                Contacto
              </a>
            </nav>
          </div>

          {/* Contacto rápido */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Seguinos</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MessageCircle size={16} className="text-solar-gold" />
                <span>+54 351 867 0464</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Mail size={16} className="text-energy-green" />
                <span>hola@intiwatt.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin size={16} className="text-ocean-blue" />
                <span>Córdoba y Santiago del Estero</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => window.open("https://wa.me/5493518670464", "_blank")}
              >
                <MessageCircle size={16} />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <Separator className="border-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {currentYear} IntiWatt. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">La insurgencia energética</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;