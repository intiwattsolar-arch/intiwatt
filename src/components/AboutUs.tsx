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
            Ingeniería con propósito. Energía con rebeldía.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Introducción */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-white/90">
                Somos IntiWatt. Combinamos rigor de ingeniería y actitud insurgente para que vos tomes el control de tu energía. Diseñamos sistemas fotovoltaicos que rinden en la vida real: autoconsumo medible, protecciones completas y estética cuidada. Transparencia total: datos, diseño y disciplina. Cero exageraciones; resultados.
              </p>
            </div>

            {/* Método 4-D */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-solar-gold/20">
              <h3 className="text-2xl font-bold mb-6 text-solar-gold flex items-center gap-3">
                <Target className="h-6 w-6" />
                Cómo trabajamos (método THE 4-D)
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-solar-gold font-bold text-lg">1)</span>
                  <div>
                    <strong className="text-white">Deconstruir:</strong>
                    <span className="text-white/80"> factura, curva horaria, sitio y normativa.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-solar-gold font-bold text-lg">2)</span>
                  <div>
                    <strong className="text-white">Diagnosticar:</strong>
                    <span className="text-white/80"> sombras, radiación, pérdidas, tarifas y riesgos.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-solar-gold font-bold text-lg">3)</span>
                  <div>
                    <strong className="text-white">Diseñar:</strong>
                    <span className="text-white/80"> strings/MPPT, protecciones, domótica y estética.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-solar-gold font-bold text-lg">4)</span>
                  <div>
                    <strong className="text-white">Desplegar:</strong>
                    <span className="text-white/80"> montaje, puesta en marcha, monitoreo y ajustes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* KPIs */}
            <div className="bg-energy-green/10 rounded-xl p-6 border border-energy-green/20">
              <h3 className="text-2xl font-bold mb-6 text-energy-green flex items-center gap-3">
                <Shield className="h-6 w-6" />
                KPIs que nos importan
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-energy-green flex-shrink-0" />
                  <span className="text-white/90">Autoconsumo objetivo ≥ 50%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-energy-green flex-shrink-0" />
                  <span className="text-white/90">Recortes por inyección cero ≤ 20%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-energy-green flex-shrink-0" />
                  <span className="text-white/90">ROI típico 5–7 años (según hábitos y tarifa)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* Manifiesto */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-solar-gold flex items-center gap-3">
                <Zap className="h-6 w-6" />
                Manifiesto IntiWatt — La insurgencia energética
              </h3>
              <ul className="space-y-4">
                {[
                  "Independencia energética real: vos elegis cuándo y cuánto consumis.",
                  "Ingeniería, no catálogos: cada proyecto se diseña a medida según tu curva horaria.",
                  "No vendemos watts que no usas: dimensionamos para tu demanda real.",
                  "Autoconsumo primero: inyección cero por defecto, salvo que técnicamente convenga otra cosa.",
                  "Doble verificación técnica (STC/NMOT): seguridad eléctrica y rendimiento antes que marketing.",
                  "Normativa seria: Argentina con REBT como referencia; protecciones obligatorias (magnetotérmico, diferencial, Protección contra Sobretensiones (SPD), seccionamiento, puesta a tierra y rotulado).",
                  "Estética + función: integración arquitectónica que suma valor sin sacrificar producción.",
                  "Datos por encima de promesas: ahorro en rangos y con condiciones claras (hábitos, domótica, tarifas).",
                  "Tecnología abierta y local: monitoreo y domótica en tu red; sin nubes externas cuando sea posible.",
                  "Mantenimiento que sostiene 25 años, no 5: prevención, auditoría y mejora continua.",
                  "Comunidad y desarrollo local: capacitación, transparencia y empleo técnico.",
                  "Ética sin concesiones: cero marketing vacío; números fríos y contratos claros.",
                  "Compromiso total con vos: claridad, respeto y resultados medibles."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-solar-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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