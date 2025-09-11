import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, MapPin, Phone, Send } from "lucide-react";
const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5493518670464", "_blank");
  };
  return <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contacto
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Listo para unirte a la insurgencia energética?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hablemos de tu proyecto solar. Estamos aquí para diseñar la solución perfecta para tu hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Información de contacto</h3>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-solar-gold hover:shadow-solar transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-solar-gold/10 rounded-lg">
                        <MessageCircle className="text-solar-gold" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">WhatsApp oficial</h4>
                        <p className="text-muted-foreground mb-2">+54 351 867 0464</p>
                        <Badge variant="outline" className="text-xs">Respuesta inmediata</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-ocean-blue hover:shadow-energy transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-ocean-blue/10 rounded-lg">
                        <Mail className="text-ocean-blue" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground mb-2">info@intiwatt.com</p>
                        <Badge variant="outline" className="text-xs">Consultas técnicas y presupuestos</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-energy-green hover:shadow-energy transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-energy-green/10 rounded-lg">
                        <MapPin className="text-energy-green" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                        <p className="text-muted-foreground mb-2">Calle Centro America 4, Córdoba y Santiago del Estero</p>
                        <Badge variant="outline" className="text-xs">Argentina</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-gradient-to-r from-solar-gold/10 to-energy-green/10 rounded-lg p-6 border border-solar-gold/20">
              <h4 className="font-semibold text-foreground mb-3">¿Preferís hablar directamente?</h4>
              <p className="text-muted-foreground mb-4">
                Contactanos por WhatsApp para una consulta rápida y sin compromiso.
              </p>
              <Button onClick={handleWhatsApp} variant="hero" className="w-full">
                <MessageCircle size={20} />
                Abrir WhatsApp
              </Button>
            </div>
          </div>

          {/* Formulario de contacto */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Envianos tu consulta</CardTitle>
              <CardDescription>
                Completá el formulario y te contactaremos a la brevedad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input id="name" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="+54 9 11 1234 5678" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea id="message" placeholder="Contanos sobre tu proyecto, consumo mensual aproximado, ubicación, etc." className="min-h-[120px]" />
              </div>
              
              <Button variant="energy" size="lg" className="w-full group">
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Enviar mensaje
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptás que te contactemos para brindarte información sobre nuestros servicios.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;