import React, { useState } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'Chalet Zermatt', category: 'Cuisine', location: 'Zermatt', image: 'https://images.unsplash.com/photo-1610733374054-59454fe657cd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Cuisine en vieux bois avec îlot central en pierre.' },
  { id: 2, title: 'Bibliothèque Le Noyer', category: 'Mobilier', location: 'Crans-Montana', image: 'https://images.unsplash.com/photo-1580628881159-4eae247a6bf5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Bibliothèque sur mesure intégrant un coin lecture cosy.' },
  { id: 3, title: 'Suite Panoramique', category: 'Architecture', location: 'Verbier', image: 'https://images.unsplash.com/photo-1548266482-9fa0558d7823?q=80&w=771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Habillage mural et plafond en épicéa brossé.' },
  { id: 4, title: 'Table des Conviviales', category: 'Mobilier', location: 'Gstaad', image: 'https://images.unsplash.com/photo-1732575966442-b2d665c080d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Table massive en chêne pour 12 personnes.' },
  { id: 5, title: 'Terrasse du Lac', category: 'Extérieur', location: 'Montreux', image: 'https://images.unsplash.com/photo-1725940896111-8df87cee4145?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Aménagement terrasse en mélèze imputrescible.' },
  { id: 6, title: 'Escalier Hélicoïdal', category: 'Architecture', location: 'Sion', image: 'https://images.unsplash.com/photo-1760845964105-fb6a5e96513d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Escalier pièce maîtresse, limon central bois.' },
  { id: 7, title: 'Dressing Luxe', category: 'Mobilier', location: 'Megève', image: 'https://plus.unsplash.com/premium_photo-1676320514018-2f5b7c5a701f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Dressing avec éclairage intégré et tiroirs feutrés.' },
  { id: 8, title: 'Cuisine Moderne', category: 'Cuisine', location: 'Genève', image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Alliance du noyer et du granit noir.' },
];

const categories = ['Tout', 'Cuisine', 'Architecture', 'Mobilier', 'Extérieur'];

const Realisations: React.FC = () => {
  const [filter, setFilter] = useState('Tout');

  const filteredProjects = filter === 'Tout' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20 min-h-screen bg-wood-50">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-wood-400 uppercase tracking-widest text-sm font-bold">Portfolio</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">Nos Réalisations</h1>
          <p className="text-xl text-stone-400 font-light leading-relaxed">
            Découvrez une sélection de nos projets les plus emblématiques, témoins de notre exigence et de notre créativité.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                filter === cat 
                  ? 'bg-wood-800 text-white shadow-lg' 
                  : 'bg-white text-stone-600 hover:bg-wood-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-sm shadow-sm overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-wood-900 uppercase tracking-wider rounded-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-stone-900">{project.title}</h3>
                  <span className="text-xs text-stone-500 italic">{project.location}</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button className="text-wood-700 text-sm font-bold hover:text-wood-900 transition-colors uppercase tracking-wide border-b border-transparent hover:border-wood-900 pb-0.5 inline-block">
                  Voir le détail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realisations;