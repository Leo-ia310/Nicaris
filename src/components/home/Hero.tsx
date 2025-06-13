
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Sample properties for the image slider
const heroImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2000",
    alt: "Finca ganadera con montañas en el fondo"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=2000",
    alt: "Terreno agrícola con ganado"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000",
    alt: "Propiedad rural con potencial de inversión"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Auto-rotate images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-[100vh] min-h-[600px] w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white animate-fade-in">
              Bienes raíces en Nicaragua: Terrenos, Fincas y Canteras en Venta
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Tu inversión segura en Nicaragua empieza con Nicaris. Expertos en propiedades rurales, Terrenos, Fincas y Canteras en Venta . 
              Asesoría profesional y personalizada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/properties" 
                className="btn-primary px-8 py-3 text-base"
              >
                Ver propiedades
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline border-white text-white hover:bg-white hover:text-nicaris-green px-8 py-3 text-base"
              >
                Solicitar asesoría gratuita
              </Link>
            </div>
          </div>
          
          {/* Slider Navigation Dots */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="flex justify-center gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
