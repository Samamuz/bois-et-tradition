import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Projet Cuisine',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulation d'un envoi réseau
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', type: 'Projet Cuisine', message: '' });
    
    // Reset status après quelques secondes si on veut permettre un nouvel envoi
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="pt-20 min-h-screen bg-wood-50">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-wood-400 uppercase tracking-widest text-sm font-bold">À votre écoute</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">Contactez-nous</h1>
          <p className="text-xl text-stone-400 font-light leading-relaxed">
            Parlons de votre projet autour d'un café dans notre atelier ou chez vous.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Nos Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-wood-700 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Atelier Principal</h3>
                    <p className="text-stone-600">Route des Mélèzes 14<br />1936 Verbier, Suisse</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-wood-700 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Téléphone</h3>
                    <p className="text-stone-600">+41 27 771 00 00</p>
                    <p className="text-xs text-stone-500 mt-1">Du lundi au vendredi, 8h - 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-wood-700 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Email</h3>
                    <p className="text-stone-600">atelier@boistradition.ch</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Route+des+Mélèzes+14+1936+Verbier+Suisse"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-stone-200 h-64 rounded-lg overflow-hidden relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Plan d'accès atelier" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-md shadow-lg text-sm font-bold text-stone-800 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-wood-600" />
                    Voir sur Google Maps
                 </span>
              </div>
            </a>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl relative overflow-hidden">
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">Envoyez-nous un message</h2>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Message envoyé !</h3>
                <p className="text-stone-600 text-center mb-6">Merci de nous avoir contactés.<br/>Nous vous répondrons sous 48h.</p>
                <Button onClick={() => setStatus('idle')} variant="secondary">Envoyer un autre message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === 'submitting'}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:ring-2 focus:ring-wood-500 focus:border-transparent outline-none transition-all bg-stone-50 disabled:opacity-50"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={status === 'submitting'}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:ring-2 focus:ring-wood-500 focus:border-transparent outline-none transition-all bg-stone-50 disabled:opacity-50"
                      placeholder="+41 79 000 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:ring-2 focus:ring-wood-500 focus:border-transparent outline-none transition-all bg-stone-50 disabled:opacity-50"
                    placeholder="jean@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-bold text-stone-700 mb-2">Type de projet</label>
                  <select
                    id="type"
                    name="type"
                    disabled={status === 'submitting'}
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:ring-2 focus:ring-wood-500 focus:border-transparent outline-none transition-all bg-stone-50 disabled:opacity-50"
                  >
                    <option>Projet Cuisine</option>
                    <option>Mobilier sur mesure</option>
                    <option>Rénovation complète</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === 'submitting'}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:ring-2 focus:ring-wood-500 focus:border-transparent outline-none transition-all bg-stone-50 disabled:opacity-50"
                    placeholder="Décrivez brièvement votre projet..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;