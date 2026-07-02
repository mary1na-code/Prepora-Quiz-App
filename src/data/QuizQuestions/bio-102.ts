import { Topic } from '.'

export const bio102: Topic = {
  topic: 'BIO 102 - Biology Fundamentals',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 1800, // estimate (30 min) - source had no time limit, adjust as needed
  questions: [
   {
  question: 'Microorganisms are best defined as:',
  choices: [
    'Large organisms visible to the naked eye',
    'Microscopic organisms that cannot be seen with the naked eye',
    'Organisms that only live in water',
    'Multicellular organisms with complex tissues',
  ],
  type: 'MCQs',
  correctAnswers: ['Microscopic organisms that cannot be seen with the naked eye'],
  score: 1,
  rationale:
    'B. Microscopic organisms that cannot be seen with the naked eye.\n\nMicroorganisms are microscopic organisms that cannot be seen with the naked eye and are found almost everywhere in the environment.',
},
{
  question: 'Which bacterium converts atmospheric nitrogen into a form usable by plants?',
  choices: [
    'Lactobacillus',
    'E. coli',
    'Rhizobium',
    'Penicillium',
  ],
  type: 'MCQs',
  correctAnswers: ['Rhizobium'],
  score: 1,
  rationale:
    'C. Rhizobium.\n\nRhizobium performs nitrogen fixation by converting atmospheric nitrogen into forms that plants can absorb and use for growth.',
},
{
  question: 'Which of the following is classified as a non-cellular infectious agent?',
  choices: [
    'Bacteria',
    'Fungi',
    'Viruses',
    'Algae',
  ],
  type: 'MCQs',
  correctAnswers: ['Viruses'],
  score: 1,
  rationale:
    'C. Viruses.\n\nViruses are non-cellular infectious agents that require living host cells to reproduce, unlike bacteria, fungi, and algae which are cellular organisms.',
},
{
  question: 'The cell wall of fungi is primarily composed of:',
  choices: [
    'Peptidoglycan',
    'Cellulose',
    'Chitin',
    'Lipopolysaccharide',
  ],
  type: 'MCQs',
  correctAnswers: ['Chitin'],
  score: 1,
  rationale:
    'C. Chitin.\n\nFungal cell walls are made mainly of chitin, which provides strength and structural support.',
},
{
  question: 'A typical virus consists of genetic material enclosed within a:',
  choices: [
    'Cell membrane',
    'Protein coat called a capsid',
    'Cytoplasmic matrix',
    'Nuclear envelope',
  ],
  type: 'MCQs',
  correctAnswers: ['Protein coat called a capsid'],
  score: 1,
  rationale:
    'B. Protein coat called a capsid.\n\nA typical virus consists of DNA or RNA enclosed in a protective protein coat known as a capsid.',
},
{
  question: 'Which virus possesses a helical capsid?',
  choices: [
    'Adenovirus',
    'HIV',
    'Tobacco mosaic virus',
    'Herpesvirus',
  ],
  type: 'MCQs',
  correctAnswers: ['Tobacco mosaic virus'],
  score: 1,
  rationale:
    'C. Tobacco mosaic virus.\n\nThe Tobacco mosaic virus is the classic example of a virus with a helical capsid structure.',
},
{
  question: 'Viruses are described as obligate parasites because they:',
  choices: [
    'Can only reproduce inside living host cells',
    'Feed on dead organic matter',
    'Carry out independent metabolism',
    'Are free-living in soil and water',
  ],
  type: 'MCQs',
  correctAnswers: ['Can only reproduce inside living host cells'],
  score: 1,
  rationale:
    'A. Can only reproduce inside living host cells.\n\nViruses lack the cellular machinery needed for reproduction and therefore must infect living host cells to multiply.',
},
{
  question: 'Which laboratory technique is commonly used to detect viral nucleic acids?',
  choices: [
    'Gram staining',
    'Electron microscopy',
    'PCR (Polymerase Chain Reaction)',
    'Catalase test',
  ],
  type: 'MCQs',
  correctAnswers: ['PCR (Polymerase Chain Reaction)'],
  score: 1,
  rationale:
    'C. PCR (Polymerase Chain Reaction).\n\nPCR detects and amplifies viral DNA or RNA, making it one of the most sensitive methods for diagnosing viral infections.',
},
{
  question: 'Bacteria are classified as prokaryotes because they:',
  choices: [
    'Have a membrane-bound nucleus',
    'Lack a true nucleus and membrane-bound organelles',
    'Have chitin cell walls',
    'Are multicellular organisms',
  ],
  type: 'MCQs',
  correctAnswers: ['Lack a true nucleus and membrane-bound organelles'],
  score: 1,
  rationale:
    'B. Lack a true nucleus and membrane-bound organelles.\n\nProkaryotic cells do not possess a true nucleus or membrane-bound organelles, which distinguishes them from eukaryotic cells.',
},
{
  question: 'After the alcohol decolorization step in Gram staining, Gram-positive bacteria appear:',
  choices: [
    'Pink/Red',
    'Colorless',
    'Purple/Violet',
    'Green',
  ],
  type: 'MCQs',
  correctAnswers: ['Purple/Violet'],
  score: 1,
  rationale:
    'C. Purple/Violet.\n\nGram-positive bacteria retain the crystal violet stain because of their thick peptidoglycan cell wall, causing them to appear purple or violet.',
},
{
  question: 'Rod-shaped bacteria are classified as:',
  choices: [
    'Cocci',
    'Bacilli',
    'Spirilla',
    'Vibrio',
  ],
  type: 'MCQs',
  correctAnswers: ['Bacilli'],
  score: 1,
  rationale:
    'B. Bacilli.\n\nBacilli are rod-shaped bacteria, whereas cocci are spherical, spirilla are spiral-shaped, and Vibrio are comma-shaped.',
},
{
  question: 'Which bacterium is an example of a facultative anaerobe?',
  choices: [
    'Clostridium',
    'Pseudomonas',
    'E. coli',
    'Cyanobacteria',
  ],
  type: 'MCQs',
  correctAnswers: ['E. coli'],
  score: 1,
  rationale:
    'C. E. coli.\n\nE. coli is a facultative anaerobe, meaning it can survive and grow in both the presence and absence of oxygen.',
},
{
  question: 'Bacteria that thrive at temperatures above 45°C are known as:',
  choices: [
    'Psychrophiles',
    'Mesophiles',
    'Thermophiles',
    'Halophiles',
  ],
  type: 'MCQs',
  correctAnswers: ['Thermophiles'],
  score: 1,
  rationale:
    'C. Thermophiles.\n\nThermophiles are heat-loving bacteria that grow best at temperatures above 45°C.',
},
{
  question: 'Fungi obtain their nutrients primarily through:',
  choices: [
    'Photosynthesis',
    'Absorption',
    'Ingestion',
    'Chemosynthesis',
  ],
  type: 'MCQs',
  correctAnswers: ['Absorption'],
  score: 1,
  rationale:
    'B. Absorption.\n\nFungi are heterotrophs that obtain nutrients by secreting enzymes into their environment and absorbing the digested nutrients.',
},

]}