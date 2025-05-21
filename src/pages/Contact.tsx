import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    quickQuestion: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send('service_euo5xko', 'template_h5hvu5w', formData, 'RX2ZKBMLaDbCRW9tR')
      .then((response) => {
        console.log('Mensaje enviado', response.status, response.text);
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto contigo pronto.",
          duration: 5000,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          quickQuestion: ''
        });
      }, (error) => {
        console.error('Error al enviar el mensaje', error);
        toast({
          title: "Error",
          description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo más tarde.",
          duration: 5000,
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-nicaris-green pt-32 pb-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>
          <p className="mt-2 text-white/80">
            Estamos aquí para responder tus preguntas y ayudarte con tus necesidades inmobiliarias
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nicaris-cream rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-nicaris-green" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Teléfono</h3>
                    <a href="tel:+50512345678" className="text-nicaris-lightText hover:text-nicaris-green">
                      +505 8866 2303
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nicaris-cream rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-nicaris-green" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Correo Electrónico</h3>
                    <a href="mailto:info@nicaris.com" className="text-nicaris-lightText hover:text-nicaris-green">
                      contactonicaris@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nicaris-cream rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-nicaris-green" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Ubicación</h3>
                    <address className="text-nicaris-lightText not-italic">
                      Managua, Nicaragua<br />
                    </address>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Síguenos en redes sociales</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-nicaris-cream rounded-full flex items-center justify-center text-nicaris-green hover:bg-nicaris-green hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-nicaris-cream rounded-full flex items-center justify-center text-nicaris-green hover:bg-nicaris-green hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-nicaris-cream rounded-full flex items-center justify-center text-nicaris-green hover:bg-nicaris-green hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-medium mb-3">Horario de atención</h3>
                <ul className="space-y-1 text-nicaris-lightText">
                  <li className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-medium mb-3">¿Preguntas rápidas?</h3>
                <select
                  name="quickQuestion"
                  value={formData.quickQuestion}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 text-nicaris-darkText focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green mb-4"
                >
                  <option value="">Selecciona una pregunta común</option>
                  <option value="selling">¿Tienes una propiedad para vender?</option>
                  <option value="investment">¿Quieres invertir pero no sabés por dónde empezar?</option>
                  <option value="legal">¿Necesitás asesoría legal para una propiedad?</option>
                  <option value="recruiter">¿Te interesa ser captador con NICARIS?</option>
                </select>
                <a 
                  href="https://wa.me/50588662303?text=Hola,%20tengo%20una%20consulta%20rápida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 w-full"
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
                  Consulta por WhatsApp
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Asunto <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                      required
                    >
                      <option value="">Seleccionar asunto</option>
                      <option value="property-inquiry">Consulta sobre una propiedad</option>
                      <option value="selling">Vender una propiedad</option>
                      <option value="investment">Oportunidades de inversión</option>
                      <option value="legal">Asesoría legal</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-nicaris-green border-gray-300 rounded focus:ring-nicaris-green"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-nicaris-lightText">
                    Acepto la política de privacidad y el tratamiento de mis datos personales
                  </label>
                </div>
                
                <button type="submit" className="btn-primary w-full md:w-auto px-8">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Nuestra ubicación</h2>
            <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
              <p className="text-nicaris-lightText">
                Mapa de ubicación no disponible en este momento
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton phoneNumber="+505 8866 2303" />
    </div>
  );
};

export default Contact;


