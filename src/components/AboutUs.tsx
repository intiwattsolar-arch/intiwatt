import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Zap, Shield } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-tech-navy text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-navy via-tech-navy/95 to-ocean-blue/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quiénes Somos
          </h2>
          <p className="text-xl text-solar-gold font-medium">
            IntiWatt
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introducción */}
          <div className="text-center">
            <p className="text-lg leading-relaxed text-white/90">
              Somos la insurgencia energética: un equipo técnico, rebelde y transparente que rompe con el viejo modelo eléctrico. Nuestra misión es simple y radical: que vos dejes de ser rehén de tarifas que solo suben, y empieces a generar tu propia energía limpia, eficiente y rentable.
            </p>
          </div>

          {/* Nuestra identidad */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-solar-gold/20">
            <h3 className="text-2xl font-bold mb-6 text-solar-gold">
              Nuestra identidad
            </h3>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Fusionamos lo ancestral con lo tecnológico: el Sol Inca convertido en ingeniería de vanguardia.
              </p>
              <p>
                Defendemos la sostenibilidad real, sin discursos vacíos: sistemas dimensionados con rigor científico, bajo normativa argentina.
              </p>
              <p>
                Apostamos al ahorro neto: no sobredimensionamos, no especulamos, no prometemos lo que no se cumple.
              </p>
            </div>
          </div>

          {/* Nuestro compromiso */}
          <div className="bg-energy-green/10 rounded-xl p-8 border border-energy-green/20">
            <h3 className="text-2xl font-bold mb-6 text-energy-green">
              Nuestro compromiso
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-energy-green flex-shrink-0 mt-0.5" />
                <span className="text-white/90 leading-relaxed">Cada proyecto es único, diseñado según tu consumo real y tu techo.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-energy-green flex-shrink-0 mt-0.5" />
                <span className="text-white/90 leading-relaxed">Aplicamos doble verificación técnica en cada cálculo y diseño.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-energy-green flex-shrink-0 mt-0.5" />
                <span className="text-white/90 leading-relaxed">Instalamos con protocolos profesionales y checklist de calidad estricta.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-energy-green flex-shrink-0 mt-0.5" />
                <span className="text-white/90 leading-relaxed">Te acompañamos después de la puesta en marcha con soporte, monitoreo y mantenimiento.</span>
              </li>
            </ul>
          </div>

          {/* Nuestra visión */}
          <div className="bg-gradient-to-r from-solar-gold/10 to-energy-green/10 rounded-xl p-8 border border-solar-gold/20">
            <h3 className="text-2xl font-bold mb-6 text-solar-gold">
              Nuestra visión
            </h3>
            <div className="text-center">
              <p className="text-lg leading-relaxed text-white/90 mb-4">
                La energía no es un lujo. Es soberanía, autonomía y futuro.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                En IntiWatt trabajamos para democratizarla, con soluciones solares que hagan que cada hogar, empresa o comunidad pueda mirar el sol y decir: "ahora la energía es mía".
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-solar-gold/10 to-energy-green/10 rounded-2xl p-8 border border-solar-gold/20">
            <h3 className="text-2xl font-bold mb-6 text-white">
              ¿Listo para tu estudio solar?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitá tu estudio solar gratis
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-solar-gold text-solar-gold hover:bg-solar-gold hover:text-tech-navy"
                onClick={() => window.open('https://wa.me/message/DIYCFTTWXSNXM1', '_blank')}
              >
                Escribime por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;