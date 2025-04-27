// components/TechStack/iconMapping.tsx
import React from "react";
import { TechType } from "../../types/techStackTypes";

import CodeIcon from "@mui/icons-material/Code";

// Import React Icons
import {
  FaPython,
  FaDatabase,
  FaAws,
  FaJs,
  FaCss3,
  FaHtml5,
  FaReact,
  FaDocker,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiFlask,
  SiScrapy,
  SiMongodb,
  SiHeroku,
  SiNginx,
  SiNumpy,
  SiPandas,
  SiTypescript,
  SiKubernetes,
  SiDjango,
  SiVercel,
  SiNextdotjs,
  SiHetzner,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiBrevo,
  SiCloudflare,
  SiLangchain,
  SiArgo,
  SiAwslambda,
  SiPytorch,
  SiDart,
  SiFirebase,
  SiPlotly,
  SiMaterialdesign,
  SiMui,
} from "react-icons/si";
import { FlutterIcon } from "./customIconMapping";

interface IconProps {
  size?: number;
  color?: string;
}

export const getTechIcon = (
  techType: TechType,
  props: IconProps = { size: 24 },
): React.ReactNode => {
  const { size, color } = props;

  switch (techType) {
    // Web Crawler
    case TechType.PYTHON:
      return <FaPython size={size} color={color} />;
    case TechType.SCRAPY_FRAMEWORK:
      return <SiScrapy size={size} color={color} />;
    case TechType.SCRAPYD:
      return <SiScrapy size={size} color={color} />;
    case TechType.HEROKU:
      return <SiHeroku size={size} color={color} />;

    // Backend
    case TechType.FLASK:
      return <SiFlask size={size} color={color} />;
    case TechType.FLASK_RESTFUL:
      return <SiFlask size={size} color={color} />;
    case TechType.NUMPY:
      return <SiNumpy size={size} color={color} />;
    case TechType.PANDAS:
      return <SiPandas size={size} color={color} />;

    // Database
    case TechType.DYNAMODB:
      return <FaDatabase size={size} color={color} />;
    case TechType.MONGODB:
      return <SiMongodb size={size} color={color} />;

    // Mobile App
    case TechType.FLUTTER:
      return <FlutterIcon sx={{ fontSize: size, color }} />;

    // Chrome Extension
    case TechType.JAVASCRIPT:
      return <FaJs size={size} color={color} />;
    case TechType.CSS:
      return <FaCss3 size={size} color={color} />;
    case TechType.HTML:
      return <FaHtml5 size={size} color={color} />;

    case TechType.TYPESCRIPT:
      return <SiTypescript size={size} color={color} />;

    case TechType.REACT:
      return <FaReact size={size} color={color} />;

    case TechType.NGINX:
      return <SiNginx size={size} color={color} />;

    case TechType.DOCKER:
      return <FaDocker size={size} color={color} />;

    case TechType.KUBERNETES:
      return <SiKubernetes size={size} color={color} />;

    case TechType.GIT:
      return <FaGit size={size} color={color} />;

    case TechType.GITHUB:
      return <FaGithub size={size} color={color} />;

    case TechType.AWS:
      return <FaAws size={size} color={color} />;

    case TechType.VERCEL:
      return <SiVercel size={size} color={color} />;

    case TechType.HETZNER_CLOUD:
      return <SiHetzner size={size} color={color} />;

    case TechType.DJANGO:
      return <SiDjango size={size} color={color} />;

    case TechType.DJANGO_REST_FRAMEWORK:
      return <SiDjango size={size} color={color} />;

    case TechType.DJANGO_CHANNELS:
      return <SiDjango size={size} color={color} />;

    case TechType.TAILWIND_CSS:
      return <SiTailwindcss size={size} color={color} />;

    case TechType.REDUX_TOOLKIT:
      return <SiRedux size={size} color={color} />;

    case TechType.NEXTJS:
      return <SiNextdotjs size={size} color={color} />;

    case TechType.POSTGRESQL:
      return <SiPostgresql size={size} color={color} />;

    case TechType.CLOUDFLARE_R2:
      return <SiCloudflare size={size} color={color} />;

    case TechType.BREVO:
      return <SiBrevo size={size} color={color} />;

    case TechType.LANGCHAIN:
      return <SiLangchain size={size} color={color} />;

    case TechType.ARGOCD:
      return <SiArgo size={size} color={color} />;

    case TechType.AWS_LAMBDA:
      return <SiAwslambda size={size} color={color} />;

    case TechType.PYTORCH:
      return <SiPytorch size={size} color={color} />;

    case TechType.DART:
      return <SiDart size={size} color={color} />;

    case TechType.FIREBASE:
      return <SiFirebase size={size} color={color} />;

    case TechType.PLOTLY:
      return <SiPlotly size={size} color={color} />;

    case TechType.MATERIAL_UI:
      return <SiMui size={size} color={color} />;

    default:
      return <CodeIcon sx={{ fontSize: size, color }} />;
  }
};
