import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f97859da-5fec-4745-aead-162afc78c4f0.png"
              alt="IntiWatt Logo"
              className="h-10 w-10 mr-3"
            />
            <div className="text-xl font-semibold text-foreground">INTIWATT</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[clamp(8px,1.2vw,18px)] whitespace-nowrap">
            <a href="#" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Inicio
            </a>
            <a href="#quienes-somos" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Quiénes Somos
            </a>
            <a href="#estudio-gratis" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Estudio Gratis
            </a>
            
            {/* Qué Hacemos Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm xl:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                Qué Hacemos
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Asesoramiento y estudio solar</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Diseño y proyecto fotovoltaico</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Instalación y puesta en marcha (inyección cero por defecto)</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Optimización y mantenimiento</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/que-hacemos/domotica" className="cursor-pointer">Domótica</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/que-hacemos/monitoreo" className="cursor-pointer">Monitoreo</Link>
                </DropdownMenuItem>
                
                {/* Nuestras Obras Submenu */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full flex items-center justify-between px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    Nuestras obras
                    <ChevronDown size={16} className="rotate-[-90deg]" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" className="w-48 bg-background border border-border shadow-lg">
                    <DropdownMenuItem asChild>
                      <Link to="/nuestras-obras/residencial" className="cursor-pointer">Residencial</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/nuestras-obras/industrial" className="cursor-pointer">Industrial</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/nuestras-obras/plantas" className="cursor-pointer">Plantas solares</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Contacto
            </a>
            <Button variant="energy" size="sm" onClick={() => document.getElementById('estudio-gratis')?.scrollIntoView({ behavior: 'smooth' })}>
              Estudio Gratis
            </Button>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center gap-4 text-sm">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#quienes-somos" className="text-foreground hover:text-primary transition-colors">
              Quiénes Somos
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                Más
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <a href="#estudio-gratis" className="cursor-pointer">Estudio Gratis</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Qué Hacemos</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#contacto" className="cursor-pointer">Contacto</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#quienes-somos"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Quiénes Somos
              </a>
              <a
                href="#estudio-gratis"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Estudio Gratis
              </a>
              <a
                href="#soluciones"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Qué Hacemos
              </a>
              <Link
                to="/que-hacemos/domotica"
                className="text-foreground hover:text-primary transition-colors py-2 pl-4"
                onClick={() => setIsOpen(false)}
              >
                Domótica
              </Link>
              <Link
                to="/que-hacemos/monitoreo"
                className="text-foreground hover:text-primary transition-colors py-2 pl-4"
                onClick={() => setIsOpen(false)}
              >
                Monitoreo
              </Link>
              <a
                href="#contacto"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <Button 
                variant="energy" 
                size="sm" 
                className="w-fit"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('estudio-gratis')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
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