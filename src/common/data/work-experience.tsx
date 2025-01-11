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
    companyName: "ShopriteX (Shoprite Group's digital innovation hub)",
    jobtitle: "Senior Machine Learning Engineer",
    department: "Pricing and Promotions",
    startDate: "2022-09-01",
    endDate: undefined,
    location: "Remote",
    desc: [
      "Developed and deployed (collaboratively with the help of BCG consultants as a single unit) over a two-year period a machine learning-driven pricing optimization tool that processes 10M+ daily transactions across 4,000+ stores, 3 store brands, 9 provinces, resulting in a 5% statistically significant increase in margin.",
      "Designed and developed, over a period of 1 year, a promotion effectiveness model that would measure the effectiveness of historic promotions and report on whether it was effective after considering all of its costs.",
      "Built and deployed a Nextjs and Django internal tool to streamline development and manage cloud costs used by the advanced analytics team(50+ people).",
      "Collaborated cross-functionally to translate data insights into actionable business strategies, driving measurable improvements in pricing and promotional effectiveness",
    ],

    skills: ["Data science", "Machine learning", "LLM", "Backend development"],
  },

  {
    id: 2,
    companyName: "Brave-orbit",
    jobtitle: "Mobile developer",
    department: "Flutter",
    startDate: "2020-06-01",
    endDate: "2021-06-01",
    location: "Cape town, South Africa",
    desc: [
      "Built 5 mobile and React applications for our clients within a year on a team of 2 mobile developers, demonstrating high productivity and versatility",
      "Designed and developed cross-platform mobile applications for iOS and Android",
      "Worked closely with cross-functional teams, including designers, product managers, and QA engineers, to ensure that mobile applications meet business and user needs.",
      "Implemented robust and scalable architectures for mobile applications",
    ],
    skills: ["Mobile developer", "Flutter"],
  },
  {
    id: 3,
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
    skills: ["Data science", "GIS"],
  },
];

export default workExperienceData;
export type { WorkExperienceSchema };
