import ProjectTextBox from "../ProjectTextBox";
import BodyWrapper from "../../Common/BodyWrapper";
import AppImage from "../../Common/AppImage";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";

import ProjectComponent from "../ProjectComponent";
import ProjectSectionWrapper from "../ProjectSectionWrapper";
import { FaBolt, FaWater, FaPaintRoller, FaHammer } from "react-icons/fa";
import { ServiceLink } from "@/components/ServiceLinks";
import { MdLandscape } from "react-icons/md";

const services = [
  {
    href: "/plumbing",
    label: "Plumbing Services",
    icon: <FaWater size={18} />,
  },
  {
    href: "/painting",
    label: "Painting Services",
    icon: <FaPaintRoller size={18} />,
  },
  {
    href: "/construction",
    label: "Construction Services",
    icon: <FaHammer size={18} />,
  },

  {
    href: "/electrical",
    label: "Electrical Services",
    icon: <FaBolt size={18} />,
  },
];
const LandingPages = () => {
  const TextBoxSize = {
    xs: 12,
    sm: 8,
    lg: 12,
  };



  const theme = useTheme();
  const viewport = { once: true };

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.5 : 1;

  return (
    <>
      <BodyWrapper>
        <ProjectComponent
          title={"Professional Business Websites"}
          skills={["UI/UX Design", "Fullstack development"]}
          bgImage={
            <Box
              sx={{
                backgroundColor: "#13372a",
                width: "100%",
                height: "100%",
              }}
            >
              <AppImage
                showFrame={false}
                src="/static/images/landing-page.1.png"
                alt="Millennium Services"
                borderRadius={3 * 3}
                width={1440}
                height={765}
                size={{
                  xs: 10,
                  sm: 8,
                  lg: 5.5,
                }}
                sx={{
                  border: "5px solid white",
                  borderRadius: 1 * 3,
                  position: "absolute",
                  right: "22rem",
                  top: "10rem",

                  [theme.breakpoints.down("lg")]: {
                    right: "9rem",
                    top: "8rem",
                  },

                  [theme.breakpoints.down("md")]: {
                    right: "9%",
                    top: "15rem",
                  },
                }}
              />
            </Box>
          }
        >
          <ProjectSectionWrapper
            firstComponent={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * mobileAnimationFactor,
                  duration: 0.3 * mobileAnimationFactor,
                }}
                viewport={{ once: true }}
              >
                <AppImage
                  showFrame={false}
                  src="/static/images/landing-page.1.png"
                  alt="Millennium Services"
                  borderRadius={3 * 3}
                  width={1440}
                  height={765}
                  sx={{
                    mt: { sm: 0, xs: 3 },
                    border: "5px solid white",
                    borderRadius: 1 * 3,
                    mb: 2,
                  }}
                />

                <ServiceLink
                  href={"https://www.millenniumoutdoorliving.com/"}
                  label={"Millennium Services"}
                  icon={<MdLandscape size={18} />}
                />
              </motion.div>
            }
            firstComponentScale={{
              lg: 5,
            }}
            secondComponent={
              <>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                  }}
                >
                  {"Millennium Services"}
                </Typography>

                <ProjectTextBox
                  title={"Project Description"}
                  size={TextBoxSize}
                >
                  {`I developed this landscaping service website using Next.js and TypeScript for a robust, SEO-friendly foundation. The UI was crafted with Tailwind CSS and shadcn UI components, creating a responsive design that seamlessly adapts to all devices.

The website features dynamic content sections with server-side rendering, optimized image loading, and interactive elements to showcase the client's premium landscaping services. The contact form implements form validation with React Hook Form and is connected to a serverless backend function.

The entire project is deployed through Vercel's platform, ensuring excellent performance, automatic HTTPS, and continuous deployment from the GitHub repository. This implementation demonstrates my expertise in modern web development tools while delivering a professional, conversion-focused solution for the client. `}
                </ProjectTextBox>
              </>
            }
            secondComponentScale={{
              lg: 5,
            }}
          />

          {/*********************************************  ROW   2  *************************************************** */}

          <ProjectSectionWrapper
            firstComponent={
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.2 * mobileAnimationFactor,
                  duration: 0.2 * mobileAnimationFactor,
                }}
                viewport={viewport}
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    mb: 4,
                  }}
                >
                  <Typography variant="h4">
                    {"Arishine Multi-Service Website"}
                  </Typography>
                  {/* <Box
                    sx={{
                      display: "flex",
                      columnGap: 2,
                      mb: { sm: 2, xs: 6 },
                      mt: { sm: 2, xs: 3 },
                    }}
                  >
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://arishine.co.za/"
                    >
                      <IoLink size={IconSize} />{" "}
                    </Link>
                  </Box> */}

                  <ProjectTextBox
                    title={"Project Description"}
                    size={TextBoxSize}
                  >
                    {`
I developed a dynamic 4-in-1 website for Arishine using Next.js and TypeScript, featuring separate service sections for electrical, plumbing, painting, and construction services.

The application implements dynamic routing with path-based content switching, where navigating to /electrical or /plumbing completely transforms the website's content, color schemes, and service offerings while maintaining consistent branding and UI structure.

Using Tailwind CSS and shadcn UI components, I created a responsive design system that adapts the theme colors and service-specific content based on the current route. Each service path loads unique hero images, service descriptions, and testimonials relevant to that specific trade.

The implementation leverages Next.js's server-side rendering capabilities to ensure fast page loads and SEO optimization for each service category. The shared component architecture maintains code reusability while allowing for service-specific customizations.

 `}
                  </ProjectTextBox>

                  {/* <ProjectTextBox title={"Tech Stack"} size={TextBoxSize}>
                    {techStackPlotlyDashboard.map(
                      (value: string, index: number) => {
                        return (
                          <ListItem
                            key={index}
                            sx={{ display: "list-item", m: 0, p: 0 }}
                          >
                            {value}
                          </ListItem>
                        );
                      }
                    )}
                  </ProjectTextBox> */}
                </Box>
              </Box>
            }
            firstComponentScale={{
              // xs: 0,
              // sm: 0,
              // md: 0,
              lg: 5,
            }}
            secondComponent={
              <Box
                mt={{
                  xs: 0,
                }}
                mb={{
                  xs: 20,
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  px: 0,
                  py: 0,
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * mobileAnimationFactor,
                  duration: 0.2 * mobileAnimationFactor,
                }}
                viewport={viewport}
              >
                <AppImage
                  showFrame={false}
                  src="/static/images/landing-page.2.png"
                  alt="Arishine Multi-Service Website"
                  size={{ xs: 12 }}
                  width={1719}
                  height={1307}
                  borderRadius={3.3 * 3}
                  sx={{
                    border: "5px solid white",
                    borderRadius: { xs: 1 * 3 },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column" },
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: { xs: 2, sm: 2 },
                  }}
                >
                  {services.map((service) => (
                    <ServiceLink
                      key={service.href}
                      href={`https://arishine.co.za/${service.href}`}
                      label={service.label}
                      icon={service.icon}
                    />
                  ))}
                </Box>
              </Box>
            }
            secondComponentScale={{
              // xs: 0,
              // sm: 0,
              // md: 0,
              lg: 5,
            }}
          />
        </ProjectComponent>
      </BodyWrapper>
    </>
  );
};

export default LandingPages;
