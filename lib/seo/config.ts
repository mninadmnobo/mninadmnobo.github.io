import type { Metadata } from 'next'

/**
 * ============================================================================
 * PORTFOLIO SEO CONFIGURATION, ENTITY ONTOLOGY & SEARCH TAXONOMY
 * ============================================================================
 *
 * Modeled directly after the FABINS Automation & NEVOLYN SEO Architecture.
 *
 * Architecture Principles:
 * 1. Single source of truth — completely self-contained in this single file.
 * 2. Strict canonical entity authority (Person -> Saturn R&D -> FABINS / NEVOLYN -> BUET).
 * 3. Deep Schema.org JSON-LD @graph for Google Knowledge Graph disambiguation.
 * 4. Comprehensive 15-category typo, phonetic, and transliteration taxonomy.
 * 5. Strict white-hat SEO purity: Typo taxonomy models human search intent
 *    internally and is NOT dumped into visible text or Schema alternateName.
 */

// ============================================================================
// 1. Core Brand & Domain Constants
// ============================================================================

export const SEO_CONFIG = {
  siteUrl: 'https://mninadmnobo.github.io',
  fabinsUrl: 'https://fabins.nevolyn.com',
  nevolynUrl: 'https://nevolyn.com',

  /** Full legal name — primary entity label */
  name: 'Mohammad Ninad Mahmud Nobo',

  /** Short handle across developer ecosystems */
  handle: 'mninadmnobo',

  /** Short display name for page titles & UI chrome */
  displayName: 'M Ninad M Nobo',

  title: 'M Ninad M Nobo',
  description:
    'Portfolio of Mohammad Ninad Mahmud Nobo — AI/ML engineer and researcher. Computer vision for automated fabric inspection at Saturn Textiles R&D, multi-agent LLM systems for software testing, and conflict-aware medical AI. BUET CSE.',

  /**
   * Google Search Console verification token.
   */
  googleVerificationToken: 'KEe07e9tdZAVpQ_Cv-dahCbVyPf0QwS119V7P635Nfw',

  social: {
    github: 'https://github.com/mninadmnobo',
    linkedin: 'https://www.linkedin.com/in/mninadmnobo',
    facebook: 'https://facebook.com/mninadmnobo',
    instagram: 'https://instagram.com/mninadmnobo',
    scholar: 'https://scholar.google.com/citations?user=y5-A2oAAAAAJ&hl=en&oi=ao',
    orcid: 'https://orcid.org/0009-0006-2781-6693',
    researchgate: 'https://www.researchgate.net/profile/Mohammad-Ninad-Mahmud-Nobo',
    fabinsLinkedIn: 'https://www.linkedin.com/company/fabinsautomation/',
    nevolynLinkedIn: 'https://www.linkedin.com/company/nevolyn/',
  },

  assets: {
    photo: '/Mohammad_Ninad_Mahmud_Nobo.jpg',
    cv: '/Mohammad_Ninad_Mahmud_Nobo_CV.pdf',
    icon: '/icon.svg',
    og: '/og.png',
  },

  worksFor: {
    name: 'Saturn Textiles Limited',
    department: 'Research and Development',
    role: 'AI / Computer Vision Engineer',
  },

  affiliations: {
    nevolyn: 'NEVOLYN',
    fabins: 'FABINS Automation',
  },

  university: {
    name: 'Bangladesh University of Engineering and Technology (BUET)',
    department: 'Computer Science and Engineering',
    degree: 'B.Sc. in Computer Science and Engineering',
  },

  address: {
    locality: 'Dhaka',
    country: 'BD',
  },

  jobTitle: 'AI Software Engineer & Researcher',
} as const

// ============================================================================
// 2. Core Name Variations
// ============================================================================

export const NAME_CORE_VARIATIONS = [
  // Short & Monikers
  'Nobo',
  'Nob',
  'Nab',
  'Niv',
  'Nib',
  'Ninu',
  'Ninat',
  'Ninad',
  'Ninad Nobo',
  'Ninat Nobo',
  'Ninad Nob',
  'Ninat Nob',
  'Minat',
  'Minat Nobo',
  'Minat Nob',

  // Full Name Variations
  'Mohammad Ninad Mahmud Nobo',
  'Mohammad Ninat Mahmud Nobo',
  'Mohammad Ninad Mahmud Nob',
  'Mohammad Ninat Mahmud Nob',
  'Mohammad Ninad Nobo',
  'Mohammad Ninat Nobo',
  'Mohammad Nobo',
  'Mohammad Nob',
  'Mohammad Minat',
  'Mohammad Minat Mahmud',
  'Mohammad Minat Mahmud Nobo',

  // Initials & Compressed
  'M Nobo',
  'M Nob',
  'M Ninat',
  'M Ninad',
  'M Minat',
  'M Ninat Nobo',
  'M Ninad Nobo',
  'M Minat Nobo',
  'M Ninad M Nobo',
  'MNM Nobo',
  'M. N. M. Nobo',
  'M. Ninad M. Nobo',
] as const

// ============================================================================
// 3. বাংলা (Bengali) Name Variations
// ============================================================================

export const BENGALI_NAME_VARIATIONS = [
  'নব',
  'নোবো',
  'নোব',
  'নভ',
  'নাব',
  'নিব',
  'নিভ',
  'ন্যাব',
  'নিনু',
  'মিনাত',
  'নিনাত',
  'নিনাদ',
  'নিনাত নব',
  'নিনাদ নব',
  'নিনাত নোবো',
  'নিনাদ নোবো',
  'নিনাত নোব',
  'নিনাদ নোব',

  'মোহাম্মদ নব',
  'মোহাম্মদ নোবো',
  'মোহাম্মদ নোব',
  'মোহাম্মদ মিনাত',
  'মোহাম্মদ মিনাত মাহমুদ',
  'মোহাম্মদ মিনাত মাহমুদ নব',
  'মোহাম্মদ নিনাত',
  'মোহাম্মদ নিনাদ',
  'মোহাম্মদ নিনাত নব',
  'মোহাম্মদ নিনাদ নব',
  'মোহাম্মদ নিনাদ মাহমুদ নব',
  'মোহাম্মদ নিনাত মাহমুদ নোবো',
  'মোহাম্মদ নিনাদ মাহমুদ নোবো',
  'এম নব',
  'এম নোবো',
  'এম নিনাত',
  'এম নিনাদ',
  'এম মিনাত',
  'এম নিনাদ এম নব',
] as const

// ============================================================================
// 4. English Spelling / Phonetic Variants
// ============================================================================

export const ENGLISH_SPELLING_VARIATIONS = [
  'Ninad',
  'Ninat',
  'Ninod',
  'Ninot',
  'Ninad Nobo',
  'Ninat Nobo',
  'Ninad Nob',
  'Ninat Nob',
  'Ninad Mahmud Nobo',
  'Ninat Mahmud Nobo',

  'Nobo',
  'Nob',
  'Nobbo',
  'Nobu',
  'Nabbo',
  'Nabu',

  'Minat',
  'Meenat',
  'Minot',
  'Mynat',

  'Mohammad',
  'Muhammad',
  'Mohammed',
  'Mohamad',
  'Md',
  'Md.',
  'Mhd',
] as const

// ============================================================================
// 5. Bengali Phonetic & Spelling Variations
// ============================================================================

export const BENGALI_SPELLING_VARIATIONS = [
  'নব',
  'নোব',
  'নোবো',
  'নভ',
  'নভো',
  'নাব',
  'নাবো',
  'নিব',
  'নিভ',
  'ন্যাব',
  'ন্যব',
  'নিনু',
  'নিনো',
  'নিনাত',
  'নিনাদ',
  'নিনোত',
  'মিনাত',
  'মিনোত',
  'মীনাত',

  'মোহাম্মদ',
  'মুহাম্মদ',
  'মোহাম্মাদ',
  'মোহাম্মদ্',
  'মোঃ',
  'মো.',
] as const

// ============================================================================
// 6. Organization Co-occurrences (BUET, NEVOLYN, FABINS, Saturn)
// ============================================================================

export const BUET_VARIATIONS = [
  'Nobo BUET',
  'Nob BUET',
  'Nab BUET',
  'Ninad BUET',
  'Ninat BUET',
  'Minat BUET',
  'Mohammad Nobo BUET',
  'Mohammad Nob BUET',
  'Mohammad Ninad BUET',
  'Mohammad Ninat BUET',
  'Mohammad Minat BUET',
  'M Nobo BUET',
  'M Ninat BUET',
  'M Ninad BUET',
  'M Ninad M Nobo BUET',
  'Nobo BUET CSE',
  'Ninad Nobo BUET CSE',

  'নব বুয়েট',
  'নোবো বুয়েট',
  'নোব বুয়েট',
  'নিনাদ বুয়েট',
  'নিনাত বুয়েট',
  'মিনাত বুয়েট',
  'মোহাম্মদ নব বুয়েট',
  'মোহাম্মদ নোবো বুয়েট',
  'মোহাম্মদ নিনাদ বুয়েট',
  'মোহাম্মদ নিনাত বুয়েট',
  'মোহাম্মদ মিনাত বুয়েট',
  'এম নব বুয়েট',
  'এম নিনাত বুয়েট',
  'নব বুয়েট সিএসই',
] as const

export const NEVOLYN_NAME_VARIATIONS = [
  'Nobo NEVOLYN',
  'Nob NEVOLYN',
  'Ninad NEVOLYN',
  'Ninat NEVOLYN',
  'Minat NEVOLYN',

  'Nobo Nevolyn',
  'Nob Nevolyn',
  'Ninad Nevolyn',
  'Ninat Nevolyn',
  'Minat Nevolyn',

  'Nobo NEVOLYN Technology',
  'Ninad NEVOLYN Technology',
  'Ninat NEVOLYN Technology',
  'Minat NEVOLYN Technology',

  'নব নেভলিন',
  'নোবো নেভলিন',
  'নোব নেভলিন',
  'নিনাদ নেভলিন',
  'নিনাত নেভলিন',
  'মিনাত নেভলিন',

  'নব নেভোলিন',
  'নোবো নেভোলিন',
  'নিনাদ নেভোলিন',
  'নিনাত নেভোলিন',
  'মিনাত নেভোলিন',

  'মোহাম্মদ নব নেভলিন',
  'মোহাম্মদ নিনাত নেভলিন',
  'মোহাম্মদ নিনাদ নেভলিন',
  'মিনাত নেভলিন টেকনোলজি',
] as const

export const FABINS_NAME_VARIATIONS = [
  'Nobo FABINS',
  'Nob FABINS',
  'Ninad FABINS',
  'Ninat FABINS',
  'Minat FABINS',

  'Nobo Fabins',
  'Nob Fabins',
  'Ninad Fabins',
  'Ninat Fabins',
  'Minat Fabins',

  'Nobo FABINS Automation',
  'Ninad FABINS Automation',
  'Ninat FABINS Automation',
  'Minat FABINS Automation',
  'Ninad Nobo FABINS Automation',

  'নব ফেবিন্স',
  'নোবো ফেবিন্স',
  'নোব ফেবিন্স',
  'নিনাদ ফেবিন্স',
  'নিনাত ফেবিন্স',
  'মিনাত ফেবিন্স',

  'নব ফ্যাবিন্স',
  'নোবো ফ্যাবিন্স',
  'নিনাদ ফ্যাবিন্স',
  'নিনাত ফ্যাবিন্স',
  'মিনাত ফ্যাবিন্স',

  'মোহাম্মদ নব ফেবিন্স',
  'মোহাম্মদ নিনাত ফেবিন্স',
  'মোহাম্মদ নিনাদ ফেবিন্স',
] as const

export const SATURN_VARIATIONS = [
  'Nobo Saturn',
  'Nob Saturn',
  'Ninad Saturn',
  'Ninat Saturn',
  'Minat Saturn',

  'Nobo Saturn Textiles',
  'Ninad Saturn Textiles',
  'Ninat Saturn Textiles',

  'Nobo Saturn R&D',
  'Ninad Saturn R&D',
  'Ninat Saturn R&D',

  'Saturn Nobo',
  'Saturn Nob',
  'Saturn Ninad',
  'Saturn Ninat',
  'Saturn Minat',

  'Saturn BUET',
  'Saturn Nobo BUET',
  'Saturn Ninad BUET',
  'Saturn Ninat BUET',

  'স্যাটার্ন নব',
  'স্যাটার্ন নোবো',
  'স্যাটার্ন নিনাদ',
  'স্যাটার্ন নিনাত',
  'স্যাটার্ন মিনাত',
  'স্যাটার্ন বুয়েট',
  'স্যাটার্ন নব বুয়েট',
  'স্যাটার্ন নিনাত বুয়েট',
] as const

// Cross-product generation
const nameParts = [
  'Nobo',
  'Nob',
  'Nab',
  'Ninad',
  'Ninat',
  'Minat',
  'Mohammad Nobo',
  'Mohammad Nob',
  'Mohammad Ninad',
  'Mohammad Ninat',
  'Mohammad Minat',
] as const

const contextParts = [
  'BUET',
  'NEVOLYN',
  'NEVOLYN Technology',
  'FABINS',
  'FABINS Automation',
  'Saturn',
  'Saturn Textiles',
  'Saturn R&D',
] as const

export const GENERATED_COMBINATIONS = [
  ...nameParts.flatMap((name) => contextParts.map((context) => `${name} ${context}`)),
]

// ============================================================================
// 7. Curated Schema.org Alternate Names (Safe for White-Hat Indexing)
// ============================================================================

export const SCHEMA_PERSON_ALTERNATE_NAMES = [
  'Ninad Nobo',
  'M Ninad M Nobo',
  'Mohammad Ninad Nobo',
  'Nobo',
  'Mohammad Ninat Mahmud Nobo',
  'মোহাম্মদ নিনাদ মাহমুদ নব',
  'নিনাদ নব',
  'নোবো',
  'mninadmnobo',
] as const

// ============================================================================
// 8. Comprehensive 15-Category Typo, Phonetic & Intent Taxonomy
// ============================================================================

/**
 * Modeled after the FABINS 15-tier human search behavior matrix.
 * Provides internal semantic mapping without keyword stuffing penalties.
 */
export const TYPO_TAXONOMY = {
  /** 1. Keyboard-neighbor mistakes (pressing adjacent keys on standard keyboards) */
  keyboardNeighborMistakes: [
    'MOHAMAD',
    'MOHAMED',
    'NIMO',
    'NIBO',
    'NOVO',
    'NOBOO',
    'NINAT',
    'NINAE',
    'NINAS',
    'NINAA',
    'MINAD',
    'MINAT',
    'MOHAMMAM',
  ],

  /** 2. QWERTY-specific layout substitutions (finger drift across rows) */
  qwertySubstitutions: [
    'NOBP',
    'NOVI',
    'NIBP',
    'NONO',
    'NINSD',
    'NINWD',
    'MIAND',
    'MOBO',
  ],

  /** 3. Repeated-character mistakes (stuck key / fast typing duplications) */
  repeatedCharacters: [
    'NNOBO',
    'NOBBO',
    'NOBOO',
    'NNOBBOO',
    'NNINAD',
    'NIINAD',
    'NINAAD',
    'NINADD',
    'MMOHAMMAD',
    'MOOHAMMAD',
    'MOHAMMADD',
  ],

  /** 4. Missing consecutive characters (dropped letters / fast typing omission) */
  missingCharacters: [
    'NBO',
    'NOB',
    'NND',
    'NIAD',
    'NIND',
    'MHAMMAD',
    'MOHAMAD',
    'MOHMMAD',
    'MHMD',
  ],

  /** 5. Wrong character order / multiple transpositions (inversions) */
  characterTranspositions: [
    'ONBO',
    'NBOO',
    'NIOBO',
    'NIAND',
    'NIDAN',
    'NINDA',
    'OMHAMMAD',
    'MOHAMAM',
    'MNINAD',
  ],

  /** 6. Prefix & suffix attachments (brand affixed with common tags or extensions) */
  affixAttachments: [
    'mynobo',
    'ninadnobo',
    'ninadnobo-ai',
    'nobo-buet',
    'nobo-saturn',
    'nobo-fabins',
    'mninadmnobo-portfolio',
    'ninadnobo-ml',
    'dr-nobo',
    'engr-nobo',
  ],

  /** 7. Grammatical number & abbreviation forms */
  grammaticalNumber: [
    'M. N. M. Nobo',
    'M. Ninad M. Nobo',
    'M. N. Mahmud Nobo',
    'MNM Nobo',
    'Engr. Mohammad Ninad Mahmud Nobo',
    'Nobo Researcher',
  ],

  /** 8. Grammar & phrasing variations */
  phrasingVariations: [
    'Nobo Portfolio',
    'Ninad Nobo Portfolio',
    'Mohammad Ninad Mahmud Nobo Portfolio',
    'Portfolio of Mohammad Ninad Mahmud Nobo',
    'Ninad Nobo AI Engineer',
    'Ninad Nobo Computer Vision',
    'Ninad Nobo Machine Learning',
    'Nobo Saturn Textiles R&D',
    'Ninad Nobo BUET CSE',
  ],

  /** 9. Word-order permutations */
  wordOrderPermutations: [
    'Nobo Ninad',
    'Nobo Ninad Mahmud',
    'Nobo Mohammad',
    'Mahmud Ninad Nobo',
    'Nobo BUET Ninad',
    'Saturn Nobo Ninad',
    'BUET CSE Ninad Nobo',
    'FABINS Ninad Nobo',
  ],

  /** 10. Abbreviation and acronym-like searches */
  acronymsAndAbbreviations: [
    'MNMN',
    'MNMNobo',
    'M-Ninad-M-Nobo',
    'M_Ninad_M_Nobo',
    'MNM-BUET',
    'Nobo-AI',
    'Nobo-CV',
  ],

  /** 11. Domain, URL & search-bar direct inputs */
  domainSearchBarInputs: [
    'mninadmnobo',
    'mninadmnobo.github.io',
    'mninadmnobo github io',
    'mninadmnobo github',
    'github.com/mninadmnobo',
    'github mninadmnobo',
    'linkedin mninadmnobo',
    'scholar mninadmnobo',
  ],

  /** 12. Bengali phonetic & dialect variations */
  bengaliPhoneticVariations: [
    'নিনাদ',
    'নিনাত',
    'মিনাত',
    'নব',
    'নোব',
    'নোবো',
    'নিনাদ মাহমুদ নব',
    'নিনাত মাহমুদ নোবো',
    'মোহাম্মদ নিনাদ',
    'মোহাম্মদ নিনাত',
    'মোহাম্মদ নব',
    'মোহাম্মদ নোবো',
  ],

  /** 13. Bangla-English phonetic code-switching / mixed queries */
  banglaEnglishMixed: [
    'Nobo বুয়েট',
    'Ninad ফ্যাবিনস',
    'Nobo নেভোলিন',
    'Ninad Saturn Textiles',
    'মোহাম্মদ Ninad Nobo',
    'নিনাদ Nobo AI',
    'নব BUET CSE',
    'নোবো portfolio',
    'নিনাদ নোবো github',
  ],

  /** 14. Multiple simultaneous errors (compound typo + spacing + mixed entity) */
  multipleSimultaneousErrors: [
    'Ninat Mahmud Nob BUET CSE',
    'Mohamad Ninad Nobo Saturn R&D',
    'Md Ninot Nobo Fabins',
    'Nobo Nevolin Automtion',
    'M Ninat M Nob BUET',
    'মোহাম্মাদ নিনাত মাহমুদ নোব বুয়েট',
  ],

  /** 15. Common unbranded search-intent queries (person / role / industry in Bangladesh) */
  searchIntentProblemSolution: [
    'AI ML engineer Bangladesh BUET',
    'computer vision fabric inspection researcher',
    'automated textile defect detection engineer Bangladesh',
    'Saturn Textiles R&D machine learning engineer',
    'BUET CSE machine learning researcher',
    'conflict-aware medical AI BUET',
    'multi-agent LLM systems researcher Bangladesh',
    'FABINS automation software developer',
    'fabric defect inspection deep learning researcher',
  ],
} as const

// Typo Generator
export const TYPO_BASES = [
  'nobo',
  'nob',
  'nab',
  'niv',
  'nib',
  'ninu',
  'ninad',
  'ninat',
  'minat',
  'mohammad',
] as const

export function generateTypoVariants(word: string): string[] {
  const variants = new Set<string>()
  const chars = 'abcdefghijklmnopqrstuvwxyz'
  const normalized = word.toLowerCase().trim()

  variants.add(normalized)

  for (let i = 0; i < normalized.length; i++) {
    variants.add(normalized.slice(0, i) + normalized.slice(i + 1))
  }
  for (let i = 0; i < normalized.length; i++) {
    variants.add(normalized.slice(0, i) + normalized.slice(i + 1))
  }
  for (let i = 0; i < normalized.length - 1; i++) {
    const a = normalized[i]
    const b = normalized[i + 1]
    variants.add(normalized.slice(0, i) + b + a + normalized.slice(i + 2))
  }
  for (let i = 0; i < normalized.length; i++) {
    for (const c of chars) {
      variants.add(normalized.slice(0, i) + c + normalized.slice(i + 1))
    }
  }

  return [...variants]
}

// ============================================================================
// 9. Combined Taxonomies & Global Alias Lookup
// ============================================================================

export const PERSONAL_SEARCH_TAXONOMY = {
  coreNames: NAME_CORE_VARIATIONS,
  bengaliNames: BENGALI_NAME_VARIATIONS,
  englishSpellings: ENGLISH_SPELLING_VARIATIONS,
  bengaliSpellings: BENGALI_SPELLING_VARIATIONS,
  buetAssociations: BUET_VARIATIONS,
  nevolynAssociations: NEVOLYN_NAME_VARIATIONS,
  fabinsAssociations: FABINS_NAME_VARIATIONS,
  saturnAssociations: SATURN_VARIATIONS,
  generatedCombinations: GENERATED_COMBINATIONS,
  schemaAlternateNames: SCHEMA_PERSON_ALTERNATE_NAMES,
  typoTaxonomy: TYPO_TAXONOMY,
  generatedTypos: TYPO_BASES.flatMap(generateTypoVariants),
}

export const SEO_TAXONOMY = {
  ...PERSONAL_SEARCH_TAXONOMY,
  typoTaxonomy: TYPO_TAXONOMY,
} as const

export const PERSONAL_SEARCH_ALIASES: string[] = Array.from(
  new Set([
    ...NAME_CORE_VARIATIONS,
    ...BENGALI_NAME_VARIATIONS,
    ...ENGLISH_SPELLING_VARIATIONS,
    ...BENGALI_SPELLING_VARIATIONS,
    ...BUET_VARIATIONS,
    ...NEVOLYN_NAME_VARIATIONS,
    ...FABINS_NAME_VARIATIONS,
    ...SATURN_VARIATIONS,
    ...GENERATED_COMBINATIONS,
    ...TYPO_TAXONOMY.keyboardNeighborMistakes,
    ...TYPO_TAXONOMY.phrasingVariations,
    ...TYPO_TAXONOMY.domainSearchBarInputs,
  ]),
)

const aliasNormalizedLookup = new Set<string>()
function getAliasLookup(): Set<string> {
  if (aliasNormalizedLookup.size === 0) {
    for (const alias of PERSONAL_SEARCH_ALIASES) {
      aliasNormalizedLookup.add(alias.toLowerCase().trim())
    }
  }
  return aliasNormalizedLookup
}

export function matchesPersonalAlias(query: string): boolean {
  if (!query) return false
  const clean = query.toLowerCase().trim()
  return getAliasLookup().has(clean)
}

// ============================================================================
// 10. Schema.org Structured Data (JSON-LD)
// ============================================================================

/**
 * Builds the Schema.org @graph establishing the canonical entity relationship:
 * Person -> Saturn Textiles Limited R&D -> FABINS Automation / NEVOLYN -> BUET -> WebSite -> ProfilePage
 */
export function buildSchemaGraph() {
  const {
    siteUrl,
    fabinsUrl,
    nevolynUrl,
    name,
    displayName,
    title,
    description,
    social,
    assets,
    worksFor,
    university,
    address,
    jobTitle,
  } = SEO_CONFIG

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Primary Entity: Person
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name,
        alternateName: [...SCHEMA_PERSON_ALTERNATE_NAMES],
        url: `${siteUrl}/`,
        image: {
          '@type': 'ImageObject',
          '@id': `${siteUrl}/#photo`,
          url: `${siteUrl}${assets.photo}`,
          contentUrl: `${siteUrl}${assets.photo}`,
          caption: name,
        },
        jobTitle,
        email: 'mailto:mninadmnobo@gmail.com',
        worksFor: {
          '@type': 'Organization',
          name: worksFor.name,
          department: {
            '@type': 'Organization',
            name: worksFor.department,
          },
        },
        affiliation: [
          {
            '@type': 'Organization',
            name: 'NEVOLYN',
            url: `${nevolynUrl}/`,
          },
        ],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: university.name,
          department: {
            '@type': 'Organization',
            name: university.department,
          },
          url: 'https://www.buet.ac.bd/',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: address.locality,
          addressCountry: address.country,
        },
        knowsAbout: [
          'Artificial Intelligence',
          'Machine Learning',
          'Computer Vision',
          'Deep Learning',
          'Fabric Inspection Automation',
          'Automated Defect Detection',
          'Multi-Agent Systems',
          'Large Language Models',
          'Medical AI',
          'Industrial Automation',
          'Software Engineering',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: jobTitle,
          skills:
            'Computer Vision, Deep Learning, Automated Fabric Inspection, Multi-Agent Systems, Conflict-Aware Medical AI',
        },
        sameAs: [
          social.github,
          social.linkedin,
          social.facebook,
          social.instagram,
          social.scholar,
          social.orcid,
          social.researchgate,
        ],
      },

      // 2. Cross-Referenced Product Entity: FABINS Automation
      {
        '@type': ['Product', 'SoftwareApplication'],
        '@id': `${fabinsUrl}/#product`,
        name: 'FABINS Automation',
        url: `${fabinsUrl}/`,
        applicationCategory: 'BusinessApplication',
        description:
          'AI-powered fabric inspection automation solution for automated fabric defect detection and quality inspection in the textile industry.',
        creator: {
          '@id': `${siteUrl}/#person`,
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'NEVOLYN',
          url: `${nevolynUrl}/`,
        },
      },

      // 3. WebSite Entity
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: title,
        alternateName: [displayName, name, 'Ninad Nobo Portfolio', 'mninadmnobo'],
        description,
        publisher: { '@id': `${siteUrl}/#person` },
        author: { '@id': `${siteUrl}/#person` },
        inLanguage: ['en', 'bn'],
      },

      // 4. Primary ProfilePage Entity
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: title,
        description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#person` },
        mainEntity: { '@id': `${siteUrl}/#person` },
        inLanguage: ['en', 'bn'],
        dateCreated: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
      },
    ],
  }
}

// ============================================================================
// 11. Next.js Root Metadata
// ============================================================================

export const rootSiteMetadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),

  title: {
    default: SEO_CONFIG.title,
    template: `%s | ${SEO_CONFIG.displayName}`,
  },
  description: SEO_CONFIG.description,

  applicationName: `${SEO_CONFIG.name} Portfolio`,
  authors: [{ name: SEO_CONFIG.name, url: SEO_CONFIG.siteUrl }],
  creator: SEO_CONFIG.name,
  publisher: SEO_CONFIG.name,

  keywords: [
    'Mohammad Ninad Mahmud Nobo',
    'Ninad Nobo',
    'mninadmnobo',
    'AI/ML Engineer',
    'Machine Learning Engineer',
    'Software Engineer',
    'Researcher',
    'Computer Vision',
    'LLM Systems',
    'Medical AI',
    'Industrial AI',
    'BUET CSE',
    'Saturn Textiles R&D',
    'FABINS',
    'FABINS Automation',
    'NEVOLYN',
  ],

  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/`,
  },

  verification: {
    google: SEO_CONFIG.googleVerificationToken,
  },

  openGraph: {
    type: 'profile',
    url: SEO_CONFIG.siteUrl,
    siteName: `${SEO_CONFIG.name} Portfolio`,
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    locale: 'en_US',
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.assets.og}`,
        width: 1200,
        height: 630,
        alt: `${SEO_CONFIG.name} — AI/ML Engineer & Researcher`,
      },
      {
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.assets.photo}`,
        width: 800,
        height: 800,
        alt: SEO_CONFIG.name,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [`${SEO_CONFIG.siteUrl}${SEO_CONFIG.assets.og}`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [{ url: SEO_CONFIG.assets.icon, type: 'image/svg+xml' }],
    shortcut: SEO_CONFIG.assets.icon,
    apple: SEO_CONFIG.assets.icon,
  },
}
