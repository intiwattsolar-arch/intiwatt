import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Cloud, 
  Smartphone, 
  Thermometer,
  Sun,
  Zap
} from "lucide-react";

const Automation = () => {
  const features = [
    {
      icon: <Clock className="text-solar-gold" size={24} />,
      title: "Horarios eficientes",
      items: [
        "Termo eléctrico: 10:00-16:00 automático",
        "Lavarropas: solo con excedente solar",
        "Aires acondicionados: pre-enfriamiento solar",
        "Calefactores: carga térmica diurna"
      ]
    },
    {
      icon: <Cloud className="text-ocean-blue" size={24} />,
      title: "Condiciones ambientales",
      items: [
        "Temperatura ambiente",
        "Radiación solar en tiempo real",
        "Precio de la energía por horario",
        "Pronóstico meteorológico"
      ]
    },
    {
      icon: <Smartphone className="text-energy-green" size={24} />,
      title: "Tecnologías",
      items: [
        "IoT robusto: Aqara/Tasmota",
        "Control abierto: ESP32, Node-RED",
        "Home Assistant local",
        "Sin nubes externas cuando sea posible"
      ]
    }
  ];

  return (
    <section id="domotica" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Domótica
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Automatización inteligente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Domótica para consumir cuando hay sol, no para "prender luces con el celular". 
            Automatización que maximiza el autoconsumo solar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-energy transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-muted rounded-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-energy-green mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ejemplo práctico */}
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Sun className="text-solar-gold" size={24} />
            <h3 className="text-2xl font-bold text-foreground">Ejemplo práctico: Vivienda sin batería</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Sistema:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap size={16} className="text-energy-green" />
                  3 kW con inyección cero
                </li>
                <li className="flex items-center gap-2">
                  <Thermometer size={16} className="text-solar-gold" />
                  Termo programado 10–16 h
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-ocean-blue" />
                  Lavarropas solo con excedente
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone size={16} className="text-energy-green" />
                  Medidor inteligente en tiempo real
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Resultado:</h4>
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-energy-green mb-1">~60 kWh/mes</div>
                  <div className="text-sm text-muted-foreground">Ahorro adicional</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-solar-gold mb-1">15-20%</div>
                  <div className="text-sm text-muted-foreground">Extra de eficiencia por automatización</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-energy-green/10 to-ocean-blue/10 rounded-lg border-l-4 border-energy-green">
            <p className="text-foreground font-medium">
              <strong>Clave del éxito:</strong> La domótica no reemplaza buenos hábitos, los automatiza 
              para que no dependan de la memoria humana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;