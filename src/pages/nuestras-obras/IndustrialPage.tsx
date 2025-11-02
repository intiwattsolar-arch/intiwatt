import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";
import industrialImage1 from "@/assets/industrial-solar-panel-1.jpg";
import industrialImage2 from "@/assets/industrial-solar-panel-2.jpg";

const IndustrialPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Sistema Fotovoltaico On-Grid Industrial",
      location: "Córdoba",
      power: "150 kWp",
      description: "Sistema fotovoltaico On-Grid con inyección cero. Consumo directo de energía solar dentro de la planta, reducción del 50% del consumo diurno. Retorno de inversión: 2.5-3.5 años.",
      image: industrialImage1,
    },
    {
      id: 2,
      title: "Sistema Híbrido con Baterías de Litio",
      location: "Santiago del Estero",
      power: "300 kWp",
      description: "Solución híbrida para procesos continuos. Incluye banco de baterías de litio, control inteligente de consumo y almacenamiento. Energía asegurada ante cortes y reducción de demanda en punta.",
      image: industrialImage2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Header Section */}
        <div className="py-12 bg-tech-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/lovable-uploads/f97859da-5fec-4745-aead-162afc78c4f0.png"
                alt="IntiWatt Logo"
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-4xl font-bold text-white">Nuestras Obras</h1>
                <p className="text-white/80">Instalaciones Industriales</p>
              </div>
            </div>
            <p className="text-xl text-white/90 max-w-3xl">
              Sistemas fotovoltaicos industriales diseñados para reducir costos operativos y mejorar la competitividad.
            </p>
          </div>
        </div>

        {/* Projects Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
                  <div 
                    className="aspect-video bg-muted cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.location}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span>{project.location}</span>
                      {project.power && <span className="font-medium text-primary">{project.power}</span>}
                    </div>
                    {project.description && (
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-16 panel-opaque-light rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Beneficios de Nuestros Sistemas Industriales</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ahorro Económico</h3>
                  <p className="text-muted-foreground">Reducción del 10% al 30% en la factura mensual. Ahorro anual estimado: USD 25,000-30,000 para instalaciones de 150 kWp.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cumplimiento Normativo</h3>
                  <p className="text-muted-foreground">Cumple con la Ley N° 27.191: 20% de energía renovable obligatorio para empresas que consumen más de 300 kW.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Impacto Ambiental</h3>
                  <p className="text-muted-foreground">Evita entre 100-200 toneladas de CO₂ al año. Cero consumo de agua, sin emisiones contaminantes locales.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Retorno Rápido</h3>
                  <p className="text-muted-foreground">Payback de 2.5-3.5 años. Vida útil del sistema: más de 20 años con mantenimiento mínimo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
                aria-label="Cerrar imagen"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default IndustrialPage;