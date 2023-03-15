import { Typography } from "@mui/material";
import BodyWrapper from "../Common/BodyWrapper";
import SectionHeader from "../Common/SectionHeader";
import BlackFridayPlotlyDashboard from "./WebDashboard/WebDashboard";
import GoogleLensClone from "./GoogleLensClone/GoogleLensClone";
import MobileEcommerceApp from "./MobileEcommerceApp/MobileEcommerceApp";
import ReflectlyClone from "./ReflectlyClone/ReflectlyClone";
import SavvyShopper from "./SavvyShopper/SavvyShopper";
import TextDivider from "../Common/TextDivider";
import HighlightTypography from "../Common/HighlightTypography";

const PortfolioProjects = () => {
  return (
    <>
      <BodyWrapper>
        <SectionHeader title={"My Work"} />
      </BodyWrapper>

      <SavvyShopper index={1} />

      <GoogleLensClone index={2} />
      <MobileEcommerceApp index={3} />
      <BlackFridayPlotlyDashboard index={4} />
      <ReflectlyClone index={5} />

      <BodyWrapper>

      <TextDivider
          text={
            "l am passionate about solving hard problems to drive positive change in the world."
          }
        >
          {`Building innovative solutions can be a challenging and
 rewarding process. It requires creativity, critical thinking,
 and a willingness to take risks and learn from failures.`}
          <br />
          {`
  By following a `}

          <HighlightTypography>{`structured process,`}</HighlightTypography>

          {` such as the design
  thinking process, and gathering feedback from potential
   users or customers, `}
          {`l am able can increase the chances of
   developing a successful and impactful solution`}
        </TextDivider>
      </BodyWrapper>
    </>
  );
};

export default PortfolioProjects;
