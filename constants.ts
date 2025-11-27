
import { ContentType, Section } from './types';

export const SECTIONS: Section[] = [
  {
    id: 'sec1',
    title: '1. Structure & History',
    icon: 'Landmark',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'The Indian Banking System is the backbone of the country\'s economy. For a PO aspirant, knowing the hierarchy and history is the first step. The system is regulated by the Reserve Bank of India (RBI), which ensures financial stability and public confidence.'
      },
      {
        type: ContentType.IMAGE,
        imageUrl: 'https://picsum.photos/seed/rbi_building/800/400',
        imageCaption: 'The structure flows from the RBI to Scheduled Commercial Banks and Cooperative Banks.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Evolution Timeline',
        text: 'The journey from 1770 to the modern digital era:',
        items: [
          '1770: Bank of Hindustan (First bank established in India)',
          '1935: Reserve Bank of India established (Hilton Young Commission recommendations)',
          '1949: Banking Regulation Act passed; RBI Nationalized',
          '1955: SBI formed from Imperial Bank of India (Gorewala Committee)',
          '1969: Nationalization of 14 major banks (Deposits > ₹50 Cr)',
          '1980: Nationalization of 6 more banks (Deposits > ₹200 Cr)',
          '1993: New Bank of India merged with PNB',
          '2017: SBI merged with its 5 Associate Banks and Bhartiya Mahila Bank',
          '2020: Mega Merger of PSBs (10 banks merged into 4)',
        ]
      },
      {
        type: ContentType.CHART_PIE,
        title: 'Current Market Share (Approx Assets)',
        chartData: [
          { name: 'Public Sector Banks', value: 58 },
          { name: 'Private Sector Banks', value: 34 },
          { name: 'Foreign/RRB/Small', value: 8 },
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'Banking Structure Categories',
        tableHeaders: ['Category', 'Definition', 'Examples'],
        tableData: [
          { Category: 'Scheduled Banks', Definition: 'Listed in 2nd Schedule of RBI Act, 1934. Paid-up capital > ₹5 Lakh.', Examples: 'SBI, HDFC, PNB' },
          { Category: 'Non-Scheduled', Definition: 'Not listed in 2nd Schedule. Rare in modern times.', Examples: 'Local Area Banks' },
          { Category: 'Public Sector', Definition: 'Govt holds > 51% stake.', Examples: 'Bank of Baroda, Canara Bank' },
          { Category: 'Private Sector', Definition: 'Majority stake held by private individuals.', Examples: 'ICICI, Axis, Kotak' },
        ]
      }
    ],
    quiz: [
      {
        id: 'q1-1',
        question: 'Which was the first bank established in India?',
        options: ['Bank of Bengal', 'Bank of Hindustan', 'State Bank of India', 'Reserve Bank of India'],
        correctAnswer: 1,
        explanation: 'The Bank of Hindustan was established in 1770 and was the first bank in India.'
      },
      {
        id: 'q1-2',
        question: 'In which year was the Reserve Bank of India nationalized?',
        options: ['1935', '1947', '1949', '1955'],
        correctAnswer: 2,
        explanation: 'RBI was established in 1935 but nationalized on January 1, 1949.'
      },
      {
        id: 'q1-3',
        question: 'Which committee recommended the establishment of the State Bank of India?',
        options: ['Hilton Young Commission', 'Narasimham Committee', 'Gorewala Committee', 'Shivraman Committee'],
        correctAnswer: 2,
        explanation: 'The All India Rural Credit Survey Committee, headed by A.D. Gorewala, recommended the creation of SBI in 1955.'
      },
      {
        id: 'q1-4',
        question: 'How many banks were nationalized in 1969?',
        options: ['6', '14', '20', '10'],
        correctAnswer: 1,
        explanation: '14 major commercial banks with deposits over ₹50 crore were nationalized on July 19, 1969.'
      }
    ]
  },
  {
    id: 'sec2',
    title: '2. RBI (Reserve Bank of India)',
    icon: 'Building2',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'The RBI is the central bank of India, established on April 1, 1935. It was nationalized on January 1, 1949. Headquartered in Mumbai, it is governed by a Central Board of Directors headed by the Governor.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Key Functions',
        items: [
          'Monetary Authority: Formulates monetary policy to control inflation.',
          'Issuer of Currency: Sole right to issue notes (except ₹1 note & coins).',
          'Banker to Govt: Manages debt and accounts of Central & State Govts.',
          'Banker to Banks: Lender of last resort; maintains CRR accounts.',
          'Regulator: Issues licenses to banks (Section 22 of BR Act).',
          'Forex Manager: Custodian of Foreign Exchange Reserves.'
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'RBI Subsidiaries',
        tableHeaders: ['Subsidiary', 'Full Form', 'Function'],
        tableData: [
          { Subsidiary: 'DICGC', 'Full Form': 'Deposit Insurance and Credit Guarantee Corp', Function: 'Insures bank deposits up to ₹5 Lakh.' },
          { Subsidiary: 'BRBNMPL', 'Full Form': 'Bharatiya Reserve Bank Note Mudran', Function: 'Prints currency notes (Mysore & Salboni).' },
          { Subsidiary: 'ReBIT', 'Full Form': 'Reserve Bank Info Tech', Function: 'IT Solutions & Cyber Security.' },
          { Subsidiary: 'IFTAS', 'Full Form': 'Indian Financial Technology & Allied Services', Function: 'Banking infrastructure.' },
          { Subsidiary: 'RBIH', 'Full Form': 'Reserve Bank Innovation Hub', Function: 'Promotes fintech innovation.' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q2-1',
        question: 'Where is the headquarters of the Reserve Bank of India located?',
        options: ['New Delhi', 'Kolkata', 'Mumbai', 'Chennai'],
        correctAnswer: 2,
        explanation: 'The RBI headquarters was moved from Kolkata to Mumbai in 1937 and has been there since.'
      },
      {
        id: 'q2-2',
        question: 'Who issues the ₹1 currency note in India?',
        options: ['Reserve Bank of India', 'Ministry of Finance', 'State Bank of India', 'NABARD'],
        correctAnswer: 1,
        explanation: '₹1 notes and all coins are issued by the Ministry of Finance. All other currency notes are issued by RBI.'
      },
      {
        id: 'q2-3',
        question: 'Which of the following is a fully owned subsidiary of RBI?',
        options: ['SBI', 'LIC', 'DICGC', 'NABARD'],
        correctAnswer: 2,
        explanation: 'DICGC (Deposit Insurance and Credit Guarantee Corporation) is a fully owned subsidiary of RBI.'
      }
    ]
  },
  {
    id: 'sec3',
    title: '3. Monetary Policy',
    icon: 'TrendingUp',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Monetary Policy is the macroeconomic policy laid down by the central bank. The Monetary Policy Committee (MPC) constitutes 6 members (3 from RBI, 3 Govt appointed) who meet at least 4 times a year to decide the policy rates.'
      },
      {
        type: ContentType.CHART_BAR,
        title: 'Policy Transmission Effect',
        chartData: [
          { name: 'Repo Rate Cut', inflation: 15, liquidity: 20, loanCost: -20 },
          { name: 'Repo Rate Hike', inflation: -15, liquidity: -20, loanCost: 20 },
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Direct vs Indirect Instruments',
        text: 'Instruments used by RBI to control money supply:',
        items: [
          'Direct Instruments: CRR (Cash Reserve Ratio), SLR (Statutory Liquidity Ratio). These directly affect the idle cash banks must hold.',
          'Indirect Instruments: Repo Rate, Reverse Repo Rate, Bank Rate, MSF. These affect the cost of borrowing.'
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'Key Rates & Definitions',
        tableHeaders: ['Rate', 'Definition', 'Current Trend'],
        tableData: [
          { Rate: 'Repo Rate', Definition: 'Rate at which RBI lends to banks (Short term) against securities.', 'Current Trend': 'Policy Rate' },
          { Rate: 'Reverse Repo', Definition: 'Rate at which RBI borrows from banks (Absorbs liquidity).', 'Current Trend': 'Lower than Repo' },
          { Rate: 'MSF', Definition: 'Penal rate for emergency borrowing (Overnight).', 'Current Trend': 'Higher than Repo' },
          { Rate: 'Bank Rate', Definition: 'Long term lending rate; Penalty rate.', 'Current Trend': 'Aligned with MSF' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q3-1',
        question: 'What happens when RBI increases the Repo Rate?',
        options: ['Loans become cheaper', 'Inflation increases', 'Liquidity in market decreases', 'Banks stop lending'],
        correctAnswer: 2,
        explanation: 'Increasing Repo Rate makes borrowing expensive for banks, leading to less money injected into the economy, thus reducing liquidity.'
      },
      {
        id: 'q3-2',
        question: 'How many members are there in the Monetary Policy Committee (MPC)?',
        options: ['4', '5', '6', '10'],
        correctAnswer: 2,
        explanation: 'The MPC has 6 members: 3 from RBI (including the Governor) and 3 appointed by the Central Government.'
      },
      {
        id: 'q3-3',
        question: 'Which of the following is a Direct Instrument of Monetary Policy?',
        options: ['Repo Rate', 'CRR', 'Bank Rate', 'MSF'],
        correctAnswer: 1,
        explanation: 'CRR (Cash Reserve Ratio) is a direct instrument as it directly mandates the portion of deposits to be kept with RBI.'
      }
    ]
  },
  {
    id: 'sec4',
    title: '4. Operations & Accounts',
    icon: 'Briefcase',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Banking operations revolve around accepting deposits (Liability for bank) and lending loans (Asset for bank). Understanding the types of accounts is fundamental.'
      },
      {
        type: ContentType.TABLE,
        title: 'Types of Deposit Accounts',
        tableHeaders: ['Type', 'Interest', 'Liquidity', 'Ideal For'],
        tableData: [
          { Type: 'Savings (CASA)', Interest: 'Low (2.7-4%)', Liquidity: 'High', 'Ideal For': 'Salaried/Individuals' },
          { Type: 'Current (CASA)', Interest: 'Zero (0%)', Liquidity: 'Very High', 'Ideal For': 'Businesses/Traders' },
          { Type: 'Fixed Deposit (Term)', Interest: 'High (6-7.5%)', Liquidity: 'Low (Penalty on break)', 'Ideal For': 'Lump sum savings' },
          { Type: 'Recurring Deposit', Interest: 'High', Liquidity: 'Low', 'Ideal For': 'Monthly savings' }
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'NRI Accounts',
        items: [
          'NRE (Non-Resident External): Repatriable (can move money back abroad). Tax-free interest in India. Maintained in ₹.',
          'NRO (Non-Resident Ordinary): Non-repatriable (mostly). For income earned in India (Rent/Dividends). Taxable. Maintained in ₹.',
          'FCNR (Foreign Currency Non-Resident): Term deposit only. Maintained in Foreign Currency (USD/GBP etc). No exchange risk for depositor.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q4-1',
        question: 'Which type of bank account typically offers zero interest?',
        options: ['Savings Account', 'Fixed Deposit', 'Current Account', 'Recurring Deposit'],
        correctAnswer: 2,
        explanation: 'Current Accounts are meant for businesses with frequent transactions and generally do not earn any interest.'
      },
      {
        id: 'q4-2',
        question: 'Which NRI account is maintained in foreign currency?',
        options: ['NRE', 'NRO', 'FCNR', 'Demat'],
        correctAnswer: 2,
        explanation: 'FCNR (Foreign Currency Non-Resident) accounts are fixed deposits maintained in foreign currencies like USD, GBP, etc.'
      },
      {
        id: 'q4-3',
        question: 'In banking, CASA stands for?',
        options: ['Current Account Savings Account', 'Cash And Securities Account', 'Central Account System Audit', 'Credit and Savings Association'],
        correctAnswer: 0,
        explanation: 'CASA stands for Current Account Savings Account. A high CASA ratio is beneficial for banks due to lower interest costs.'
      }
    ]
  },
  {
    id: 'sec5',
    title: '5. Regulations & Acts',
    icon: 'Gavel',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'The legal framework ensures banks operate ethically and transparently. Key acts include the RBI Act, Banking Regulation Act, and others dealing with cheques and recovery.'
      },
      {
        type: ContentType.LIST,
        title: 'Crucial Acts for Exams',
        items: [
          'Banking Regulation Act, 1949: Gives RBI power to license, inspect, and regulate banks.',
          'Negotiable Instruments Act, 1881: Defines cheques, bills. Section 138 covers criminal liability for cheque bounce.',
          'SARFAESI Act, 2002: Empower banks to seize and auction collateral for bad loans (NPAs) without court intervention (for secured loans).',
          'IBC (Insolvency and Bankruptcy Code), 2016: A unified framework to resolve insolvency for companies within 180-270 days.',
          'PMLA, 2002: Prevention of Money Laundering Act. Mandates KYC and reporting of suspicious transactions.'
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Basel Norms',
        text: 'International banking safety standards to ensure banks have enough capital to absorb losses.',
        items: [
          'Basel I (1988): Focused on Credit Risk.',
          'Basel II (2004): Added Market & Operational Risk.',
          'Basel III (2010): Post-2008 crisis. Introduced Liquidity Coverage Ratio (LCR) and Net Stable Funding Ratio (NSFR).',
          'India follows Basel III with a Capital Adequacy Ratio (CAR) requirement of 9% + 2.5% buffer.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q5-1',
        question: 'Which act empowers banks to auction properties of defaulters without court intervention?',
        options: ['RBI Act', 'SARFAESI Act', 'Banking Regulation Act', 'PMLA'],
        correctAnswer: 1,
        explanation: 'The SARFAESI Act, 2002 allows banks to take possession of collateral and sell it to recover dues for secured loans.'
      },
      {
        id: 'q5-2',
        question: 'Basel III norms primarily focus on which aspect?',
        options: ['Customer Service', 'Interest Rates', 'Capital Adequacy & Risk Management', 'Branch Expansion'],
        correctAnswer: 2,
        explanation: 'Basel III norms are global regulatory frameworks to strengthen bank capital requirements and decrease bank leverage.'
      },
      {
        id: 'q5-3',
        question: 'Section 138 of the Negotiable Instruments Act deals with?',
        options: ['Promissory Notes', 'Dishonour of Cheque', 'Bill of Exchange', 'Crossed Cheques'],
        correctAnswer: 1,
        explanation: 'Section 138 deals with the criminal offense of dishonour of cheques for insufficiency of funds (cheque bounce).'
      }
    ]
  },
  {
    id: 'sec6',
    title: '6. Financial Inclusion',
    icon: 'Users',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Financial Inclusion is the delivery of banking services at an affordable cost to the vast sections of disadvantaged and low-income groups. It is a National Priority.'
      },
      {
        type: ContentType.CHART_PIE,
        title: 'Priority Sector Lending (PSL) Targets',
        chartData: [
          { name: 'Agriculture', value: 18 },
          { name: 'Micro Enterprises', value: 7.5 },
          { name: 'Weaker Sections', value: 12 },
          { name: 'Other Priority', value: 2.5 },
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'Flagship Schemes',
        tableHeaders: ['Scheme', 'Feature', 'Insurance/Pension'],
        tableData: [
          { Scheme: 'PMJDY', Feature: 'Zero Balance, Overdraft ₹10k', 'Insurance/Pension': '₹2L Accidental Ins.' },
          { Scheme: 'PMJJBY', Feature: 'Life Insurance (18-50 yrs)', 'Insurance/Pension': '₹2 Lakh Death Benefit' },
          { Scheme: 'PMSBY', Feature: 'Accident Insurance (18-70 yrs)', 'Insurance/Pension': '₹2 Lakh Disability' },
          { Scheme: 'APY', Feature: 'Pension (18-40 yrs entry)', 'Insurance/Pension': '₹1k-5k/mo after 60' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q6-1',
        question: 'What is the overdraft limit in PMJDY (Pradhan Mantri Jan Dhan Yojana) accounts?',
        options: ['₹2,000', '₹5,000', '₹10,000', '₹20,000'],
        correctAnswer: 2,
        explanation: 'The overdraft limit for PMJDY accounts was increased to ₹10,000.'
      },
      {
        id: 'q6-2',
        question: 'What is the minimum age to join Atal Pension Yojana (APY)?',
        options: ['18 years', '21 years', '25 years', '60 years'],
        correctAnswer: 0,
        explanation: 'The age criteria for joining APY is 18 to 40 years.'
      },
      {
        id: 'q6-3',
        question: 'What percentage of Adjusted Net Bank Credit (ANBC) is the target for Priority Sector Lending for domestic commercial banks?',
        options: ['18%', '25%', '40%', '50%'],
        correctAnswer: 2,
        explanation: 'Domestic commercial banks are required to lend 40% of their ANBC to priority sectors like agriculture, MSME, etc.'
      }
    ]
  },
  {
    id: 'sec7',
    title: '7. Financial Markets',
    icon: 'BarChart2',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Financial markets channelize funds from savers to investors. They are broadly classified into Money Market (Short term) and Capital Market (Long term).'
      },
      {
        type: ContentType.TABLE,
        title: 'Money vs Capital Market',
        tableHeaders: ['Feature', 'Money Market', 'Capital Market'],
        tableData: [
          { Feature: 'Duration', 'Money Market': '< 1 Year', 'Capital Market': '> 1 Year' },
          { Feature: 'Regulator', 'Money Market': 'RBI', 'Capital Market': 'SEBI' },
          { Feature: 'Instruments', 'Money Market': 'T-Bills, CD, CP, Call Money', 'Capital Market': 'Shares, Debentures, Bonds' },
          { Feature: 'Risk', 'Money Market': 'Low', 'Capital Market': 'High' }
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Key Instruments',
        items: [
          'Treasury Bills (T-Bills): Issued by Govt (91, 182, 364 days). Zero coupon bonds.',
          'Commercial Paper (CP): Issued by Corporates. Unsecured.',
          'Certificate of Deposit (CD): Issued by Banks. High value.',
          'Call Money: Inter-bank borrowing for 1 day (Overnight).'
        ]
      }
    ],
    quiz: [
      {
        id: 'q7-1',
        question: 'Who regulates the Capital Market in India?',
        options: ['RBI', 'SEBI', 'IRDAI', 'PFRDA'],
        correctAnswer: 1,
        explanation: 'SEBI (Securities and Exchange Board of India) regulates the capital market.'
      },
      {
        id: 'q7-2',
        question: 'Which of the following is NOT a Money Market instrument?',
        options: ['Treasury Bills', 'Commercial Paper', 'Certificate of Deposit', 'Shares'],
        correctAnswer: 3,
        explanation: 'Shares are instruments of the Capital Market (Equity), whereas Money Market deals in short-term debt.'
      },
      {
        id: 'q7-3',
        question: 'What is the maximum maturity period for Money Market instruments?',
        options: ['1 Year', '3 Years', '5 Years', '10 Years'],
        correctAnswer: 0,
        explanation: 'Money market instruments deal with short-term funds with a maturity of up to 1 year.'
      }
    ]
  },
  {
    id: 'sec8',
    title: '8. International Banking',
    icon: 'Globe',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Understanding global finance is crucial. This involves cross-border trade, forex, and international organizations.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Correspondent Banking Accounts',
        items: [
          'NOSTRO (Our money with you): Indian bank\'s account in a US bank in Dollars.',
          'VOSTRO (Your money with us): US bank\'s account in an Indian bank in Rupees.',
          'LORO (Their money with them): Third party account reference.'
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'International Orgs',
        tableHeaders: ['Org', 'HQ', 'Purpose'],
        tableData: [
          { Org: 'IMF', HQ: 'Washington DC', Purpose: 'Balance of Payments crisis, Short term loans' },
          { Org: 'World Bank', HQ: 'Washington DC', Purpose: 'Development, Long term loans (Infrastructure)' },
          { Org: 'ADB', HQ: 'Manila, Philippines', Purpose: 'Regional development in Asia' },
          { Org: 'BIS', HQ: 'Basel, Switzerland', Purpose: 'Central bank for central banks' },
          { Org: 'SWIFT', HQ: 'Brussels, Belgium', Purpose: 'Messaging network for international transfers' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q8-1',
        question: 'What is a NOSTRO account?',
        options: ['Foreign bank account in India in Rupees', 'Indian bank account abroad in foreign currency', 'Loan account for NRIs', 'RBI account with World Bank'],
        correctAnswer: 1,
        explanation: 'NOSTRO means "Our money with you". It is an account held by an Indian bank in a foreign country in that country\'s currency.'
      },
      {
        id: 'q8-2',
        question: 'Where is the headquarters of the Asian Development Bank (ADB)?',
        options: ['Beijing', 'Tokyo', 'Manila', 'Singapore'],
        correctAnswer: 2,
        explanation: 'ADB is headquartered in Manila, Philippines.'
      },
      {
        id: 'q8-3',
        question: 'Which organization provides long-term loans for development and infrastructure?',
        options: ['IMF', 'World Bank', 'BIS', 'WTO'],
        correctAnswer: 1,
        explanation: 'The World Bank focuses on long-term development loans, whereas the IMF typically handles short-term balance of payment crises.'
      }
    ]
  },
  {
    id: 'sec9',
    title: '9. Banking Terms',
    icon: 'BookOpen',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'This section covers high-yield terminology often asked in exams.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'NPA (Non-Performing Assets)',
        text: 'A loan becomes an NPA if interest/principal remains overdue for 90 days.',
        items: [
          'Substandard Asset: NPA for ≤ 12 months.',
          'Doubtful Asset: NPA for > 12 months.',
          'Loss Asset: Uncollectible, identified for write-off.'
        ]
      },
      {
        type: ContentType.LIST,
        title: 'Other Critical Terms',
        items: [
          'MCLR (Marginal Cost of Funds based Lending Rate): Internal benchmark for lending rates.',
          'PCR (Provisioning Coverage Ratio): Funds set aside to cover bad loans.',
          'CASA Ratio: (Current + Savings deposits) / Total Deposits. Higher is better for banks.',
          'PCA (Prompt Corrective Action): RBI triggers this when a bank\'s metrics (Capital, Asset Quality, Leverage) deteriorate.',
          'Lien: Right to keep possession of property belonging to another person until a debt is paid.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q9-1',
        question: 'After how many days of non-payment does a loan typically turn into an NPA?',
        options: ['30 days', '60 days', '90 days', '180 days'],
        correctAnswer: 2,
        explanation: 'An asset becomes non-performing when it ceases to generate income for the bank, typically after 90 days of overdue.'
      },
      {
        id: 'q9-2',
        question: 'What does CASA stand for in banking terms?',
        options: ['Credit And Savings Account', 'Current Account Savings Account', 'Capital Adequacy Standard Asset', 'Central Asset Security Agency'],
        correctAnswer: 1,
        explanation: 'CASA refers to Current Account Savings Account ratio, a key indicator of a bank\'s profitability.'
      },
      {
        id: 'q9-3',
        question: 'What is the full form of MCLR?',
        options: ['Minimum Cost Lending Rate', 'Marginal Cost of Funds based Lending Rate', 'Maximum Credit Limit Ratio', 'Monthly Credit Lending Rate'],
        correctAnswer: 1,
        explanation: 'MCLR (Marginal Cost of Funds based Lending Rate) is the minimum interest rate below which a bank cannot lend.'
      }
    ]
  },
  {
    id: 'sec10',
    title: '10. Cyber Security',
    icon: 'Shield',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'With the rise of digital banking, cyber threats are a major syllabus topic.'
      },
      {
        type: ContentType.TABLE,
        title: 'Types of Cyber Attacks',
        tableHeaders: ['Attack', 'Mechanism'],
        tableData: [
          { Attack: 'Phishing', Mechanism: 'Fraudulent emails mimicking banks.' },
          { Attack: 'Vishing', Mechanism: 'Voice phishing (Phone calls asking OTP).' },
          { Attack: 'Smishing', Mechanism: 'SMS phishing (Malicious links).' },
          { Attack: 'Man-in-the-Middle', Mechanism: 'Intercepting comms between user and bank.' },
          { Attack: 'Ransomware', Mechanism: 'Locking files and demanding payment (e.g., WannaCry).' }
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Security Measures',
        items: [
          '2FA (Two-Factor Authentication): Password + OTP.',
          'EMV Chips: Secure card technology replacing magnetic strips.',
          'Positive Pay System: Re-verifying details for cheques > ₹50,000.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q10-1',
        question: 'What is "Vishing"?',
        options: ['Video Phishing', 'Voice Phishing via phone calls', 'Virus Fishing', 'Virtual Sharing'],
        correctAnswer: 1,
        explanation: 'Vishing stands for Voice Phishing, where fraudsters make phone calls pretending to be bank officials to steal details.'
      },
      {
        id: 'q10-2',
        question: 'The "Positive Pay System" is related to?',
        options: ['UPI Transactions', 'Cheque Truncation System', 'Credit Cards', 'Internet Banking'],
        correctAnswer: 1,
        explanation: 'Positive Pay is a mechanism to reconfirm key details of large value cheques to prevent fraud.'
      },
      {
        id: 'q10-3',
        question: 'Which technology in debit/credit cards is safer than magnetic strips?',
        options: ['NFC', 'EMV Chip', 'RFID', 'QR Code'],
        correctAnswer: 1,
        explanation: 'EMV (Europay, Mastercard, and Visa) Chip technology is more secure than traditional magnetic strips against skimming.'
      }
    ]
  },
  {
    id: 'sec11',
    title: '11. Regulators',
    icon: 'Landmark',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Different sectors of the Indian Financial System are regulated by specific bodies.'
      },
      {
        type: ContentType.TABLE,
        title: 'Financial Regulators',
        tableHeaders: ['Regulator', 'Sector', 'Headquarters'],
        tableData: [
          { Regulator: 'RBI', Sector: 'Banking & Money Market', Headquarters: 'Mumbai' },
          { Regulator: 'SEBI', Sector: 'Capital Market (Stock/Mutual Funds)', Headquarters: 'Mumbai' },
          { Regulator: 'IRDAI', Sector: 'Insurance', Headquarters: 'Hyderabad' },
          { Regulator: 'PFRDA', Sector: 'Pension', Headquarters: 'New Delhi' },
          { Regulator: 'NABARD', Sector: 'Rural Financing (Dev Bank)', Headquarters: 'Mumbai' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q11-1',
        question: 'Who regulates the Insurance sector in India?',
        options: ['LIC', 'RBI', 'SEBI', 'IRDAI'],
        correctAnswer: 3,
        explanation: 'IRDAI (Insurance Regulatory and Development Authority of India) regulates the insurance sector.'
      },
      {
        id: 'q11-2',
        question: 'Where is the headquarters of PFRDA located?',
        options: ['Mumbai', 'New Delhi', 'Hyderabad', 'Kolkata'],
        correctAnswer: 1,
        explanation: 'PFRDA (Pension Fund Regulatory and Development Authority) is headquartered in New Delhi.'
      },
      {
        id: 'q11-3',
        question: 'Which body regulates Mutual Funds in India?',
        options: ['AMFI', 'RBI', 'SEBI', 'NABARD'],
        correctAnswer: 2,
        explanation: 'SEBI regulates the securities market, including Mutual Funds.'
      }
    ]
  },
  {
    id: 'sec12',
    title: '12. NBFCs',
    icon: 'Building',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Non-Banking Financial Companies (NBFCs) provide banking services without meeting the legal definition of a bank. They are registered under the Companies Act, 1956/2013.'
      },
      {
        type: ContentType.TABLE,
        title: 'Bank vs NBFC',
        tableHeaders: ['Feature', 'Bank', 'NBFC'],
        tableData: [
          { Feature: 'Demand Deposits', Bank: 'Can accept (Savings/Current)', NBFC: 'Cannot accept' },
          { Feature: 'Payment System', Bank: 'Part of clearing cycle', NBFC: 'Cannot issue cheques' },
          { Feature: 'Deposit Insurance', Bank: 'Available (DICGC)', NBFC: 'Not Available' },
          { Feature: 'FDI', Bank: 'Up to 74% (Pvt)', NBFC: '100% allowed' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q12-1',
        question: 'Which of the following is true about NBFCs?',
        options: ['They can accept Demand Deposits', 'They can issue cheques', 'They cannot accept Demand Deposits', 'They are regulated by SEBI only'],
        correctAnswer: 2,
        explanation: 'NBFCs are not allowed to accept Demand Deposits (Savings/Current accounts) from the public.'
      },
      {
        id: 'q12-2',
        question: 'Is deposit insurance available for NBFC depositors?',
        options: ['Yes, up to ₹1 Lakh', 'Yes, up to ₹5 Lakh', 'No', 'Depends on the NBFC'],
        correctAnswer: 2,
        explanation: 'DICGC insurance cover is not available for deposits held with NBFCs.'
      },
      {
        id: 'q12-3',
        question: 'NBFCs are registered under which act?',
        options: ['RBI Act, 1934', 'Banking Regulation Act, 1949', 'Companies Act, 1956/2013', 'NBFC Act, 2000'],
        correctAnswer: 2,
        explanation: 'NBFCs are registered under the Companies Act but are regulated by the RBI.'
      }
    ]
  },
  {
    id: 'sec13',
    title: '13. Negotiable Inst.',
    icon: 'FileText',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Negotiable Instruments are documents guaranteeing the payment of a specific amount of money. Governed by NI Act, 1881.'
      },
      {
        type: ContentType.LIST,
        items: [
          'Promissory Note (Section 4): Promise to pay. (e.g., "I promise to pay B ₹500"). Debtor makes it.',
          'Bill of Exchange (Section 5): Order to pay. Creditor makes it.',
          'Cheque (Section 6): Bill of exchange drawn on a specified banker.'
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Types of Cheques',
        items: [
          'Bearer Cheque: Payable to whoever holds it.',
          'Order Cheque: Payable to a specific person.',
          'Crossed Cheque: Two parallel lines; money goes to account only.',
          'Stale Cheque: Presented after 3 months (Validity expired).',
          'Mutilated Cheque: Torn or damaged.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q13-1',
        question: 'A Cheque is defined under which section of the Negotiable Instruments Act, 1881?',
        options: ['Section 4', 'Section 5', 'Section 6', 'Section 13'],
        correctAnswer: 2,
        explanation: 'Section 6 of the NI Act defines a Cheque.'
      },
      {
        id: 'q13-2',
        question: 'What is the validity period of a cheque in India?',
        options: ['1 Month', '3 Months', '6 Months', '12 Months'],
        correctAnswer: 1,
        explanation: 'A cheque is valid for 3 months from the date of issue. After that, it becomes a stale cheque.'
      },
      {
        id: 'q13-3',
        question: 'Who makes a Promissory Note?',
        options: ['The Creditor', 'The Debtor', 'The Bank', 'The RBI'],
        correctAnswer: 1,
        explanation: 'A Promissory Note is a promise to pay, so it is made by the Debtor (Maker) to the Creditor (Payee).'
      }
    ]
  },
  {
    id: 'sec14',
    title: '14. Agriculture',
    icon: 'Sprout',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Agriculture is a primary component of Priority Sector Lending. NABARD is the apex development bank here.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Kisan Credit Card (KCC)',
        text: 'Introduced in 1998. Provides timely credit to farmers.',
        items: [
          'Validity: 5 Years.',
          'Insurance: Covers crop failure and personal accident.',
          'Interest Subvention: Usually available for prompt repayment (Effective rate ~4%).'
        ]
      },
      {
        type: ContentType.LIST,
        title: 'NABARD Functions',
        items: [
          'Refinances RRBs and Cooperative banks.',
          'Manages RIDF (Rural Infrastructure Development Fund).',
          'Supervises RRBs and Cooperative Banks.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q14-1',
        question: 'When was NABARD established?',
        options: ['1980', '1982', '1990', '1992'],
        correctAnswer: 1,
        explanation: 'NABARD was established on July 12, 1982, on the recommendation of the B. Sivaramman Committee.'
      },
      {
        id: 'q14-2',
        question: 'What is the validity period of a Kisan Credit Card (KCC)?',
        options: ['3 Years', '5 Years', '7 Years', '10 Years'],
        correctAnswer: 1,
        explanation: 'The Kisan Credit Card is generally valid for 5 years, subject to annual review.'
      },
      {
        id: 'q14-3',
        question: 'Which fund is managed by NABARD?',
        options: ['CRF', 'RIDF', 'PSL Fund', 'Infra Fund'],
        correctAnswer: 1,
        explanation: 'RIDF (Rural Infrastructure Development Fund) is maintained by NABARD.'
      }
    ]
  },
  {
    id: 'sec15',
    title: '15. MSME',
    icon: 'Factory',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Micro, Small, and Medium Enterprises are the growth engines. The definition was revised in 2020 to be composite (Investment + Turnover).'
      },
      {
        type: ContentType.TABLE,
        title: 'Revised MSME Classification',
        tableHeaders: ['Type', 'Investment', 'Turnover'],
        tableData: [
          { Type: 'Micro', Investment: '< ₹1 Crore', Turnover: '< ₹5 Crore' },
          { Type: 'Small', Investment: '< ₹10 Crore', Turnover: '< ₹50 Crore' },
          { Type: 'Medium', Investment: '< ₹50 Crore', Turnover: '< ₹250 Crore' }
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'SIDBI',
        text: 'Small Industries Development Bank of India (HQ: Lucknow). It is the principal financial institution for MSME financing.'
      }
    ],
    quiz: [
      {
        id: 'q15-1',
        question: 'Where is the headquarters of SIDBI located?',
        options: ['Mumbai', 'New Delhi', 'Lucknow', 'Bangalore'],
        correctAnswer: 2,
        explanation: 'SIDBI (Small Industries Development Bank of India) is headquartered in Lucknow.'
      },
      {
        id: 'q15-2',
        question: 'What is the investment limit for a "Small" enterprise?',
        options: ['< ₹1 Crore', '< ₹5 Crore', '< ₹10 Crore', '< ₹20 Crore'],
        correctAnswer: 2,
        explanation: 'For a Small enterprise, Investment should be < ₹10 Crore and Turnover < ₹50 Crore.'
      },
      {
        id: 'q15-3',
        question: 'Which product of MUDRA Yojana covers loans up to ₹50,000?',
        options: ['Shishu', 'Kishore', 'Tarun', 'Balak'],
        correctAnswer: 0,
        explanation: 'Shishu covers loans up to ₹50,000. Kishore: ₹50k-₹5L. Tarun: ₹5L-₹10L.'
      }
    ]
  },
  {
    id: 'sec16',
    title: '16. Housing',
    icon: 'Home',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Housing finance is regulated by NHB (National Housing Bank), which is now a subsidiary of the Govt of India (formerly RBI).'
      },
      {
        type: ContentType.LIST,
        title: 'Key Schemes',
        items: [
          'PMAY (Pradhan Mantri Awas Yojana): Housing for All. Provides interest subsidy (CLSS).',
          'Priority Sector Housing: Loans up to ₹35 Lakh in metros (pop > 10L) and ₹25 Lakh in other centers are considered PSL.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q16-1',
        question: 'NHB (National Housing Bank) is a subsidiary of?',
        options: ['RBI', 'SBI', 'Govt of India', 'NABARD'],
        correctAnswer: 2,
        explanation: 'RBI divested its entire stake in NHB in 2019, making it 100% Govt of India owned.'
      },
      {
        id: 'q16-2',
        question: 'What is the full form of CLSS under PMAY?',
        options: ['Credit Linked Savings Scheme', 'Credit Linked Subsidy Scheme', 'Central Linked Subsidy Scheme', 'Common Loan Subsidy Scheme'],
        correctAnswer: 1,
        explanation: 'CLSS stands for Credit Linked Subsidy Scheme, which provides interest subsidy on home loans.'
      },
      {
        id: 'q16-3',
        question: 'Housing loans up to what amount in metros qualify as Priority Sector Lending?',
        options: ['₹20 Lakh', '₹25 Lakh', '₹35 Lakh', '₹50 Lakh'],
        correctAnswer: 2,
        explanation: 'Loans up to ₹35 Lakh in metropolitan centres (population > 10 lakh) qualify for PSL.'
      }
    ]
  },
  {
    id: 'sec17',
    title: '17. Stock Markets',
    icon: 'TrendingUp',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'While banks deal with debt, stock markets deal with equity. POs must know the basics of capital markets.'
      },
      {
        type: ContentType.TABLE,
        title: 'Key Concepts',
        tableHeaders: ['Term', 'Meaning'],
        tableData: [
          { Term: 'IPO', Meaning: 'Initial Public Offering (First time selling stock to public).' },
          { Term: 'Demat Account', Meaning: 'Account to hold shares in electronic form.' },
          { Term: 'ASBA', Meaning: 'Application Supported by Blocked Amount (Money stays in bank until allotment).' },
          { Term: 'Bull/Bear', Meaning: 'Bull: Market rising. Bear: Market falling.' },
          { Term: 'Sensex/Nifty', Meaning: 'Indices of BSE (30 stocks) and NSE (50 stocks).' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q17-1',
        question: 'How many stocks constitute the Sensex?',
        options: ['30', '50', '100', '500'],
        correctAnswer: 0,
        explanation: 'The BSE Sensex comprises 30 well-established and financially sound companies.'
      },
      {
        id: 'q17-2',
        question: 'What is a "Bull" market?',
        options: ['Market is falling', 'Market is rising', 'Market is stable', 'Market is closed'],
        correctAnswer: 1,
        explanation: 'A Bull market is a condition where prices are rising or are expected to rise.'
      },
      {
        id: 'q17-3',
        question: 'What does ASBA stand for in IPOs?',
        options: ['Application Supported by Bank Account', 'Application Supported by Blocked Amount', 'Allotted Shares by Bank Authority', 'Account Savings Bank Association'],
        correctAnswer: 1,
        explanation: 'ASBA (Application Supported by Blocked Amount) blocks the IPO application money in the bank account until shares are allotted.'
      }
    ]
  },
  {
    id: 'sec18',
    title: '18. Digital Payments',
    icon: 'Smartphone',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'India is a global leader in digital payments, driven by NPCI (National Payments Corporation of India).'
      },
      {
        type: ContentType.CHART_BAR,
        title: 'Digital Payment Growth (Illustrative)',
        chartData: [
          { name: '2020', inflation: 20, liquidity: 30 }, 
          { name: '2021', inflation: 45, liquidity: 50 },
          { name: '2022', inflation: 70, liquidity: 80 },
          { name: '2023', inflation: 100, liquidity: 110 },
        ]
      },
      {
        type: ContentType.LIST,
        title: 'NPCI Products',
        items: [
          'UPI (Unified Payments Interface): Instant real-time payment system.',
          'RuPay: Indigeneous card payment network.',
          'IMPS: Immediate Payment Service.',
          'AePS: Aadhaar Enabled Payment System (Banking using fingerprint).',
          'NACH: National Automated Clearing House (Bulk payments like dividends/salaries).'
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'e-RUPI & CBDC',
        text: 'Recent innovations: e-RUPI is a voucher-based prepaid instrument. CBDC (Central Bank Digital Currency) is the digital form of legal tender (e-Rupee) issued by RBI.'
      }
    ],
    quiz: [
      {
        id: 'q18-1',
        question: 'Who developed UPI (Unified Payments Interface)?',
        options: ['RBI', 'SBI', 'NPCI', 'NITI Aayog'],
        correctAnswer: 2,
        explanation: 'UPI was developed by the National Payments Corporation of India (NPCI).'
      },
      {
        id: 'q18-2',
        question: 'What is the full form of AePS?',
        options: ['Aadhaar Electronic Payment System', 'Aadhaar Enabled Payment System', 'Automated e-Payment Service', 'Anytime electronic Payment Solution'],
        correctAnswer: 1,
        explanation: 'AePS stands for Aadhaar Enabled Payment System, allowing banking transactions using Aadhaar authentication.'
      },
      {
        id: 'q18-3',
        question: 'What is India\'s indigenous card payment network called?',
        options: ['Visa', 'MasterCard', 'RuPay', 'Amex'],
        correctAnswer: 2,
        explanation: 'RuPay is India\'s own domestic card network scheme conceived and launched by NPCI.'
      }
    ]
  },
  {
    id: 'sec19',
    title: '19. Abbreviations',
    icon: 'Type',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Banking exams are famous for asking full forms. Here are the most critical ones.'
      },
      {
        type: ContentType.TABLE,
        title: 'Must Know Acronyms',
        tableHeaders: ['Acronym', 'Full Form'],
        tableData: [
          { Acronym: 'AMFI', 'Full Form': 'Association of Mutual Funds in India' },
          { Acronym: 'BSBDA', 'Full Form': 'Basic Savings Bank Deposit Account' },
          { Acronym: 'CIBIL', 'Full Form': 'Credit Information Bureau (India) Limited' },
          { Acronym: 'CRAR', 'Full Form': 'Capital to Risk (Weighted) Assets Ratio' },
          { Acronym: 'ECGC', 'Full Form': 'Export Credit Guarantee Corporation' },
          { Acronym: 'FEMA', 'Full Form': 'Foreign Exchange Management Act' },
          { Acronym: 'KYC', 'Full Form': 'Know Your Customer' },
          { Acronym: 'LAF', 'Full Form': 'Liquidity Adjustment Facility' },
          { Acronym: 'LIBOR', 'Full Form': 'London Interbank Offered Rate' },
          { Acronym: 'SARFAESI', 'Full Form': 'Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q19-1',
        question: 'What does BSBDA stand for?',
        options: ['Basic Savings Bank Deposit Account', 'Bharat Savings Bank Deposit Account', 'Basic Security Bank Deposit Asset', 'Bank Savings Bond Deposit Account'],
        correctAnswer: 0,
        explanation: 'BSBDA stands for Basic Savings Bank Deposit Account (formerly "No Frills" account).'
      },
      {
        id: 'q19-2',
        question: 'What is the full form of FEMA?',
        options: ['Foreign Estate Management Act', 'Foreign Exchange Management Act', 'Federal Emergency Management Act', 'Finance and Estate Management Authority'],
        correctAnswer: 1,
        explanation: 'FEMA stands for Foreign Exchange Management Act, 1999.'
      },
      {
        id: 'q19-3',
        question: 'AMFI is related to which sector?',
        options: ['Insurance', 'Mutual Funds', 'Stock Market', 'Banking'],
        correctAnswer: 1,
        explanation: 'AMFI stands for Association of Mutual Funds in India.'
      }
    ]
  },
  {
    id: 'sec20',
    title: '20. Current Scenario',
    icon: 'Activity',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Knowing the current landscape of Public Sector Banks (PSBs) is vital after the mega mergers.'
      },
      {
        type: ContentType.TABLE,
        title: '12 Public Sector Banks',
        tableHeaders: ['Bank Name', 'Headquarters', 'Tagline (Example)'],
        tableData: [
          { 'Bank Name': 'SBI', Headquarters: 'Mumbai', 'Tagline (Example)': 'The Banker to Every Indian' },
          { 'Bank Name': 'Punjab National Bank', Headquarters: 'New Delhi', 'Tagline (Example)': 'The Name You Can Bank Upon' },
          { 'Bank Name': 'Bank of Baroda', Headquarters: 'Vadodara', 'Tagline (Example)': 'India\'s International Bank' },
          { 'Bank Name': 'Canara Bank', Headquarters: 'Bengaluru', 'Tagline (Example)': 'Together We Can' },
          { 'Bank Name': 'Union Bank of India', Headquarters: 'Mumbai', 'Tagline (Example)': 'Good People to Bank With' },
          { 'Bank Name': 'Indian Bank', Headquarters: 'Chennai', 'Tagline (Example)': 'Your Own Bank' },
          { 'Bank Name': 'Bank of India', Headquarters: 'Mumbai', 'Tagline (Example)': 'Relationship Beyond Banking' },
          { 'Bank Name': 'Central Bank of India', Headquarters: 'Mumbai', 'Tagline (Example)': 'Central to You Since 1911' },
          { 'Bank Name': 'Indian Overseas Bank', Headquarters: 'Chennai', 'Tagline (Example)': 'Good People to Grow With' },
          { 'Bank Name': 'UCO Bank', Headquarters: 'Kolkata', 'Tagline (Example)': 'Honours Your Trust' },
          { 'Bank Name': 'Bank of Maharashtra', Headquarters: 'Pune', 'Tagline (Example)': 'One Family One Bank' },
          { 'Bank Name': 'Punjab & Sind Bank', Headquarters: 'New Delhi', 'Tagline (Example)': 'Where Service is a Way of Life' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q20-1',
        question: 'How many Public Sector Banks are there in India currently?',
        options: ['10', '12', '19', '21'],
        correctAnswer: 1,
        explanation: 'After the recent mega mergers, there are 12 Public Sector Banks in India.'
      },
      {
        id: 'q20-2',
        question: 'Where is the headquarters of Canara Bank?',
        options: ['Mangaluru', 'Bengaluru', 'Chennai', 'Hyderabad'],
        correctAnswer: 1,
        explanation: 'Canara Bank is headquartered in Bengaluru.'
      },
      {
        id: 'q20-3',
        question: 'Which bank merged with Punjab National Bank?',
        options: ['Andhra Bank', 'Corporation Bank', 'Oriental Bank of Commerce', 'Syndicate Bank'],
        correctAnswer: 2,
        explanation: 'Oriental Bank of Commerce and United Bank of India merged with Punjab National Bank.'
      }
    ]
  },
  {
    id: 'sec21',
    title: '21. Prep Tips',
    icon: 'CheckCircle',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Cracking the PO exam requires strategy, not just hard work. Here is a breakdown of how to approach the General Awareness (GA) section.'
      },
      {
        type: ContentType.LIST,
        title: 'Strategy Checklist',
        items: [
          'Current Affairs (60%): Focus on last 6 months. Read newspapers (The Hindu/Express) or monthly capsules.',
          'Banking Awareness (30%): Focus on terms, RBI circulars, and static banking (History, HQ).',
          'Static GK (10%): National Parks, Dams, Capitals, Currencies (Usually linked to news).',
          'Mock Tests: Analyze GA questions in mocks. They often repeat high-yield topics.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q21-1',
        question: 'For General Awareness, how many months of current affairs are recommended?',
        options: ['1 Month', '3 Months', '6 Months', '12 Months'],
        correctAnswer: 2,
        explanation: 'At least the last 6 months of current affairs are crucial for Banking PO exams.'
      },
      {
        id: 'q21-2',
        question: 'Which topic has the highest weightage in GA section typically?',
        options: ['Static GK', 'Current Affairs', 'History', 'Polity'],
        correctAnswer: 1,
        explanation: 'Current Affairs usually constitutes about 60-70% of the General Awareness section.'
      },
      {
        id: 'q21-3',
        question: 'What is the best way to prepare for Banking Awareness?',
        options: ['Reading novels', 'RBI Website & Circulars', 'Watching movies', 'Reading history books'],
        correctAnswer: 1,
        explanation: 'The RBI official website and its circulars are the most authentic sources for banking awareness.'
      }
    ]
  },
  {
    id: 'sec22',
    title: '22. Fin. Literacy',
    icon: 'DollarSign',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'General concepts that help in understanding the "Why" behind banking.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Credit Score (CIBIL)',
        items: [
          'Range: 300 to 900.',
          'Good Score: 750+.',
          'Factors: Repayment history, Credit mix, New credit inquiries.',
          'Impact: Determines loan eligibility and interest rates.'
        ]
      },
      {
        type: ContentType.PARAGRAPH,
        title: 'The Power of Compounding',
        text: 'Albert Einstein called it the eighth wonder of the world. Compound interest is interest on interest. Formula: A = P(1 + r/n)^(nt).'
      }
    ],
    quiz: [
      {
        id: 'q22-1',
        question: 'What is the range of a CIBIL score?',
        options: ['0-100', '300-900', '100-1000', '500-1000'],
        correctAnswer: 1,
        explanation: 'CIBIL scores range from 300 to 900. A score above 750 is generally considered good.'
      },
      {
        id: 'q22-2',
        question: 'Compound interest is described as?',
        options: ['Interest on Principal only', 'Interest on Interest', 'Simple Interest', 'Fixed Interest'],
        correctAnswer: 1,
        explanation: 'Compound interest is calculated on the initial principal and also on the accumulated interest of previous periods.'
      },
      {
        id: 'q22-3',
        question: 'Which of the following hurts your credit score?',
        options: ['Paying bills on time', 'Low credit utilization', 'Missing EMI payments', 'Checking your own score'],
        correctAnswer: 2,
        explanation: 'Missing or delaying EMI/Credit Card payments negatively impacts your credit score.'
      }
    ]
  },
  {
    id: 'sec23',
    title: '23. Committees',
    icon: 'Users',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Exam questions often link committees to their recommendations.'
      },
      {
        type: ContentType.TABLE,
        title: 'Important Committees',
        tableHeaders: ['Committee', 'Associated With'],
        tableData: [
          { Committee: 'Narasimham Committee', 'Associated With': 'Banking Sector Reforms (1991, 1998)' },
          { Committee: 'Shivraman Committee', 'Associated With': 'Establishment of NABARD' },
          { Committee: 'Hilton Young Commission', 'Associated With': 'Establishment of RBI' },
          { Committee: 'Bimal Jalan Committee', 'Associated With': 'Economic Capital Framework (RBI Reserves)' },
          { Committee: 'Nandan Nilekani Committee', 'Associated With': 'Deepening Digital Payments' },
          { Committee: 'Nachiket Mor Committee', 'Associated With': 'Small Finance Banks & Payments Banks' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q23-1',
        question: 'Which committee recommended the formation of Payment Banks?',
        options: ['Narasimham Committee', 'Nachiket Mor Committee', 'Bimal Jalan Committee', 'Rangarajan Committee'],
        correctAnswer: 1,
        explanation: 'The Nachiket Mor Committee on Comprehensive Financial Services recommended the setting up of Payment Banks.'
      },
      {
        id: 'q23-2',
        question: 'Narasimham Committee is associated with?',
        options: ['Tax Reforms', 'Banking Sector Reforms', 'Education Reforms', 'Agriculture Reforms'],
        correctAnswer: 1,
        explanation: 'The Narasimham Committee (I & II) is famous for Banking Sector Reforms in India.'
      },
      {
        id: 'q23-3',
        question: 'The Hilton Young Commission led to the establishment of?',
        options: ['SBI', 'RBI', 'NABARD', 'SEBI'],
        correctAnswer: 1,
        explanation: 'The Reserve Bank of India was established based on the recommendations of the Hilton Young Commission (Royal Commission on Indian Currency and Finance).'
      }
    ]
  },
  {
    id: 'sec24',
    title: '24. Frauds',
    icon: 'AlertTriangle',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Awareness of major financial frauds helps understand the need for strict compliance and regulations.'
      },
      {
        type: ContentType.LIST,
        title: 'Major Case Studies',
        items: [
          'Nirav Modi / PNB Scam (2018): Misuse of LoU (Letters of Undertaking). Result: RBI banned LoUs.',
          'Vijay Mallya: Willful defaulter. Led to the strengthening of the Fugitive Economic Offenders Act.',
          'PMC Bank Crisis: Hidden exposure to HDIL. Led to stricter oversight of Cooperative Banks by RBI.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q24-1',
        question: 'The PNB Scam involving Nirav Modi was related to the misuse of?',
        options: ['Cheques', 'LoU (Letter of Undertaking)', 'Credit Cards', 'Overdrafts'],
        correctAnswer: 1,
        explanation: 'The scam involved fraudulent issuance of Letters of Undertaking (LoUs) without collateral.'
      },
      {
        id: 'q24-2',
        question: 'Following the PNB scam, which instrument was banned by RBI?',
        options: ['Bank Guarantee', 'Letter of Credit', 'Letter of Undertaking (LoU)', 'Promissory Note'],
        correctAnswer: 2,
        explanation: 'The RBI discontinued the issuance of LoUs and LoCs for trade credits for imports into India.'
      },
      {
        id: 'q24-3',
        question: 'The PMC Bank crisis was primarily due to exposure to which entity?',
        options: ['Kingfisher', 'Nirav Modi', 'HDIL', 'Videocon'],
        correctAnswer: 2,
        explanation: 'PMC Bank collapsed due to massive under-reported loans to HDIL (Housing Development and Infrastructure Ltd).'
      }
    ]
  },
  {
    id: 'sec25',
    title: '25. Final Checklist',
    icon: 'ClipboardList',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Before you enter the exam hall, ensure you have these topics at your fingertips.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Last Minute Revision',
        items: [
          'Current Repo Rate, Reverse Repo, Bank Rate.',
          'GDP predictions by IMF, World Bank, RBI for India.',
          'Heads of major organizations (RBI Gov, SBI Chair, SEBI Chair).',
          'Recent Bank Mergers.',
          'Theme of the latest Union Budget.',
          'Important Days (Banking Day, Consumer Rights Day).'
        ]
      },
      {
        type: ContentType.IMAGE,
        imageUrl: 'https://picsum.photos/seed/success/800/400',
        imageCaption: 'Good luck! Confidence is key.'
      }
    ],
    quiz: [
      {
        id: 'q25-1',
        question: 'Who is the current Governor of RBI?',
        options: ['Raghuram Rajan', 'Urjit Patel', 'Shaktikanta Das', 'D. Subbarao'],
        correctAnswer: 2,
        explanation: 'Shaktikanta Das is the current Governor of the Reserve Bank of India.'
      },
      {
        id: 'q25-2',
        question: 'World Consumer Rights Day is observed on?',
        options: ['January 15', 'March 15', 'December 24', 'October 2'],
        correctAnswer: 1,
        explanation: 'World Consumer Rights Day is celebrated on March 15th every year.'
      },
      {
        id: 'q25-3',
        question: 'GDP projections for India are regularly released by?',
        options: ['SBI', 'IMF & World Bank', 'SEBI', 'IRDAI'],
        correctAnswer: 1,
        explanation: 'International bodies like IMF and World Bank, along with RBI, release GDP growth projections.'
      }
    ]
  },
  {
    id: 'sec_final_quiz',
    title: '26. Final Mock Test',
    icon: 'Trophy',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Welcome to the Final Comprehensive Mock Test. This test is designed to simulate the real exam environment.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Test Rules',
        items: [
          'This quiz contains 20 questions selected randomly from all chapters.',
          'Questions cover Banking History, RBI, Monetary Policy, Digital Payments, and more.',
          'There is no time limit, but try to answer quickly.',
          'Immediate feedback is provided for learning.'
        ]
      },
      {
        type: ContentType.PARAGRAPH,
        text: 'Click the button below to start the challenge. Good luck!'
      }
    ],
    quiz: [] // Populated dynamically in SectionRenderer
  }
];
