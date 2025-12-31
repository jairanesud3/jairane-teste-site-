import { 
  Scale, 
  Gavel, 
  Lock, 
  ShieldAlert, 
  FileSearch, 
  Clock, 
  ShieldCheck, 
  BrainCircuit 
} from 'lucide-react';
import { NavItem, ServiceItem, DifferentiatorItem, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Habeas Corpus',
    description: 'Atuação urgente em Tribunais Superiores para garantir a liberdade imediata em casos de prisões ilegais ou abusivas.',
    icon: FileSearch
  },
  {
    title: 'Tribunal do Júri',
    description: 'Defesa técnica e combativa em crimes dolosos contra a vida, com estratégia de oratória e convencimento dos jurados.',
    icon: Gavel
  },
  {
    title: 'Audiência de Custódia',
    description: 'Acompanhamento imediato após a prisão em flagrante para buscar o relaxamento da prisão ou liberdade provisória.',
    icon: Lock
  },
  {
    title: 'Crimes Digitais',
    description: 'Defesa especializada em crimes cibernéticos, fraudes eletrônicas e violações de dados no ambiente virtual.',
    icon: ShieldAlert
  },
  {
    title: 'Inquérito Policial',
    description: 'Acompanhamento desde a fase investigativa para evitar indiciamentos desnecessários e nulidades processuais.',
    icon: Scale
  }
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    title: 'Atendimento Sigiloso',
    description: 'Garantia absoluta de discrição e proteção das informações do cliente em todas as etapas.',
    icon: ShieldCheck
  },
  {
    title: 'Plantão 24 Horas',
    description: 'Disponibilidade imediata para emergências criminais, prisões e flagrantes a qualquer hora.',
    icon: Clock
  },
  {
    title: 'Estratégia Personalizada',
    description: 'Cada caso é único. Desenvolvemos teses jurídicas artesanais focadas no melhor resultado.',
    icon: BrainCircuit
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Fui intimado a comparecer na delegacia. O que devo fazer?",
    answer: "Nunca compareça sem a presença de um advogado. O que você disser poderá ser usado contra você. Entre em contato imediatamente para que possamos orientá-lo e acompanhá-lo no depoimento."
  },
  {
    question: "Vocês atendem em quais cidades?",
    answer: "Nossa sede fica em Brusque/SC, mas atuamos em todo o território nacional, especialmente em processos digitais e nos Tribunais Superiores (STJ e STF) em Brasília."
  },
  {
    question: "O atendimento é sigiloso?",
    answer: "Absolutamente. O sigilo advogado-cliente é sagrado e protegido por lei. Todas as informações compartilhadas são estritamente confidenciais."
  },
  {
    question: "Quanto custa a defesa criminal?",
    answer: "Os honorários variam conforme a complexidade do caso. Seguimos a tabela da OAB como referência, mas oferecemos condições de pagamento compatíveis com a realidade do cliente após análise do caso."
  }
];

export const CONTACT_INFO = {
  whatsapp: '47 99999-9999',
  address: 'Brusque - SC',
  mapsLink: 'https://maps.google.com/?q=Brusque+SC'
};