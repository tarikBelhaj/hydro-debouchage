import { City, Service, Testimonial } from './types';
import { Wrench, Droplets, ArrowDownToLine, Bath, ShieldCheck, Clock } from 'lucide-react';

export const CITIES: City[] = [
  // PROVINCE DE LIÈGE
  { 
    name: 'Liège', 
    zip: '4000', 
    region: 'Liège',
    province: 'Liège',
    neighborhoods: ['Guillemins', 'Outremeuse', 'Saint-Léonard', 'Angleur', 'Grivegnée', 'Rocourt', 'Bressoux', 'Sclessin'],
    agentName: 'Max',
    localDescription: 'Nos équipes interviennent régulièrement à Liège, notamment dans les quartiers historiques du centre-ville et autour de la gare des Guillemins. Nous connaissons parfaitement les spécificités du réseau d\'assainissement liégeois.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Verviers', 
    zip: '4800', 
    region: 'Liège',
    province: 'Liège',
    neighborhoods: ['Centre-ville', 'Hodimont', 'Petit-Rechain', 'Lambermont', 'Dison'],
    agentName: 'Max',
    localDescription: 'À Verviers, nous intervenons rapidement dans toute la région verviétoise, du centre historique aux quartiers résidentiels. Notre expertise locale garantit une intervention efficace adaptée aux installations de la région.',
    avgResponseTime: '35-50 min'
  },
  { 
    name: 'Huy', 
    zip: '4500', 
    region: 'Liège',
    province: 'Liège',
    neighborhoods: ['Centre-ville', 'Tihange', 'Ben-Ahin', 'Statte', 'Neuville-sous-Huy'],
    agentName: 'Max',
    localDescription: 'Notre présence à Huy nous permet de couvrir efficacement la région hutoise et ses environs. Nous connaissons les particularités du réseau d\'assainissement local et intervenons en urgence 24h/24.',
    avgResponseTime: '35-50 min'
  },
  { 
    name: 'Eupen', 
    zip: '4700', 
    region: 'Liège',
    province: 'Liège',
    neighborhoods: ['Centre-ville', 'Kettenis', 'Nispert', 'Unterstadt', 'Stockem'],
    agentName: 'Max',
    localDescription: 'Dans la communauté germanophone, notre équipe d\'Eupen intervient rapidement pour tous vos problèmes de débouchage. Service disponible en français, allemand et néerlandais.',
    avgResponseTime: '40-55 min'
  },

  // PROVINCE DE NAMUR
  { 
    name: 'Namur', 
    zip: '5000', 
    region: 'Namur',
    province: 'Namur',
    neighborhoods: ['Jambes', 'Salzinnes', 'Saint-Servais', 'Bouge', 'Erpent', 'Wépion', 'Belgrade'],
    agentName: 'Laurent',
    localDescription: 'À Namur, capitale wallonne, nous intervenons rapidement dans tous les quartiers, du centre historique aux communes périphériques comme Jambes et Saint-Servais.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Dinant', 
    zip: '5500', 
    region: 'Namur',
    province: 'Namur',
    neighborhoods: ['Centre-ville', 'Anseremme', 'Bouvignes', 'Falmignoul', 'Furfooz'],
    agentName: 'Laurent',
    localDescription: 'À Dinant et dans la vallée de la Meuse, notre équipe locale intervient pour tous vos problèmes de débouchage. Connaissance approfondie du réseau d\'assainissement de la région dinantaise.',
    avgResponseTime: '40-55 min'
  },
  { 
    name: 'Gembloux', 
    zip: '5030', 
    region: 'Namur',
    province: 'Namur',
    neighborhoods: ['Centre-ville', 'Grand-Manil', 'Lonzée', 'Sauvenière', 'Beuzet'],
    agentName: 'Laurent',
    localDescription: 'Basés à Gembloux, nous couvrons toute la région gembloutoise et intervenons rapidement dans les zones résidentielles et agricoles. Expertise reconnue en débouchage et entretien de canalisations.',
    avgResponseTime: '35-50 min'
  },

  // PROVINCE DE LUXEMBOURG
  { 
    name: 'Arlon', 
    zip: '6700', 
    region: 'Luxembourg',
    province: 'Luxembourg',
    neighborhoods: ['Centre-ville', 'Bonnert', 'Heinsch', 'Toernich', 'Sterpenich'],
    agentName: 'Sarah',
    localDescription: 'Dans la province du Luxembourg, notre base d\'Arlon nous permet d\'intervenir rapidement dans toute la région frontalière.',
    avgResponseTime: '35-50 min'
  },
  { 
    name: 'Bastogne', 
    zip: '6600', 
    region: 'Luxembourg',
    province: 'Luxembourg',
    neighborhoods: ['Centre-ville', 'Longvilly', 'Noville', 'Villers-la-Bonne-Eau', 'Wardin'],
    agentName: 'Sarah',
    localDescription: 'À Bastogne et dans les Ardennes, notre équipe locale connaît parfaitement les installations sanitaires de la région. Intervention rapide pour tous types de débouchage, même en zone rurale.',
    avgResponseTime: '40-60 min'
  },
  { 
    name: 'Marche-en-Famenne', 
    zip: '6900', 
    region: 'Luxembourg',
    province: 'Luxembourg',
    neighborhoods: ['Centre-ville', 'Aye', 'Hargimont', 'Humain', 'Waha'],
    agentName: 'Sarah',
    localDescription: 'Notre présence à Marche-en-Famenne garantit une couverture optimale de la Famenne. Équipe locale formée aux spécificités des installations de la région, intervention 7j/7.',
    avgResponseTime: '40-60 min'
  },
  { 
    name: 'Neufchâteau', 
    zip: '6840', 
    region: 'Luxembourg',
    province: 'Luxembourg',
    neighborhoods: ['Centre-ville', 'Longlier', 'Hamipré', 'Tournay', 'Grapfontaine'],
    agentName: 'Sarah',
    localDescription: 'Dans le sud de la province du Luxembourg, notre antenne de Neufchâteau assure un service de débouchage rapide et efficace. Connaissance approfondie du réseau local et intervention d\'urgence garantie.',
    avgResponseTime: '45-60 min'
  },

  // PROVINCE DU HAINAUT
  { 
    name: 'Charleroi', 
    zip: '6000', 
    region: 'Hainaut',
    province: 'Hainaut',
    neighborhoods: ['Gosselies', 'Marchienne', 'Jumet', 'Gilly', 'Montignies', 'Marcinelle', 'Couillet'],
    agentName: 'Karim',
    localDescription: 'Notre présence permanente à Charleroi nous permet d\'intervenir en urgence dans toute la métropole, de Gosselies à Marcinelle.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Mons', 
    zip: '7000', 
    region: 'Hainaut',
    province: 'Hainaut',
    neighborhoods: ['Jemappes', 'Cuesmes', 'Nimy', 'Ghlin', 'Havré', 'Maisières'],
    agentName: 'Sophie',
    localDescription: 'Basés à Mons, nous couvrons l\'ensemble de la région montoise, du centre-ville historique aux villages périphériques.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'La Louvière', 
    zip: '7100', 
    region: 'Hainaut',
    province: 'Hainaut',
    neighborhoods: ['Houdeng', 'Maurage', 'Saint-Vaast', 'Trivières', 'Haine-Saint-Paul', 'Centre-ville'],
    agentName: 'Thomas',
    localDescription: 'À La Louvière, nous intervenons quotidiennement dans tous les quartiers, avec une expertise particulière des installations du Centre.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Tournai', 
    zip: '7500', 
    region: 'Hainaut',
    province: 'Hainaut',
    neighborhoods: ['Centre-ville', 'Kain', 'Froyennes', 'Maulde', 'Willemeau', 'Templeuve'],
    agentName: 'Julien',
    localDescription: 'Notre équipe tournaisienne connaît parfaitement le réseau de la plus ancienne ville de Belgique et intervient dans toute l\'agglomération.',
    avgResponseTime: '30-45 min'
  },

  // PROVINCE DU BRABANT WALLON
  { 
    name: 'Wavre', 
    zip: '1300', 
    region: 'Brabant wallon',
    province: 'Brabant wallon',
    neighborhoods: ['Centre-ville', 'Bierges', 'Limal', 'Basse-Wavre', 'Haute-Wavre'],
    agentName: 'Nicolas',
    localDescription: 'Présents à Wavre et dans tout le Brabant wallon, nous intervenons rapidement dans les zones résidentielles et commerciales.',
    avgResponseTime: '30-45 min'
  },
  { 
    name: 'Nivelles', 
    zip: '1400', 
    region: 'Brabant wallon',
    province: 'Brabant wallon',
    neighborhoods: ['Centre-ville', 'Baulers', 'Thines', 'Bornival', 'Monstreux'],
    agentName: 'David',
    localDescription: 'À Nivelles, nous couvrons le centre historique et tous les villages environnants avec une grande réactivité.',
    avgResponseTime: '30-45 min'
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