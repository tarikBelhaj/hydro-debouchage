import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ShieldCheck, Menu, X, MapPin } from 'lucide-react';
import { COMPANY_PHONE, CITIES } from '../constants';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  
  const getCurrentCity = () => {
    const params = new URLSearchParams(location.search);
    const cityParam = params.get('city');
    
    if (cityParam) {
      return CITIES.find(c => c.name.toLowerCase() === cityParam.toLowerCase());
    }
    
    const pathMatch = location.pathname.match(/\/ville\/([^/]+)/);
    if (pathMatch) {
      const citySlug = pathMatch[1];
      return CITIES.find(c => c.name.toLowerCase().replace(/[éè]/g, 'e').replace(/â/g, 'a') === citySlug);
    }
    
    return null;
  };

  const currentCity = getCurrentCity();
  
  const getCitiesToDisplay = () => {
    if (currentCity) {
      return CITIES.filter(c => c.province === currentCity.province && c.name !== currentCity.name).slice(0, 3);
    }
    
    const provinces = ['Liège', 'Namur', 'Luxembourg', 'Hainaut', 'Brabant wallon'];
    const mixedCities: any[] = [];
    
    provinces.forEach(province => {
      const cityFromProvince = CITIES.find(c => c.province === province);
      if (cityFromProvince) mixedCities.push(cityFromProvince);
    });
    
    return mixedCities.slice(0, 5);
  };

  const displayCities = getCitiesToDisplay();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-red-200 hover:hover:shadow-red-300 transition-all flex items-center gap-2 animate-pulse-slow"
          >
            <Phone className="w-5 h-5" />
            {COMPANY_PHONE}
          </a>
        </nav>

        <button 
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {displayCities.length > 0 && (
        <div className="border-t border-gray-100 bg-slate-50">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-center gap-2 flex-wrap text-sm">
              <span className="text-slate-500 font-medium flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {currentCity ? `Aussi disponible dans la province de ${currentCity.province}` : 'Nos zones d\'intervention'} :
              </span>
              {displayCities.map((city, index) => (
                <React.Fragment key={city.name}>
                  <Link 
                    to={`/ville/${city.name.toLowerCase().replace(/[éè]/g, 'e').replace(/â/g, 'a')}`}
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                  >
                    {city.name}
                  </Link>
                  {index < displayCities.length - 1 && <span className="text-slate-300">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

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