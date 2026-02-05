import { City, Service, Testimonial } from './types';
import { Wrench, Droplets, ArrowDownToLine, Bath, ShieldCheck, Clock } from 'lucide-react';

export const CITIES: City[] = [
  { 
    name: 'Liège', 
    zip: '4000', 
    region: 'Liège',
    neighborhoods: ['Guillemins', 'Outremeuse', 'Saint-Léonard', 'Angleur', 'Grivegnée', 'Rocourt', 'Bressoux', 'Sclessin'],
    agentName: 'Max',
    localDescription: 'Nos équipes interviennent régulièrement à Liège, notamment dans les quartiers historiques du centre-ville et autour de la gare des Guillemins. Nous connaissons parfaitement les spécificités du réseau d\'assainissement liégeois.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Namur', 
    zip: '5000', 
    region: 'Namur',
    neighborhoods: ['Jambes', 'Salzinnes', 'Saint-Servais', 'Bouge', 'Erpent', 'Wépion', 'Belgrade'],
    agentName: 'Laurent',
    localDescription: 'À Namur, capitale wallonne, nous intervenons rapidement dans tous les quartiers, du centre historique aux communes périphériques comme Jambes et Saint-Servais.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Charleroi', 
    zip: '6000', 
    region: 'Hainaut',
    neighborhoods: ['Gosselies', 'Marchienne', 'Jumet', 'Gilly', 'Montignies', 'Marcinelle', 'Couillet'],
    agentName: 'Karim',
    localDescription: 'Notre présence permanente à Charleroi nous permet d\'intervenir en urgence dans toute la métropole, de Gosselies à Marcinelle.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Mons', 
    zip: '7000', 
    region: 'Hainaut',
    neighborhoods: ['Jemappes', 'Cuesmes', 'Nimy', 'Ghlin', 'Havré', 'Maisières'],
    agentName: 'Sophie',
    localDescription: 'Basés à Mons, nous couvrons l\'ensemble de la région montoise, du centre-ville historique aux villages périphériques.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'La Louvière', 
    zip: '7100', 
    region: 'Hainaut',
    neighborhoods: ['Houdeng', 'Maurage', 'Saint-Vaast', 'Trivières', 'Haine-Saint-Paul', 'Centre-ville'],
    agentName: 'Thomas',
    localDescription: 'À La Louvière, nous intervenons quotidiennement dans tous les quartiers, avec une expertise particulière des installations du Centre.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Tournai', 
    zip: '7500', 
    region: 'Hainaut',
    neighborhoods: ['Centre-ville', 'Kain', 'Froyennes', 'Maulde', 'Willemeau', 'Templeuve'],
    agentName: 'Julien',
    localDescription: 'Notre équipe tournaisienne connaît parfaitement le réseau de la plus ancienne ville de Belgique et intervient dans toute l\'agglomération.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Wavre', 
    zip: '1300', 
    region: 'Brabant wallon',
    neighborhoods: ['Centre-ville', 'Bierges', 'Limal', 'Basse-Wavre', 'Haute-Wavre'],
    agentName: 'Nicolas',
    localDescription: 'Présents à Wavre et dans tout le Brabant wallon, nous intervenons rapidement dans les zones résidentielles et commerciales.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Nivelles', 
    zip: '1400', 
    region: 'Brabant wallon',
    neighborhoods: ['Centre-ville', 'Baulers', 'Thines', 'Bornival', 'Monstreux'],
    agentName: 'David',
    localDescription: 'À Nivelles, nous couvrons le centre historique et tous les villages environnants avec une grande réactivité.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Arlon', 
    zip: '6700', 
    region: 'Luxembourg',
    neighborhoods: ['Centre-ville', 'Bonnert', 'Heinsch', 'Toernich', 'Sterpenich'],
    agentName: 'Sarah',
    localDescription: 'Dans la province du Luxembourg, notre base d\'Arlon nous permet d\'intervenir rapidement dans toute la région frontalière.',
    avgResponseTime: '35-50 min'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'wc',
    title: 'Débouchage WC',
    description: 'Vos toilettes sont bouchées ? Intervention rapide pour éviter tout débordement.',
    icon: 'Bath',
  },
  {
    id: 'sink',
    title: 'Évier & Lavabo',
    description: 'Écoulement lent ou bloqué dans la cuisine ou la salle de bain.',
    icon: 'Droplets',
  },
  {
    id: 'sewer',
    title: 'Égouts & Canalisations',
    description: 'Hydrocurage haute pression pour nettoyer vos canalisations en profondeur.',
    icon: 'ArrowDownToLine',
  },
  {
    id: 'inspection',
    title: 'Inspection Caméra',
    description: 'Diagnostic précis par caméra endoscopique pour localiser le bouchon.',
    icon: 'ShieldCheck',
  },
  {
    id: 'emergency',
    title: 'Urgence 24/7',
    description: 'Une équipe de garde prête à intervenir nuit, week-end et jours fériés.',
    icon: 'Clock',
  },
  {
    id: 'maintenance',
    title: 'Entretien & Curage',
    description: 'Prévention des bouchons et mauvaises odeurs.',
    icon: 'Wrench',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Jean Dubois',
    location: 'Liège',
    text: 'Intervention en moins de 45 minutes un dimanche soir. Le technicien était poli et efficace. Prix annoncé au téléphone respecté.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marie Laurent',
    location: 'Namur',
    text: 'Très satisfaite. Mon évier était complètement bloqué, ils ont utilisé la haute pression et tout est rentré dans l\'ordre.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Pierre Michaux',
    location: 'Charleroi',
    text: 'Service honnête. Pas de mauvaise surprise sur la facture. Je recommande pour les urgences.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Sophie Renard',
    location: 'Mons',
    text: 'Rapide et efficace. Le technicien connaissait bien le quartier et est arrivé très vite.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Thomas Leroy',
    location: 'Tournai',
    text: 'Appelé pour un WC bouché un samedi après-midi. Arrivé en 30 minutes, problème réglé en 15 minutes. Tarif correct.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Caroline Petit',
    location: 'Wavre',
    text: 'Canalisations bouchées au sous-sol. Diagnostic rapide avec caméra, curage efficace. Très pro.',
    rating: 5,
  },
];

export const COMPANY_PHONE = "0478 50 50 50";