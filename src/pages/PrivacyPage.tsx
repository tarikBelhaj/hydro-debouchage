import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const PrivacyPage = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold">Politique de Confidentialité</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <div className="text-slate-700 space-y-3">
              <p>Hydro Débouchage Wallonie attache une grande importance à la protection de vos données personnelles et au respect de votre vie privée.</p>
              <p>Cette politique de confidentialité explique quelles données nous collectons, pourquoi nous les collectons, comment nous les utilisons et quels sont vos droits.</p>
              <p>Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Responsable du traitement</h2>
            <div className="text-slate-700 space-y-2">
              <p><strong>Raison sociale :</strong> Hydro Débouchage Wallonie</p>
              <p><strong>Directeur de publication :</strong> Tarik Belhaj</p>
              <p><strong>Téléphone :</strong> {COMPANY_PHONE}</p>
              <p><strong>Email :</strong> [À compléter]</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Données collectées</h2>
            <div className="text-slate-700 space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">3.1. Données fournies directement par vous</h3>
                <p>Lorsque vous remplissez notre formulaire de contact, nous collectons :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Votre nom complet</li>
                  <li>Votre numéro de téléphone</li>
                  <li>Votre ville d'intervention</li>
                  <li>La nature de votre problème (type de débouchage)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">3.2. Données collectées automatiquement</h3>
                <p>Lors de votre navigation sur notre site, nous pouvons collecter :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Votre adresse IP</li>
                  <li>Votre type de navigateur</li>
                  <li>Les pages consultées</li>
                  <li>La date et l'heure de visite</li>
                  <li>Le temps passé sur le site</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Finalités du traitement</h2>
            <div className="text-slate-700 space-y-3">
              <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Gestion des demandes de devis :</strong> Traiter votre demande et vous recontacter dans les meilleurs délais</li>
                <li><strong>Prestation de services :</strong> Organiser l'intervention de nos techniciens</li>
                <li><strong>Communication :</strong> Vous tenir informé de nos services et promotions (avec votre consentement)</li>
                <li><strong>Amélioration du site :</strong> Analyser l'utilisation du site pour améliorer l'expérience utilisateur</li>
                <li><strong>Respect des obligations légales :</strong> Conformité fiscale et comptable</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Base légale du traitement</h2>
            <div className="text-slate-700 space-y-3">
              <p>Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Exécution d'un contrat :</strong> Pour répondre à votre demande de devis et réaliser la prestation</li>
                <li><strong>Intérêt légitime :</strong> Pour améliorer nos services et notre site web</li>
                <li><strong>Consentement :</strong> Pour l'envoi de communications marketing (vous pouvez retirer votre consentement à tout moment)</li>
                <li><strong>Obligation légale :</strong> Pour respecter nos obligations fiscales et comptables</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Durée de conservation</h2>
            <div className="text-slate-700 space-y-3">
              <p>Vos données personnelles sont conservées uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Demandes de devis non converties :</strong> 3 ans maximum</li>
                <li><strong>Clients :</strong> Durée de la relation commerciale + 10 ans (obligations comptables)</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              </ul>
              <p className="mt-3">À l'issue de ces délais, vos données sont supprimées ou anonymisées.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Destinataires des données</h2>
            <div className="text-slate-700 space-y-3">
              <p>Vos données personnelles sont destinées uniquement :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Au personnel habilité de Hydro Débouchage Wallonie</li>
                <li>À nos techniciens pour l'organisation des interventions</li>
                <li>À nos prestataires techniques (hébergement web, service d'emailing)</li>
              </ul>
              <p className="mt-3 font-semibold">Nous ne vendons jamais vos données à des tiers.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Transfert de données hors UE</h2>
            <div className="text-slate-700 space-y-3">
              <p>Vos données peuvent être transférées vers des pays situés hors de l'Union Européenne, notamment :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>États-Unis :</strong> Pour l'hébergement du site (Netlify) - garanties appropriées en place</li>
              </ul>
              <p>Ces transferts sont encadrés par des garanties appropriées conformément au RGPD.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Sécurité des données</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La destruction accidentelle ou illicite</li>
                <li>La perte accidentelle</li>
                <li>L'altération</li>
                <li>La divulgation ou l'accès non autorisés</li>
              </ul>
              <p className="mt-3">Notamment : chiffrement HTTPS, sauvegardes régulières, accès restreint aux données.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Vos droits</h2>
            <div className="text-slate-700 space-y-3">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                <li><strong>Droit de retirer votre consentement :</strong> À tout moment</li>
              </ul>
              <p className="mt-4">Pour exercer ces droits, contactez-nous :</p>
              <ul className="list-none pl-0 mt-2 space-y-1">
                <li><strong>Par téléphone :</strong> {COMPANY_PHONE}</li>
                <li><strong>Par email :</strong> [À compléter]</li>
              </ul>
              <p className="mt-4">Nous nous engageons à vous répondre dans un délai d'un mois maximum.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Cookies</h2>
            <div className="text-slate-700 space-y-3">
              <p>Notre site utilise des cookies pour améliorer votre expérience de navigation et réaliser des statistiques de visite.</p>
              <p>Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Cependant, certaines fonctionnalités du site pourraient être affectées.</p>
              <p>Pour plus d'informations sur les cookies que nous utilisons, consultez notre bannière de cookies lors de votre première visite.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Réclamation</h2>
            <div className="text-slate-700 space-y-3">
              <p>Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente :</p>
              <div className="bg-slate-50 p-4 rounded-lg mt-3">
                <p className="font-bold">Autorité de Protection des Données (APD)</p>
                <p>Rue de la Presse, 35</p>
                <p>1000 Bruxelles, Belgique</p>
                <p className="mt-2">Email : contact@apd-gba.be</p>
                <p>Site web : <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.autoriteprotectiondonnees.be</a></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Modifications</h2>
            <div className="text-slate-700 space-y-3">
              <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.</p>
              <p>En cas de modification substantielle, nous vous en informerons par un avis sur notre site web.</p>
              <p>Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.</p>
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

export default PrivacyPage;
