export const bio = [
  "Hello! I'm Dimitris Athinaios, a data analyst and data science enthusiast, currently completing my BSc in Business Management with Data Analytics and Digital Business at Henley Business School, University of Reading. I'm on track to graduate with a high 2:1 or First."
  "This September, I’ll be starting my MSc in Business Analytics at UCL School of Management. I'm passionate about leveraging data to solve real-world problems and driven to build a career in data science."
  "Thanks for visiting!"
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python, SQL",
    color: "1",
    percentage: "70",
  },
  {
    title: "Data Visualization Tools",
    skillName: "Power BI, Tableau",
    color: "4",
    percentage: "80",
  },
  {
    title: "Data Analysis",
    skillName: "Data Cleaning, Statistical Analysis",
    color: "6",
    percentage: "70",
  },
  {
    title: "Software/Tools",
    skillName: "Microsoft Office, Excel, R, Java",
    color: "3",
    percentage: "70",
  },
  {
    title: "Development Tools",
    skillName: "GitHub, R Commander",
    color: "5",
    percentage: "50",
  },
];
export const certifications = [
  {
    title: "Google Advanced Data Analytics",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/4JMQXA2VUMEJ",
  },
  {
    title: "Mathematics for Machine Learning Specialisation – Imperial College",
    link: "https://www.coursera.org/account/accomplishments/specialization/4W0TT9EK791M",
  },
  {
    title: "IBM Data Analyst",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/H7Y9DHUXNFY5",
  },
  {
    title: "Microsoft Power BI Desktop",
    link: "https://www.udemy.com/certificate/UC-6a440cdc-fae6-4148-87ca-d9da7671993c/",
  },
  {
    title: "Google Data Analytics",
    link: "https://www.credly.com/badges/7a1394e2-1698-4b9e-9d28-26b58d1e3c79/linked_in_profile",
  }, 
];
export const projects = {
  webProjects: [
    {
      projectName: "Cargo Ship Project",
      image: "images/cargo-ship.png",
      summary:
        "<strong>AIS Data Analysis for Maritime Operations</strong>:<br> Analyzed vessel operations using AIS data to uncover patterns in navigational efficiency and fleet performance. Cleaned data in Python and created interactive Power BI dashboards to provide actionable insights for optimizing maritime operations.",      preview: "https://github.com/daththeanalyst/Cargo-Ship-Dataset-Deep-Analysis", // GitHub link
      techStack: ["Python", "SQL", "Power BI", "Pandas", "NumPy"],
    },
    {
      projectName: "Data Cleaning Project SQL",
      image: "images/data-cleaning.png",
      summary:
        "<strong>Layoffs Dataset Cleaning Project</strong>:<br> Performed comprehensive cleaning on a layoffs dataset using SQL. Focused on removing duplicates, handling null values and standardizing data. Prepared the dataset for further EDA and visualizations.",
      preview: "https://github.com/daththeanalyst/Data-Cleaning-Project-SQL", // GitHub link
      techStack: ["SQL", "Data Cleaning"],
    },
    {
      projectName: "Fitness App Analysis Project",
      image: "images/fitness-app-analysis.png",
      summary:
        "<strong>Fitness App Analysis Project</strong>:<br> Analyzed Google Play Store data to derive insights into the fitness application industry. Focused on user engagement, performance, and features of fitness apps compared to other app categories using Python for data cleaning and Power BI for interactive visualizations.",
      preview: "https://github.com/daththeanalyst/Google-Play-Store-Analysis", // GitHub link
      techStack: ["Python", "Power BI", "Pandas", "NumPy"],
    },
  ],
  softwareProjects: [
        {
      projectName: "Churn Prediction Model",
      image: "images/churn-prediction.png",
      summary:
        "<strong>Churn Prediction Model</strong>:<br>Built a machine learning model to predict customer churn, achieving 86.75% accuracy with Gradient Boosting. Key predictors included Age, Balance, and NumOfProducts.",
      preview: "https://github.com/daththeanalyst/Churn-Prediction-Model", // GitHub link
      techStack: ["Python", "Matplotlib", "Seaborn", "Scikit-learn"],
    },
    {
      projectName: "Amazon Web Scraping",
      image: "images/web-scraping.png",
      summary:
        "<strong>Amazon Price Tracker</strong>:<br> Automated the process of monitoring product prices on Amazon. Web scraping was used to extract price and product information, which was stored in a CSV file. The tool sends email alerts when prices drop below a specified threshold, ensuring users never miss a deal.",      preview: "https://github.com/daththeanalyst/Amazon-Web-Scraping-Project", // GitHub link
      techStack: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    },
    {
      projectName: "Stock Forecast Analysis",
      image: "images/stock-app.png",
      summary:
        "<strong>Stock Forecast Analysis</strong>:<br>Conducted an in-depth analysis of Apple's stock price using historical data from Yahoo Finance. Applied feature engineering techniques and trained an LSTM-based deep learning model to predict future stock prices. Evaluated model performance using RMSE (3.4) and visualized predicted vs actual prices to assess accuracy.",
      preview: "https://github.com/daththeanalyst/stock-forecast-analysis", // GitHub link
      techStack: ["Python", "TensorFlow", "Keras", "LSTM", "yfinance", "Pandas", "Matplotlib"],
    },
  ],
};

export const experience = [
  {
    title: "ICB, Athens, Greece",
    duration: "June 2024 - July 2024",
    subtitle: "Data Analyst",
    details: [
      "Minimized redundant stock purchases using SoftOne SQL data, cutting overstock by 3%.",
      "Created Power BI dashboards, reducing excess inventory by 5%.",
    ],
    tags: ["SQL", "Power BI", "Inventory Optimization", "Data Visualization"],
    icon: "chart-line",
  },
  {
    title: "Syndesis, Athens, Greece",
    duration: "July 2023 - November 2023",
    subtitle: "Co-Founder",
    details: [
      "Researched market and technology requirements, visiting 5% of target businesses, compiling and visualizing insights using Excel & Power BI.",
      "Led 5+ consultations with industry experts, securing actionable advice and expanding the advisory network by 80%.",
    ],
    tags: ["Market Research", "Excel", "Power BI", "Networking"],
    icon: "user-tie",
  },
  {
    title: "Globassure Insurance Agents, Athens, Greece",
    duration: "June 2022 - August 2022",
    subtitle: "Data Ops Analyst",
    details: [
      "Conducted market research with Excel, identifying potential clients and increasing clientele by 2%.",
      "Developed Power BI dashboards from cleaned Excel data, summarizing 1,000+ data points and saving 1 day of reporting effort weekly.",
    ],
    tags: ["Market Research", "Excel", "Power BI", "Efficiency Improvement"],
    icon: "briefcase",
  },
];



export const education = [
  {
    title: "UCL School of Management, University College London (UCL) Incoming",
    duration: "September 2025 - June 2026",
    subtitle: "MSc in Business Analytics",
    details: [
      "Key Courses: Business Strategy and Analytics, Programming, Statistical Foundations, Marketing Analytics" 
      "Operations Analytics, Predictive Analytics, Machine Learning, Data Engineering"
    ],
    tags: ["Machine Learning", "Data Analytics", "Business Analytics"],
    icon: "graduation-cap",
  },
  {
    title: "Henley Business School, University of Reading",
    duration: "September 2022 - June 2025",
    subtitle: "BSc in Business Management (Data Analytics and Digital Business)",
    details: [
      "Key Courses: Machine Learning, Data Analytics, Business Analytics.",
      "Second Year Avg: 69% (2:1).",
      "President & Co-Founder of Data Analytics Society"
    ],
    tags: ["Machine Learning", "Data Analytics", "Business Analytics"],
    icon: "graduation-cap",
  },
  {
    title: "St Catherine’s British School, Athens, Greece",
    duration: "September 2017 - July 2021",
    subtitle: "IB Diploma & IGCSEs",
    details: [
      "IB Diploma: HL - Mathematics AA, Physics, Business Management.",
      "IGCSEs: 10 GCSEs including Mathematics(A) and English Language(A).",
    ],
    tags: ["Mathematics", "Physics", "Business Management", "Java","Python",],
    icon: "school",
  },
];



export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/dimitriosath/",
      },
      {
        text: "GitHub",
        link: "https://github.com/daththeanalyst",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with ♥ by Dimitris Athinaios.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
