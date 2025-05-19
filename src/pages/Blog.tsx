
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Guía completa para invertir en fincas ganaderas en Nicaragua",
    excerpt: "Descubre los aspectos más importantes a considerar al invertir en fincas ganaderas, desde la calidad del suelo hasta la disponibilidad de agua.",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=800",
    date: "15 de Mayo, 2023",
    author: "Carlos Rodríguez",
    category: "Inversión Rural"
  },
  {
    id: 2,
    title: "Diferencias entre terrenos agrícolas y urbanos: ¿Dónde invertir?",
    excerpt: "Analizamos las ventajas y desventajas de invertir en terrenos agrícolas versus urbanos, retorno de inversión y potencial de crecimiento.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800",
    date: "28 de Abril, 2023",
    author: "María Gómez",
    category: "Análisis de Mercado"
  },
  {
    id: 3,
    title: "Aspectos legales a considerar antes de comprar una propiedad en Nicaragua",
    excerpt: "Revisión de los documentos esenciales, procedimientos y posibles complicaciones legales en la compra de propiedades.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800",
    date: "10 de Abril, 2023",
    author: "Juan Pérez",
    category: "Legal"
  },
  {
    id: 4,
    title: "Las mejores zonas para invertir en fincas agrícolas en 2023",
    excerpt: "Análisis de las regiones con mayor potencial para inversión agrícola, considerando clima, infraestructura y rentabilidad.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=800",
    date: "2 de Marzo, 2023",
    author: "Laura Martínez",
    category: "Oportunidades de Inversión"
  },
  {
    id: 5,
    title: "Canteras: Una inversión rentable con los permisos adecuados",
    excerpt: "Todo lo que necesitas saber sobre la inversión en canteras, los permisos requeridos y el potencial de rentabilidad a largo plazo.",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80&w=800",
    date: "15 de Febrero, 2023",
    author: "Pedro Sánchez",
    category: "Inversión Especializada"
  },
  {
    id: 6,
    title: "Testimonios: Extranjeros que invirtieron exitosamente en Nicaragua",
    excerpt: "Historias reales de inversionistas internacionales que han adquirido propiedades en Nicaragua y sus experiencias.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800",
    date: "30 de Enero, 2023",
    author: "Ana López",
    category: "Casos de Éxito"
  }
];

// Categories for filter
const categories = [
  "Todos",
  "Inversión Rural",
  "Análisis de Mercado",
  "Legal",
  "Oportunidades de Inversión",
  "Inversión Especializada",
  "Casos de Éxito"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);
  
  // Filter posts when category changes
  React.useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-nicaris-green pt-32 pb-16 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Blog & Noticias</h1>
          <p className="mt-2 text-white/80">
            Información, consejos y novedades sobre el mercado inmobiliario en Nicaragua
          </p>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex gap-2 min-w-max pb-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-nicaris-green text-white'
                      : 'bg-gray-100 text-nicaris-darkText hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 md:h-full">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-nicaris-cream text-nicaris-green px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {filteredPosts[0].category}
                  </span>
                  <h2 className="text-2xl font-bold mb-3">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-nicaris-lightText mb-4">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 w-10 h-10 bg-nicaris-cream rounded-full flex items-center justify-center font-bold text-nicaris-green">
                        {filteredPosts[0].author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{filteredPosts[0].author}</p>
                        <p className="text-sm text-nicaris-lightText">{filteredPosts[0].date}</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${filteredPosts[0].id}`}
                      className="text-nicaris-green hover:underline"
                    >
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Blog Grid */}
          {filteredPosts.length > 1 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <span className="inline-block bg-nicaris-cream text-nicaris-green px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {post.category}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold mb-2 hover:text-nicaris-green transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-nicaris-lightText mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-nicaris-lightText">{post.date}</p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-nicaris-green hover:underline text-sm"
                      >
                        Leer más
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-nicaris-darkText text-lg">
                No hay artículos disponibles en esta categoría.
              </p>
              <button
                onClick={() => setSelectedCategory("Todos")}
                className="mt-4 btn-outline"
              >
                Ver todas las categorías
              </button>
            </div>
          ) : null}
          
          {/* Newsletter Subscription */}
          <div className="mt-16 bg-nicaris-cream p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">Suscríbete a nuestro newsletter</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Recibe en tu correo nuestros artículos, noticias y oportunidades de inversión en Nicaragua
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-nicaris-green focus:border-nicaris-green"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton phoneNumber="+505 8866 2303" />
    </div>
  );
};

export default Blog;
