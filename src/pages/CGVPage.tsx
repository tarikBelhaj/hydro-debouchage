import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const CGVPage = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold">Conditions Générales de Vente</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Objet</h2>
            <div className="text-slate-700 space-y-3">
              <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Hydro Débouchage Wallonie et ses clients pour la fourniture de services de débouchage, curage et assainissement.</p>
              <p>Toute commande de prestation implique l'acceptation sans réserve par le client des présentes CGV.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Prestations proposées</h2>
            <div className="text-slate-700 space-y-3">
              <p>Hydro Débouchage Wallonie propose les services suivants :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Débouchage de WC, éviers, lavabos, baignoires, douches</li>
                <li>Curage et nettoyage de canalisations</li>
                <li>Débouchage d'égouts</li>
                <li>Inspection par caméra endoscopique</li>
                <li>Hydrocurage haute pression</li>
                <li>Vidange de fosses septiques</li>
                <li>Interventions d'urgence 24h/24, 7j/7</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Devis et commande</h2>
            <div className="text-slate-700 space-y-3">
              <p><strong>3.1. Demande de devis</strong></p>
              <p>Tout devis peut être demandé gratuitement et sans engagement par téléphone au {COMPANY_PHONE} ou via le formulaire de contact du site web.</p>
              
              <p className="mt-4"><strong>3.2. Validité du devis</strong></p>
              <p>Les devis sont valables 30 jours à compter de leur émission, sauf mention contraire.</p>
              
              <p className="mt-4"><strong>3.3. Acceptation</strong></p>
              <p>Le devis signé et accompagné de la mention "Bon pour accord" vaut commande ferme. Pour les interventions d'urgence, l'accord verbal du client vaut acceptation du devis communiqué par téléphone.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Prix</h2>
            <div className="text-slate-700 space-y-3">
              <p><strong>4.1. Tarification</strong></p>
              <p>Les prix sont exprimés en euros, toutes taxes comprises (TTC), TVA belge applicable au taux en vigueur.</p>
              
              <p className="mt-4"><strong>4.2. Frais supplémentaires</strong></p>
              <p>Des frais supplémentaires peuvent s'appliquer dans les cas suivants :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Interventions les dimanches et jours fériés</li>
                <li>Interventions nocturnes (entre 20h et 8h)</li>
                <li>Travaux nécessitant du matériel spécifique non prévu au devis initial</li>
                <li>Difficultés d'accès exceptionnelles</li>
              </ul>
              <p className="mt-2">Ces frais sont systématiquement communiqués au client avant intervention et soumis à son acceptation.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Modalités de paiement</h2>
            <div className="text-slate-700 space-y-3">
              <p><strong>5.1. Échéance</strong></p>
              <p>Le paiement est exigible immédiatement à la fin de l'intervention, sauf accord particulier écrit.</p>
              
              <p className="mt-4"><strong>5.2. Moyens de paiement acceptés</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Espèces</li>
                <li>Carte bancaire</li>
                <li>Virement bancaire</li>
                <li>Bancontact</li>
              </ul>
              
              <p className="mt-4"><strong>5.3. Retard de paiement</strong></p>
              <p>En cas de retard de paiement, des pénalités de retard au taux légal seront automatiquement appliquées, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Exécution des prestations</h2>
            <div className="text-slate-700 space-y-3">
              <p><strong>6.1. Délais d'intervention</strong></p>
              <p>Nous nous engageons à intervenir dans les meilleurs délais. Pour les urgences, nous visons une intervention dans l'heure suivant l'appel, sous réserve de disponibilité.</p>
              
              <p className="mt-4"><strong>6.2. Accès au site</strong></p>
              <p>Le client s'engage à faciliter l'accès aux lieux d'intervention et à fournir toutes les informations nécessaires à la bonne exécution de la prestation.</p>
              
              <p className="mt-4"><strong>6.3. Empêchement</strong></p>
              <p>Si l'intervention ne peut être réalisée du fait du client (absence, accès impossible, informations erronées), des frais de déplacement pourront être facturés.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Garanties</h2>
            <div className="text-slate-700 space-y-3">
              <p><strong>7.1. Garantie de résultat</strong></p>
              <p>Nous garantissons le débouchage effectif des canalisations traitées. Si le problème persiste dans les 48 heures suivant notre intervention, nous intervenons à nouveau gratuitement.</p>
              
              <p className="mt-4"><strong>7.2. Exclusions</strong></p>
              <p>La garantie ne s'applique pas en cas de :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nouveau bouchon dû à une utilisation inappropriée</li>
                <li>Dégradation des installations postérieure à notre intervention</li>
                <li>Vice de construction ou défaut structurel de la canalisation</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Responsabilité</h2>
            <div className="text-slate-700 space-y-3">
              <p><strong>8.1. Assurance</strong></p>
              <p>Hydro Débouchage Wallonie est couvert par une assurance responsabilité civile professionnelle pour tous dommages causés dans le cadre de ses interventions.</p>
              
              <p className="mt-4"><strong>8.2. Limitation</strong></p>
              <p>Notre responsabilité est limitée aux dommages directs et prévisibles. Nous ne pourrons être tenus responsables des dommages indirects (perte d'exploitation, manque à gagner, etc.).</p>
              
              <p className="mt-4"><strong>8.3. Force majeure</strong></p>
              <p>Nous ne pourrons être tenus responsables en cas de force majeure ou d'événements hors de notre contrôle (catastrophe naturelle, grève, etc.).</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Annulation</h2>
            <div className="text-slate-700 space-y-3">
              <p><strong>9.1. Par le client</strong></p>
              <p>Toute annulation doit être notifiée par téléphone ou email. En cas d'annulation moins de 2 heures avant l'intervention prévue, des frais de déplacement de 50 euros pourront être facturés.</p>
              
              <p className="mt-4"><strong>9.2. Par Hydro Débouchage</strong></p>
              <p>Nous nous réservons le droit d'annuler une intervention en cas de force majeure ou d'impossibilité technique. Le client en sera informé dans les meilleurs délais et aucun frais ne sera facturé.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Droit de rétractation</h2>
            <div className="text-slate-700 space-y-3">
              <p>Conformément à la législation belge, le droit de rétractation ne s'applique pas aux prestations de services dont l'exécution a commencé, avec l'accord du consommateur, avant la fin du délai de rétractation.</p>
              <p>Pour les interventions d'urgence réalisées immédiatement, le droit de rétractation ne peut donc être exercé.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Réclamations</h2>
            <div className="text-slate-700 space-y-3">
              <p>Toute réclamation doit être adressée :</p>
              <ul className="list-none pl-0 space-y-1">
                <li><strong>Par téléphone :</strong> {COMPANY_PHONE}</li>
                <li><strong>Par email :</strong> [À compléter]</li>
              </ul>
              <p className="mt-3">Nous nous engageons à traiter toute réclamation dans un délai de 15 jours ouvrables.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Protection des données personnelles</h2>
            <div className="text-slate-700 space-y-3">
              <p>Les données personnelles collectées sont traitées conformément à notre <Link to="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</Link> et au RGPD.</p>
              <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Droit applicable et litiges</h2>
            <div className="text-slate-700 space-y-3">
              <p><strong>13.1. Droit applicable</strong></p>
              <p>Les présentes CGV sont régies par le droit belge.</p>
              
              <p className="mt-4"><strong>13.2. Médiation</strong></p>
              <p>En cas de litige, nous privilégions une solution amiable. À défaut, vous pouvez recourir au Service de Médiation pour le Consommateur.</p>
              
              <p className="mt-4"><strong>13.3. Juridiction compétente</strong></p>
              <p>À défaut de résolution amiable, les tribunaux belges seront seuls compétents.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact</h2>
            <div className="text-slate-700 space-y-2">
              <p>Pour toute question concernant ces conditions générales de vente :</p>
              <p><strong>Hydro Débouchage Wallonie</strong></p>
              <p><strong>Téléphone :</strong> {COMPANY_PHONE}</p>
              <p><strong>Email :</strong> [À compléter]</p>
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

export default CGVPage;
