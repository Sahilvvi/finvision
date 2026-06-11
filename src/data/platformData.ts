export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  mode: string;
  language: string;
  enrolledStudents: number;
  rating: number;
  price: string;
  originalPrice: string;
  badge?: string;
  highlights: string[];
  curriculum: { section: string; topics: string[] }[];
  outcomes: string[];
}

export interface Mentor {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  linkedin: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  rating: number;
  highlight?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Resource {
  id: string;
  title: string;
  category: 'AI' | 'Sales' | 'Marketing' | 'Career Growth' | 'Entrepreneurship';
  type: 'Blog' | 'Webinar' | 'Demo Lecture' | 'Download' | 'Case Study';
  description: string;
  link: string;
  readTimeOrDuration: string;
  publishDate: string;
}

export const platformCourses: Course[] = [
  {
    id: "cfae",
    slug: "cfa-level-1-prep",
    title: "CFA® Prep Program",
    category: "Professional Certifications",
    shortDescription: "Prepare for all CFA® levels with globally recognized rigor, practical insights, and expert-led training—aligned to industry best practices.",
    description: "Our CFA® Prep Program is built to ensure you clear the exam on your first attempt. We focus on conceptual depth rather than rote learning. The course includes 150+ hours of video lectures, 3000+ practice questions, and 5 full-length mock exams that simulate the actual CBT environment.",
    duration: "6 Months",
    mode: "Self-paced or Instructor-led",
    language: "English",
    enrolledStudents: 1240,
    rating: 4.9,
    price: "₹24,999",
    originalPrice: "₹34,999",
    badge: "Professional Certification",
    highlights: [
      "150+ Hours of High Definition Video Lectures",
      "Comprehensive Study Notes & Formula Sheets",
      "3000+ Practice Question Bank with Detailed Solutions",
      "5 Full-Length CBT Mock Exams",
      "Dedicated 24/7 Doubt Solving Telegram Community",
      "1-on-1 Mentor Support from CFA Charterholders"
    ],
    curriculum: [
      {
        section: "Quantitative Methods & Economics",
        topics: ["Time Value of Money", "Probability Concepts", "Common Probability Distributions", "Sampling and Estimation", "Hypothesis Testing", "Introduction to Linear Regression", "Topics in Demand and Supply", "Monetary and Fiscal Policy", "Geopolitics"]
      },
      {
        section: "Financial Statement Analysis (FSA)",
        topics: ["Financial Reporting Standards", "Income Statement, Balance Sheet & Cash Flow Statement", "Inventories & Long-lived Assets", "Income Taxes & Non-current Liabilities", "Financial Reporting Quality", "Integration of Financial Statement Analysis"]
      },
      {
        section: "Corporate Issuers & Portfolio Management",
        topics: ["Corporate Structures and Governance", "Capital Investment & Cost of Capital", "Working Capital & Liquidity", "Portfolio Management Overview", "Portfolio Risk and Return Part I & II", "Basics of Portfolio Planning and Construction"]
      },
      {
        section: "Equity, Fixed Income, Derivatives & Alternatives",
        topics: ["Market Organization and Structure", "Security Valuation & Equity Analysis", "Fixed Income Securities & Valuation", "Introduction to Derivatives", "Alternative Investments Overview"]
      }
    ],
    outcomes: [
      "Deep understanding of all 10 CFA topic areas",
      "Ability to analyze complex financial statements and corporate accounts",
      "Solid foundation in investment valuation and portfolio risk management",
      "Confidence to clear the CFA Level I CBT exam on the first attempt"
    ]
  },
  {
    id: "frm",
    slug: "frm-part-1-prep",
    title: "FRM® Prep Program",
    category: "Professional Certifications",
    shortDescription: "Train to be the risk professional banks trust—with Finvision First Floor foundation.",
    description: "The Financial Risk Manager (FRM®) designation is the gold standard in financial risk. Our Part I Masterclass covers the foundational quantitative methods, financial markets, products, and valuation models needed to excel as a risk professional.",
    duration: "5 Months",
    mode: "Self-paced or Instructor-led",
    language: "English",
    enrolledStudents: 850,
    rating: 4.8,
    price: "₹21,999",
    originalPrice: "₹29,999",
    badge: "Professional Certification",
    highlights: [
      "120+ Hours of Structured Video Lectures",
      "Comprehensive Question Bank (2000+ Questions)",
      "4 Full-Length Mock Exams",
      "Weekly Live Doubt Clearing Sessions",
      "Placement Support in Treasury & Risk roles"
    ],
    curriculum: [
      {
        section: "Foundations of Risk Management",
        topics: ["Basic Risk Types & Risk Management Frameworks", "Modern Portfolio Theory", "CAPM & Arbitrage Pricing Theory", "Financial Disasters & Risk Failures", "GARP Code of Conduct"]
      },
      {
        section: "Quantitative Analysis",
        topics: ["Probability & Statistics", "Linear Regression & Multi-variable Regression", "Monte Carlo Simulations", "Value-at-Risk (VaR) Estimation", "Volatility & Correlation Modeling"]
      },
      {
        section: "Financial Markets and Products",
        topics: ["Futures, Forwards, and Options", "Hedging Strategies", "Interest Rates and Swaps", "Foreign Exchange Risk", "Commodity Markets"]
      },
      {
        section: "Valuation and Risk Models",
        topics: ["Bond Valuation & Yield Measures", "Option Valuation (Black-Scholes-Merton)", "Stress Testing & Scenario Analysis", "Country Risk", "External & Internal Credit Ratings"]
      }
    ],
    outcomes: [
      "Command over financial risk frameworks and regulatory baselines",
      "Advanced capability in quantitative risk modeling",
      "Deep insight into pricing and hedging using derivatives",
      "Guaranteed readiness for the FRM Part I computer-based exam"
    ]
  },
  {
    id: "finmod",
    slug: "financial-modeling-valuation",
    title: "Financial Modelling",
    category: "Job-Ready Skills",
    shortDescription: "Create models that power billion-dollar decisions—DCF, valuation, forecasting, & scenario analysis; learn to look beyond the obvious.",
    description: "The absolute benchmark for investment banking, corporate finance, and equity research. This program takes you from an empty Excel sheet to advanced financial models, valuation analyses, and professional investment presentations.",
    duration: "3 Months",
    mode: "Self-paced",
    language: "English / Hindi Mixed",
    enrolledStudents: 2100,
    rating: 4.95,
    price: "₹14,999",
    originalPrice: "₹19,999",
    badge: "Job-Ready Skill",
    highlights: [
      "10+ Real-world Company Models (Tech, Retail, SaaS, Auto)",
      "Dynamic 3-Statement Modeling Templates",
      "DCF, Comparable Company Analysis (Comps), and Precedent Transactions",
      "Advanced LBO & M&A Modeling Bootcamps",
      "Mock Interviews & Resume Review with Investment Bankers",
      "Industry Recognized Certificate of Mastery"
    ],
    curriculum: [
      {
        section: "Excel Mastery for Finance",
        topics: ["Essential Shortcuts & Navigation", "Logical and Lookup Functions", "Data Tables & Sensitivity Analysis", "Formatting Standards for Investment Banking"]
      },
      {
        section: "3-Statement Modeling",
        topics: ["Historical Data Collection", "Revenue & Cost Drivers", "Depreciation & Working Capital Schedules", "Debt & Interest Schedules", "Balancing the Balance Sheet"]
      },
      {
        section: "Valuation Methodologies",
        topics: ["Discounted Cash Flow (DCF) Theory & Practice", "Calculating WACC & Terminal Value", "Trading Comps & Transaction Comps", "Football Field Valuation Charts"]
      },
      {
        section: "Specialized Modeling",
        topics: ["Introduction to Leveraged Buyout (LBO) Models", "M&A Accretion / Dilution Analysis", "Pitchbook Creation & Presentation Techniques"]
      }
    ],
    outcomes: [
      "Build complex, dynamic financial models in Excel from scratch",
      "Perform professional valuations using multiple methodologies",
      "Analyze M&A and LBO transactions with industry-standard frameworks",
      "Prepare investment-grade pitchbooks and research reports"
    ]
  },
  {
    id: "stockpick",
    slug: "art-of-stock-picking",
    title: "Art of Stock Picking",
    category: "Free Courses",
    shortDescription: "Learn step-by-step how to find high-potential stocks and build a portfolio you can trust—without the guesswork.",
    description: "Demystify equity research and retail investing. This course outlines key qualitative checklists, management red flag detection methods, valuation multiples, and structural portfolio construction guides to select winning businesses.",
    duration: "4 Weeks",
    mode: "Self-paced",
    language: "English",
    enrolledStudents: 3450,
    rating: 4.85,
    price: "Free",
    originalPrice: "₹4,999",
    badge: "Job-Ready Skill",
    highlights: [
      "Retail Investor Qualitative Checklist",
      "Management Quality Assessment & Red Flags",
      "Essential Valuation Multiples (P/E, P/B, EV/EBITDA)",
      "Diversified Portfolio Construction Guide"
    ],
    curriculum: [
      {
        section: "Foundations of Value Investing",
        topics: ["Circle of Competence", "Understanding Moats (Brand, Network, Cost)", "Margin of Safety Concept"]
      },
      {
        section: "Reading Annual Reports",
        topics: ["Key Sections to Focus On", "Analyzing Management Discussion & Analysis (MD&A)", "Notes to Accounts & Related Party Transactions"]
      },
      {
        section: "Valuation & Selection",
        topics: ["Earnings Quality check", "Basic Relative Valuation", "Constructing Your Personal Watchlist"]
      }
    ],
    outcomes: [
      "Identify structurally strong companies with sustainable moats",
      "Spot accounting red flags and corporate governance issues",
      "Value stocks using basic multiple analysis",
      "Build a structured 15-20 stock long-term investment portfolio"
    ]
  }
];

export const platformMentors: Mentor[] = [
  {
    name: "Ashwini Bajaj",
    role: "Founder & Chief Mentor",
    company: "Finvision Education (ex-Investment Banker)",
    image: "/mentors/ashwini.jpg",
    bio: "CFA, FRM, CA, CS. An educator who has trained over 15,000+ students globally. Known for bringing practical financial insights, real-time market data, and interactive learning methodologies into the classroom.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Vikram Malhotra",
    role: "Co-Founder & Head of Valuation",
    company: "Ex-Director, Ernst & Young M&A",
    image: "/mentors/vikram.jpg",
    bio: "Over 12 years of core corporate finance and transaction advisory experience. Specializes in valuations, leveraged buyouts, and strategic advisory for fortune 500 companies.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sneha Iyer, CFA",
    role: "Portfolio Management Lead",
    company: "Ex-VP, Goldman Sachs Asset Management",
    image: "/mentors/sneha.jpg",
    bio: "Passionate about equity research and macroeconomics. Sneha curates our portfolio management modules and conducts weekly market review sessions with students.",
    linkedin: "https://linkedin.com"
  }
];

export const platformTestimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "Investment Banking Analyst",
    company: "J.P. Morgan",
    quote: "Finvision changed my entire approach to finance. The conceptual depth of the CFA prep and the intense Financial Modeling bootcamp gave me the exact tools needed to clear my interviews and hit the ground running.",
    rating: 5,
    highlight: "Secured placement at J.P. Morgan"
  },
  {
    name: "Priya Sharma",
    role: "Risk Management Consultant",
    company: "Deloitte",
    quote: "The FRM Part 1 lectures were exceptionally structured. What stands out is how they relate mathematical models to actual historical crises. Passed with Quartile 1 in all sections!",
    rating: 5,
    highlight: "Passed FRM Part I with 1st Quartiles"
  },
  {
    name: "Aditya Goel",
    role: "Equity Research Associate",
    company: "Nomura",
    quote: "I recommend Finvision to everyone who wants to bridge the gap between academic finance and real-world execution. The valuation case studies are at par with actual buy-side models.",
    rating: 5,
    highlight: "Transitioned from Engineering to Finance"
  }
];

export const platformFAQs: FAQ[] = [
  {
    question: "How are the classes conducted?",
    answer: "Our classes are a hybrid of live interactive webinars and high-definition recorded modules. Live sessions are conducted on weekends, and all students get lifetime access to recorded sessions on our LMS platform."
  },
  {
    question: "Do you offer placement assistance?",
    answer: "Yes, we have a dedicated placement cell. We assist students with resume optimization, mock interviews, LinkedIn profiling, and share job openings directly from our network of hiring partners which includes bulge-bracket banks, accounting firms, and boutique investment firms."
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 7-day no-questions-asked refund policy on all course enrollments. If you are not satisfied with the course quality, you can write to us within 7 days of batch start for a full refund."
  },
  {
    question: "Are the study materials updated?",
    answer: "Absolutely. Our CFA, FRM, and financial modeling content is updated annually in accordance with the latest curricula released by the CFA Institute, GARP, and current industry trends."
  }
];

export const platformResources: Resource[] = [
  {
    id: "res-1",
    title: "The Ultimate Guide to Valuation: DCF, Comps & LBOs",
    category: "Career Growth",
    type: "Download",
    description: "A comprehensive PDF guide walking through the mathematics and Excel mechanics of the primary corporate valuation models.",
    link: "#",
    readTimeOrDuration: "2.4 MB PDF",
    publishDate: "2026-05-15"
  },
  {
    id: "res-2",
    title: "AI in Quantitative Finance: Python Implementation",
    category: "AI",
    type: "Blog",
    description: "How machine learning models are being deployed to optimize modern portfolio allocations and predict volatility markers.",
    link: "#",
    readTimeOrDuration: "8 min read",
    publishDate: "2026-06-02"
  },
  {
    id: "res-3",
    title: "Financing & Startup Valuation Metrics",
    category: "Entrepreneurship",
    type: "Case Study",
    description: "A detailed breakdown of how early-stage startups are valued by Venture Capitalists using real SaaS and D2C transaction benchmarks.",
    link: "#",
    readTimeOrDuration: "15 min read",
    publishDate: "2026-06-08"
  },
  {
    id: "res-4",
    title: "CFA vs FRM: Which is Right for Your Career Goals?",
    category: "Career Growth",
    type: "Demo Lecture",
    description: "A deep-dive video comparison by Ashwini Bajaj analyzing syllabus overlap, exam difficulty, study costs, and job profiles.",
    link: "#",
    readTimeOrDuration: "45 min video",
    publishDate: "2026-04-20"
  }
];
