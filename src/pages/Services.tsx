
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Asesoría en Compra y Venta de Propiedades",
      description: "Brindamos orientación profesional para ayudarte a tomar decisiones informadas en la compra o venta de propiedades rurales, fincas, terrenos y canteras.",
      features: [
        "Evaluación de necesidades y objetivos",
        "Búsqueda personalizada de propiedades",
        "Análisis de mercado y valoración",
        "Negociación de condiciones favorables",
        "Revisión de documentación legal"
      ],
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=1200"
    },
    {
      id: 2,
      title: "Acompañamiento Legal y Notarial",
      description: "Gestionamos todo el proceso legal para garantizar transacciones seguras y transparentes con el respaldo de profesionales del derecho especializados en bienes raíces.",
      features: [
        "Revisión de documentos de propiedad",
        "Asesoría en escrituras y contratos",
        "Gestión de permisos y autorizaciones",
        "Trámites ante registros públicos",
        "Solución de conflictos legales"
      ],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200"
    },
    {
      id: 3,
      title: "Gestión de Compradores Internacionales",
      description: "Facilitamos el proceso de inversión para clientes extranjeros interesados en adquirir propiedades en Nicaragua, ofreciendo apoyo especializado para superar barreras culturales y legales.",
      features: [
        "Información sobre regulaciones para extranjeros",
        "Asesoría en requerimientos migratorios",
        "Orientación sobre impuestos aplicables",
        "Servicios de traducción e interpretación",
        "Apoyo en gestiones bancarias"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200"
    },
    {
      id: 4,
      title: "Venta con y sin Escritura",
      description: "Ofrecemos alternativas para diferentes situaciones documentales, siempre garantizando la seguridad jurídica de nuestros clientes mediante procesos transparentes y legalmente válidos.",
      features: [
        "Evaluación de documentación existente",
        "Asesoría en procesos de regularización",
        "Gestión de derechos posesorios",
        "Elaboración de contratos de promesa de venta",
        "Acompañamiento en procesos de titulación"
      ],
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=1200"
    },
    {
      id: 5,
      title: "Publicidad y Marketing de Propiedades",
      description: "Desarrollamos estrategias de promoción efectivas para maximizar la visibilidad de las propiedades y atraer a compradores potenciales de manera rápida y eficiente.",
      features: [
        "Fotografía profesional",
        "Descripción detallada de propiedades",
        "Promoción en plataformas digitales",
        "Campañas en redes sociales",
        "Organización de visitas y recorridos"
      ],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200"
    },
    {
      id: 6,
      title: "Captación de Propiedades",
      description: "Buscamos activamente nuevas propiedades que cumplan con los estándares de calidad de NICARIS, ampliando constantemente nuestro portafolio para ofrecer más y mejores opciones a nuestros clientes.",
      features: [
        "Identificación de oportunidades de mercado",
        "Verificación y documentación de propiedades",
        "Evaluación de potencial comercial",
        "Acuerdos con propietarios",
        "Integración a nuestra red de ventas"
      ],
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=1200"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-nicaris-green pt-32 pb-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h1>
          <p className="mt-2 text-white/80">
            Conoce las soluciones inmobiliarias que ofrecemos para satisfacer tus necesidades
          </p>
        </div>
      </div>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Servicios Inmobiliarios Especializados</h2>
            <p>
              En NICARIS Bienes Raíces ofrecemos una amplia gama de servicios profesionales diseñados para 
              facilitarte el proceso de compra, venta e inversión en propiedades en Nicaragua. Nuestro 
              enfoque personalizado garantiza la mejor experiencia para cada cliente.
            </p>
          </div>
          
          {/* Services List */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="mb-6 text-nicaris-lightText">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 bg-nicaris-cream rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas alguno de nuestros servicios?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Contáctanos hoy mismo para recibir asesoría personalizada y resolver todas tus 
              consultas sobre inversiones inmobiliarias en Nicaragua.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contactar ahora
              </Link>
              <Link to="/properties" className="btn-outline">
                Ver propiedades
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

export default Services;
