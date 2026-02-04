import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Menu, X } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
              HYDRO<span className="text-blue-600">DÉBOUCHAGE</span>
            </h1>
            <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">
              Wallonie
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <Link to="/#services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link to="/a-propos" className="hover:text-blue-600 transition-colors">
            À Propos
          </Link>
          <Link to="/#avis" className="hover:text-blue-600 transition-colors">
            Avis Clients
          </Link>
          <a 
            href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-red-200 hover:shadow-red-300 transition-all flex items-center gap-2 animate-pulse-slow"
          >
            <Phone className="w-5 h-5" />
            {COMPANY_PHONE}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 space-y-4 font-medium text-lg text-center">
            <Link to="/#services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/a-propos" onClick={() => setIsMobileMenuOpen(false)}>
              À Propos
            </Link>
            <Link to="/#avis" onClick={() => setIsMobileMenuOpen(false)}>
              Avis
            </Link>
            <a 
              href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} 
              className="text-red-600 font-bold bg-red-50 py-3 rounded-lg"
            >
              URGENCE : {COMPANY_PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;