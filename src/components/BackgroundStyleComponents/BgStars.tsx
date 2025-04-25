import { useTheme } from "@mui/material";
import Image from "next/image";

const BgLightStar = (props: { color: string | undefined; size: number }) => {
  const theme = useTheme();
  return (
    <div>
      <Image
        alt={"Star button svg"}
        priority
        src="/static/svg/light_star1.svg"
        height={props.size}
        width={props.size}
        color={props.color}
      />
    </div>
  );
};

const BgLightStar2 = (props: { color: string | undefined; size: number }) => {
  const theme = useTheme();
  return (
    <div>
      <Image
        alt={"Star button 2 svg"}
        priority
        src="/static/svg/light_star2.svg"
        height={props.size}
        width={props.size}
        color={props.color}
      />
    </div>
  );
};

const DarkStar = (props: { color?: string ; size: number }) => {
  const theme = useTheme();
  return (
    <div>
      <Image
        alt={"Dark Star button svg"}
        priority
        src="/static/svg/dark_star.svg"
        height={props.size}
        width={props.size}
        color={props.color}
      />
    </div>
  );
};

export { BgLightStar, BgLightStar2, DarkStar };
