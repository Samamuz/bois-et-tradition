import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-wood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Mountain className="h-8 w-8" />
              <span className="font-serif text-2xl font-bold">Bois & Tradition</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              L'excellence de la menuiserie artisanale suisse depuis 1965. 
              Nous façonnons le bois avec passion pour créer des intérieurs d'exception.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li><Link to="/" className="hover:text-wood-300 transition-colors">Accueil</Link></li>
              <li><Link to="/savoir-faire" className="hover:text-wood-300 transition-colors">Notre Savoir-Faire</Link></li>
              <li><Link to="/realisations" className="hover:text-wood-300 transition-colors">Réalisations</Link></li>
              <li><Link to="/services" className="hover:text-wood-300 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-wood-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Nos Expertises</h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>Agencement Intérieur</li>
              <li>Cuisines Sur Mesure</li>
              <li>Restauration Vieux Bois</li>
              <li>Mobilier Haut de Gamme</li>
              <li>Escaliers & Garde-corps</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Atelier</h3>
            <ul className="space-y-4 text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-wood-400 flex-shrink-0" />
                <span>
                  Route des Mélèzes 14,<br />
                  1936 Verbier, Suisse
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-wood-400 flex-shrink-0" />
                <span>+41 27 771 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-wood-400 flex-shrink-0" />
                <span>atelier@boistradition.ch</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Bois & Tradition. Tous droits réservés. Créé avec passion dans les Alpes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
