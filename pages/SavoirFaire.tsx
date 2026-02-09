import React from 'react';
import { Leaf, Hammer, PenTool, CheckCircle } from 'lucide-react';

const SavoirFaire: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-wood-400 uppercase tracking-widest text-sm font-bold">Héritage & Passion</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">Notre Savoir-Faire</h1>
          <p className="text-xl text-stone-400 font-light leading-relaxed">
            Allier la noblesse du geste artisanal à la précision des outils modernes pour sublimer l'essence même du bois.
          </p>
        </div>
      </div>

      {/* History */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1544164560-adac3045edb2?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Texture bois brut avec cernes" className="rounded-sm shadow-lg h-full object-cover" />
              <img src="https://images.unsplash.com/photo-1579618215542-2ed5e10b65ed?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Outils de menuiserie traditionnels sur établi" className="rounded-sm shadow-lg h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900">Trois générations d'excellence</h2>
            <div className="w-16 h-1 bg-wood-600"></div>
            <p className="text-stone-700 leading-relaxed">
              Fondée en 1965 par Henri Monnet au cœur du Valais, Bois & Tradition a commencé comme un modeste atelier de réparation. 
              Aujourd'hui, c'est une référence incontournable de l'ébénisterie de luxe dans les Alpes.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Nous perpétuons des techniques d'assemblage séculaires – tenons, mortaises, queues d'aronde – garantissant une longévité exceptionnelle à nos ouvrages. 
              Chaque pièce qui sort de notre atelier est le fruit de dizaines d'heures de travail minutieux.
            </p>
            <blockquote className="border-l-4 border-wood-400 pl-4 italic text-stone-600 bg-wood-50 p-4 rounded-r-md">
              "Respecter le bois, c'est comprendre qu'il continue de vivre une fois le meuble posé."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Nos Essences de Prédilection</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              La qualité d'un ouvrage commence par le choix rigoureux de la matière première.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Vieux Bois", 
                desc: "Récupéré sur d'anciennes granges, brossé et traité, il apporte une âme inimitable.", 
                image: "https://images.unsplash.com/photo-1688905446788-37bd7988f756?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              },
              { 
                title: "Épicéa", 
                desc: "Clair et lumineux, le roi des chalets alpins pour une ambiance traditionnelle.", 
                image: "https://images.unsplash.com/photo-1603666857955-f634e8b5d2bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              },
              { 
                title: "Mélèze", 
                desc: "Robuste et aux teintes rougeâtres chaudes, idéal pour l'intérieur comme l'extérieur.", 
                image: "https://images.unsplash.com/photo-1624949486968-d25ee7c6b59d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              },
              { 
                title: "Noyer", 
                desc: "Sombre, noble et élégant, parfait pour le mobilier contemporain haut de gamme.", 
                image: "https://images.unsplash.com/photo-1736506159893-22cca29b8018?q=80&w=733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              }
            ].map((wood, idx) => (
              <div key={idx} className="group relative bg-stone-800 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 w-full overflow-hidden relative">
                   <div className="absolute inset-0 bg-stone-950/30 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                   <img 
                      src={wood.image} 
                      alt={wood.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                   />
                </div>
                <div className="p-6 relative">
                  {/* Decorative accent line */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-wood-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <h3 className="font-serif text-xl font-bold mb-3 text-wood-50 transition-colors duration-300 group-hover:text-wood-300">{wood.title}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed group-hover:text-stone-300 transition-colors duration-300">{wood.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Du Croquis à la Pose</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: PenTool, title: "Conception", desc: "Étude personnalisée, plans 3D et choix des matériaux avec vous." },
              { icon: Leaf, title: "Sélection", desc: "Choix rigoureux des meilleures planches et placages en scierie." },
              { icon: Hammer, title: "Fabrication", desc: "Usinage de précision et finitions manuelles dans notre atelier." },
              { icon: CheckCircle, title: "Installation", desc: "Pose soignée par nos équipes pour un ajustement parfait." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                 {/* Connector Line */}
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-wood-200 -z-10"></div>
                )}
                <div className="h-16 w-16 bg-white border-2 border-wood-600 rounded-full flex items-center justify-center text-wood-700 mb-6 z-10">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-stone-600 px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavoirFaire;