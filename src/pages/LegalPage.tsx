import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Mentions Légales</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Informations légales</h2>
            <div className="text-slate-700 space-y-2">
              <p><strong>Raison sociale :</strong> Hydro Débouchage Wallonie</p>
              <p><strong>Forme juridique :</strong> [À compléter]</p>
              <p><strong>Numéro d'entreprise :</strong> [À compléter]</p>
              <p><strong>Siège social :</strong> [Adresse complète à compléter]</p>
              <p><strong>Téléphone :</strong> {COMPANY_PHONE}</p>
              <p><strong>Email :</strong> [À compléter]</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Éditeur du site</h2>
            <div className="text-slate-700">
              <p>Le site www.hydro-debouchage-wallonie.be est édité par Hydro Débouchage Wallonie.</p>
              <p className="mt-2"><strong>Directeur de publication :</strong> Tarik Belhaj</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Hébergement</h2>
            <div className="text-slate-700 space-y-2">
              <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
              <p><strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA</p>
              <p><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.netlify.com</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Propriété intellectuelle</h2>
            <div className="text-slate-700 space-y-3">
              <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de Hydro Débouchage Wallonie ou fait l'objet d'une autorisation d'utilisation.</p>
              <p>Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de Hydro Débouchage Wallonie.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Protection des données personnelles</h2>
            <div className="text-slate-700 space-y-3">
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.</p>
              <p>Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers.</p>
              <p>Pour exercer vos droits, contactez-nous par email à [email à compléter] ou par téléphone au {COMPANY_PHONE}.</p>
              <p>Pour plus d'informations, consultez notre <Link to="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de confidentialité</Link>.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <div className="text-slate-700 space-y-3">
              <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite.</p>
              <p>Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du site.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation de responsabilité</h2>
            <div className="text-slate-700 space-y-3">
              <p>Hydro Débouchage Wallonie s'efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.</p>
              <p>L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>
              <p>Hydro Débouchage Wallonie ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation de celui-ci.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Liens hypertextes</h2>
            <div className="text-slate-700 space-y-3">
              <p>Ce site peut contenir des liens vers des sites externes. Hydro Débouchage Wallonie n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Droit applicable</h2>
            <div className="text-slate-700 space-y-3">
              <p>Les présentes mentions légales sont régies par le droit belge.</p>
              <p>Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux belges.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact</h2>
            <div className="text-slate-700 space-y-2">
              <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
              <p><strong>Par téléphone :</strong> {COMPANY_PHONE}</p>
              <p><strong>Par email :</strong> [Email à compléter]</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalPage;
