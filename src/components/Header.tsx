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
          <Link to="/" className="flex items-center group">
            <img 
              src="/src/assets/logo-intiwatt.png"
              alt="IntiWatt Logo"
              className="h-10 w-10 mr-3 transition-transform group-hover:scale-105"
            />
            <div className="text-xl font-semibold text-foreground">INTIWATT</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[clamp(8px,1.2vw,18px)] whitespace-nowrap">
            <Link to="/" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base font-medium">
              Inicio
            </Link>
            <a href="/#quienes-somos" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base font-medium">
              Quiénes Somos
            </a>
            
            {/* Qué Hacemos Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm xl:text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                Qué Hacemos
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background border border-border shadow-lg z-50">
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Fotovoltaica</div>
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Asesoramiento y estudio solar</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Diseño y proyecto fotovoltaico</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Instalación y puesta en marcha</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#soluciones" className="cursor-pointer">Optimización y mantenimiento</a>
                </DropdownMenuItem>
                
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t border-border mt-1">Domótica</div>
                <DropdownMenuItem asChild>
                  <Link to="/que-hacemos/domotica" className="cursor-pointer">Automatización inteligente</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/que-hacemos/monitoreo" className="cursor-pointer">Monitoreo y control</Link>
                </DropdownMenuItem>
                
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t border-border mt-1">Nuestros trabajos</div>
                <DropdownMenuItem asChild>
                  <Link to="/nuestras-obras/residencial" className="cursor-pointer">Residencial</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/nuestras-obras/industrial" className="cursor-pointer">Industrial</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/nuestras-obras/plantas" className="cursor-pointer">Grandes plantas</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="/#contacto" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base font-medium">
              Contacto
            </a>
            <Button variant="energy" size="sm" onClick={() => document.getElementById('estudio-gratis')?.scrollIntoView({ behavior: 'smooth' })}>
              Estudio Gratis
            </Button>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center gap-4 text-sm">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <a href="/#quienes-somos" className="text-foreground hover:text-primary transition-colors">
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
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <a
                href="/#quienes-somos"
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
                href="/#contacto"
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