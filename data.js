export const bio = [
  "I am a <strong>Data Scientist</strong> currently pursuing an MSc in Business Analytics at <strong>UCL School of Management</strong>, where I maintain a First-Class average of 80% (Distinction). Having graduated with First Class Honors from Henley Business School, I am now focused on bridging the gap between high-level business strategy and deep technical execution.",
  "My current work is centered on cultivating the rigorous mathematical foundations and advanced programming expertise required for <strong>AI/ML Engineering</strong>. I am passionate about deconstructing complex algorithms to their first principles focusing on the core linear algebra, calculus, and scalable coding practices that power modern artificial intelligence.",
  "From engineering spatio-temporal ML pipelines to building scalable ETL infrastructure, my goal is to develop robust, data-driven solutions that solve real-world problems through technical excellence and continuous improvement (Kaizen)."
];

export const skills = [
  { title: "Data Science & ML", skillName: "Python, R, Scikit-Learn, XGBoost, Predictive Modeling", color: "1", percentage: "90" },
  { title: "Data Engineering", skillName: "SQL, PySpark, Databricks, AWS, ETL Pipelines", color: "2", percentage: "85" },
  { title: "Business Intelligence", skillName: "Power BI, Tableau, Excel, Marketing Analytics (CLV/CAC)", color: "3", percentage: "90" },
  { title: "Development & DevOps", skillName: "Git/GitHub, Docker, Linux, HTML/CSS", color: "4", percentage: "75" },
];

export const certifications = [
  { title: "Google Advanced Data Analytics", link: "https://www.coursera.org/account/accomplishments/professional-cert/4JMQXA2VUMEJ" },
  { title: "Mathematics for Machine Learning Specialisation – Imperial College", link: "https://www.coursera.org/account/accomplishments/specialization/4W0TT9EK791M" },
  { title: "IBM Data Analyst", link: "https://www.coursera.org/account/accomplishments/professional-cert/H7Y9DHUXNFY5" },
  { title: "Microsoft Power BI Desktop", link: "https://www.udemy.com/certificate/UC-6a440cdc-fae6-4148-87ca-d9da7671993c/" },
  { title: "Google Data Analytics", link: "https://www.credly.com/badges/7a1394e2-1698-4b9e-9d28-26b58d1e3c79/linked_in_profile" },
];

export const projects = [
  {
    projectName: "Spatio-Temporal ML Pipeline: London Housing Index",
    image: "images/london-housing.png",
    summary: "<strong>ML Engineering & Spatial Intelligence</strong>:<br> Integrated 1M+ crime and housing records to create a custom 'Opportunity Index.' Optimized an <strong>XGBoost regressor via Optuna</strong> to achieve an R² of 0.92, outperforming baseline models.",
    preview: "https://github.com/daththeanalyst/London-SafeValue-Analytics",
    techStack: ["Python", "XGBoost", "Optuna", "GeoPandas", "Scikit-learn"],
  },
  {
    projectName: "Scalable Retail ETL Pipeline (Databricks)",
    image: "images/databricks-etl.png",
    summary: "<strong>Big Data Engineering</strong>:<br> Constructed a production-grade ETL pipeline for 500k+ transactions. Utilized <strong>PySpark</strong> for data orchestration and automated KPI tracking via Databricks business intelligence dashboards.",
    techStack: ["Databricks", "PySpark", "SQL", "Big Data", "ETL"],
  },
  {
    projectName: "Marketing Strategy & Causal Inference",
    image: "images/marketing_strategy_causal_inference.png",
    summary: "<strong>Strategic Analytics & CLV Modeling</strong>:<br> Formulated a market entry strategy for a retail startup using R. Applied <strong>Causal Inference (2SLS)</strong> to project an £11k+ profit uplift and analyze price elasticity.",
    preview: "https://github.com/daththeanalyst/CLV-CAC-Analysis-for-Case-Study-UCL",
    techStack: ["R", "Quarto", "Causal Inference", "Financial Modeling"],
  },
  {
    projectName: "Corporate Web Deployment: Global Team Plans",
    image: "images/global_team_plans.png",
    summary: "<strong>Digital Presence & Branding</strong>:<br> Designed and deployed a responsive static front-end website for a corporate client. Established their digital brand presence and managed the full deployment lifecycle via <strong>GitHub</strong>.",
    preview: "https://globalteamplans.com/",
    techStack: ["HTML5", "JavaScript", "GitHub Pages", "Version Control"],
  },
  {
    projectName: "Web Portfolio & Professional Brand Ecosystem",
    image: "images/portfolio_linktree.png",
    summary: "<strong>Personal Branding & Web Dev</strong>:<br> Developed a dual-site ecosystem featuring a comprehensive <strong>Web CV Portfolio</strong> and a custom-coded <strong>Linktree clone</strong>. Centralized technical projects and social touchpoints with a focus on mobile-first responsive design.",
    preview: "https://daththeanalyst.github.io/Portfolio-Dath/",
    techStack: ["HTML5", "CSS3", "Git", "GitHub Pages", "UI/UX"],
  }
];

export const experience = [
  {
    title: "Globassure Insurance Agents (acquired by HOWDEN)",
    duration: "June 2024 - August 2024",
    subtitle: "Business Analyst",
    details: [
      "Cleaned and analysed over 12,000 records, uncovering key data relationships through exploratory data analysis (EDA).",
      "Extracted and organised lead data in Excel, helping secure five start-up clients."
    ],
    tags: ["EDA", "Excel", "Data Cleaning"],
    icon: "chart-line",
  },
  {
    title: "Syndesis, Athens, Greece",
    duration: "July 2023 - November 2023",
    subtitle: "Co-Founder",
    details: [
      "Visualized market insights using Excel & Power BI.",
      "Led consultations with industry experts, expanding advisory network by 80%.",
    ],
    tags: ["Market Research", "Excel", "Power BI"],
    icon: "user-tie",
  },
];

export const education = [
  {
    title: "UCL School of Management",
    duration: "September 2025 - September 2026",
    subtitle: "MSc Business Analytics",
    details: [
      "Current Average: 81% (Distinction).",
      "Elective Specialisation: Data Engineering (Docker, AWS, Git, SQL, Linux, MLOPs) & Machine Learning (Linear Algebra, PCA).",
      "Core Modules: Business Strategy, Marketing & Operations Analytics, Statistical Foundations, and Predictive Analytics.",
    ],
    tags: [
      "Distinction (81%)",
      "Data Engineering",
      "Machine Learning",
      "AWS / Docker",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Henley Business School",
    duration: "September 2022 - June 2025",
    subtitle: "BSc Business Management (Data Analytics & Digital Business)",
    details: [
      "Grade: First Class Honours.",
      "Relevant Courses: Machine Learning, Data Analytics, Information Systems, Business Analytics.",
      "Co-Founder & President of Data Analytics Society: Led student skill-building events and professional networking.",
    ],
    tags: ["1st Class Honours", "Data Analytics", "Leadership"],
    icon: "graduation-cap",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      { text: "LinkedIn", link: "https://www.linkedin.com/in/dimitriosath/" },
      { text: "GitHub", link: "https://github.com/daththeanalyst" },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made by Dimitris Athinaios.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
