import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Upload, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  // Identificación y contacto
  nombre: z.string().min(2, "Ingresá tu nombre completo"),
  email: z.string().email("Ingresá un email válido"),
  celular: z.string().min(10, "Ingresá un número válido"),
  preferenciaContacto: z.string(),
  provincia: z.string(),
  localidad: z.string().min(2, "Ingresá tu localidad"),
  direccion: z.string().min(5, "Ingresá la dirección completa"),
  medidorPropio: z.string(),
  
  // Tipo de usuario y objetivo
  tipoUsuario: z.string(),
  objetivoPrincipal: z.string(),
  modoOperacion: z.string(),
  necesitaRespaldo: z.string(),
  electrodomesticosRespaldo: z.array(z.string()).optional(),
  
  // Consumo y uso
  categoriaFacturacion: z.string(),
  potenciaContratada: z.string(),
  consumoMensual: z.string(),
  gastoMensual: z.string(),
  cantidadPersonas: z.string(),
  horariosUso: z.array(z.string()).max(2, "Elegí máximo 2 horarios"),
  electrodomesticosPrincipales: z.array(z.string()).max(3, "Elegí máximo 3 electrodomésticos"),
  
  // Sitio y montaje
  tipoCubierta: z.string(),
  superficieUtil: z.string(),
  orientacion: z.string(),
  sombreado: z.string(),
  accesoCubierta: z.string(),
  distanciaTablero: z.string(),
  
  // Presupuesto y tiempos
  presupuestoOrientativo: z.string(),
  plazoInstalacion: z.string(),
  
  // Consentimiento
  aceptaPrivacidad: z.boolean().refine(val => val === true, "Debés aceptar los términos"),
});

type FormData = z.infer<typeof formSchema>;

const EstudioGratis = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 4;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferenciaContacto: "",
      provincia: "",
      tipoUsuario: "",
      objetivoPrincipal: "",
      modoOperacion: "on-grid",
      necesitaRespaldo: "",
      electrodomesticosRespaldo: [],
      horariosUso: [],
      electrodomesticosPrincipales: [],
      aceptaPrivacidad: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    toast({
      title: "¡Gracias!",
      description: "Recibimos tus datos. Te contactamos a la brevedad por WhatsApp o email.",
    });
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressValue = (currentStep / totalSteps) * 100;

  if (isSubmitted) {
    return (
      <section id="estudio-gratis" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center border-energy-green">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-energy-green" />
              </div>
              <CardTitle className="text-2xl text-foreground">¡Gracias por confiar en IntiWatt!</CardTitle>
              <CardDescription className="text-lg">
                Recibimos tus datos. Te contactamos a la brevedad por WhatsApp o email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg" 
                className="bg-[#FF8000] hover:bg-[#FF8000]/90 text-white"
                onClick={() => window.open("https://wa.me/message/DIYCFTTWXSNXM1", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hablar por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="estudio-gratis" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/f97859da-5fec-4745-aead-162afc78c4f0.png"
              alt="IntiWatt Logo"
              className="h-12 w-12"
            />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Estudio Gratis</h2>
          <p className="text-lg text-muted-foreground mb-2">
            Contanos cómo consumís energía y te preparamos un estudio preliminar de ahorro. Sin compromiso.
          </p>
          <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg inline-block">
            • Resultado orientativo. Requiere visita técnica para definir diseño final.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="space-y-4">
              <Progress value={progressValue} className="w-full" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span className={currentStep === 1 ? "text-primary font-semibold" : ""}>Datos</span>
                <span className={currentStep === 2 ? "text-primary font-semibold" : ""}>Consumo</span>
                <span className={currentStep === 3 ? "text-primary font-semibold" : ""}>Sitio</span>
                <span className={currentStep === 4 ? "text-primary font-semibold" : ""}>Contacto</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Paso 1: Identificación y contacto */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Datos de contacto</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nombre"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre y apellido *</FormLabel>
                            <FormControl>
                              <Input placeholder="Tu nombre completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Correo electrónico *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="tu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="celular"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Celular con WhatsApp *</FormLabel>
                            <FormControl>
                              <Input placeholder="+54 351 123 4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferenciaContacto"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferencia de contacto</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="¿Cómo preferís que te contactemos?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                <SelectItem value="llamada">Llamada</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="provincia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Provincia</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccioná tu provincia" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cordoba">Córdoba</SelectItem>
                                <SelectItem value="santiago">Santiago del Estero</SelectItem>
                                <SelectItem value="otra">Otra</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="localidad"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Localidad/ciudad *</FormLabel>
                            <FormControl>
                              <Input placeholder="Tu ciudad" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="direccion"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dirección de la instalación *</FormLabel>
                          <FormControl>
                            <Input placeholder="Calle, número, barrio" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="medidorPropio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>¿Tenés medidor propio en esa dirección?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="si" id="medidor-si" />
                                <Label htmlFor="medidor-si">Sí</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="medidor-no" />
                                <Label htmlFor="medidor-no">No</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no-se" id="medidor-no-se" />
                                <Label htmlFor="medidor-no-se">No sé</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Paso 2: Tipo de usuario y consumo */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Uso y consumo</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="tipoUsuario"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de usuario *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccioná el tipo" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="residencial">Residencial</SelectItem>
                                <SelectItem value="pyme">PYME</SelectItem>
                                <SelectItem value="industrial">Industrial</SelectItem>
                                <SelectItem value="rural">Rural</SelectItem>
                                <SelectItem value="comunitario">Comunitario</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="objetivoPrincipal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Objetivo principal *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="¿Qué buscás?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="pagar-menos">Pagar menos</SelectItem>
                                <SelectItem value="evitar-cortes">Evitar cortes con respaldo</SelectItem>
                                <SelectItem value="autonomia">Mayor autonomía</SelectItem>
                                <SelectItem value="sostenibilidad">Sostenibilidad</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consumoMensual"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Consumo mensual promedio *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="kWh por mes" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<150">Menos de 150 kWh</SelectItem>
                                <SelectItem value="150-300">150 - 300 kWh</SelectItem>
                                <SelectItem value="300-600">300 - 600 kWh</SelectItem>
                                <SelectItem value="600-1000">600 - 1000 kWh</SelectItem>
                                <SelectItem value=">1000">Más de 1000 kWh</SelectItem>
                                <SelectItem value="no-se">No sé</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gastoMensual"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gasto mensual promedio *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="ARS por mes" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<25000">Menos de ARS 25.000</SelectItem>
                                <SelectItem value="25-50k">ARS 25.000 - 50.000</SelectItem>
                                <SelectItem value="50-100k">ARS 50.000 - 100.000</SelectItem>
                                <SelectItem value="100-200k">ARS 100.000 - 200.000</SelectItem>
                                <SelectItem value=">200k">Más de ARS 200.000</SelectItem>
                                <SelectItem value="no-se">No sé</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="electrodomesticosPrincipales"
                      render={() => (
                        <FormItem>
                          <FormLabel>Electrodomésticos de mayor uso (elegí 3)</FormLabel>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                            {[
                              "Aire acondicionado",
                              "Termotanque/calefón",
                              "Bomba de agua",
                              "Heladera",
                              "Cocina eléctrica",
                              "PC/Servidor",
                              "Taller/Maquinaria",
                              "Otros"
                            ].map((item) => (
                              <FormField
                                key={item}
                                control={form.control}
                                name="electrodomesticosPrincipales"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item)}
                                          onCheckedChange={(checked) => {
                                            const currentValues = field.value || [];
                                            if (checked && currentValues.length < 3) {
                                              field.onChange([...currentValues, item]);
                                            } else if (!checked) {
                                              field.onChange(
                                                currentValues.filter((value) => value !== item)
                                              );
                                            }
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-sm font-normal">
                                        {item}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Paso 3: Sitio */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Sitio y montaje</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="tipoCubierta"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de cubierta *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccioná el tipo" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="chapa">Chapa</SelectItem>
                                <SelectItem value="losa">Losa</SelectItem>
                                <SelectItem value="teja">Teja</SelectItem>
                                <SelectItem value="chapa-sandwich">Chapa sándwich</SelectItem>
                                <SelectItem value="tinglado">Tinglado</SelectItem>
                                <SelectItem value="estructura-suelo">Estructura en suelo</SelectItem>
                                <SelectItem value="no-se">No sé</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="superficieUtil"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Superficie útil disponible</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Metros cuadrados" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<20">Menos de 20 m²</SelectItem>
                                <SelectItem value="20-40">20 - 40 m²</SelectItem>
                                <SelectItem value="40-80">40 - 80 m²</SelectItem>
                                <SelectItem value=">80">Más de 80 m²</SelectItem>
                                <SelectItem value="no-se">No sé</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="orientacion"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Orientación predominante</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Hacia dónde mira" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="norte">Norte</SelectItem>
                                <SelectItem value="ne">Noreste</SelectItem>
                                <SelectItem value="no">Noroeste</SelectItem>
                                <SelectItem value="este">Este</SelectItem>
                                <SelectItem value="oeste">Oeste</SelectItem>
                                <SelectItem value="sur">Sur</SelectItem>
                                <SelectItem value="mixto">Mixto</SelectItem>
                                <SelectItem value="no-se">No sé</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sombreado"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sombreado cercano *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Árboles, edificios cerca" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="sin-sombras">Sin sombras</SelectItem>
                                <SelectItem value="leve">Leve</SelectItem>
                                <SelectItem value="medio">Medio</SelectItem>
                                <SelectItem value="alto">Alto</SelectItem>
                                <SelectItem value="no-se">No sé</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="presupuestoOrientativo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Presupuesto orientativo</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Rango en USD" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<1000">Menos de USD 1.000</SelectItem>
                                <SelectItem value="1000-3000">USD 1.000 - 3.000</SelectItem>
                                <SelectItem value="3000-6000">USD 3.000 - 6.000</SelectItem>
                                <SelectItem value=">6000">Más de USD 6.000</SelectItem>
                                <SelectItem value="evaluar">A evaluar</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="plazoInstalacion"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Plazo de instalación deseado</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Cuándo lo necesitás" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<30">Menos de 30 días</SelectItem>
                                <SelectItem value="30-60">30 - 60 días</SelectItem>
                                <SelectItem value="60-90">60 - 90 días</SelectItem>
                                <SelectItem value="informativo">Informativo por ahora</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <Label className="text-sm font-medium">Subidas de archivos</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-dashed border-border rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <Label className="text-sm text-muted-foreground">
                            Facturas de electricidad * (últimos 12 meses)
                          </Label>
                          <Input type="file" multiple accept=".pdf,.jpg,.png" className="mt-2" />
                        </div>
                        <div className="border border-dashed border-border rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <Label className="text-sm text-muted-foreground">
                            Fotos del techo y medidor
                          </Label>
                          <Input type="file" multiple accept=".jpg,.png" className="mt-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Paso 4: Consentimiento y envío */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Términos y condiciones</h3>
                    
                    <div className="bg-muted/50 p-4 rounded-lg space-y-3 text-sm">
                      <p className="font-medium text-foreground">Información importante:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Este estudio es preliminar y orientativo. El diseño final, la potencia instalada y los costos pueden variar según relevamiento en sitio, condiciones reales de la red, normativa local y disponibilidad de equipos.</li>
                        <li>• Por política de diseño, IntiWatt prioriza el autoconsumo con inyección cero por defecto, salvo acuerdo expreso.</li>
                        <li>• Tus datos se usan solo para elaborar el estudio y ponernos en contacto.</li>
                      </ul>
                    </div>

                    <FormField
                      control={form.control}
                      name="aceptaPrivacidad"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                              Acepto el aviso de privacidad y entiendo que el resultado es preliminar y queda sujeto al relevamiento de un técnico especialista en el lugar. *
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormMessage />
                  </div>
                )}

                {/* Navegación */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                    >
                      Anterior
                    </Button>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="ml-auto bg-[#FF8000] hover:bg-[#FF8000]/90 text-white"
                    >
                      Siguiente
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="ml-auto bg-[#FF8000] hover:bg-[#FF8000]/90 text-white"
                    >
                      Quiero mi estudio gratis
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EstudioGratis;