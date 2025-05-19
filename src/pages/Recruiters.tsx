
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { CheckCircle2 } from 'lucide-react';

const Recruiters = () => {
  const benefits = [
    {
      title: "Altas comisiones",
      description: "Gana comisiones competitivas por cada propiedad vendida a través de tu gestión"
    },
    {
      title: "Sin inversión inicial",
      description: "No necesitas capital para comenzar a trabajar con nosotros, solo tu tiempo y dedicación"
    },
    {
      title: "Formación continua",
      description: "Te ofrecemos capacitación en ventas inmobiliarias y actualizaciones del mercado"
    },
    {
      title: "Flexibilidad horaria",
      description: "Trabaja según tu disponibilidad de tiempo y establece tu propio ritmo"
    },
    {
      title: "Equipo de apoyo",
      description: "Contarás con el respaldo de un equipo experimentado para resolver cualquier duda"
    },
    {
      title: "Material promocional",
      description: "Te proporcionamos material para que puedas promocionar las propiedades de forma efectiva"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Formulario enviado con éxito. Nos pondremos en contacto contigo pronto.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-nicaris-green pt-32 pb-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Únete como Captador</h1>
          <p className="mt-2 text-white/80">
            Gana dinero ayudando a vender propiedades sin necesidad de invertir
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Information */}
            <div>
              <h2 className="section-title">Conviértete en Captador</h2>
              <p className="mb-6">
                En NICARIS Bienes Raíces estamos buscando personas entusiastas y emprendedoras que deseen 
                formar parte de nuestro equipo de captadores. Esta es una excelente oportunidad para 
                generar ingresos adicionales ayudándonos a encontrar propiedades para vender y conectándonos 
                con personas interesadas en adquirirlas.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">¿Qué hace un captador?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Identificar propiedades en venta que pueden integrarse a nuestro portafolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Contactar a propietarios interesados en vender sus terrenos o fincas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Publicar anuncios en redes sociales para promocionar nuestras propiedades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Conectarnos con personas interesadas en comprar propiedades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-nicaris-green mt-1 shrink-0" />
                  <span>Proporcionar información básica sobre las propiedades a clientes potenciales</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Beneficios de ser captador</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-nicaris-green mb-1">{benefit.title}</h4>
                    <p className="text-sm text-nicaris-lightText">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-nicaris-cream p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-2">¿Cómo funciona?</h3>
                <p className="mb-4">
                  El proceso es simple: tú nos traes propiedades o clientes, nosotros hacemos el trabajo 
                  profesional de verificación y cierre, y tú recibes una comisión por tu esfuerzo. No 
                  necesitas experiencia previa en bienes raíces, nosotros te guiaremos en cada paso.
                </p>
                <div className="flex items-center justify-center">
                  <a 
                    href="https://wa.me/50588662303?text=Hola,%20estoy%20interesado%20en%20ser%20captador"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V7a1 1 0 0 0-2 0v3Z" />
                    </svg>
                    Consulta vía WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Application Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-center">Aplicar como Captador</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Número de teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Ubicación (Departamento/Ciudad)
                      </label>
                      <input
                        type="text"
                        id="location"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium mb-2">
                        ¿Tienes experiencia previa en bienes raíces?
                      </label>
                      <select
                        id="experience"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                        required
                      >
                        <option value="">Seleccionar</option>
                        <option value="yes">Sí</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="whyInterested" className="block text-sm font-medium mb-2">
                        ¿Por qué te interesa ser captador con NICARIS?
                      </label>
                      <textarea
                        id="whyInterested"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="references" className="block text-sm font-medium mb-2">
                        ¿Cómo te enteraste de esta oportunidad?
                      </label>
                      <input
                        type="text"
                        id="references"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="h-4 w-4 text-nicaris-green border-gray-300 rounded focus:ring-nicaris-green"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-nicaris-lightText">
                        Acepto recibir información sobre oportunidades como captador
                      </label>
                    </div>
                    
                    <div>
                      <button type="submit" className="btn-primary w-full">
                        Enviar Aplicación
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-nicaris-cream py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Lo que dicen nuestros captadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-nicaris-green rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">María Rodríguez</h4>
                  <p className="text-sm text-nicaris-lightText">Captadora desde 2022</p>
                </div>
              </div>
              <p className="italic">
                "Ser captadora para NICARIS ha sido una gran oportunidad para generar ingresos extra. 
                El equipo es muy profesional y siempre están dispuestos a ayudar."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-nicaris-green rounded-full flex items-center justify-center text-white font-bold">
                  JL
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Juan López</h4>
                  <p className="text-sm text-nicaris-lightText">Captador desde 2021</p>
                </div>
              </div>
              <p className="italic">
                "Lo que más me gusta es la flexibilidad. Puedo buscar propiedades y clientes en mi tiempo 
                libre y las comisiones son muy buenas. He aprendido mucho sobre el mercado inmobiliario."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-nicaris-green rounded-full flex items-center justify-center text-white font-bold">
                  AP
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Ana Pérez</h4>
                  <p className="text-sm text-nicaris-lightText">Captadora desde 2020</p>
                </div>
              </div>
              <p className="italic">
                "Comencé sin experiencia en bienes raíces, pero con las capacitaciones de NICARIS 
                pude desarrollar habilidades que me han permitido cerrar varias operaciones exitosas."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton phoneNumber="+505 8866 2303" message="Hola, estoy interesado en ser captador" />
    </div>
  );
};

export default Recruiters;
