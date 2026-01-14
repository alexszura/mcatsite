import { Topic } from '@/types';

export const TOPICS: Topic[] = [
  {
    id: 'general-chemistry',
    name: 'General Chemistry',
    category: 'Chemistry',
    description: 'Foundational concepts in chemistry',
    subtopicGroups: [
      {
        id: 'gen-chem-grp-1',
        name: 'General Chemistry Chapters 1-4',
        subtopics: [
          { id: 'gen-chem-ch1', name: 'Atomic Structure', chapterNumber: 1 },
          { id: 'gen-chem-ch2', name: 'The Periodic Table', chapterNumber: 2 },
          { id: 'gen-chem-ch3', name: 'Bonding and Chemical Interactions', chapterNumber: 3 },
          { id: 'gen-chem-ch4', name: 'Compounds and Stoichiometry', chapterNumber: 4 },
        ]
      },
      {
        id: 'gen-chem-grp-2',
        name: 'General Chemistry Chapters 5-8',
        subtopics: [
          { id: 'gen-chem-ch5', name: 'Chemical Kinetics', chapterNumber: 5 },
          { id: 'gen-chem-ch6', name: 'Equilibrium', chapterNumber: 6 },
          { id: 'gen-chem-ch7', name: 'Thermochemistry', chapterNumber: 7 },
          { id: 'gen-chem-ch8', name: 'The Gas Phase', chapterNumber: 8 },
        ]
      },
      {
        id: 'gen-chem-grp-3',
        name: 'General Chemistry Chapters 9-12',
        subtopics: [
          { id: 'gen-chem-ch9', name: 'Solutions', chapterNumber: 9 },
          { id: 'gen-chem-ch10', name: 'Acids and Bases', chapterNumber: 10 },
          { id: 'gen-chem-ch11', name: 'Oxidation-Reduction Reactions', chapterNumber: 11 },
          { id: 'gen-chem-ch12', name: 'Electrochemistry', chapterNumber: 12 },
        ]
      }
    ],
    subtopics: [
      {
        id: 'gen-chem-ch1',
        name: 'Gen Chem Ch. 1 - Atomic Structure',
        chapterNumber: 1,
        description: 'Atomic structure, isotopes, and quantum mechanics.',
        questions: []
      },
      {
        id: 'gen-chem-ch2',
        name: 'Gen Chem Ch. 2 - The Periodic Table',
        chapterNumber: 2,
        description: 'Periodic trends, electron configurations, and properties of elements.',
        questions: []
      },
      {
        id: 'gen-chem-ch3',
        name: 'Gen Chem Ch. 3 - Bonding and Chemical Interactions',
        chapterNumber: 3,
        description: 'Covalent bonding, ionic bonding, and intermolecular forces.',
        questions: []
      },
      {
        id: 'gen-chem-ch4',
        name: 'Gen Chem Ch. 4 - Compounds and Stoichiometry',
        chapterNumber: 4,
        description: 'Nomenclature, balancing equations, and mole concepts.',
        questions: []
      },
      {
        id: 'gen-chem-ch5',
        name: 'Gen Chem Ch. 5 - Chemical Kinetics',
        chapterNumber: 5,
        description: 'Reaction rates, rate laws, and activation energy.',
        questions: []
      },
      {
        id: 'gen-chem-ch6',
        name: 'Gen Chem Ch. 6 - Equilibrium',
        chapterNumber: 6,
        description: 'Le Chatelier\'s principle, equilibrium constants, and reaction quotients.',
        questions: []
      },
      {
        id: 'gen-chem-ch7',
        name: 'Gen Chem Ch. 7 - Thermochemistry',
        chapterNumber: 7,
        description: 'Enthalpy, entropy, and Gibbs free energy.',
        questions: []
      },
      {
        id: 'gen-chem-ch8',
        name: 'Gen Chem Ch. 8 - The Gas Phase',
        chapterNumber: 8,
        description: 'Ideal gas law, kinetic molecular theory, and partial pressures.',
        questions: []
      },
      {
        id: 'gen-chem-ch9',
        name: 'Gen Chem Ch. 9 - Solutions',
        chapterNumber: 9,
        description: 'Concentration, colligative properties, and solubility.',
        questions: []
      },
      {
        id: 'gen-chem-ch10',
        name: 'Gen Chem Ch. 10 - Acids and Bases',
        chapterNumber: 10,
        description: 'pH, pKa, buffers, and titrations.',
        questions: []
      },
      {
        id: 'gen-chem-ch11',
        name: 'Gen Chem Ch. 11 - Oxidation-Reduction Reactions',
        chapterNumber: 11,
        description: 'Balancing redox reactions, oxidation states, and electrochemical cells.',
        questions: []
      },
      {
        id: 'gen-chem-ch12',
        name: 'Gen Chem Ch. 12 - Electrochemistry',
        chapterNumber: 12,
        description: 'Galvanic cells, electrolytic cells, and Faraday\'s laws.',
        questions: []
      }
    ]
  },
  // ... (rest of the topics)
];
