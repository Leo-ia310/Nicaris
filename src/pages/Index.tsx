
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import AboutPreview from '@/components/home/AboutPreview';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Phone, Mail, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Features section data
  const features = [
    {
      icon: <Building className="w-12 h-12 text-nicaris-green" />,
      title: "Propiedades Verificadas",
      description: "Todas nuestras propiedades son verificadas por nuestro equipo para garantizar información confiable."
    },
    {
      icon: <Users className="w-12 h-12 text-nicaris-green" />,
      title: "Asesoría Personalizada",
      description: "Te acompañamos durante todo el proceso de compra o venta de tu propiedad con asesoría profesional."
    },
    {
      icon: <Phone className="w-12 h-12 text-nicaris-green" />,
      title: "Contacto Directo",
      description: "Comunicación directa y rápida con nuestro equipo a través de WhatsApp, llamada o correo electrónico."
    },
    {
      icon: <Mail className="w-12 h-12 text-nicaris-green" />,
      title: "Información Transparente",
      description: "Brindamos toda la información necesaria sobre cada propiedad de manera clara y transparente."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Properties Section */}
      <FeaturedProperties />
      
      {/* About Preview Section */}
      <AboutPreview />
      
      {/* Features Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-nicaris-darkText mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-nicaris-lightText">
              En NICARIS Bienes Raíces nos comprometemos con la excelencia y transparencia en cada transacción inmobiliaria
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-nicaris-lightText">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-nicaris-green py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl text-Yellow2 font-bold mb-4">¿Tienes una propiedad para vender?</h2>
              <p className="text-white text-lg">
                Ponte en contacto con nuestro equipo para una valoración gratuita y maximiza tus oportunidades de venta
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-accent">
                Contactar ahora
              </Link>
              <Link to="/recruiters" className="btn-outline border-white text-white hover:bg-white hover:text-nicaris-green">
                Unirse como captador
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+505 8866 2303" />
    </main>
  );
};

export default Index;
