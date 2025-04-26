// types/techStack.ts
export enum TechType {
  // Web Crawler
  PYTHON = "Python",
  SCRAPY_FRAMEWORK = "Scrapy framework",
  SCRAPYD = "Scrapyd",
  HEROKU = "Heroku",
  AWS_LAMBDA = "AWS Lambda",

  // Backend
  FLASK = "Flask",
  FLASK_RESTFUL = "Flask restful",
  NUMPY = "Numpy",
  PANDAS = "Pandas",

  // Database
  DYNAMODB = "Dynamodb",
  MONGODB = "MongoDB",
  POSTGRESQL = "PostgreSQL",

  // Mobile App
  FLUTTER = "Flutter",

  // Chrome Extension
  JAVASCRIPT = "Javascript",
  CSS = "CSS",
  HTML = "HTML",

  TYPESCRIPT = "Typescript",
  REACT = "React",
  NGINX = "Nginx",
  NEXTJS = "Next.js",
  MATERIAL_UI = "Material UI",

  // DevOps
  DOCKER = "Docker",
  KUBERNETES = "Kubernetes",
  GIT = "Git",
  GITHUB = "Github",

  AWS = "AWS",

  HETZNER_CLOUD = "Hetzner Cloud",

  DJANGO = "Django",
  DJANGO_REST_FRAMEWORK = "Django REST Framework",
  DJANGO_CHANNELS = "Django Channels",

  TAILWIND_CSS = "Tailwind CSS",
  REDUX_TOOLKIT = "Redux Toolkit",
  SHADCN_UI = "Shadcn UI",
  VERCEL = "Vercel",

  CLOUDFLARE_R2 = "Cloudflare R2",
  BREVO = "Brevo(Sendinblue)",

  LANGCHAIN = "LangChain",
  ARGOCD = "ArgoCD",

  PYTORCH = "PyTorch",
  YOLOV7 = "YOLOv7",
  RESNET = "ResNet",
  DART = "Dart",

  AWS_EC2 = "AWS EC2",

  FIREBASE = "Firebase",

  PLOTLY = "Plotly",
}

export interface TechItemType {
  type: TechType;
  description?: string;
}

export interface TechSectionProps {
  section: string;
  items: TechItemType[];
}

export interface TechStackProps {
  sections: TechSectionProps[];
}
