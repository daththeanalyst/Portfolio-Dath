export const bio = [
  "Hello! I'm Dimitris Athinaios, a data analyst and data science enthusiast. I completed my BSc in Business Management (Data Analytics & Digital Business) at Henley Business School at UoR with First Class Honors. This September, I’m starting my MSc in Business Analytics at UCL School of Management. I'm passionate about leveraging data to solve real-world problems and driven to build a career in data science."
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

// Unified Projects Array
export const projects = [
  {
    projectName: "Spatio-Temporal ML Pipeline: London Housing Index",
    image: "images/london-housing.png",
    summary: "<strong>ML Engineering & Spatial Intelligence</strong>:<br> Integrated 1M+ crime and housing records to create a custom 'Opportunity Index.' Optimized an <strong>XGBoost regressor via Optuna</strong> to achieve an R² of 0.92.",
    preview: "https://github.com/daththeanalyst/London-Housing-Crime-Analysis",
    techStack: ["Python", "XGBoost", "Optuna", "GeoPandas", "Scikit-learn"],
  },
  {
    projectName: "Scalable Retail ETL Pipeline (Databricks)",
    image: "images/databricks-etl.png",
    summary: "<strong>Big Data Engineering</strong>:<br> Constructed a production-grade ETL pipeline for 500k+ transactions. Utilized <strong>PySpark</strong> for data orchestration and automated KPI tracking via Databricks dashboards.",
    preview: "https://github.com/daththeanalyst/Databricks-Retail-ETL",
    techStack: ["Databricks", "PySpark", "SQL", "Big Data", "ETL"],
  },
  {
    projectName: "Marketing Strategy & Causal Inference",
    image: "images/marketing-analytics.png",
    summary: "<strong>Strategic Analytics & CLV Modeling</strong>:<br> Formulated a market entry strategy for a retail startup using R. Applied <strong>Causal Inference (2SLS)</strong> to project an £11k+ profit uplift.",
    preview: "https://github.com/daththeanalyst/CLV-CAC-Analysis-for-Case-Study-UCL",
    techStack: ["R", "Quarto", "Causal Inference", "Financial Modeling"],
  },
  {
    projectName: "Stock Forecast Analysis (LSTM)",
    image: "images/stock-app.png",
    summary: "<strong>Deep Learning Time-Series Modeling</strong>:<br> Developed an <strong>LSTM-based model</strong> to predict market trends. Achieved an RMSE of 3.4 using TensorFlow and Keras.",
    preview: "https://github.com/daththeanalyst/stock-forecast-analysis",
    techStack: ["Python", "TensorFlow", "Keras", "Deep Learning", "LSTM"],
  },
  {
    projectName: "Maritime Operations Intelligence",
    image: "images/cargo-ship.png",
    summary: "<strong>AIS Data Analysis & Visualization</strong>:<br> Analyzed maritime vessel data to optimize fleet performance. Developed interactive <strong>Power BI</strong> dashboards for navigational pattern analysis.",
    preview: "https://github.com/daththeanalyst/Cargo-Ship-Dataset-Deep-Analysis",
    techStack: ["Python", "SQL", "Power BI", "Pandas", "NumPy"],
  },
  {
    projectName: "Corporate Web Ecosystem",
    image: "images/web-dev.png",
    summary: "<strong>Digital Presence & Brand Deployment</strong>:<br> Deployed a responsive corporate front-end and a personal portfolio ecosystem managed via <strong>GitHub Pages</strong>.",
    preview: "https://daththeanalyst.github.io/Portfolio-Dath/",
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Git"],
  },
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
    subtitle: "MSc in Business Analytics",
    details: ["Focused on advanced predictive modelling, data engineering, and machine learning."],
    tags: ["Predictive Modelling", "Machine Learning", "Data Engineering"],
    icon: "graduation-cap",
  },
  {
    title: "Henley Business School",
    duration: "September 2022 - June 2025",
    subtitle: "BSc Business Management (Data Analytics)",
    details: ["Grade: 1st Class Honours.", "President & Co-Founder of Data Analytics Society"],
    tags: ["Machine Learning", "Data Analytics"],
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
