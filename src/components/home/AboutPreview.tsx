
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="section-spacing bg-nicaris-cream">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="section-title">NICARIS Bienes Raíces</h2>
            <p className="mb-6 text-nicaris-darkText">
              Somos una empresa nicaragüense especializada en la comercialización de propiedades rurales, fincas agrícolas, 
              ganaderas, terrenos para inversión y canteras con permisos de explotación en todo el territorio nacional.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-nicaris-green mt-1 shrink-0" />
                <p>Asesoría personalizada en cada etapa de la compra o venta de su propiedad</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-nicaris-green mt-1 shrink-0" />
                <p>Amplio portafolio de propiedades verificadas en las mejores ubicaciones</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-nicaris-green mt-1 shrink-0" />
                <p>Acompañamiento legal y notarial durante todo el proceso de transacción</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-nicaris-green mt-1 shrink-0" />
                <p>Experiencia comprobada en el mercado inmobiliario nicaragüense</p>
              </div>
            </div>
            <Link to="/about" className="btn-primary">
              Conocer más sobre nosotros
            </Link>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200"
                alt="Equipo de NICARIS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-lg shadow-lg max-w-[250px] hidden lg:block">
              <div className="flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-nicaris-green">+30</span>
              </div>
              <p className="text-center text-nicaris-darkText">
                Propiedades vendidas en los últimos 2 años
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
