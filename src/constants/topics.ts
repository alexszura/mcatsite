import { Topic } from '@/types';

export const TOPICS: Topic[] = [
  {
    id: 'general-chemistry',
    name: 'General Chemistry',
    category: 'Chemistry',
    description: 'Foundational concepts in chemistry',
    subtopics: [
      {
        id: 'gen-chem-ch1',
        name: 'Chapter 1: Atomic Structure & Bonding',
        chapterNumber: 1,
        description: 'Atoms, electrons, orbitals, and chemical bonding',
        questions: [
          {
            id: 'gc1-1',
            question: 'What is the maximum number of electrons in the third energy level?',
            options: [
              '8',
              '18',
              '32',
              '2'
            ],
            correctAnswer: 1,
            explanation: 'The third energy level (n=3) can hold a maximum of 2n² = 2(9) = 18 electrons.'
          },
          {
            id: 'gc1-2',
            question: 'Which orbitals have a dumbbell shape?',
            options: [
              's orbitals',
              'p orbitals',
              'd orbitals',
              'f orbitals'
            ],
            correctAnswer: 1,
            explanation: 'p orbitals have a characteristic dumbbell or two-lobed shape, with two regions of electron density on opposite sides of the nucleus.'
          }
        ]
      },
      {
        id: 'gen-chem-ch2',
        name: 'Chapter 2: Thermodynamics & Entropy',
        chapterNumber: 2,
        description: 'Energy, entropy, and spontaneity',
        questions: [
          {
            id: 'gc2-1',
            question: 'Which of the following processes is always spontaneous at all temperatures?',
            options: [
              'ΔH > 0, ΔS > 0',
              'ΔH < 0, ΔS > 0',
              'ΔH > 0, ΔS < 0',
              'ΔH < 0, ΔS < 0'
            ],
            correctAnswer: 1,
            explanation: 'A process with negative ΔH (exothermic) and positive ΔS (increasing disorder) will have negative ΔG at all temperatures, making it always spontaneous.'
          },
          {
            id: 'gc2-2',
            question: 'What is the first law of thermodynamics?',
            options: [
              'Entropy of the universe is always increasing',
              'Energy cannot be created or destroyed',
              'Absolute zero cannot be reached',
              'Heat flows from hot to cold'
            ],
            correctAnswer: 1,
            explanation: 'The first law states that energy is conserved - it can be converted from one form to another but the total energy remains constant.'
          },
          {
            id: 'gc2-3',
            question: 'Which state function is defined as H - TS?',
            options: [
              'Internal energy (U)',
              'Enthalpy (H)',
              'Gibbs free energy (G)',
              'Helmholtz free energy (A)'
            ],
            correctAnswer: 2,
            explanation: 'Gibbs free energy is defined as G = H - TS, where H is enthalpy, T is temperature, and S is entropy.'
          },
          {
            id: 'gc2-4',
            question: 'At equilibrium, what is the value of ΔG?',
            options: [
              'ΔG > 0',
              'ΔG < 0',
              'ΔG = 0',
              'ΔG = ΔH'
            ],
            correctAnswer: 2,
            explanation: 'At equilibrium, there is no net change in free energy, so ΔG = 0. The system has reached its minimum free energy state.'
          },
          {
            id: 'gc2-5',
            question: 'What is entropy a measure of?',
            options: [
              'Heat content',
              'Work capacity',
              'Disorder or randomness',
              'Temperature change'
            ],
            correctAnswer: 2,
            explanation: 'Entropy (S) is a measure of disorder, randomness, or the number of possible microstates in a system.'
          }
        ]
      },
      {
        id: 'gen-chem-ch3',
        name: 'Chapter 3: Kinetics & Equilibrium',
        chapterNumber: 3,
        description: 'Reaction rates, mechanisms, and equilibrium constants',
        questions: [
          {
            id: 'gc3-1',
            question: 'What is the rate-determining step in a reaction mechanism?',
            options: [
              'The fastest step',
              'The slowest step',
              'The first step',
              'The last step'
            ],
            correctAnswer: 1,
            explanation: 'The rate-determining step is the slowest step in the mechanism, which controls the overall reaction rate.'
          },
          {
            id: 'gc3-2',
            question: 'How does a catalyst affect a chemical reaction?',
            options: [
              'Increases activation energy',
              'Decreases activation energy',
              'Changes equilibrium position',
              'Increases product yield'
            ],
            correctAnswer: 1,
            explanation: 'A catalyst provides an alternative pathway with lower activation energy, speeding up the reaction without being consumed.'
          },
          {
            id: 'gc3-3',
            question: 'Doubling the temperature typically does what to reaction rate?',
            options: [
              'Doubles it',
              'Halves it',
              'Increases it 2-4 times',
              'No effect'
            ],
            correctAnswer: 2,
            explanation: 'According to the Arrhenius equation, increasing temperature typically doubles or triples the rate, so doubling temperature has an even larger effect.'
          },
          {
            id: 'gc3-4',
            question: 'For a first-order reaction, what is the unit of the rate constant k?',
            options: [
              'M/s',
              's⁻¹',
              'M⁻¹s⁻¹',
              'M²s⁻¹'
            ],
            correctAnswer: 1,
            explanation: 'For a first-order reaction (rate = k[A]), the rate constant k must have units of s⁻¹ to make the units consistent.'
          },
          {
            id: 'gc3-5',
            question: 'What is the half-life of a first-order reaction?',
            options: [
              '[A]₀/2k',
              'ln(2)/k',
              '1/k[A]₀',
              'k/2'
            ],
            correctAnswer: 1,
            explanation: 'For first-order reactions, the half-life t₁/₂ = ln(2)/k = 0.693/k, which is independent of concentration.'
          }
        ]
      },
      {
        id: 'gen-chem-ch4',
        name: 'Chapter 4: Equilibrium Constants & pH',
        chapterNumber: 4,
        description: 'Equilibrium expressions and acid-base chemistry',
        questions: [
          {
            id: 'gc4-1',
            question: 'What is the pH of a 0.01 M HCl solution?',
            options: [
              '1',
              '2',
              '3',
              '7'
            ],
            correctAnswer: 1,
            explanation: 'HCl is a strong acid that completely dissociates. pH = -log[H⁺] = -log(0.01) = -log(10⁻²) = 2.'
          },
          {
            id: 'gc4-2',
            question: 'A buffer solution contains equal amounts of weak acid and its conjugate base. What is the pH?',
            options: [
              'pH = 7',
              'pH = pKa',
              'pH = 14',
              'pH = 0'
            ],
            correctAnswer: 1,
            explanation: 'From the Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]). When [A⁻] = [HA], log(1) = 0, so pH = pKa.'
          },
          {
            id: 'gc4-3',
            question: 'Which is the strongest acid?',
            options: [
              'pKa = 2',
              'pKa = 5',
              'pKa = 9',
              'pKa = 12'
            ],
            correctAnswer: 0,
            explanation: 'Lower pKa indicates stronger acid. A pKa of 2 means the acid is more willing to donate protons than higher pKa values.'
          },
          {
            id: 'gc4-4',
            question: 'What happens when you add a strong acid to a buffer?',
            options: [
              'pH changes dramatically',
              'pH changes slightly',
              'pH stays exactly the same',
              'Buffer is destroyed immediately'
            ],
            correctAnswer: 1,
            explanation: 'Buffers resist pH changes. The conjugate base neutralizes added H⁺, causing only a slight pH change until buffer capacity is exceeded.'
          },
          {
            id: 'gc4-5',
            question: 'The pOH of a solution is 3. What is the pH?',
            options: [
              '3',
              '7',
              '11',
              '14'
            ],
            correctAnswer: 2,
            explanation: 'pH + pOH = 14 at 25°C. If pOH = 3, then pH = 14 - 3 = 11.'
          }
        ]
      }
    ]
  },
  {
    id: 'organic-chemistry',
    name: 'Organic Chemistry',
    category: 'Chemistry',
    description: 'Structure, reactions, and mechanisms',
    subtopics: [
      {
        id: 'org-ch1',
        name: 'Chapter 1: Structure & Bonding',
        chapterNumber: 1,
        description: 'Organic structures, hybridization, and intermolecular forces',
        questions: [
          {
            id: 'org1-1',
            question: 'What hybridization does a carbon atom have in ethane (C₂H₆)?',
            options: [
              'sp',
              'sp²',
              'sp³',
              'sp³d'
            ],
            correctAnswer: 2,
            explanation: 'In ethane, each carbon forms 4 single bonds in a tetrahedral geometry, requiring sp³ hybridization.'
          },
          {
            id: 'org1-2',
            question: 'Which intermolecular force is responsible for the boiling point difference between ethane and ethanol?',
            options: [
              'Dispersion forces only',
              'Dipole-dipole interactions',
              'Hydrogen bonding',
              'Ionic interactions'
            ],
            correctAnswer: 2,
            explanation: 'Ethanol has an -OH group capable of hydrogen bonding, while ethane only has dispersion forces, making ethanol\'s boiling point much higher.'
          }
        ]
      },
      {
        id: 'org-ch2',
        name: 'Chapter 2: Alkanes & Alkenes',
        chapterNumber: 2,
        description: 'Nomenclature and reactions of alkanes and alkenes',
        questions: [
          {
            id: 'org2-1',
            question: 'What is the major product of treating an alkene with HBr?',
            options: [
              'Random addition',
              'Markovnikov product',
              'Anti-Markovnikov product',
              'Elimination'
            ],
            correctAnswer: 1,
            explanation: 'According to Markovnikov\'s rule, H adds to the less substituted carbon, forming the more stable carbocation intermediate.'
          },
          {
            id: 'org2-2',
            question: 'What type of reaction is the conversion of an alkene to an alkane?',
            options: [
              'Oxidation',
              'Reduction',
              'Substitution',
              'Elimination'
            ],
            correctAnswer: 1,
            explanation: 'Adding hydrogen (H₂) to an alkene to form an alkane is a reduction reaction, as the carbon atoms gain hydrogen.'
          },
          {
            id: 'org2-3',
            question: 'What is the Markovnikov rule for addition to alkenes?',
            options: [
              'H adds to more substituted carbon',
              'H adds to less substituted carbon',
              'Equal addition to both carbons',
              'No regioselectivity'
            ],
            correctAnswer: 1,
            explanation: 'Markovnikov\'s rule states that in addition reactions, the hydrogen adds to the carbon with more hydrogens, forming the more stable carbocation.'
          }
        ]
      },
      {
        id: 'org-ch3',
        name: 'Chapter 3: Alcohols, Ethers & Carbonyls',
        chapterNumber: 3,
        description: 'Reactions and synthesis of alcohols and carbonyl compounds',
        questions: [
          {
            id: 'org3-1',
            question: 'What is the product of treating an alcohol with PCC (pyridinium chlorochromate)?',
            options: [
              'Carboxylic acid',
              'Ketone or aldehyde',
              'Ester',
              'Alkene'
            ],
            correctAnswer: 1,
            explanation: 'PCC is a mild oxidizing agent that converts primary alcohols to aldehydes and secondary alcohols to ketones without over-oxidation.'
          },
          {
            id: 'org3-2',
            question: 'What product forms when a ketone reacts with a Grignard reagent?',
            options: [
              'Primary alcohol',
              'Secondary alcohol',
              'Tertiary alcohol',
              'Aldehyde'
            ],
            correctAnswer: 2,
            explanation: 'Grignard reagents (RMgX) add to ketones to form tertiary alcohols after protonation. Two R groups come from the ketone, one from the Grignard.'
          },
          {
            id: 'org3-3',
            question: 'What is saponification?',
            options: [
              'Ester formation',
              'Base-catalyzed ester hydrolysis',
              'Aldehyde reduction',
              'Alkene hydrogenation'
            ],
            correctAnswer: 1,
            explanation: 'Saponification is the base-catalyzed hydrolysis of esters to form carboxylate salts and alcohols. It\'s used in soap making.'
          }
        ]
      },
      {
        id: 'org-ch4',
        name: 'Chapter 4: Nucleophilic Substitution & Elimination',
        chapterNumber: 4,
        description: 'SN1, SN2, E1, and E2 reaction mechanisms',
        questions: [
          {
            id: 'org4-1',
            question: 'What mechanism do most SN2 reactions follow?',
            options: [
              'Two-step with carbocation',
              'One-step with inversion',
              'Radical mechanism',
              'Elimination'
            ],
            correctAnswer: 1,
            explanation: 'SN2 reactions proceed via a one-step mechanism with backside attack, resulting in inversion of configuration (Walden inversion).'
          },
          {
            id: 'org4-2',
            question: 'Which functional group is most reactive toward nucleophiles?',
            options: [
              'Ester',
              'Amide',
              'Acid chloride',
              'Carboxylic acid'
            ],
            correctAnswer: 2,
            explanation: 'Acid chlorides are the most reactive carboxylic acid derivatives due to the electron-withdrawing chlorine and good leaving group ability.'
          }
        ]
      },
      {
        id: 'org-ch5',
        name: 'Chapter 5: Aromatic Chemistry',
        chapterNumber: 5,
        description: 'Benzene, aromaticity, and electrophilic aromatic substitution',
        questions: [
          {
            id: 'org5-1',
            question: 'How many π electrons does benzene have?',
            options: [
              '4',
              '6',
              '8',
              '10'
            ],
            correctAnswer: 1,
            explanation: 'Benzene has 6 π electrons (one from each sp² hybridized carbon), making it aromatic according to Hückel\'s rule (4n+2 electrons).'
          },
          {
            id: 'org5-2',
            question: 'What is an activating group in electrophilic aromatic substitution?',
            options: [
              'A group that deactivates the ring',
              'A group that activates the ring and directs ortho/para',
              'A group that directs meta',
              'A group that causes elimination'
            ],
            correctAnswer: 1,
            explanation: 'Activating groups like -OH, -OR, and -NR₂ increase electron density on the ring and direct incoming electrophiles to ortho/para positions.'
          }
        ]
      }
    ]
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry',
    category: 'Biology',
    description: 'Molecular biology and cellular chemistry',
    subtopics: [
      {
        id: 'bio-ch1',
        name: 'Chapter 1: Amino Acids & Proteins',
        chapterNumber: 1,
        description: 'Amino acid structure, protein synthesis, and folding',
        questions: [
          {
            id: 'bio1-1',
            question: 'What is the primary structure of a protein?',
            options: [
              'The 3D shape',
              'The α-helix and β-sheet',
              'The amino acid sequence',
              'The disulfide bonds'
            ],
            correctAnswer: 2,
            explanation: 'Primary structure is the linear sequence of a protein\'s amino acids linked by peptide bonds.'
          },
          {
            id: 'bio1-2',
            question: 'Which amino acid contains a thiol group?',
            options: [
              'Serine',
              'Cysteine',
              'Methionine',
              'Tryptophan'
            ],
            correctAnswer: 1,
            explanation: 'Cysteine contains a thiol (-SH) group in its side chain, which can form disulfide bonds with other cysteines.'
          }
        ]
      },
      {
        id: 'bio-ch2',
        name: 'Chapter 2: Nucleic Acids',
        chapterNumber: 2,
        description: 'DNA, RNA, and genetic information',
        questions: [
          {
            id: 'bio2-1',
            question: 'How many hydrogen bonds are present between adenine and thymine in DNA?',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'Adenine and thymine form 2 hydrogen bonds, while guanine and cytosine form 3 hydrogen bonds.'
          },
          {
            id: 'bio2-2',
            question: 'What is the function of mRNA?',
            options: [
              'Store genetic information',
              'Carry genetic information to ribosomes',
              'Catalyze reactions',
              'Transport amino acids'
            ],
            correctAnswer: 1,
            explanation: 'mRNA carries the genetic code from DNA to ribosomes for protein synthesis.'
          }
        ]
      },
      {
        id: 'bio-ch3',
        name: 'Chapter 3: Enzyme Kinetics & Metabolism',
        chapterNumber: 3,
        description: 'Enzyme mechanisms, inhibition, and metabolic pathways',
        questions: [
          {
            id: 'bio3-1',
            question: 'What does Km represent in enzyme kinetics?',
            options: [
              'Maximum velocity',
              'Substrate concentration at half Vmax',
              'Enzyme concentration',
              'Temperature coefficient'
            ],
            correctAnswer: 1,
            explanation: 'Km (Michaelis constant) is the substrate concentration at which the enzyme operates at half its maximum velocity.'
          },
          {
            id: 'bio3-2',
            question: 'What type of inhibition cannot be overcome by increasing substrate concentration?',
            options: [
              'Competitive inhibition',
              'Non-competitive inhibition',
              'Allosteric inhibition',
              'Feedback inhibition'
            ],
            correctAnswer: 1,
            explanation: 'Non-competitive inhibitors bind to the enzyme at a site other than the active site and cannot be overcome by substrate concentration changes.'
          }
        ]
      }
    ]
  },
  {
    id: 'psychology-sociology',
    name: 'Psychology & Sociology',
    category: 'Behavioral Sciences',
    description: 'Psychological, social, and biological foundations of behavior.',
    subtopics: [
      {
        id: 'psych-soc-part1',
        name: 'Behavioral Sciences Part 1: Ch 1-4',
        description: 'Biology & Behavior, Sensation & Perception, Learning & Memory, Cognition, Consciousness & Language.',
        questions: [
          {
            id: 'ps1-1',
            question: 'Which part of the brain is primarily responsible for processing visual information?',
            options: [
              'Frontal lobe',
              'Temporal lobe',
              'Parietal lobe',
              'Occipital lobe'
            ],
            correctAnswer: 3,
            explanation: 'The occipital lobe, located at the back of the head, is the visual processing center of the brain.'
          },
          {
            id: 'ps2-1',
            question: 'Which of the following is responsible for color vision?',
            options: [
              'Rods',
              'Cones',
              'Cornea',
              'Lens'
            ],
            correctAnswer: 1,
            explanation: 'Cones are photoreceptor cells in the retina that are responsible for color vision and function best in bright light.'
          },
          {
            id: 'ps3-1',
            question: 'In classical conditioning, a previously neutral stimulus that, after being associated with an unconditioned stimulus, comes to trigger a conditioned response is known as a(n):',
            options: [
              'Unconditioned Stimulus (UCS)',
              'Conditioned Stimulus (CS)',
              'Unconditioned Response (UCR)',
              'Conditioned Response (CR)'
            ],
            correctAnswer: 1,
            explanation: 'The conditioned stimulus (e.g., a bell) is the initially neutral stimulus that, through association, elicits the learned response.'
          },
          {
            id: 'ps4-1',
            question: 'Which cognitive bias involves favoring information that confirms pre-existing beliefs?',
            options: [
              'Hindsight bias',
              'Anchoring bias',
              'Confirmation bias',
              'Availability heuristic'
            ],
            correctAnswer: 2,
            explanation: 'Confirmation bias is the tendency to search for, interpret, favor, and recall information that confirms or supports one\'s prior beliefs or values.'
          }
        ]
      },
      {
        id: 'psych-soc-part2',
        name: 'Behavioral Sciences Part 2: Ch 5-8',
        description: 'Motivation, Emotion & Stress, Identity & Personality, Psychological Disorders, Social Processes, Attitudes & Behavior.',
        questions: [
          {
            id: 'ps5-1',
            question: 'According to Maslow\'s hierarchy of needs, which of the following is the most fundamental need?',
            options: [
              'Self-actualization',
              'Esteem',
              'Love and belonging',
              'Physiological needs'
            ],
            correctAnswer: 3,
            explanation: 'Physiological needs, such as air, water, food, and shelter, are the most basic and must be met before higher-level needs can be addressed.'
          },
          {
            id: 'ps6-1',
            question: 'Which of the "Big Five" personality traits is characterized by organization, discipline, and carefulness?',
            options: [
              'Openness',
              'Conscientiousness',
              'Extraversion',
              'Agreeableness'
            ],
            correctAnswer: 1,
            explanation: 'Conscientiousness is a personality trait that involves being careful, diligent, and organized.'
          },
          {
            id: 'ps7-1',
            question: 'A person with an irrational fear of spiders is likely suffering from which type of psychological disorder?',
            options: [
              'Generalized Anxiety Disorder',
              'Panic Disorder',
              'Specific Phobia',
              'Obsessive-Compulsive Disorder'
            ],
            correctAnswer: 2,
            explanation: 'A specific phobia is an anxiety disorder characterized by an intense, irrational fear of a specific object or situation, such as spiders (arachnophobia).'
          },
          {
            id: 'ps8-1',
            question: 'The tendency for individuals to exert less effort when working in a group than when working alone is known as:',
            options: [
              'Groupthink',
              'Social facilitation',
              'Social loafing',
              'Deindividuation'
            ],
            correctAnswer: 2,
            explanation: 'Social loafing is the phenomenon where individuals in a group setting put in less effort, assuming others will pick up the slack.'
          }
        ]
      },
      {
        id: 'psych-soc-part3',
        name: 'Behavioral Sciences Part 3: Ch 9-12',
        description: 'Social Interaction, Social Thinking, Social Structure & Demographics, and Social Stratification.',
        questions: [
          {
            id: 'ps9-1',
            question: 'Which of the following best describes "groupthink"?',
            options: [
              'A mode of thinking where the desire for harmony in a group overrides a realistic appraisal of alternatives.',
              'The tendency for a group to make decisions that are more extreme than the initial inclination of its members.',
              'The loss of self-awareness and self-restraint occurring in group situations.',
              'Improved performance on simple or well-learned tasks in the presence of others.'
            ],
            correctAnswer: 0,
            explanation: 'Groupthink occurs when a group\'s desire for conformity leads to an irrational or dysfunctional decision-making outcome.'
          },
          {
            id: 'ps10-1',
            question: 'Attributing your own successes to internal factors while attributing your failures to external factors is an example of:',
            options: [
              'Fundamental attribution error',
              'Self-serving bias',
              'Actor-observer bias',
              'Just-world hypothesis'
            ],
            correctAnswer: 1,
            explanation: 'Self-serving bias is the common habit of a person taking credit for positive events or outcomes, but blaming outside factors for negative events.'
          },
          {
            id: 'ps11-1',
            question: 'The demographic transition model describes population change over time. What happens in Stage 2?',
            options: [
              'High birth rates and high death rates.',
              'High birth rates and declining death rates.',
              'Declining birth rates and declining death rates.',
              'Low birth rates and low death rates.'
            ],
            correctAnswer: 1,
            explanation: 'In Stage 2 of the demographic transition, death rates fall due to improvements in food supply and sanitation, but birth rates remain high, leading to rapid population growth.'
          },
          {
            id: 'ps12-1',
            question: 'The ability to move up or down in social class is known as:',
            options: [
              'Social reproduction',
              'Social mobility',
              'Social stratification',
              'Social capital'
            ],
            correctAnswer: 1,
            explanation: 'Social mobility refers to the movement of individuals, families, or groups through a system of social hierarchy or stratification.'
          }
        ]
      }
    ]
  }
];
