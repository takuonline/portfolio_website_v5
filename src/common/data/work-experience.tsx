type WorkExperienceSchema = {
  id: number;
  companyName: string;
  jobtitle: string;
  department: string;
  startDate: string;
  endDate: string | undefined;
  // duration: string;
  location: string;
  desc: string[];
  skills: string[];
};

const workExperienceData: WorkExperienceSchema[] = [
  {
    id: 1,
    companyName: "BCG - ShopriteX",
    jobtitle: "Data Scientist",
    department: "Pricing and Promotions",
    startDate: "2022-09-01",
    endDate: undefined,
    // duration: "September 2022 – Present",
    location: "Remote",
    desc: [
      "I have collaborated with BCG Gamma consultancy over the past few years to build and implement state of the art models that have significantly improved the company's pricing decisions and revenue. ",
      "Worked with BCG to develop and refine a pricing model, including designing experiments to validate the model's accuracy and robustness.",
      "Built and tested pricing models using statistical and machine learning techniques.",
      "Conducted market research and analysed competitor data",
      "Developed training materials and presentations to educate the stakeholders on the use and benefits of the models.",
    ],

    skills: ["Data science", "Machine learning"],
  },

  {
    id: 2,
    companyName: "ShopriteX (Shoprite Group's digital innovation hub)",
    jobtitle: "Data Scientist",
    department: "Pricing and Promotions",
    startDate: "2021-06-01",
    endDate: undefined,
    // duration: "June 2021 – Present",
    location: "Cape town, South Africa",
    desc: [
      "Contributed to the company's success over the past few years by leveraging my technical skills and data-driven insights to solve business challenges for the largest retailer in Africa.",
      "Analysed customer data to identify trends and patterns in behaviour.",
      "Built and implemented predictive models to forecast demand for products and optimize inventory levels.",
      "Monitored the performance and stability of data-driven systems and processes in production",
    ],
    skills: ["Data science", "Machine learning"],
  },

  {
    id: 3,
    companyName: "Brave-orbit",
    jobtitle: "Mobile developer",
    department: "Flutter",
    startDate: "2020-06-01",
    endDate: "2021-06-01",
    // duration: "June 2020 - June 2021",
    location: "Cape town, South Africa",
    desc: [
      "Built and deployed 5 mobile apps and a react web app.",
      "Designed and developed cross-platform mobile applications for iOS and Android",
      "Worked closely with cross-functional teams, including designers, product managers, and QA engineers, to ensure that mobile applications meet business and user needs.",
      "Implemented robust and scalable architectures for mobile applications",
    ],
    skills: ["Mobile developer", "Flutter"],
  },
  {
    id: 4,
    companyName: "Alphalytica",
    jobtitle: "Data Scientist",
    department: "Location Intelligence",
    startDate: "2021-01-01",
    endDate: "2021-06-01",
    // duration: "January 2021 - June 2021",
    location: "Cape town, South Africa",
    desc: [
      "Worked with GIS data and tools, including maps, satellite imagery, arcgis and demographics, to identify patterns and trends that can inform store location decisions.",
      "Developed and implemented machine learning algorithms to analyse GIS data and identify optimal store locations based on factors such as foot traffic, competition, and demographics.",
      "Created visualizations and dashboards to communicate the results of the store location analysis to stakeholders, including maps, charts, and tables.",
    ],
    skills: ["Data science",   "GIS"],

  },
];

export default workExperienceData;
export type { WorkExperienceSchema };
