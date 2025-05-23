// components/TechStack/customIconMapping.tsx
import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

// Define custom icon type
export interface CustomIconType {
  name: string;
  svg: React.ReactNode;
}

export const FlutterIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <title>Flutter icon</title>
    <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
  </SvgIcon>
);

const DynamoDBIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <title>DynamoDB icon</title>
    <g>
      <path
        d="M165.258,288.501 L168.766,288.501 L226.027,259.867 L226.98,258.52 L226.98,29.964 L226.027,28.61 L168.766,0 L165.215,0 L165.258,288.501"
        fill="#5294CF"
      ></path>
      <path
        d="M90.741,288.501 L87.184,288.501 L29.972,259.867 L28.811,257.87 L28.222,31.128 L29.972,28.61 L87.184,0 L90.785,0 L90.741,288.501"
        fill="#1F5B98"
      ></path>
      <path
        d="M87.285,0 L168.711,0 L168.711,288.501 L87.285,288.501 L87.285,0 Z"
        fill="#2D72B8"
      ></path>
      <path
        d="M256,137.769 L254.065,137.34 L226.437,134.764 L226.027,134.968 L168.715,132.676 L87.285,132.676 L29.972,134.968 L29.972,91.264 L29.912,91.296 L29.972,91.168 L87.285,77.888 L168.715,77.888 L226.027,91.168 L247.096,102.367 L247.096,95.167 L256,94.193 L255.078,92.395 L226.886,72.236 L226.027,72.515 L168.715,54.756 L87.285,54.756 L29.972,72.515 L29.972,28.61 L0,63.723 L0,94.389 L0.232,94.221 L8.904,95.167 L8.904,102.515 L0,107.28 L0,137.793 L0.232,137.769 L8.904,137.897 L8.904,150.704 L1.422,150.816 L0,150.68 L0,181.205 L8.904,185.993 L8.904,193.426 L0.373,194.368 L0,194.088 L0,224.749 L29.972,259.867 L29.972,215.966 L87.285,233.725 L168.715,233.725 L226.196,215.914 L226.96,216.249 L254.781,196.387 L256,194.408 L247.096,193.426 L247.096,186.142 L245.929,185.676 L226.886,195.941 L226.196,197.381 L168.715,210.584 L168.715,210.6 L87.285,210.6 L87.285,210.584 L29.972,197.325 L29.972,153.461 L87.285,155.745 L87.285,155.801 L168.715,155.801 L226.027,153.461 L227.332,154.061 L254.111,151.755 L256,150.832 L247.096,150.704 L247.096,137.897 L256,137.769"
        fill="#1A476F"
      ></path>
      <path
        d="M226.027,215.966 L226.027,259.867 L256,224.749 L256,194.288 L226.2,215.914 L226.027,215.966"
        fill="#2D72B8"
      ></path>
      <path
        d="M226.027,197.421 L226.2,197.381 L256,181.353 L256,150.704 L226.027,153.461 L226.027,197.421"
        fill="#2D72B8"
      ></path>
      <path
        d="M226.2,91.208 L226.027,91.168 L226.027,134.968 L256,137.769 L256,107.135 L226.2,91.208"
        fill="#2D72B8"
      ></path>
      <path
        d="M226.2,72.687 L256,94.193 L256,63.731 L226.027,28.61 L226.027,72.515 L226.2,72.575 L226.2,72.687"
        fill="#2D72B8"
      ></path>
    </g>
  </SvgIcon>
);

// This is where you would define all your custom icons
export const customIcons: Record<string, React.FC<SvgIconProps>> = {
  flutter: FlutterIcon,
  dynamodb: DynamoDBIcon,
};

// Get a custom icon by name
export const getCustomIcon = (
  name: string,
  props: SvgIconProps = {},
): React.ReactNode => {
  const CustomIcon = customIcons[name];

  if (CustomIcon) {
    return <CustomIcon {...props} />;
  }

  return null;
};

// Extended TechType to support custom icons
export interface ExtendedTechItemType {
  type: string;
  description?: string;
  customIcon?: string; // Name of the custom icon
}
