const UPLOADS = "https://esolution.com.br/wp-content/uploads/";
const up = (path: string) => UPLOADS + path;

export type Product = {
  name: string;
  tag: string;
  desc: string;
  bullets: string[];
  img: string;
  /** GIFs animados não passam pelo otimizador do next/image */
  animated?: boolean;
};

export const products: Product[] = [
  {
    name: "eSolution Multipropriedade",
    tag: "Cotas, timeshare e férias",
    desc: "Ciclo completo de venda e gestão de cotas imobiliárias, timeshare e programas de férias.",
    bullets: [
      "Captação e recepção com controle de agendamentos, no-show e check-in com leitura de documentos por OCR",
      "Indicação automática do consultor conforme histórico de vendas e perfil do cliente",
      "Central de vendas para cotas e timeshare no mesmo fluxo, com rateio automático de receita entre empresas",
      "Assinatura digital, links de pagamento e eSolution Pay com tokenização de cartão",
      "Pós-venda e gestão de contratos com cálculo automático de multas e reembolsos",
      "Comissionamento com regras flexíveis e ajuste automático em renegociações",
      "App de captação que funciona offline e sincroniza quando a conexão volta",
    ],
    img: up("2024/09/Mockup-Notebook-Central-de-Contrato-e1727745932655-1024x596.png"),
  },
  {
    name: "eSolution Hotel (PMS)",
    tag: "Gestão hoteleira",
    desc: "Gestão hoteleira para hotéis executivos, de turismo, multipropriedade e long stay.",
    bullets: [
      "Central de reservas com tarifas dinâmicas e controle de allotments",
      "Multi Hotel: vários empreendimentos administrados na mesma plataforma",
      "Web check-in: o hóspede preenche a FNRH e escolhe o quarto antes de chegar",
      "Controle de disponibilidade de cotas e do uso das semanas pelos proprietários",
      "Condomínios com portal do proprietário e distribuição de rendimentos",
      "Integração com os channel managers Foco Multimídia, Hsystem, KiGo e Omnibees",
    ],
    img: up("2024/10/eSolution-Hotel-PMS-GIF-1024x550.gif"),
    animated: true,
  },
  {
    name: "eSolution Parque",
    tag: "Parques aquáticos e temáticos",
    desc: "Operação de parques aquáticos e temáticos, da bilheteria ao controle de acesso.",
    bullets: [
      "Bilheteria presencial, online e por consignação",
      "Motor de vendas: site próprio para ingressos e passaportes",
      "Passaportes e gestão de sócios integrada ao financeiro",
      "Totens de autoatendimento para reduzir filas",
      "Catracas, cancelas e reconhecimento facial no acesso",
      "Pagamentos por pulseira e RFID e análises em tempo real no Power BI",
    ],
    img: up("2024/09/Mockup-Notebook-Locacao-de-Espacos-e1727758044212-1024x618.png"),
  },
  {
    name: "eSolution Back (ERP)",
    tag: "Back office modular",
    desc: "Back office completo, com módulos contratados individualmente.",
    bullets: [
      "Financeiro, contabilidade gerencial em tempo real e fiscal integrados",
      "Compras, almoxarifado e ativo fixo",
      "Faturamento com emissão de notas fiscais",
      "Contratos, ordens de serviço e controle de produção para A&B",
    ],
    img: up("2024/09/Mockup-Notebook-Almoxarifado-e1727736575789-1024x603.png"),
  },
  {
    name: "eSolution PDV",
    tag: "Restaurantes, bares e quiosques",
    desc: "Vendas em restaurantes, bares, quiosques e lanchonetes do empreendimento.",
    bullets: [
      "PDV Restaurante com gestão visual de mesas e lançamento automático na conta do hotel",
      "PDV Express e PDV Mobile para venda rápida em áreas abertas",
      "Central de Créditos para cartões e pulseiras de consumo",
      "Painel de preparação de pedidos entre cozinha e atendimento",
    ],
    img: up("2024/09/Mockup-Notebook-Produtos-site-3-e1727743883513-1024x597.png"),
  },
  {
    name: "eSolution Telemarketing",
    tag: "Campanhas e base de clientes",
    desc: "Operação de telemarketing para aproveitar melhor a base de clientes.",
    bullets: [
      "Importação e validação de mailing, com checagem da lista do PROCON",
      "Central do atendente e central do supervisor com desempenho em tempo real",
      "BI de prospects e indicadores de performance das campanhas",
    ],
    img: up("2024/09/Mockup-Notebook-Lead-e1727749767143-1024x607.png"),
  },
  {
    name: "Só Falta.eu",
    tag: "Ingressos day use online",
    desc: "Plataforma de venda online de ingressos day use e serviços para parques, integrada ao eSolution Parque.",
    bullets: [
      "Venda online de ingressos day use",
      "Venda de serviços para parques",
      "Integração com o eSolution Parque",
    ],
    img: up("2024/10/eSolution-Parque-GIF-1024x550.gif"),
    animated: true,
  },
];

export const heroImage = up("2024/09/Mockup-Notebook-Multipropriedade-e1727745890856-1024x600.png");
export const logoImage = up("2024/02/cropped-Logo-padrao-azul-escuro.png");
export const hqImage = up("2024/03/turismo-compartilhado-nova-sede-1.png");

export type Stat = { prefix?: string; suffix?: string; value: number; label: string };

export const stats: Stat[] = [
  { prefix: "+", value: 500, label: "clientes em hotelaria, multipropriedade e parques" },
  { value: 70, suffix: "%", label: "dos empreendimentos de multipropriedade do Brasil usam eSolution" },
  { value: 20, suffix: "+", label: "anos desenvolvendo software para hospitalidade" },
  { value: 4, label: "países: Brasil, Argentina, Paraguai e Portugal" },
];

export const brands = [
  "Beach Park", "Rio Quente Resorts", "Laghetto", "Mabu", "Hotel Nacional", "Privê WAM", "Grupo GAV", "Tayayá",
];

export const pains = [
  "A venda fechada na sala precisa ser lançada de novo no financeiro.",
  "A reserva do proprietário de cota não enxerga a disponibilidade real do hotel.",
  "O consumo no restaurante e no parque chega atrasado à conta do hóspede.",
  "O fechamento do mês depende de conciliar relatórios de fornecedores diferentes.",
];

export const pillars = [
  { n: "01", title: "Integrado de origem", text: "Multipropriedade, Hotel, Parque, PDV e Back Office trocam dados entre si, sem conectores improvisados." },
  { n: "02", title: "Modular", text: "Os produtos funcionam juntos ou de forma independente. Você começa pelo que é prioridade e amplia quando fizer sentido." },
  { n: "03", title: "Dados em tempo real", text: "Dashboards, B.I. e relatórios gerenciais mostram vendas, ocupação e financeiro no momento em que acontecem." },
];

export const differentials = [
  { title: "Especialista em hospitalidade", text: "Desde 2002 desenvolvemos software só para hotelaria, multipropriedade e parques. As regras do seu negócio já estão no produto." },
  { title: "Integração total", text: "Venda, hospedagem, consumo e financeiro na mesma base, com APIs abertas para conectar o que você já usa." },
  { title: "Flexível e parametrizável", text: "Cada módulo se ajusta às políticas do empreendimento, de um hotel independente a um grupo com várias empresas." },
  { title: "Recursos mobile", text: "App de captação offline, PDV Mobile e o app eSolution Trip, em que o proprietário agenda semanas e o hóspede faz web check-in." },
  { title: "Evolução contínua", text: "Cada produto tem um squad dedicado, responsável por suporte, entregas e melhorias. Em 2024 a plataforma ganhou integrações com inteligência artificial." },
  { title: "Atendimento próximo", text: "Portal de suporte técnico, Base de Conhecimento e eSolution Academy para treinar a sua equipe." },
];

export const clients = [
  { name: "Beach Park", place: "Aquiraz, CE", tags: ["Timeshare", "Telemarketing", "Back Office"] },
  { name: "Rio Quente Resorts", place: "Rio Quente, GO", tags: ["Telemarketing"] },
  { name: "Laghetto", place: "Gramado, RS", tags: ["Multipropriedade"] },
  { name: "Mabu", place: "Foz do Iguaçu, PR", tags: ["Multipropriedade", "Hotel", "Condomínio", "Timeshare", "Back Office"] },
  { name: "Hotel Nacional", place: "Rio de Janeiro, RJ", tags: ["Multipropriedade", "Hotel", "Trip", "Conciliação", "Back Office"] },
  { name: "Privê WAM", place: "Caldas Novas, GO", tags: ["Multipropriedade", "Hotel", "Parque", "PDV", "Trip", "Condomínio", "Conciliação", "Back Office"] },
  { name: "Grandes Lagos", place: "Santa Clara d'Oeste, SP", tags: ["Hotel", "Parque", "PDV", "Trip", "Condomínio", "Só Falta.eu", "Back Office"] },
  { name: "Enjoy", place: "Olímpia, SP", tags: ["Hotel", "PDV", "Trip", "Condomínio", "Conciliação", "Só Falta.eu", "Back Office"] },
];

export const testimonials = [
  {
    quote: "Uma marca não gera valor se as pessoas que a compõem não transmitirem isso. Para mim, a eSolution não entregaria tanto valor se seu time não fosse formado por bons profissionais, abertos a ouvir e, acima de tudo, comprometidos em buscar soluções para os problemas apresentados.",
    name: "Jonathan Rodrigues",
    role: "Head de A&B, Grandes Lagos Resorts e Parque Aquático",
    photo: up("2025/06/Jonathas-1-e1750098788278.png"),
  },
  {
    quote: "Não é todo dia que você encontra uma empresa de tecnologia que investe tanto na qualidade da experiência dos seus clientes diretos e os clientes finais, se preocupando em facilitar o uso das ferramentas e promovendo novas funcionalidades. Uma empresa fora da curva que entende que o seu real sucesso só acontece quando seus clientes estiverem felizes!",
    name: "Mariana Conz",
    role: "Consultora hoteleira e parceira da eSolution",
    photo: up("2025/06/Mari-1-e1750098729929.png"),
  },
];

export const board = [
  { name: "Carmelito Júnior", role: "CEO", photo: up("2024/05/Junior.png") },
  { name: "Layner Cléver", role: "Diretor de Operações", photo: up("2024/05/Layner.png") },
  { name: "Cesar Couto", role: "Diretor de Novos Negócios", photo: up("2024/05/Cesar.png") },
  { name: "Marcello Guimarães", role: "Diretor Financeiro", photo: up("2024/05/Marcelo.png") },
  { name: "Nayara Cléver", role: "Diretora de Pessoas e Marketing", photo: up("2024/05/Nayara.png") },
];

export const timeline = [
  { year: "2002", text: "Começa o desenvolvimento do primeiro sistema hoteleiro." },
  { year: "2007", text: "A empresa é constituída em Caldas Novas (GO)." },
  { year: "2010", text: "Primeira versão do sistema de Multipropriedade." },
  { year: "2019", text: "Expansão internacional e lançamento do Só Falta.eu." },
  { year: "2024", text: "Integrações com inteligência artificial." },
];

export const faqs = [
  { q: "Preciso contratar todos os produtos?", a: "Não. A plataforma é modular: os produtos funcionam de forma integrada ou independente, e no Back Office você contrata só os módulos relevantes para a operação." },
  { q: "Já uso outro sistema em parte da operação. Dá para integrar?", a: "Sim. O eSolution Hotel se conecta aos channel managers Foco Multimídia, Hsystem, KiGo e Omnibees, e a plataforma oferece APIs para novas integrações, avaliadas técnica e comercialmente caso a caso." },
  { q: "A eSolution atende grupos com vários empreendimentos?", a: "Sim. O Multi Hotel administra vários hotéis na mesma plataforma, e a integração multinível vende produtos de empresas diferentes em um único fluxo, com direcionamento automático das receitas." },
  { q: "Para quais segmentos a plataforma serve?", a: "Hotéis, resorts, multipropriedade, timeshare, parques aquáticos e temáticos, condomínios com operação hoteleira, incorporadoras e comercializadoras." },
  { q: "Como funcionam a implantação e o suporte?", a: "Você conta com portal de suporte técnico, Base de Conhecimento e a eSolution Academy para capacitar a equipe." },
  { q: "Quanto custa?", a: "O investimento depende dos módulos contratados e do porte do empreendimento. A proposta é apresentada depois da demonstração." },
];

export const segments = [
  "A&B", "Back Office ERP", "Comercializadora", "Condomínio", "Hotel",
  "Incorporadora", "Multipropriedade", "Parque", "Telemarketing", "TimeShare",
];

export const contact = {
  phone: { label: "+55 62 3412-9980", href: "tel:+556234129980" },
  email: "comercial@esolution.com.br",
  address: "Av. Dr. João de Araújo Castro, Termal, Caldas Novas, GO, CEP 75680-081",
  clientsUrl: "https://esolution.com.br/nossos-clients/",
};

export const nav = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#clientes", label: "Clientes" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

/** Parceiros listados na seção "Nossos Parceiros" de esolution.com.br */
export const partners = [
  { name: "TC Brasil Consultoria", url: "https://www.tcbrasil.com.br/", logo: up("2024/02/TCBrasil-Consultoria-Site-Logo-V-2.png") },
  { name: "Foco Multimídia", url: "https://focomultimidia.com/", logo: up("2024/02/logo-foco-2.png") },
  { name: "Analize", url: "https://analize.com.br/", logo: up("2024/02/analise.png") },
  { name: "Turismo Compartilhado", url: "https://turismocompartilhado.com.br/", logo: up("2024/02/Turismo-Compartilhado-Logotipo-B-1.png") },
  { name: "Doutor Hotel", url: "https://doutorhotel.com.br/", logo: up("2024/02/doutor-hotel.png") },
  { name: "Mapah Consultoria", url: "https://www.mapah.com.br/", logo: up("2024/02/mapah-consultoria-auditoria-e-co-2.png") },
  { name: "Nova XS", url: "https://www.novaxs.com.br/", logo: up("2024/02/nova.png") },
  { name: "Skyone", url: "https://skyone.solutions/", logo: up("2024/10/Skyone-logo.png") },
  { name: "Capere", url: "https://capere.inf.br/", logo: up("2024/10/cc1a01f9375cd6e684b0e79b897cde1b.png") },
  { name: "B2B Reservas", url: "https://www.b2breservas.com.br/", logo: up("2024/10/9b3fd388-6fe6-4194-838a-3a5e97f6b738.png") },
  { name: "BeBook", url: "https://bebook.app/", logo: up("2024/10/be5f2b94-af8d-4ecc-a48f-d387da01031d.png") },
  { name: "ADIT", url: "https://adit.com.br/", logo: up("2024/10/Logo-ADIT_04-1024x520.png") },
  { name: "Biware", url: "https://biware.com.br/", logo: up("2024/10/c1d8e549-5659-488f-a966-ba9f3f7b9f24-1024x477.png") },
  { name: "Blockit", url: "https://www.blockitnow.com/", logo: up("2024/10/Blockit-LogoBlue-1024x235.png") },
];
