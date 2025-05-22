
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const Legal = () => {
  const faqs = [
    {
      question: "¿Cuáles son los requisitos para comprar una propiedad en Nicaragua?",
      answer: "Para comprar una propiedad en Nicaragua, tanto nacionales como extranjeros necesitan: documento de identidad vigente (cédula o pasaporte), poder notarial (en caso de no estar presente), revisión del historial legal de la propiedad, y contar con un notario para la escritura pública. Los extranjeros tienen los mismos derechos de propiedad que los nacionales, excepto en zonas fronterizas donde existen algunas restricciones."
    },
    {
      question: "¿Qué es el MIFIC y qué relación tiene con las canteras?",
      answer: "El MIFIC (Ministerio de Fomento, Industria y Comercio) es la entidad gubernamental que regula y otorga las concesiones y permisos para la explotación de canteras en Nicaragua. Cualquier actividad de extracción de materiales como arena, piedra o grava requiere permisos de esta institución. Cuando vendemos una cantera con permisos, significa que cuenta con todas las autorizaciones del MIFIC para su operación legal."
    },
    {
      question: "¿Cómo se realizan ventas sin escritura en Nicaragua?",
      answer: "Las ventas sin escritura en Nicaragua se realizan mediante documentos privados como 'Promesa de Venta', 'Cesión de Derechos Posesorios' o 'Contratos de Compraventa con Compromiso de Escrituración'. Estos documentos, aunque no transfieren la propiedad legalmente, establecen un compromiso entre las partes. En NICARIS siempre recomendamos autenticar estos documentos ante notario para mayor seguridad y asesoramos sobre el proceso para obtener eventualmente una escritura formal."
    },
    {
      question: "¿Qué tipos de documentos legales pueden respaldar una propiedad?",
      answer: "Los documentos legales que pueden respaldar una propiedad en Nicaragua incluyen: Escritura Pública inscrita en el Registro de la Propiedad, Certificado de Historia Registral, Libertad de Gravamen, Solvencia Municipal, Cartas de Venta (para propiedades rurales en algunas regiones), Títulos de Reforma Agraria, Certificados de Posesión emitidos por autoridades locales, y Constancia Catastral. La validez y seguridad jurídica varía según el documento."
    },
    {
      question: "¿Cómo garantiza NICARIS la seguridad en las transacciones?",
      answer: "En NICARIS garantizamos la seguridad de las transacciones mediante: verificación exhaustiva de la documentación legal de cada propiedad, estudio de antecedentes registrales, confirmación de linderos y medidas en campo, asesoría legal especializada durante todo el proceso, contratos redactados por profesionales del derecho, acompañamiento durante la firma ante notario, y seguimiento hasta la inscripción definitiva del nuevo título. Trabajamos solo con propiedades que cumplen nuestros estándares de seguridad jurídica."
    },
    {
      question: "¿Cómo trabaja NICARIS con notarios?",
      answer: "NICARIS trabaja con una red de notarios de confianza con amplia experiencia en transacciones inmobiliarias rurales y urbanas. Nuestros notarios verifican la legalidad de los documentos, realizan los estudios registrales necesarios, redactan las escrituras conforme a la ley, y gestionan la inscripción en los registros correspondientes. El cliente puede elegir trabajar con nuestros notarios recomendados o con uno de su preferencia."
    },
    {
      question: "¿Qué impuestos se deben pagar al comprar una propiedad?",
      answer: "Al comprar una propiedad en Nicaragua, los principales impuestos y gastos son: Impuesto de Transmisión Patrimonial (1-2% del valor catastral), Impuesto sobre Bienes Inmuebles (IBI, pago anual de aproximadamente el 1% del valor catastral), honorarios notariales (1-2% del valor de la transacción), y gastos de inscripción en el Registro Público. NICARIS proporciona una estimación detallada de todos estos costos antes de iniciar cualquier transacción."
    },
    {
      question: "¿Qué diferencia hay entre una propiedad con título y una con derechos posesorios?",
      answer: "Una propiedad con título cuenta con una escritura pública debidamente inscrita en el Registro de la Propiedad, garantizando seguridad jurídica completa. Una propiedad con derechos posesorios se basa en la posesión efectiva del inmueble por un tiempo determinado, respaldada por documentos como cartas de venta o declaraciones, pero sin título inscrito. Las propiedades con derechos posesorios suelen tener un precio menor, pero implican mayor riesgo y la necesidad futura de un proceso de titulación."
    },
    {
      question: "¿Cómo se determina el precio de una finca o terreno rural?",
      answer: "El precio de una finca o terreno rural en Nicaragua se determina considerando factores como: ubicación y accesibilidad, calidad del suelo, disponibilidad de agua, infraestructura existente (cercas, corrales, casa), topografía, tipo de cultivos o pastos, potencial productivo, situación legal de la propiedad, y precios de propiedades similares en la zona. En NICARIS realizamos una valoración profesional que considera todos estos elementos para establecer un precio justo."
    },
    {
      question: "¿Cuánto tiempo toma completar una compraventa de propiedad?",
      answer: "El tiempo para completar una compraventa de propiedad en Nicaragua varía según la situación legal del inmueble. Para propiedades con documentación completa y sin complicaciones, el proceso puede tomar entre 2 y 4 semanas desde el acuerdo inicial hasta la firma de escritura. Para propiedades que requieren saneamiento legal o trámites adicionales, el proceso puede extenderse de 2 a 6 meses. En NICARIS proporcionamos un cronograma estimado al inicio del proceso."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-nicaris-green pt-32 pb-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Información Legal</h1>
          <p className="mt-2 text-white/80">
            Aspectos legales y preguntas frecuentes sobre transacciones inmobiliarias en Nicaragua
          </p>
        </div>
      </div>
      
      {/* Legal Information */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">Aspectos Legales Importantes</h2>
            <p className="mb-8">
              En NICARIS Bienes Raíces entendemos que el aspecto legal es fundamental para garantizar 
              transacciones seguras y transparentes. Por eso, ponemos a tu disposición información 
              relevante sobre los procesos legales relacionados con la compra y venta de propiedades 
              en Nicaragua, especialmente en el ámbito rural.
            </p>
            
            <div className="bg-nicaris-cream p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold mb-4">Nuestro Compromiso con la Seguridad Jurídica</h3>
              <p>
                Todas las propiedades comercializadas por NICARIS pasan por un riguroso proceso de 
                verificación legal para garantizar la seguridad de nuestros clientes. Contamos con 
                asesores legales especializados que revisan la documentación, antecedentes y situación 
                registral de cada propiedad antes de ofrecerla al público.
              </p>
            </div>
            
            {/* FAQs */}
            <h3 className="text-2xl font-semibold mb-6">Preguntas Frecuentes</h3>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-nicaris-green/10 px-6 py-4">
                    <h4 className="font-semibold text-nicaris-darkText">
                      {faq.question}
                    </h4>
                  </div>
                  <div className="p-6">
                    <p className="text-nicaris-lightText">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Legal Resources */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Recursos Adicionales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="../Guia.pdf" download
                  className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nicaris-green mb-3">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                  <h4 className="font-semibold cursor-pointer text-blue-600 hover:underline">Guía de Compra de Propiedades</h4>
                  <p className="text-sm text-nicaris-lightText">
                    Descarga nuestra guía completa sobre el proceso de compra de propiedades en Nicaragua
                  </p>
                </a>
                
                <a 
                  href="#" 
                  className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nicaris-green mb-3">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <a href="../Doc.pdf" download>
                  <h4 className="font-semibold mb-2 cursor-pointer text-blue-600 hover:underline">
                  Documentos Legales Básicos
                  </h4>
                  </a>
                  <p className="text-sm text-nicaris-lightText">
                    Lista de documentos legales necesarios para comprar o vender una propiedad
                  </p>
                </a>
              </div>
            </div>
            
            {/* Legal Consultation CTA */}
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">¿Tienes dudas legales específicas?</h3>
              <p className="mb-6">
                Nuestro equipo legal está disponible para resolver tus consultas sobre aspectos 
                legales relacionados con propiedades en Nicaragua.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:+505 8866 2303" 
                  className="btn-primary flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Consulta telefónica
                </a>
                <a 
                  href="https://wa.me/50588662303?text=Hola,%20tengo%20una%20consulta%20legal%20sobre%20propiedades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
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
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton phoneNumber="+505 8866 2303" message="Hola, tengo una consulta legal sobre propiedades" />
    </div>
  );
};

export default Legal;
