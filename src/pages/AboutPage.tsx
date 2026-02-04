import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Users, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const AboutPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="pt-10 pb-20 animate-in fade-in duration-500">
      
      {/* Hero Section À propos */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Notre Histoire</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            L'expertise du débouchage <br/>
            <span className="text-blue-600">au service de la Wallonie</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Fondée sur des valeurs de transparence et d'efficacité, Hydro Débouchage est devenue la référence du débouchage haute pression. Nous traitons chaque intervention comme si c'était chez nous : avec soin, propreté et rapidité.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-96">
          <img 
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=2000" 
            alt="Équipe technique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
            <div className="text-white">
              <div className="text-2xl font-bold">Une équipe certifiée</div>
              <p className="text-slate-200">Nos techniciens sont formés aux dernières technologies d'hydrocurage.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 text-white py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">10+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Années d'expérience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">5000+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Interventions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">30 min</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Délai moyen</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">98%</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Clients Satisfaits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pourquoi nous faisons la différence ?</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-xl h-fit">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Transparence Totale</h3>
                  <p className="text-slate-600">
                    Pas de surprise sur la facture. Nos tarifs sont annoncés avant l'intervention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-xl h-fit">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Résultat Garanti</h3>
                  <p className="text-slate-600">
                    Nous ne partons pas tant que l'écoulement n'est pas rétabli. Matériel haute pression 400 bars.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-xl h-fit">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Respect des lieux</h3>
                  <p className="text-slate-600">
                    Nos techniciens protègent la zone d'intervention et nettoient après leur passage.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
             <h3 className="font-bold text-xl mb-6">Nos engagements qualité</h3>
             <ul className="space-y-4">
               {[
                 "Agrément pour intervention assurance",
                 "Véhicules hydrocureurs < 3.5t",
                 "Matériel d'inspection vidéo HD",
                 "Techniciens locaux salariés",
                 "Devis gratuit par téléphone",
                 "Intervention 24h/24 et 7j/7"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-slate-700">
                   <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                   {item}
                 </li>
               ))}
             </ul>
             <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                <div className="text-sm text-slate-500 mb-2">Une question sur notre société ?</div>
                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  {COMPANY_PHONE}
                </a>
             </div>
          </div>
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl shadow-blue-600/20">
          <h2 className="text-3xl font-bold mb-4">Besoin d'une intervention rapide ?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Nos équipes sont prêtes à intervenir. Contactez-nous maintenant pour un devis gratuit.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Contacter un technicien <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;