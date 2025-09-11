import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-ocean-blue to-energy-green bg-clip-text text-transparent">
              IW
            </div>
            <div className="ml-2 text-xl font-semibold text-foreground">INTIWATT</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#soluciones" className="text-foreground hover:text-primary transition-colors">
              Soluciones
            </a>
            <a href="#domotica" className="text-foreground hover:text-primary transition-colors">
              Domótica
            </a>
            <a href="#monitoreo" className="text-foreground hover:text-primary transition-colors">
              Monitoreo
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
            <Button variant="energy" size="sm">
              Estudio Gratis
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#soluciones"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Soluciones
              </a>
              <a
                href="#domotica"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Domótica
              </a>
              <a
                href="#monitoreo"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Monitoreo
              </a>
              <a
                href="#contacto"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <Button variant="energy" size="sm" className="w-fit">
                Estudio Gratis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;