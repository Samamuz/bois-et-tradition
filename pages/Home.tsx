import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Award, HeartHandshake } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590375096341-0c6b35a09d79?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Intérieur chalet luxe salon cheminée" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white space-y-8 animate-fade-in-up">
          <span className="block text-wood-200 tracking-[0.2em] text-sm md:text-base uppercase font-semibold mb-4">
            Depuis 1965
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-lg">
            L'Art du Bois <br />
            <span className="italic font-light">à l'état pur</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-wood-50/90 font-light leading-relaxed mb-8">
            Menuiserie artisanale d'exception au cœur des Alpes suisses.
            Nous créons des intérieurs chaleureux où la tradition rencontre le design contemporain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/realisations" variant="primary">
              Voir nos réalisations
            </Button>
            <Button to="/contact" variant="secondary">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Ruler,
                title: "Sur Mesure",
                text: "Chaque projet est unique. Nous concevons vos meubles et agencements au millimètre près, selon vos désirs."
              },
              {
                icon: Award,
                title: "Excellence Artisanale",
                text: "Trois générations de savoir-faire. Nous sélectionnons les essences les plus nobles et maîtrisons les techniques ancestrales."
              },
              {
                icon: HeartHandshake,
                title: "Accompagnement",
                text: "Du premier croquis à la pose finale, nous vous guidons avec passion pour concrétiser votre vision."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="h-16 w-16 bg-wood-50 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-wood-600 uppercase tracking-widest text-sm font-bold">Portfolio</span>
              <h2 className="font-serif text-4xl text-stone-900 mt-2">Réalisations Phares</h2>
            </div>
            <Link to="/realisations" className="hidden md:flex items-center text-wood-800 font-bold hover:text-wood-600 transition-colors group">
              Tout voir <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80",
                title: "Refuge des Cimes",
                tag: "Chalet Privé"
              },
              {
                img: "https://images.unsplash.com/photo-1515767160065-1733c5eb680f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Appartement Alpin",
                tag: "Rénovation"
              },
              {
                img: "https://images.unsplash.com/photo-1723902500179-5d061e268b5f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Cuisine Montagnarde",
                tag: "Sur Mesure"
              }
            ].map((item, idx) => (
              <Link to="/realisations" key={idx} className="group relative block overflow-hidden rounded-sm shadow-md">
                <div className="aspect-[4/5] md:aspect-[3/4]">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-wood-300 text-sm uppercase tracking-wider mb-1">{item.tag}</p>
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Button to="/realisations" variant="outline">Tout voir</Button>
          </div>
        </div>
      </section>

      {/* Quote / Atmosphere */}
      <section className="py-24 bg-wood-900 text-wood-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-white/10 -translate-x-4 -translate-y-4"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-white/10 translate-x-4 translate-y-4"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl md:text-5xl italic leading-tight mb-8">
            "Le bois n'est pas qu'une matière, c'est une mémoire. Nous le travaillons pour qu'il raconte votre histoire."
          </p>
          <div className="w-20 h-1 bg-wood-500 mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;