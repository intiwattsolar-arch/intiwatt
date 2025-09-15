import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  Settings, 
  Zap, 
  Home, 
  TrendingUp, 
  CheckCircle,
  Smartphone,
  Clock,
  Thermometer,
  Activity,
  Shield,
  FileText,
  BarChart3,
  Wrench
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Calculator className="text-primary" size={32} />,
      title: "Dimensionamiento técnico",
      description: "Análisis preciso de consumo, radiación solar y capacidad de techo para optimizar la inversión."
    },
    {
      icon: <Settings className="text-energy-green" size={32} />,
      title: "Selección de componentes",
      description: "Equipos de calidad industrial seleccionados por rendimiento y durabilidad, no por precio."
    },
    {
      icon: <Home className="text-solar-gold" size={32} />,
      title: "Diseño arquitectónico",
      description: "Integración estética y funcional que respeta la estructura y mejora el valor de la propiedad."
    },
    {
      icon: <TrendingUp className="text-ocean-blue" size={32} />,
      title: "Simulación económica",
      description: "Proyección real de ahorros con diferentes escenarios de consumo y tarifas eléctricas."
    }
  ];

  return (
    <section id="soluciones" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Soluciones
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Diseño a medida con foco en autoconsumo real
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No vendemos "packs" genéricos. Cada proyecto es único porque cada hogar consume diferente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="text-center hover:shadow-energy transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                  {solution.icon}
                </div>
                <CardTitle className="text-lg">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ejemplo práctico */}
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-solar-gold" size={24} />
            <h3 className="text-2xl font-bold text-foreground">Ejemplo práctico</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Datos base:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-energy-green" />
                  350 kWh/mes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-energy-green" />
                  Horario de mayor consumo: 18:00–00:00
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-energy-green" />
                  25 m² de techo sin sombra
                </li>
              </ul>
              
              <h4 className="text-lg font-semibold mt-6 mb-4 text-foreground">Análisis:</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pico nocturno alto → priorizar eficiencia y desplazamiento de cargas. 
                Potencial solar 10:30–17:00. Con inyección cero, conviene on-grid con CT.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Solución propuesta:</h4>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• 6×550 W (3,30 kWp)</li>
                <li>• Inversor on-grid 3 kW con CT</li>
                <li>• Reprogramación de equipos al mediodía</li>
                <li>• Domótica mínima con medición en tiempo real</li>
              </ul>
              
              <div className="bg-muted rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-solar-gold">USD 3.000–4.500</div>
                    <div className="text-xs text-muted-foreground">Inversión estimada</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-energy-green">~45%</div>
                    <div className="text-xs text-muted-foreground">Ahorro proyectado anual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-solar-gold/10 to-energy-green/10 rounded-lg border-l-4 border-solar-gold">
            <p className="text-foreground italic font-medium">
              "Una solución solar eficiente no es poner muchos paneles. Es poner los justos, 
              bien colocados, con un buen inversor y mejores hábitos."
            </p>
          </div>
        </div>

        {/* Servicios Premium */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Servicios Premium
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Más allá de la instalación
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Servicios especializados para maximizar el rendimiento y la eficiencia de tu sistema solar.
            </p>
          </div>

          {/* Domótica */}
          <div className="bg-card rounded-xl p-8 shadow-lg mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Smartphone className="text-primary" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Domótica (Automatización)</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-6">
                Domótica para consumir cuando hay sol, no para "prender luces con el celular".
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="text-energy-green" size={20} />
                    <h4 className="font-semibold text-foreground">Horarios Eficientes</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Termotanque solar</li>
                    <li>• Aire acondicionado</li>
                    <li>• Lavarropas</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Thermometer className="text-solar-gold" size={20} />
                    <h4 className="font-semibold text-foreground">Condiciones Ambientales</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Control dinámico</li>
                    <li>• Sensores inteligentes</li>
                    <li>• Automatización adaptativa</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="text-ocean-blue" size={20} />
                    <h4 className="font-semibold text-foreground">Tecnologías</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• IoT robusto (Aqara/Tasmota)</li>
                    <li>• ESP32, Node-RED, Home Assistant</li>
                    <li>• Sin nubes externas</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-4">Ejemplo práctico: Vivienda sin batería</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 3 kW con inyección cero</li>
                      <li>• Termo programado 10–16 h</li>
                      <li>• Lavarropas solo con excedente</li>
                      <li>• Medidor inteligente</li>
                    </ul>
                  </div>
                  <div className="bg-energy-green/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-energy-green">~60 kWh/mes</div>
                    <div className="text-sm text-muted-foreground">Ahorro adicional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoreo */}
          <div className="bg-card rounded-xl p-8 shadow-lg mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-energy-green" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Monitoreo</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Qué medimos:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Consumo total y por dispositivo</li>
                  <li>• Producción solar en tiempo real</li>
                  <li>• Excedentes y autoconsumo</li>
                  <li>• Estado de protecciones eléctricas</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Equipos sugeridos:</h4>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-3 gap-2 bg-muted/50 p-2 rounded">
                    <span className="font-medium">SDM120/320/630</span>
                    <span className="text-muted-foreground">Medidor</span>
                    <span className="text-muted-foreground">RS485</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 bg-muted/50 p-2 rounded">
                    <span className="font-medium">DDSU666</span>
                    <span className="text-muted-foreground">Smart meter</span>
                    <span className="text-muted-foreground">WiFi</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 bg-muted/50 p-2 rounded">
                    <span className="font-medium">Shelly EM/3EM</span>
                    <span className="text-muted-foreground">Monitor</span>
                    <span className="text-muted-foreground">WiFi</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 bg-muted/50 p-2 rounded">
                    <span className="font-medium">RS485 + ESP32</span>
                    <span className="text-muted-foreground">Gateway</span>
                    <span className="text-muted-foreground">IoT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-solar-gold/10 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Caso Córdoba:</h4>
              <p className="text-muted-foreground mb-3">
                Hallazgos y mejoras de hábitos que resultaron en un 15% de ahorro adicional 
                a través del monitoreo inteligente y la optimización del consumo.
              </p>
            </div>
          </div>

          {/* Mantenimiento */}
          <div className="bg-card rounded-xl p-8 shadow-lg mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="text-solar-gold" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Mantenimiento</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Preventivo y correctivo:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Auditorías técnicas con checklist</li>
                  <li>• Verificación de tensiones</li>
                  <li>• Control de continuidad</li>
                  <li>• Inspección de estructura</li>
                  <li>• Revisión de puesta a tierra</li>
                  <li>• Estado de diferenciales</li>
                  <li>• Protección contra sobretensiones</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">Caso real:</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Reconfiguración de sistema que corrigió bajo rendimiento detectado 
                  en auditoría técnica, mejorando la eficiencia en un 20%.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-energy-green">+20% eficiencia</div>
                  <div className="text-xs text-muted-foreground">Después de reconfiguración</div>
                </div>
              </div>
            </div>
          </div>

          {/* Informe Editorial */}
          <div className="bg-card rounded-xl p-8 shadow-lg mb-12">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="text-ocean-blue" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Informe: "La burbuja fotovoltaica"</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  Análisis sobre cómo el mercado actual encarece las soluciones solares 
                  y cómo IntiWatt compite con transparencia, diseño técnico riguroso 
                  y gestión energética eficiente.
                </p>

                <h4 className="font-semibold text-foreground mb-4">Comparación del mercado:</h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-red-500/10 p-3 rounded border-l-2 border-red-500">
                      <div className="font-medium text-foreground">Mercado tradicional</div>
                      <div className="text-muted-foreground">Sobredimensionamiento</div>
                    </div>
                    <div className="bg-energy-green/10 p-3 rounded border-l-2 border-energy-green">
                      <div className="font-medium text-foreground">IntiWatt</div>
                      <div className="text-muted-foreground">Dimensionamiento exacto</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-red-500/10 p-3 rounded border-l-2 border-red-500">
                      <div className="font-medium text-foreground">Promesas irreales</div>
                      <div className="text-muted-foreground">ROI inflado</div>
                    </div>
                    <div className="bg-energy-green/10 p-3 rounded border-l-2 border-energy-green">
                      <div className="font-medium text-foreground">Proyecciones reales</div>
                      <div className="text-muted-foreground">ROI verificable</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Roadmap e Ideas:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Calculadora online transparente</li>
                  <li>• Comunidad de autoconsumo</li>
                  <li>• Talleres educativos</li>
                  <li>• Línea sin batería optimizada</li>
                  <li>• Programa "Traé tu factura"</li>
                  <li>• Alianzas con arquitectura</li>
                  <li>• Centro de control remoto</li>
                  <li>• Informe mensual de impacto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;