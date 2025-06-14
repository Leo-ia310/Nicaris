import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { MapPin, Ruler, Home, Phone, Mail, ArrowLeft } from 'lucide-react';
import emailjs from 'emailjs-com'; // Importar emailjs
import { toast } from "@/components/ui/use-toast";

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [property, setProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Declaración estática de contactInfo
  const contactInfo = {
    name: "Andres Morales",
    phone: "+505 8505 0811",
    whatsapp: "85050811",
    email: "andresmoralesampienicaris@gmail.com",
  };

  const IDservice = "service_0sscbwl";
  const IDTemplateGM = "template_l3odtlo";
  const ID_PR = "JkFHr3eLBSaKWHVdW";

  useEffect(() => {
    const fetchProperty = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1z535l_nlwJ-G3AnE16cqGossy4yBe0Wx4sNkpJ6ecxE/values/Backend2?key=AIzaSyDqkyWiU-HicT3Z5ltVxomucHt671y0Tro');
        const data = await response.json();

        if (data.values && Array.isArray(data.values)) {
          const propertiesData = data.values.slice(1).map(row => {
            const images = row[19].split(','); // Asumiendo que las imágenes están en la columna 19 y separadas por comas

            return {
              id: parseInt(row[0]), // Asegúrate de que el ID sea un número
              title: row[1],
              description: row[2],
              price: parseFloat(row[6]) || 0,
              location: row[4],
              size: row[13] || row[11] || 0,
              sizeUnit: row[53],
              type: row[7],
              pricePerManzana: parseFloat(row[14]) || 0,
              images: row[18]
              ? row[18]
              .split(/\s+/)                // separar por coma
              .map(link => link.trim())  // limpiar espacios
             .filter(link => link)      // quitar strings vacíos, si hay
              : [],
              features: row[12] ? row[12].split(',').map(f => f.trim()) : [], // Asumiendo que las características están en las columnas 12 a 18
                            furniture: row[20] || '',
              hasCaretakerHouse: row[21] === 'Sí',
              hasStorageRoom: row[22] === 'Sí',
              terrainType: row[23] || '',
              topography: row[24] || '',
              soilType: row[25] || '',
              landUse: row[26] || '',
              mainCrops: row[27] || '',
              citrusTrees: row[28] || '',
              fruitTrees: row[29] || '',
              irrigationSystem: row[30] || '',
              hasCattleInfrastructure: row[31] === 'Sí',
              pastureType: row[32] || '',
              waterForAnimals: row[33] === 'Sí',
              hasElectricity: row[34] === 'Sí',
              internetAvailable: row[35] === 'Sí',
              hasSepticTank: row[36] === 'Sí',
              mountainView: row[37] === 'Sí',
              oceanView: row[38] === 'Sí',
              riverAccess: row[39] === 'Sí',
              lakeAccess: row[40] === 'Sí',
              gatedCommunity: row[41] === 'Sí',
              isInSafeZone: row[42] === 'Sí',
              touristArea: row[43] === 'Sí',
              hasDeed: row[44] === 'Sí',
              hasSurvey: row[45] === 'Sí',
              propertyTaxStatus: row[46] || '',
              isBankFinancingAvailable: row[47] === 'Sí',
              restrictions: row[48] || '',
            };
          });

          // Buscar la propiedad específica por ID
          const foundProperty = propertiesData.find(prop => prop.id === parseInt(id));
          setProperty(foundProperty);
        } else {
          console.error('La respuesta no contiene un array en data.values:', data);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Manejar el caso cuando la propiedad no se encuentra
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Propiedad no encontrada</h1>
          <p className="mb-6">La propiedad que buscas no existe o ha sido eliminada.</p>
          <Link to="/properties" className="btn-primary">
            Ver todas las propiedades
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      to_name: contactInfo.name, // Usar contactInfo estático
      message: formData.message,
      reply_to: formData.email,
      phone: formData.phone,
    };

    try {
      const response = await emailjs.send(
        `${IDservice}`,  
        `${IDTemplateGM}`,
        templateParams,
        `${ID_PR}`
      );

      if (response.status === 200) {
        toast({
          title: "¡Correo enviado con éxito!",
          description: "Nos pondremos en contacto contigo pronto.",
          duration: 5000,
        });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Limpiar formulario
      } else {
        toast({
          title: "Error al enviar",
          description: "Hubo un problema al enviar el correo. Intenta de nuevo.",
          duration: 5000,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      toast({
        title: "Error inesperado",
        description: "No se pudo enviar el correo. Inténtalo más tarde.",
        duration: 5000,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Back Button and Type */}
      <div className="bg-white pt-24 pb-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/properties" className="flex items-center gap-2 text-nicaris-green hover:underline">
              <ArrowLeft size={18} />
              Volver a propiedades
            </Link>
            <span className="bg-nicaris-green text-white px-4 py-1 rounded-full text-sm font-medium">
              {property.type}
            </span>
          </div>
        </div>
      </div>
      
      {/* Property Content */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Images and Info - Left Side */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-3 sha">
                  {property.images.map((image, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        idx === activeImage ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} - Imagen ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {property.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 ${
                        idx === activeImage ? 'border-nicaris-green' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Error 404 ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Title and Location */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-3">{property.title}</h1>
                <div className="flex items-center gap-1 text-nicaris-lightText">
                  <MapPin size={18} className="text-nicaris-brown" />
                  <span>{property.location}</span>
                </div>
              </div>
              
              {/* Property Details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-nicaris-cream p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Ruler size={18} className="text-nicaris-green" />
                    <span className="text-nicaris-lightText text-sm">Tamaño</span>
                  </div>
                  <p className="font-medium">{property.size} {property.sizeUnit}</p>
                </div>
                <div className="bg-nicaris-cream p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Home size={18} className="text-nicaris-green" />
                    <span className="text-nicaris-lightText text-sm">Uso</span>
                  </div>
                  <p className="font-medium">{property.usage}</p>
                </div>
                <div className="bg-nicaris-cream p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-nicaris-lightText text-sm">Precio</span>
                  </div>
                  <p className="font-bold text-nicaris-green text-xl">
                    ${property.price.toLocaleString()}
                  </p>
                  <div>
                <div className="bg-nicaris-cream p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-nicaris-lightText text-sm">Precio por Manzana: </span>
                  </div>
                  <p className="font-bold text-nicaris-green text-xl">
                    ${property.pricePerManzana.toLocaleString()}
                  </p>
                  </div>
                </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Descripción</h2>
                <p className="text-nicaris-darkText whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Características del terreno */}
              <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">🏞️ Características del terreno</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 text-green-950">
                  <li>Tipo de suelo: {property.terrainType}</li>
                  <li>Uso de la tierra: {property.landUse}</li>
                  <li>Cultivos principales: {property.mainCrops}</li>
                  <li>Árboles cítricos: {property.citrusTrees}</li>
                  <li>Árboles frutales: {property.fruitTrees}</li>
                </ul>
                <ul className="list-disc pl-5 text-green-950">
                  <li>Sistema de riego: {property.irrigationSystem}</li>
                  <li>Tiene infraestructura ganadera: {property.hasCattleInfrastructure ? 'Sí' : 'No'}</li>
                  <li>Tipo de pasto: {property.pastureType}</li>
                  <li>Vista a la montaña: {property.mountainView ? 'Sí' : 'No'}</li>
                  <li>Vista al océano: {property.oceanView ? 'Sí' : 'No'}</li>
                  <li>Acceso al río: {property.riverAccess ? 'Sí' : 'No'}</li>
                  <li>Acceso al lago: {property.lakeAccess ? 'Sí' : 'No'}</li>
                  <li>Área turística: {property.touristArea ? 'Sí' : 'No'}</li>
                  <li>Restricciones: {property.restrictions}</li>
                </ul>
              </div>
            </div>

            {/* Servicios y facilidades */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">⚙️ Servicios y facilidades</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 text-green-950">
                  <li>Agua para animales: {property.waterForAnimals ? 'Sí' : 'No'}</li>
                  <li>Tiene electricidad: {property.hasElectricity ? 'Sí' : 'No'}</li>
                  <li>Internet disponible: {property.internetAvailable ? 'Sí' : 'No'}</li>
                </ul>
                <ul className="list-disc pl-5 text-green-950">
                  <li>Tiene tanque séptico: {property.hasSepticTank ? 'Sí' : 'No'}</li>
                  <li>Comunidad cerrada: {property.gatedCommunity ? 'Sí' : 'No'}</li>
                  <li>Está en zona segura: {property.isInSafeZone ? 'Sí' : 'No'}</li>
                  <li>Tiene escritura: {property.hasDeed ? 'Sí' : 'No'}</li>
                  <li>Tiene plano: {property.hasSurvey ? 'Sí' : 'No'}</li>
                  <li>Estado del impuesto a la propiedad: {property.propertyTaxStatus}</li>
                  <li>Está disponible financiamiento bancario: {property.isBankFinancingAvailable ? 'Sí' : 'No'}</li>
                </ul>
              </div>
            </div>

              {/* Location Map - Placeholder for now */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Ubicación</h2>
                <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
                  <p className="text-nicaris-lightText">
                    Mapa de ubicación no disponible en este momento
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Information - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 shadow-gris666">
                <h3 className="text-xl font-semibold mb-4">Contactar al Asesor</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-nicaris-cream rounded-full flex items-center justify-center text-nicaris-green font-bold text-xl">
                    {contactInfo.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium">{contactInfo.name}</h4>
                    <p className="text-sm text-nicaris-lightText">Asesor de Bienes Raíces</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Phone size={20} className="text-nicaris-green" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`} 
                    target='_blank'
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Mail size={20} className="text-nicaris-green" />
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
                
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, estoy interesado en la propiedad en la ${property.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
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
                  Contactar por WhatsApp
                </a>
                
                {/* Contact Form */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Solicitar información</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Nombre completo
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
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Correo electrónico
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
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
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
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Mensaje
                        </label>
                        <textarea 
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                          defaultValue={`Hola, estoy interesado en la propiedad "${property.title}" y me gustaría obtener más información.`}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn-secondary w-full">
                        Enviar solicitud
                      </button>
                      {statusMessage && <p className="text-sm text-green-600 mt-2">{statusMessage}</p>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton phoneNumber={contactInfo.whatsapp} message={`Hola, estoy interesado en la propiedad: ${property.title}`} />
    </div>
  );
};

export default PropertyDetails;
