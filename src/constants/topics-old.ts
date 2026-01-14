import { Topic } from '@/types';

export const TOPICS: Topic[] = [
  {
    id: 'thermodynamics',
    name: 'Thermodynamics',
    category: 'General Chemistry',
    description: 'Energy, entropy, and spontaneity of reactions',
    questions: [
      {
        id: 'thermo-1',
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
        id: 'thermo-2',
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
        id: 'thermo-3',
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
        id: 'thermo-4',
        question: 'An endothermic reaction has positive entropy change. At what temperature is it spontaneous?',
        options: [
          'Never spontaneous',
          'Always spontaneous',
          'Spontaneous at high temperatures',
          'Spontaneous at low temperatures'
        ],
        correctAnswer: 2,
        explanation: 'For ΔG = ΔH - TΔS to be negative (spontaneous), with ΔH > 0 and ΔS > 0, the TΔS term must be large enough. This occurs at high temperatures.'
      },
      {
        id: 'thermo-5',
        question: 'What does a negative ΔG indicate?',
        options: [
          'The reaction is at equilibrium',
          'The reaction is spontaneous',
          'The reaction is nonspontaneous',
          'The reaction is exothermic'
        ],
        correctAnswer: 1,
        explanation: 'Negative ΔG (Gibbs free energy change) indicates the reaction will proceed spontaneously in the forward direction.'
      },
      {
        id: 'thermo-6',
        question: 'Which process involves heat transfer at constant pressure?',
        options: [
          'Internal energy change',
          'Enthalpy change',
          'Entropy change',
          'Free energy change'
        ],
        correctAnswer: 1,
        explanation: 'Enthalpy (H) is defined as the heat content at constant pressure. ΔH equals heat transferred at constant pressure.'
      },
      {
        id: 'thermo-7',
        question: 'The second law of thermodynamics states that:',
        options: [
          'Energy is conserved',
          'Entropy of an isolated system increases',
          'Temperature approaches absolute zero',
          'Heat capacity is constant'
        ],
        correctAnswer: 1,
        explanation: 'The second law states that the entropy of an isolated system always increases, meaning disorder increases over time.'
      },
      {
        id: 'thermo-8',
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
        id: 'thermo-9',
        question: 'What is entropy a measure of?',
        options: [
          'Heat content',
          'Work capacity',
          'Disorder or randomness',
          'Temperature change'
        ],
        correctAnswer: 2,
        explanation: 'Entropy (S) is a measure of disorder, randomness, or the number of possible microstates in a system.'
      },
      {
        id: 'thermo-10',
        question: 'Which quantity remains constant in an adiabatic process?',
        options: [
          'Pressure',
          'Volume',
          'Temperature',
          'Heat (q = 0)'
        ],
        correctAnswer: 3,
        explanation: 'An adiabatic process is one where no heat is exchanged with the surroundings (q = 0). The system is thermally insulated.'
      }
    ]
  },
  {
    id: 'kinetics',
    name: 'Chemical Kinetics',
    category: 'General Chemistry',
    description: 'Reaction rates and mechanisms',
    questions: [
      {
        id: 'kinetics-1',
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
        id: 'kinetics-2',
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
        id: 'kinetics-3',
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
        id: 'kinetics-4',
        question: 'Doubling the temperature typically does what to reaction rate?',
        options: [
          'Doubles it',
          'Halves it',
          'Increases it 2-4 times',
          'No effect'
        ],
        correctAnswer: 2,
        explanation: 'According to the Arrhenius equation, increasing temperature by 10°C typically doubles or triples the rate, so doubling temperature has an even larger effect.'
      },
      {
        id: 'kinetics-5',
        question: 'What is the half-life of a first-order reaction?',
        options: [
          '[A]₀/2k',
          'ln(2)/k',
          '1/k[A]₀',
          'k/2'
        ],
        correctAnswer: 1,
        explanation: 'For first-order reactions, the half-life t₁/₂ = ln(2)/k = 0.693/k, which is independent of concentration.'
      },
      {
        id: 'kinetics-6',
        question: 'What does the Arrhenius equation relate?',
        options: [
          'Rate and concentration',
          'Rate constant and temperature',
          'Energy and entropy',
          'Pressure and volume'
        ],
        correctAnswer: 1,
        explanation: 'The Arrhenius equation (k = Ae^(-Ea/RT)) relates the rate constant k to temperature T and activation energy Ea.'
      },
      {
        id: 'kinetics-7',
        question: 'What is the order of a reaction if doubling [A] quadruples the rate?',
        options: [
          'Zero order',
          'First order',
          'Second order',
          'Third order'
        ],
        correctAnswer: 2,
        explanation: 'If rate ∝ [A]ⁿ and doubling [A] gives 4× rate, then 2ⁿ = 4, so n = 2. The reaction is second order in A.'
      },
      {
        id: 'kinetics-8',
        question: 'What is an intermediate in a reaction mechanism?',
        options: [
          'A reactant that is not consumed',
          'A species formed and consumed during the reaction',
          'The final product',
          'A catalyst'
        ],
        correctAnswer: 1,
        explanation: 'An intermediate is formed in one step and consumed in a later step. It does not appear in the overall equation.'
      },
      {
        id: 'kinetics-9',
        question: 'For a zero-order reaction, how does [A] change with time?',
        options: [
          'Exponential decay',
          'Linear decrease',
          'No change',
          'Logarithmic decrease'
        ],
        correctAnswer: 1,
        explanation: 'For zero-order reactions, rate = k (constant), so [A] = [A]₀ - kt, which is a linear relationship.'
      },
      {
        id: 'kinetics-10',
        question: 'What is activation energy?',
        options: [
          'Energy released in a reaction',
          'Minimum energy needed to start a reaction',
          'Energy of the products',
          'Heat capacity of reactants'
        ],
        correctAnswer: 1,
        explanation: 'Activation energy (Ea) is the minimum energy required for reactant molecules to reach the transition state and form products.'
      }
    ]
  },
  {
    id: 'organic-reactions',
    name: 'Organic Reactions',
    category: 'Organic Chemistry',
    description: 'Mechanisms and reaction types in organic chemistry',
    questions: [
      {
        id: 'org-1',
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
        id: 'org-2',
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
        id: 'org-3',
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
        id: 'org-4',
        question: 'Which functional group is most reactive toward nucleophiles?',
        options: [
          'Ester',
          'Amide',
          'Acid chloride',
          'Carboxylic acid'
        ],
        correctAnswer: 2,
        explanation: 'Acid chlorides are the most reactive carboxylic acid derivatives due to the electron-withdrawing chlorine and good leaving group ability.'
      },
      {
        id: 'org-5',
        question: 'What is the Markovnikov rule for addition to alkenes?',
        options: [
          'H adds to more substituted carbon',
          'H adds to less substituted carbon',
          'Equal addition to both carbons',
          'No regioselectivity'
        ],
        correctAnswer: 1,
        explanation: 'Markovnikov\'s rule states that in addition reactions, the hydrogen adds to the carbon with more hydrogens, forming the more stable carbocation.'
      },
      {
        id: 'org-6',
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
        id: 'org-7',
        question: 'What is saponification?',
        options: [
          'Ester formation',
          'Base-catalyzed ester hydrolysis',
          'Aldehyde reduction',
          'Alkene hydrogenation'
        ],
        correctAnswer: 1,
        explanation: 'Saponification is the base-catalyzed hydrolysis of esters to form carboxylate salts and alcohols. It\'s used in soap making.'
      },
      {
        id: 'org-8',
        question: 'Which reagent converts an alkyne to a trans-alkene?',
        options: [
          'H₂, Pd/C',
          'Na, NH₃',
          'H₂, Lindlar catalyst',
          'HBr'
        ],
        correctAnswer: 1,
        explanation: 'Sodium in liquid ammonia (Na/NH₃) reduces alkynes to trans-alkenes via a dissolving metal reduction.'
      },
      {
        id: 'org-9',
        question: 'What is formed in an aldol condensation?',
        options: [
          'β-hydroxy carbonyl',
          'α,β-unsaturated carbonyl',
          'Ester',
          'Ether'
        ],
        correctAnswer: 1,
        explanation: 'Aldol condensation produces α,β-unsaturated carbonyls after dehydration of the initial β-hydroxy carbonyl (aldol) product.'
      },
      {
        id: 'org-10',
        question: 'What is the major product of E2 elimination?',
        options: [
          'More substituted alkene (Zaitsev)',
          'Less substituted alkene (Hofmann)',
          'No preference',
          'Alkane'
        ],
        correctAnswer: 0,
        explanation: 'E2 elimination typically follows Zaitsev\'s rule, forming the more substituted (more stable) alkene as the major product.'
      }
    ]
  },
  {
    id: 'acid-base',
    name: 'Acids & Bases',
    category: 'General Chemistry',
    description: 'pH, pKa, and acid-base equilibria',
    questions: [
      {
        id: 'acid-1',
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
        id: 'acid-2',
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
        id: 'acid-3',
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
        id: 'acid-4',
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
        id: 'acid-5',
        question: 'At the equivalence point of a weak acid-strong base titration, pH is:',
        options: [
          'pH < 7',
          'pH = 7',
          'pH > 7',
          'pH = pKa'
        ],
        correctAnswer: 2,
        explanation: 'At equivalence, all weak acid is converted to conjugate base, which hydrolyzes water to produce OH⁻, making pH > 7.'
      },
      {
        id: 'acid-6',
        question: 'What is the relationship between Ka and Kb for a conjugate acid-base pair?',
        options: [
          'Ka × Kb = Kw',
          'Ka + Kb = 14',
          'Ka = Kb',
          'Ka/Kb = 1'
        ],
        correctAnswer: 0,
        explanation: 'For a conjugate acid-base pair, Ka × Kb = Kw = 1.0 × 10⁻¹⁴ at 25°C. This relates the strength of an acid to its conjugate base.'
      },
      {
        id: 'acid-7',
        question: 'Which species is amphoteric?',
        options: [
          'HCl',
          'H₂O',
          'NaOH',
          'CH₄'
        ],
        correctAnswer: 1,
        explanation: 'Water is amphoteric - it can act as both an acid (donating H⁺) and a base (accepting H⁺), as in H₂O + H₂O ⇌ H₃O⁺ + OH⁻.'
      },
      {
        id: 'acid-8',
        question: 'The pOH of a solution is 3. What is the pH?',
        options: [
          '3',
          '7',
          '11',
          '14'
        ],
        correctAnswer: 2,
        explanation: 'pH + pOH = 14 at 25°C. If pOH = 3, then pH = 14 - 3 = 11.'
      },
      {
        id: 'acid-9',
        question: 'What is the best buffer system for pH 7.4 (physiological pH)?',
        options: [
          'Acetic acid/acetate (pKa = 4.76)',
          'H₂CO₃/HCO₃⁻ (pKa = 6.37)',
          'H₂PO₄⁻/HPO₄²⁻ (pKa = 7.21)',
          'NH₄⁺/NH₃ (pKa = 9.25)'
        ],
        correctAnswer: 2,
        explanation: 'A buffer is most effective when pH ≈ pKa. The phosphate buffer (pKa = 7.21) is closest to pH 7.4, making it ideal for physiological systems.'
      },
      {
        id: 'acid-10',
        question: 'Which effect explains why HF is weaker than HCl?',
        options: [
          'Electronegativity',
          'Bond strength',
          'Atomic size',
          'Resonance'
        ],
        correctAnswer: 1,
        explanation: 'Despite F being more electronegative, the H-F bond is very strong due to small atomic size. The stronger bond makes HF less willing to donate H⁺ than HCl.'
      }
    ]
  }
];