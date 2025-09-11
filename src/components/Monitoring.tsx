import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  BarChart3, 
  Smartphone, 
  Shield,
  TrendingUp,
  Zap
} from "lucide-react";
import monitoringImage from "@/assets/monitoring-tech.jpg";

const Monitoring = () => {
  const metrics = [
    {
      icon: <Activity className="text-primary" size={20} />,
      title: "Consumo total y por circuito"
    },
    {
      icon: <Zap className="text-solar-gold" size={20} />,
      title: "Producción solar en tiempo real"
    },
    {
      icon: <TrendingUp className="text-energy-green" size={20} />,
      title: "Excedentes y déficit energético"
    },
    {
      icon: <BarChart3 className="text-ocean-blue" size={20} />,
      title: "Consumo por dispositivo individual"
    },
    {
      icon: <Shield className="text-tech-navy" size={20} />,
      title: "Estado de protecciones eléctricas"
    }
  ];

  const equipment = [
    {
      model: "SDM120/320/630",
      type: "Medidor trifásico",
      features: "RS485, precisión 1%"
    },
    {
      model: "DDSU666",
      type: "Medidor WiFi",
      features: "App móvil, alertas"
    },
    {
      model: "Shelly EM/3EM",
      type: "Monitor WiFi",
      features: "Integración domótica"
    },
    {
      model: "RS485 + ESP32",
      type: "Sistema custom",
      features: "Control total, sin nubes"
    }
  ];

  return (
    <section id="monitoreo" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Monitoreo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Medición precisa para optimización continua
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No podés mejorar lo que no medís. Monitoreo integral para maximizar el rendimiento de tu sistema solar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Qué medimos</h3>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                  <div className="p-2 bg-muted rounded-lg">
                    {metric.icon}
                  </div>
                  <span className="text-foreground font-medium">{metric.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src={monitoringImage}
              alt="Sistema de monitoreo energético en tablet"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tech-navy/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Equipos sugeridos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Equipos sugeridos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-energy transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{item.model}</CardTitle>
                  <CardDescription className="font-medium text-foreground">{item.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.features}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Caso práctico */}
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Smartphone className="text-energy-green" size={24} />
            <h3 className="text-2xl font-bold text-foreground">Caso Córdoba: Hallazgos y mejoras</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Problema detectado
              </h4>
              <p className="text-muted-foreground">
                Consumo nocturno 40% mayor al esperado por termo eléctrico sin programar
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-gold rounded-full"></span>
                Solución aplicada
              </h4>
              <p className="text-muted-foreground">
                Timer programable + medición por circuito + app de monitoreo
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                Resultado
              </h4>
              <div className="text-2xl font-bold text-energy-green mb-1">+15%</div>
              <p className="text-muted-foreground text-sm">ahorro adicional solo por cambio de hábitos</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-ocean-blue/10 to-energy-green/10 rounded-lg border-l-4 border-ocean-blue">
            <p className="text-foreground font-medium">
              <strong>Lección aprendida:</strong> El monitoreo no es solo para ver números bonitos. 
              Es para encontrar ineficiencias ocultas y corregirlas rápidamente.
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="energy" size="lg">
              Solicitar análisis de tu sistema
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;