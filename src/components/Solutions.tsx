import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  Settings, 
  Zap, 
  Home, 
  TrendingUp, 
  CheckCircle 
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
      </div>
    </section>
  );
};

export default Solutions;