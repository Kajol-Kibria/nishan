/* ————————————————————————————————————————————————————————————————
   NISHAN LAB — content model (v0.4)

   Content supplied by the laboratory: principal investigator,
   affiliation, current members, publications and activity are real.
   Imagery remains photographic stand-in material.
   ———————————————————————————————————————————————————————————————— */

/* ——— Site-wide ——— */

export const site = {
  wordmark: "Nishan Lab",
  department: "Department of Pharmacy",
  institution: "Dhaka International University",
  heroDescription:
    "Nishan Lab is a research group in the Department of Pharmacy at Dhaka International University, led by As-Sazzad Mahmud Nishan. The group studies bioactive compounds from medicinal plants — from phytochemistry to computational and experimental pharmacology.",
  email: "sazzad.phar@diu.ac",
  location: "Dhaka, Bangladesh",
};

/* ——— Navigation (single-page anchors) ——— */

export const nav = [
  { label: "Research", href: "/research" },
  { label: "People", href: "/members" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/#news" },
  { label: "Contact", href: "/contact" },
];

/* ——— 01 · About the laboratory ——— */

export const about = [
  "Nishan Lab studies natural products: the chemistry of medicinal plants and the pharmacology of the molecules they contain. Led by As-Sazzad Mahmud Nishan in the Department of Pharmacy at Dhaka International University, the group looks for bioactive compounds — particularly in the medicinal flora of Bangladesh — and asks what they do, and how.",
  "The approach moves from plant to mechanism: extraction and fractionation, phytochemical identification by GC–MS and FTIR spectroscopy, in vitro and in vivo bioassays, and computational pharmacology — molecular docking, ADMET prediction and network analysis — that connects compounds to plausible protein targets.",
  "The laboratory trains pharmacy students in both bench and computational methods, and collaborates with natural-product and pharmacology researchers in Bangladesh and abroad.",
];

/* ——— 02 · Research areas ——— */

export interface ResearchTheme {
  index: string;
  title: string;
  note: string;
  keywords: string[];
}

export const researchThemes: ResearchTheme[] = [
  {
    index: "01",
    title: "Natural Product Chemistry",
    note: "Extraction, fractionation and identification of bioactive phytochemicals from medicinal plants.",
    keywords: ["Phytochemicals", "GC–MS", "FTIR", "Plant extracts"],
  },
  {
    index: "02",
    title: "Computational Pharmacology",
    note: "Molecular docking, network pharmacology and ADMET modelling that connect compounds to targets.",
    keywords: ["Molecular docking", "ADMET", "Network pharmacology", "Toxicity prediction"],
  },
  {
    index: "03",
    title: "Pharmacological Evaluation",
    note: "In vitro and in vivo assessment of therapeutic activity — antioxidant, antimicrobial, hepatoprotective and beyond.",
    keywords: ["Bioassays", "In vivo models", "Ethnopharmacology"],
  },
  {
    index: "04",
    title: "Medicinal Flora & Endophytes",
    note: "Under-studied species — including mangrove-associated endophytic fungi — as sources of new chemistry.",
    keywords: ["Medicinal plants", "Endophytic fungi", "Flora of Bangladesh"],
  },
];

/* ——— 03 · Principal Investigator ——— */

export interface AcademicLink {
  label: string;
  href: string;
  active: boolean; // render only when the URL is verified
}

export const principalInvestigator = {
  name: "As-Sazzad Mahmud Nishan",
  shortName: "As-Sazzad Mahmud Nishan",
  position: "Principal Investigator",
  title: "Assistant Professor of Pharmacy",
  department: "Department of Pharmacy, Dhaka International University",
  office: "Satarkul, Badda, Dhaka-1212, Bangladesh",
  photo: "/images/pi.jpg",
  bio: [
    "As-Sazzad Mahmud Nishan is an Assistant Professor in the Department of Pharmacy at Dhaka International University, Dhaka. His research investigates the bioactive chemistry of medicinal plants — natural product chemistry, pharmacology, and the computational tools that connect compounds to their biological targets.",
    "His publications span phytochemical characterisation by GC–MS and FTIR spectroscopy, in vitro and in vivo pharmacological screening, and molecular docking, ADMET and network-pharmacology analysis — recent subjects include Acacia crassicarpa, Ficus benjamina, Dimocarpus longan, Cassia fistula and mangrove-associated endophytic fungi.",
  ],
  interests: [
    "Natural product chemistry",
    "Network pharmacology",
    "Molecular docking & ADMET",
    "Pharmacological screening (in vitro / in vivo)",
  ],
  links: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=Cua6V3QAAAAJ&hl=en",
      active: true,
    },
    {
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/As-Sazzad-Nishan",
      active: true,
    },
    { label: "ORCID iD", href: "#", active: false },
    { label: "Institutional profile", href: "#", active: false },
  ] as AcademicLink[],
};

/* ——— 04 · People ——— */

export interface Member {
  id: string;
  name: string;
  status: "current" | "former";
  batch?: string;
  role: string;
  currentPosition?: string;
  bio: string[];
  email?: string;
  photo?: string;
  publications?: string[];
  links?: { label: string; href: string }[];
}

export const members: Member[] = [
  {
    id: "kajol-kibria",
    name: "Kajol Kibria",
    status: "current",
    batch: "30th",
    role: "Research Member",
    email: "kajolkibria95@gmail.com",
    currentPosition: "Student",
    photo: "/images/kajol-e-kibria.jpeg",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kajol-kibria/" }
    ],
    bio: [
      "Pharmacy Student | CADD & Bioinformatics | Machine Learning | Front-end Developer | Building at the Intersection of Pharma & Tech"
    ],
  },
  {
    id: "farjana-hossain",
    name: "Farjana Hossain",
    status: "former",
    batch: "28th",
    role: "Research Member",
    email: "nilafarjana27@gmail.com",
    currentPosition: "PMD executive",
    photo: "/images/Farjana Hossain.jpg",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/farjana-hossain-2896182ab" }
    ],
    bio: [
      "Pharmacy Graduate | PMD Executive in Baby Nutrition | Skilled in Pharmaceutical Operations, GMP, QA/QC & Product Management | Passionate about Healthcare, Nutrition & Continuous Growth."
    ],
  },
  {
    id: "md-al-amin",
    name: "Md. Al-Amin",
    status: "current",
    batch: "30th",
    role: "Research Member",
    email: "mdalaminh048@gmail.com",
    currentPosition: "Student",
    photo: "/images/Md Alamin Hossain.jpeg",
    bio: [
      "I am a dedicated pharmacy student with a strong interest in healthcare, medication safety, and improving patient outcomes. I am passionate about expanding my pharmaceutical knowledge, developing practical skills, and making a positive difference in my community.",
      "I am particularly interested in clinical pharmacy, oncology, and pharmaceutical research. My goal is to become a compassionate and knowledgeable pharmacist who provides high-quality patient care."
    ],
  },
  {
    id: "mirja-mohammad-niaz-morshed",
    name: "Mirja Mohammad Niaz Morshed",
    status: "former",
    batch: "26th",
    role: "Research Member",
    email: "mm.niazmorshed@gmail.com",
    photo: "/images/Mirja Mohammad Niaz Morshed.JPG",
    publications: [
      "10.53941/jmnp.2026.100010"
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mirja-mohammad-niaz-morshed-531b77300/" }
    ],
    bio: [
      "Don't stop when you're tired. Stop when you're done."
    ],
  },
  {
    id: "mohammad-hasan",
    name: "Mohammad Hasan",
    status: "former",
    batch: "27th",
    role: "Research Member",
    email: "md1022778@gmail.com",
    currentPosition: "M.Pharm student",
    photo: "/images/MD Hasan.png",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/md-hasan-53650334b" }
    ],
    bio: [
      "I am a former member of Nishan Lab from Batch 27. Currently, I am pursuing my M.Pharm at DIU. My research interests lie in the fields of Advanced Pharmacology."
    ],
  },
];

/* ——— 05 · Selected publications ———
   Entries from the group's Google Scholar record.
   DOIs shown where known; otherwise the entry links to its
   Google Scholar record. */

export interface PublicationAuthor {
  name: string;
  lab?: boolean; // highlight the PI
}

export interface Publication {
  year: string;
  title: string;
  authors: PublicationAuthor[];
  etAl?: boolean;
  journal: string;
  details: string;
  doi?: string;
  scholar: string;
  cited?: number;
}

const scholarLink = (title: string) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

export const publications: Publication[] = [
  {
    year: "2026",
    title: "Pharmacological Investigation of the Active Fractions of Acacia crassicarpa Leaf Extract",
    authors: [
      { name: "Mahmud, A. S.", lab: true },
      { name: "Islam, A." },
      { name: "Meem, I. J." },
      { name: "Hasan, M. R." },
      { name: "Maruf, M. M." },
      { name: "Anik, T. A." },
    ],
    etAl: true,
    journal: "J. Med. Nat. Prod.",
    details: "3(2), 100010",
    scholar: scholarLink(
      "Pharmacological Investigation of the Active Fractions of Acacia crassicarpa Leaf Extract"
    ),
  },
  {
    year: "2026",
    title:
      "GC–MS–Identified Phytochemicals from Dimocarpus longan Leaves as Promising HER2 Inhibitors for Breast Cancer: Molecular Docking, ADMET, and Toxicity Assessment",
    authors: [
      { name: "Mahmud, A. S.", lab: true },
      { name: "Rabby, M. F." },
      { name: "Rahman, M. F." },
      { name: "Begum, A." },
    ],
    journal: "Nat. Prod. Anal.",
    details: "2(1), 100002",
    scholar: scholarLink(
      "GC-MS-Identified Phytochemicals from Dimocarpus longan Leaves as Promising HER2 Inhibitors for Breast Cancer"
    ),
  },
  {
    year: "2026",
    title:
      "Dual Inhibition of SERT and MAO-A by a Novel Phytoconstituent from Premna esculenta: A Convergence of Behavioral, Computational, and ADMET Studies",
    authors: [
      { name: "Rahman, M. F." },
      { name: "Miah, M. S." },
      { name: "Mahmud, A. S.", lab: true },
      { name: "Hasnat, M. M." },
      { name: "Yousuf, H." },
      { name: "Shohag, A. M." },
    ],
    journal: "Preprint / in press",
    details: "[venue to be confirmed]",
    scholar: scholarLink(
      "Dual Inhibition of SERT and MAO-A by a Novel Phytoconstituent from Premna esculenta"
    ),
  },
  {
    year: "2025",
    title:
      "Hepatoprotective effects of a Cassia fistula fruit extract and molecular insights into its phytoconstituents' interactions with Keap1",
    authors: [
      { name: "Ahmed, B. M. F." },
      { name: "Islam, A." },
      { name: "Faruque, M." },
      { name: "Mahmud, A. S.", lab: true },
      { name: "Islam, M. M." },
      { name: "Seidel, V." },
    ],
    etAl: true,
    journal: "Pharmacol. Res. Nat. Prod.",
    details: "100341",
    cited: 2,
    scholar: scholarLink(
      "Hepatoprotective effects of a Cassia fistula fruit extract and molecular insights into its phytoconstituents interactions with Keap1"
    ),
  },
  {
    year: "2025",
    title: "Pharmacological Investigation of the Active Fractions of Ficus benjamina Leaf Extract",
    authors: [
      { name: "Mahmud, A. S.", lab: true },
      { name: "Meem, I. J." },
      { name: "Hasan, M. R." },
      { name: "Maruf, M. M." },
      { name: "Islam, A." },
      { name: "Akter, M. S." },
    ],
    journal: "J. Med. Nat. Prod.",
    details: "2, 100015",
    cited: 1,
    scholar: scholarLink(
      "Pharmacological Investigation of the Active Fractions of Ficus benjamina Leaf Extract"
    ),
  },
  {
    year: "2025",
    title:
      "Analytical and biological assessment of Magnolia champaca L. stem bark: Integrating ATR-FTIR, GC–MS, thrombolytic activity, brine shrimp lethality and molecular docking",
    authors: [
      { name: "Hasan, M. M." },
      { name: "Nishan, A. S. M.", lab: true },
      { name: "Rashid, M. H. B." },
      { name: "Ghos, B. C." },
      { name: "Barmon, J." },
    ],
    journal: "J. Genet. Eng. Biotechnol.",
    details: "23(2), 100505",
    cited: 9,
    scholar: scholarLink(
      "Analytical and biological assessment of Magnolia champaca L. stem bark"
    ),
  },
  {
    year: "2025",
    title:
      "In Vitro Activity of Isolated Bioactive Metabolites from Endophytic Fungus Associated with Aegiceras corniculatum",
    authors: [
      { name: "Noshin, S." },
      { name: "Bairagi, R. D." },
      { name: "Airin, S." },
      { name: "Debnath, D." },
      { name: "Mahmud, A. S.", lab: true },
      { name: "Rahaman, M. S." },
    ],
    etAl: true,
    journal: "J. Med. Nat. Prod.",
    details: "2(1), 100003",
    cited: 3,
    scholar: scholarLink(
      "In Vitro Activity of Isolated Bioactive Metabolites from Endophytic Fungus Associated with Aegiceras corniculatum"
    ),
  },
  {
    year: "2024",
    title: "Evaluation of Therapeutic Activity of Physalis angulata (In Vitro Studies)",
    authors: [
      { name: "Shahlal, M." },
      { name: "Mahmud, A. S.", lab: true },
      { name: "Bairagi, R. D." },
      { name: "Debnath, D." },
      { name: "Nipa, B. S." },
      { name: "Reon, R. R." },
    ],
    etAl: true,
    journal: "J. Med. Nat. Prod.",
    details: "100007",
    cited: 4,
    scholar: scholarLink("Evaluation of Therapeutic Activity of Physalis angulata"),
  },
];

export const scholarProfileUrl =
  "https://scholar.google.com/citations?user=Cua6V3QAAAAJ&hl=en";

/* ——— Visual interlude ——— */

export const cultureQuote = {
  text: "Careful methods, open results, and honest accounts of what we do not yet know.",
  attribution: "A working note from the laboratory",
};

/* ——— 06 · Recent activity ——— */

export interface NewsItem {
  date: string;
  category: string;
  text: string;
}

export const news: NewsItem[] = [
  {
    date: "2026",
    category: "Publication",
    text: "Study of Acacia crassicarpa leaf extract published in the Journal of Medicinal Natural Products.",
  },
  {
    date: "2026",
    category: "Publication",
    text: "GC–MS and molecular-docking study of Dimocarpus longan leaf phytochemicals published in Natural Products Analysis.",
  },
  {
    date: "2025",
    category: "Publication",
    text: "Hepatoprotective Cassia fistula study, with Keap1 docking insights, published in Pharmacological Research – Natural Products.",
  },
  {
    date: "2025",
    category: "Publication",
    text: "Magnolia champaca stem-bark study published in the Journal of Genetic Engineering and Biotechnology.",
  },
  {
    date: "2024",
    category: "Publication",
    text: "In-vitro Physalis angulata study published in the Journal of Medicinal Natural Products.",
  },
];

/* ——— 07 · Collaboration ——— */

export const collaboration = {
  statement:
    "The laboratory welcomes enquiries from pharmacy students, researchers, and potential collaborators.",
  audiences: [
    {
      label: "Pharmacy students",
      note: "Undergraduate and master's thesis projects in natural product chemistry, pharmacological screening, and computational analysis.",
    },
    {
      label: "Visiting researchers",
      note: "Short research visits in natural product chemistry and pharmacology are welcome.",
    },
    {
      label: "Research partners",
      note: "Groups in medicinal chemistry, pharmacology, and network or computational analysis. The laboratory offers phytochemical and bioassay expertise.",
    },
  ],
};

/* ——— 08 · Contact ——— */

export const contact = {
  address: [
    "Nishan Laboratory",
    "Department of Pharmacy",
    "Dhaka International University",
    "Satarkul, Badda",
    "Dhaka-1212, Bangladesh",
  ],
  links: [
    {
      label: "Find us on Google Maps",
      href: "https://www.google.com/maps/search/?api=1&query=Dhaka%20International%20University%2C%20Satarkul%2C%20Badda%2C%20Dhaka%201212",
    },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=Cua6V3QAAAAJ&hl=en" },
    { label: "ResearchGate", href: "https://www.researchgate.net/profile/As-Sazzad-Nishan" },
    { label: "Dhaka International University", href: "https://www.diu.ac" },
  ],
};
