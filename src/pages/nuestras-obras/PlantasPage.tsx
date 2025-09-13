import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";

const PlantasPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder data - ready for real content
  const projects = [
    {
      id: 1,
      title: "Planta Solar Rural",
      location: "Santiago del Estero",
      power: "500 kWp",
      description: "Planta de generación para red rural aislada",
      image: "/placeholder.svg",
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
                <p className="text-white/80">Plantas Solares</p>
              </div>
            </div>
            <p className="text-xl text-white/90 max-w-3xl">
              Plantas de generación fotovoltaica de gran escala para comunidades rurales y proyectos especiales.
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

            {/* Empty State Message */}
            <div className="text-center mt-16 p-8 bg-muted/50 rounded-xl">
              <p className="text-muted-foreground">
                Galería en preparación. Próximamente mostraremos nuestros proyectos de plantas solares más destacados.
              </p>
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

export default PlantasPage;