import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800 pb-24 md:pb-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Hydro Débouchage Wallonie</h4>
          <p className="mb-4">Votre partenaire local de confiance pour tous travaux d&apos;assainissement et de débouchage.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-4 h-4" /> {COMPANY_PHONE}
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail className="w-4 h-4" /> 
              <a href="mailto:info@hydrodebouchage.be" className="hover:text-blue-400 transition-colors">
                info@hydrodebouchage.be
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2">
            <li><Link to="/#services" className="hover:text-white">Débouchage WC</Link></li>
            <li><Link to="/#services" className="hover:text-white">Curage égouts</Link></li>
            <li><Link to="/#services" className="hover:text-white">Inspection caméra</Link></li>
            <li><Link to="/#services" className="hover:text-white">Égouts & Canalisations</Link></li>
            <li><Link to="/#services" className="hover:text-white">Évier & Lavabo</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Zones d&apos;intervention</h4>
          <ul className="space-y-2">
            <li><Link to="/ville/liege" className="hover:text-white">Liège</Link></li>
            <li><Link to="/ville/namur" className="hover:text-white">Namur</Link></li>
            <li><Link to="/ville/charleroi" className="hover:text-white">Charleroi</Link></li>
            <li><Link to="/ville/mons" className="hover:text-white">Mons</Link></li>
            <li><Link to="/ville/tournai" className="hover:text-white">Tournai</Link></li>
            <li><Link to="/ville/la-louviere" className="hover:text-white">La Louvière</Link></li>
            <li><Link to="/ville/wavre" className="hover:text-white">Wavre</Link></li>
            <li><Link to="/ville/nivelles" className="hover:text-white">Nivelles</Link></li>
            <li><Link to="/ville/arlon" className="hover:text-white">Arlon</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Mentions</h4>
          <ul className="space-y-2">
            <li><Link to="/a-propos" className="hover:text-white">À Propos</Link></li>
            <li><Link to="/mentions-legales" className="hover:text-white">Mentions Légales</Link></li>
            <li><Link to="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
            <li><Link to="/cgv" className="hover:text-white">CGV</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center">
        &copy; {new Date().getFullYear()} Hydro Débouchage Wallonie. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;