export const bio = [
  "Hello! I'm Dimitris Athinaios, a data analyst and data science enthusiast, pursuing a BSc in Business Management with Data Analytics and Digital Business at Henley Business School, University of Reading.",
  "Driven to excel in the field, I am committed to mastering data-driven decision-making and becoming a leader in the industry.",
  "Thanks for visiting!",
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
        "Analyzed tanker movements using AIS data to optimize shipping routes, improve fuel efficiency, assess port performance, and develop a predictive model for ETA.",
      preview: "https://github.com/daththeanalyst/Cargo-Ship-Dataset-Deep-Analysis", // GitHub link
      techStack: ["Python", "SQL", "Power BI", "Pandas", "NumPy"],
    },
    {
      projectName: "Data Cleaning Project SQL",
      image: "images/data-cleaning.png",
      summary:
        "Cleaned and standardized datasets, removing duplicates and preparing data for analysis.",
      preview: "https://github.com/daththeanalyst/Data-Cleaning-Project-SQL", // GitHub link
      techStack: ["SQL", "Data Cleaning"],
    },
  ],
  softwareProjects: [
        {
      projectName: "Churn Prediction Model",
      image: "images/churn-prediction.png",
      summary:
        "Built a churn prediction model to identify customers likely to leave, leveraging machine learning and advanced data analysis techniques.",
      preview: "https://github.com/daththeanalyst/Churn-Prediction-Model", // GitHub link
      techStack: ["Python", "Matplotlib", "Seaborn", "Scikit-learn"],
    },
    {
      projectName: "Amazon Web Scraping",
      image: "images/web-scraping.png",
      summary:
        "Developed a Python-based tool to scrape Amazon product data, track prices, and send alerts for price drops.",
      preview: "https://github.com/daththeanalyst/Amazon-Web-Scraping-Project", // GitHub link
      techStack: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    },
  ],
};

export const experience = [
  {
    title: "Globassure Insurance Agents (Howden)",
    duration: "July 2024 - August 2024",
    subtitle: "Data Analyst",
    details: [
      "Cleaned 15,000+ records and automated tasks with Python, saving 40 hours/month.",
      "Leveraged Power BI insights to boost marketing ROI by 18%.",
    ],
    tags: ["Python", "Power BI", "Data Cleaning", "SQL"],
    icon: "briefcase",
  },
  {
    title: "ICB, Athens",
    duration: "June 2024 - July 2024",
    subtitle: "Data Analyst",
    details: [
      "Improved data accuracy by 15% by integrating SoftOne SQL data.",
      "Created Power BI dashboards, reducing overstock by 25% and minimizing costs.",
    ],
    tags: ["Power BI", "SQL", "Data Visualization"],
    icon: "chart-line",
  },
  {
    title: "Syndesis",
    duration: "July 2023 - November 2023",
    subtitle: "Co-Founder",
    details: [
      "Conducted market research and analyzed insights using Excel & Power BI.",
      "Led consultations with experts, expanding the advisory network by 80%.",
    ],
    tags: ["Market Research", "Excel", "Power BI"],
    icon: "user-tie",
  },
  {
    title: "New Democracy Political Party",
    duration: "May 2023 - July 2023",
    subtitle: "Call Centre Agent",
    details: [
      "Managed 350+ calls daily and influenced 10-50 prospective representatives.",
    ],
    tags: ["Communication", "Customer Support"],
    icon: "phone",
  },
  {
    title: "Globassure Insurance Agents, Athens, Greece",
    duration: "June 2022 - August 2022",
    subtitle: "Data Ops Analyst",
    details: [
      "Processed 3,000+ data entries and digitized records, eliminating bottlenecks and elevating productivity by 20%.",
      "Performed data scraping to collect data on potential clientele, organizing the information in Excel for targeted outreach, resulting in acquiring 5 client businesses for employee insurance coverage.",
    ],
    tags: ["Data Entry", "Excel", "Data Scraping"],
    icon: "briefcase",
  },
  {
    title: "Lamda Helix Data Centre, Athens, Greece",
    duration: "June 2020 - August 2020",
    subtitle: "Data Engineer Shadow",
    details: [
      "Collaborated with data engineers to optimize data center operations, enhancing data storage, security, and efficiency while developing technical expertise.",
    ],
    tags: ["Data Center Operations", "Data Storage", "Technical Expertise"],
    icon: "server",
  },
];

export const education = [
  {
    title: "Henley Business School, University of Reading",
    duration: "September 2022 - June 2025",
    subtitle: "BSc in Business Management (Data Analytics and Digital Business)",
    details: [
      "Key Courses: Machine Learning, Data Analytics, Business Analytics.",
      "Second Year Avg: 69% (2:1).",
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
    tags: ["Mathematics", "Physics", "Business Management"],
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
