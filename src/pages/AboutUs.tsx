
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { CheckCircle2, Award, Users, ThumbsUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-nicaris-green pt-32 pb-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Sobre Nosotros</h1>
          <p className="mt-2 text-white/80">
            Conoce quiénes somos y nuestra misión en el mercado inmobiliario nicaragüense
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-8">NICARIS Bienes Raíces</h2>
              <p className="mb-6">
                Somos una empresa nicaragüense especializada en la comercialización de propiedades rurales, 
                fincas agrícolas, ganaderas, terrenos para inversión y canteras con permisos de explotación 
                en todo el territorio nacional.
              </p>
              <p className="mb-6">
                Con más de 10 años de experiencia en el mercado inmobiliario, nos hemos destacado por 
                ofrecer un servicio transparente, profesional y personalizado a cada uno de nuestros 
                clientes, convirtiéndonos en el aliado ideal para quienes buscan invertir en 
                Nicaragua.
              </p>
              <p className="mb-8">
                En NICARIS nos comprometemos a brindar asesoramiento experto, información veraz y 
                acompañamiento durante todo el proceso de compra o venta de propiedades, garantizando 
                siempre la seguridad jurídica y la máxima satisfacción de nuestros clientes.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=1200" 
                alt="Equipo de NICARIS Bienes Raíces" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nicaris-cream rounded-full flex items-center justify-center mb-4">
                <Award size={24} className="text-nicaris-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Misión</h3>
              <p>
                Facilitar procesos de inversión inmobiliaria en Nicaragua, ofreciendo propiedades verificadas y 
                asesoría especializada para que nuestros clientes tomen decisiones seguras y rentables, 
                contribuyendo al desarrollo del mercado inmobiliario nacional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nicaris-cream rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-nicaris-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visión</h3>
              <p>
                Ser la empresa líder en comercialización de propiedades rurales y terrenos de inversión en 
                Nicaragua, reconocida por nuestra excelencia en servicio, transparencia y compromiso con la 
                satisfacción de nuestros clientes y colaboradores.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nicaris-cream rounded-full flex items-center justify-center mb-4">
                <ThumbsUp size={24} className="text-nicaris-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Honestidad y transparencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Profesionalismo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Compromiso con el cliente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Responsabilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Mejora continua</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-4">Por qué elegirnos</h2>
              <p className="text-nicaris-lightText">
                En NICARIS Bienes Raíces nos distinguimos por nuestro compromiso con la calidad y la satisfacción de nuestros clientes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-nicaris-cream rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-nicaris-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Propiedades Verificadas</h3>
                  <p className="text-nicaris-lightText">
                    Todas nuestras propiedades son verificadas personalmente por nuestro equipo para garantizar 
                    que la información proporcionada sea precisa y confiable.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-nicaris-cream rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-nicaris-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Asesoría Legal Completa</h3>
                  <p className="text-nicaris-lightText">
                    Contamos con expertos legales que aseguran que todas las transacciones cumplan con las 
                    normativas vigentes, protegiendo su inversión.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-nicaris-cream rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-nicaris-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Equipo Especializado</h3>
                  <p className="text-nicaris-lightText">
                    Nuestro equipo está formado por profesionales con amplia experiencia en el mercado 
                    inmobiliario rural de Nicaragua.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-nicaris-cream rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-nicaris-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Atención Personalizada</h3>
                  <p className="text-nicaris-lightText">
                    Entendemos que cada cliente tiene necesidades específicas, por lo que ofrecemos un 
                    servicio adaptado a sus requerimientos particulares.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 bg-nicaris-cream rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para invertir en Nicaragua?</h2>
            <p className="max-w-3xl mx-auto mb-6">
              Contáctanos hoy mismo y déjanos ayudarte a encontrar la propiedad perfecta para tus necesidades 
              o a vender tu propiedad con éxito.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/properties" className="btn-primary">
                Ver propiedades
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contactar ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton phoneNumber="+505 8866 2303" />
    </div>
  );
};

export default AboutUs;
