import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Star,
  ArrowRight,
  X
} from 'lucide-react';
import { CITIES, SERVICES, TESTIMONIALS, COMPANY_PHONE } from '../constants';
import StickyCallBtn from '../components/StickyCallBtn';

const CityPage = () => {
  const { cityName } = useParams();
  const location = useLocation();
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // Trouver la ville depuis l'URL
  useEffect(() => {
    const foundCity = CITIES.find(
      c => c.name.toLowerCase().replace(/[éèê]/g, 'e') === cityName?.toLowerCase().replace(/[éèê]/g, 'e')
    );
    
    if (foundCity) {
      setSelectedCity(foundCity);
      document.title = `Débouchage ${foundCity.name} - Intervention Urgente 24/7 | Hydro Débouchage`;
    } else {
      // Si ville non trouvée, rediriger vers l'accueil
      window.location.href = '/';
    }
  }, [cityName]);

  // Gestion du scroll vers sections
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Initialiser EmailJS
  useEffect(() => {
    emailjs.init('0bUrBm2nXDsBPxsGc');
  }, []);

  // Handle Contact Form Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    if (!formRef.current) return;

    const SERVICE_ID = 'service_gvbzqad';
    const TEMPLATE_ID = 'template_9k0kdvc';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current)
    .then(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
      if (formRef.current) formRef.current.reset();
    }, (error) => {
      console.error('FAILED...', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    });
  };

  // Trier les témoignages pour la ville
  const sortedTestimonials = [...TESTIMONIALS].sort((a, b) => {
    if (a.location === selectedCity.name) return -1;
    if (b.location === selectedCity.name) return 1;
    return 0;
  });

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-10 -skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-blue-200">
            <Link to="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-bold">{selectedCity.name}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-700 rounded-full px-4 py-1 text-sm font-medium mb-6 text-blue-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Technicien disponible maintenant à {selectedCity.name}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Débouchage urgent <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  à {selectedCity.name}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-4">
                <strong className="text-white">Service local {selectedCity.name} ({selectedCity.zip})</strong>
              </p>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg mx-auto md:mx-0">
                WC, évier, égout bouché à {selectedCity.name} ? Notre équipe locale intervient en moins de 30 minutes dans tout {selectedCity.name} et ses quartiers. Prix transparents et devis gratuit.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a 
                  href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/20 transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Appeler {selectedCity.name}
                </a>
                <a 
                  href="#contact"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3"
                >
                  Devis gratuit {selectedCity.name}
                </a>
              </div>
            </div>

            <div className="w-full md:w-[450px]">
              <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                  <h3 className="font-bold text-xl">Votre expert débouchage à {selectedCity.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold">Intervention Express</h4>
                      <p className="text-sm text-slate-500">Arrivée rapide partout à {selectedCity.name}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold">Prix Fixe Garanti</h4>
                      <p className="text-sm text-slate-500">Tarif annoncé avant intervention</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-600 mt-1">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold">Garantie {selectedCity.name}</h4>
                      <p className="text-sm text-slate-500">Débouché ou remboursé</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Services de Débouchage à {selectedCity.name}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Intervention rapide dans tout {selectedCity.name} ({selectedCity.zip}) et ses quartiers. 
              Équipement professionnel haute pression et caméra d'inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <p className="text-sm text-blue-600 font-semibold">Disponible à {selectedCity.name}</p>
                <a href="#contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 mt-2">
                  Demander un devis <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUARTIERS SECTION */}
      {selectedCity.neighborhoods && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Intervention dans tous les quartiers de {selectedCity.name}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Notre équipe locale intervient rapidement partout à {selectedCity.name}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {selectedCity.neighborhoods.map((hood: string) => (
                <span key={hood} className="bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full border border-blue-200">
                  {hood}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA STRIP */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Urgence débouchage à {selectedCity.name} ?
            </h2>
            <p className="text-blue-200">Intervention rapide partout à {selectedCity.name}. Appelez maintenant.</p>
          </div>
          <a 
            href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-3 whitespace-nowrap"
          >
            <Phone className="w-6 h-6" />
            {COMPANY_PHONE}
          </a>
        </div>
      </section>

      {/* AVIS */}
      <section id="avis" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-10 text-slate-900 text-center">
            Avis clients {selectedCity.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sortedTestimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-4">"{t.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-900">{t.name}</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-10 md:w-1/2 bg-blue-700">
              <h3 className="text-2xl font-bold mb-4">Devis gratuit {selectedCity.name}</h3>
              <p className="text-blue-100 mb-8">
                Intervention rapide à {selectedCity.name}. Un technicien vous rappelle dans les 5 minutes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>Rappel immédiat</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span>Aucun engagement</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span>Service 24h/24</span>
                </li>
              </ul>
            </div>

            <div className="p-10 md:w-1/2 bg-white text-slate-900">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Demande envoyée !</h4>
                  <p className="text-slate-600">Un technicien local de {selectedCity.name} va vous rappeler.</p>
                </div>
              ) : formStatus === 'error' ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                    <X className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Erreur technique</h4>
                  <p className="text-slate-600 mb-4">Le formulaire n'a pas pu être envoyé.</p>
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="text-blue-600 font-bold underline">
                    Appeler directement le {COMPANY_PHONE}
                  </a>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Nom complet</label>
                    <input 
                      name="user_name" 
                      required 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                      placeholder="Votre nom" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Téléphone</label>
                    <input 
                      name="user_phone" 
                      required 
                      type="tel" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                      placeholder="04XX..." 
                    />
                  </div>
                  <input 
                    type="hidden" 
                    name="user_city" 
                    value={`${selectedCity.name} (${selectedCity.zip})`}
                  />
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Problème</label>
                    <select 
                      name="user_problem" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option>WC Bouché</option>
                      <option>Évier / Lavabo</option>
                      <option>Égouts</option>
                      <option>Mauvaises odeurs</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Envoi en cours...' : `Appeler ${selectedCity.name} maintenant`}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <StickyCallBtn />
    </>
  );
};

export default CityPage;