import ProjectTitleHeader from "../ProjectTitleHeader";
import ProjectTextBox from "../ProjectTextBox";
import BodyWrapper from "../../Common/BodyWrapper";
import AppImage from "../../Common/AppImage";
import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import AppVideo from "../../Common/AppVideo";
import FrameType from "../../../common/enums/phone-frame";
import { motion } from "framer-motion";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { IoLink, IoLogoGithub } from "react-icons/io5";
import Link from "next/link";

const BlackFridayPlotlyDashboard = (props: { index: number }) => {
  const TextBoxSize = {
    xs: 12,
    sm: 8,
    lg: 12,
  };

  const techStackPlotlyDashboard: string[] = [
    "CSS",
    "Python",
    "Flask",
    "Pandas",
    "Plotly/Dash",
  ];

  const featuresPlotlyDashboard: string[] = [
    "decide which products are over priced",
    "which products are doing well",
    "which ones are not performing very well",
    "which ones is it trying to get rid of",
    "which products to buy and when to buy",
    "buy low, sell high",
  ];
  const IconSize = "2rem";

  const techStackReactDashboard: string[] = [`React`];
  const theme = useTheme();
  const viewport = { once: true };

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.5 : 1;
  return (
    <>
      <BodyWrapper>
        <ProjectTitleHeader title={"Web Dashboards"} index={props.index} />

        <Grid
          container
          rowGap={{ lg: 8, sm: 10, xs: 0 }}
          mt={{ lg: 16 }}
          sx={{
            display: "flex",
            justifyContent: { lg: "space-between" },
          }}
        >
          {/*********************************************Row  1*************************************************** */}

          <Box
            mt={{ lg: 10 }}
            sx={{
              display: { lg: "flex" },
              width: "100%",
              justifyContent: { lg: "space-between" },
              columnGap: { lg: 8 },
            }}
          >
            <Grid
              item
              lg={8}
              xs={12}
              component={motion.div}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 * mobileAnimationFactor }}
              viewport={viewport}
              sx={{
                position: "relative",
              }}
            >
              <AppImage
                showFrame={false}
                src="/static/images/Shoprite_dashboard.png"
                alt="Black Friday Plotly Dashboard "
                borderRadius={3 * 3}
                width={1703}
                height={1280}
                size={{
                  xs: 12,
                }}
                sx={{
                  mt: { sm: 0, xs: 3 },
                  border: "5px solid white",
                  borderRadius: 1 * 3,

                  [theme.breakpoints.up("lg")]: {
                    position: "absolute",
                    top: -100,
                  },
                }}
              />
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5 * mobileAnimationFactor,
                duration: 0.4 * mobileAnimationFactor,
              }}
              viewport={viewport}
              sx={{}}
            >
              <Typography variant="h4" sx={{}}>
                {"Black Friday Plotly Dashboard"}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  columnGap: 2,
                  mb: { sm: 7, xs: 5 },
                  mt: { sm: 2, xs: 3 },
                }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/takuonline/savvy_shoprite_food_web_dashboard"
                >
                  <IoLogoGithub size={IconSize} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://shoprite-dashboard.herokuapp.com/"
                >
                  <IoLink size={IconSize} />{" "}
                </Link>
              </Box>

              <ProjectTextBox title={"Project Description"} size={TextBoxSize}>
                {`- Have you ever wondered if the prices you see on black friday marked as 50% off or 70% off are really discounts?

- Well, you are not the only one, l had the same thought too and l decided to find that out thought this project.

- I decided to put the largest retailer in Africa to the test and scrape their products prices.

- The hypothesis was that some of the retailers would mark-up their prices just before black friday and then reduce them on blackfriday to make it seem
like they have given customers a huge discounts  `}
              </ProjectTextBox>
            </Grid>
          </Box>
          {/*********************************************Row  2*************************************************** */}

          <Box
            sx={{
              width: "100%",
              display: { lg: "flex" },
              justifyContent: { lg: "space-between" },
              alignItems: { lg: "start" },
              columnGap: { lg: 8 },
            }}
          >
            <Grid
              item
              lg={4}
              xs={12}
              mt={{
                xs: 10,
              }}
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2 * mobileAnimationFactor,
                duration: 0.3 * mobileAnimationFactor,
              }}
              viewport={viewport}
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: { lg: "absolute" },
                  top: -250,
                }}
              >
                <Typography
                  variant="h4"

                >
                  {"Clothing Plotly Dashboard"}
                </Typography>
                <Box
                sx={{
                  display: "flex",
                  columnGap: 2,
                  mb: { sm: 7, xs: 6 },
                  mt: { sm: 2, xs: 3 },
                }}
              >
                {/* <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/takuonline/savvy_shoprite_food_web_dashboard"
                >
                  <IoLogoGithub size={IconSize} />
                </Link> */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://clothing-dashboard.herokuapp.com/"
                >
                  <IoLink size={IconSize} />{" "}
                </Link>
              </Box>

                <ProjectTextBox
                  title={"Project Description"}
                  size={TextBoxSize}
                >
                  {`- This was build on the same stack and mind set as the blackfriday dashboard but l did a re-design and extended the scope to other stores.
- Here is a list of things you can do on the app:`}
                  {featuresPlotlyDashboard.map(
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
                </ProjectTextBox>

                <ProjectTextBox title={"Tech Stack"} size={TextBoxSize}>
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
                </ProjectTextBox>
              </Box>
            </Grid>

            <Grid
              item
              lg={8}
              xs={12}
              mt={{
                xs: 0,
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 * mobileAnimationFactor,
                duration: 0.3 * mobileAnimationFactor,
              }}
              viewport={viewport}
            >
              <AppImage
                showFrame={false}
                src="/static/images/clothing_dashboard.png"
                alt="Clothing Plotly Dashboard.bmp"
                size={{ xs: 12 }}
                width={1719}
                height={1307}
                borderRadius={3.3 * 3}
                sx={{
                  border: "5px solid white",
                  borderRadius: { xs: 1 * 3 },
                }}
              />
            </Grid>
          </Box>

          {/*********************************************Row  3*************************************************** */}

          <Box
            mt={{ lg: 0, xs: 10 }}
            sx={{
              display: { lg: "flex" },
              width: "100%",
              justifyContent: { lg: "space-between" },
              columnGap: { lg: 8 },
            }}
          >
            <Grid
              item
              lg={8}
              xs={12}
              mt={{
                xs: 10,
                sm: 35,
                lg: 10,
              }}
              sx={{
                display: "flex",
                justifyContent: "start",
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 * mobileAnimationFactor,
                duration: 0.3 * mobileAnimationFactor,
              }}
              viewport={viewport}
            >
              <AppVideo
                showFrame={false}
                // frameType={FrameType.MacBook}
                src="https://youtu.be/MM2B83PmZdk"
                alt=" Responsive React Dashboard "
                size={{ xs: 12 }}
                aspectRatio={1920 / 1202}
              />
            </Grid>

            <Grid
              item
              lg={4}
              xs={12}
              mt={{
                lg: 10,
                sm: 10,
              }}
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5 * mobileAnimationFactor,
                duration: 0.5 * mobileAnimationFactor,
              }}
              viewport={viewport}
            >
              <Typography
                variant="h4"

              >
                {"React Dashboard"}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  columnGap: 2,
                  mb: {   xs: 6 },
                  mt: { sm: 2, xs: 3 },
                }}
              >
                {/* <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/takuonline/savvy_shoprite_food_web_dashboard"
                >
                  <IoLogoGithub size={IconSize} />
                </Link> */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-prep-56fc4.web.app/dashboard/"
                >
                  <IoLink size={IconSize} />{" "}
                </Link>
              </Box>


              <ProjectTextBox
                title={"Project Description"}
                size={TextBoxSize}
                sx={{
                  mb: { xs: 4, md: 0 },
                }}
              >
                {`- This dashboard shows my first attempt at the react.js library.

- After l had become comfortable with flutter l wanted to move on to something in the web, given the versatility of website.

- I chose the most popular frontend js library React. `}
              </ProjectTextBox>

              <ProjectTextBox title={"Tech Stack"} size={TextBoxSize}>
                {techStackReactDashboard.map((value: string, index: number) => {
                  return (
                    <ListItem
                      key={index}
                      sx={{ display: "list-item", m: 0, p: 0 }}
                    >
                      {value}
                    </ListItem>
                  );
                })}
              </ProjectTextBox>
            </Grid>
          </Box>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default BlackFridayPlotlyDashboard;