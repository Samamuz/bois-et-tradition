import React from 'react';
import { Pencil, Wrench, Armchair, Users, Map, Clock } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-wood-400 uppercase tracking-widest text-sm font-bold">Expertise</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">Nos Services</h1>
          <p className="text-xl text-stone-400 font-light leading-relaxed">
            L'accompagnement complet pour vos projets d'exception.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              icon: Pencil,
              title: "Création Sur Mesure",
              desc: "Du concept initial à la réalisation finale. Nous concevons cuisines, dressings, bibliothèques et mobiliers parfaitement adaptés à vos espaces et à votre style de vie."
            },
            {
              icon: Wrench,
              title: "Restauration",
              desc: "Redonner vie aux meubles anciens et boiseries d'époque. Nous maîtrisons les techniques de décapage doux, de greffe de bois et de finition traditionnelle."
            },
            {
              icon: Armchair,
              title: "Conseil en Aménagement",
              desc: "Nous ne sommes pas seulement exécutants. Nous vous conseillons sur les volumes, la circulation et les harmonies de bois pour créer une atmosphère 'chalet chic' cohérente."
            },
            {
              icon: Users,
              title: "Partenariats Pro",
              desc: "Collaboration étroite avec les architectes d'intérieur et décorateurs. Nous comprenons vos contraintes techniques et respectons scrupuleusement les délais."
            }
          ].map((service, idx) => (
            <div key={idx} className="flex gap-6 p-6 rounded-lg hover:bg-wood-50 transition-colors border border-transparent hover:border-wood-100">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-wood-100 text-wood-800 rounded-full flex items-center justify-center">
                  <service.icon className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intervention Area & Pricing */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 space-y-8">
                <div>
                  <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-900 mb-4">
                    <Map className="h-6 w-6 text-wood-600" />
                    Zone d'intervention
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Basés à Verbier, nous intervenons principalement en Suisse Romande et dans les Alpes françaises :
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-stone-700 text-sm font-medium">
                    <li className="flex items-center"><span className="w-2 h-2 bg-wood-500 rounded-full mr-2"></span> Valais (Verbier, Crans-Montana, Zermatt)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-wood-500 rounded-full mr-2"></span> Vaud (Lausanne, Montreux, Pays-d'Enhaut)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-wood-500 rounded-full mr-2"></span> Genève</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-wood-500 rounded-full mr-2"></span> Haute-Savoie (Megève, Chamonix)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-stone-900 mb-4">
                    <Clock className="h-6 w-6 text-wood-600" />
                    Tarification & Délais
                  </h3>
                  <p className="text-stone-600">
                    Chaque projet étant unique, nous ne proposons pas de grille tarifaire fixe. 
                    Cependant, nous nous engageons à vous fournir un <strong>devis détaillé et personnalisé sous 48h</strong> après notre première visite ou réception de vos plans.
                  </p>
                </div>

                <div className="pt-4">
                   <Button to="/contact">Demander un rendez-vous</Button>
                </div>
              </div>
              <div className="relative min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="plan d'architecte" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;