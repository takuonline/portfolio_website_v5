import ProjectTextBox from "../ProjectTextBox";

import BodyWrapper from "../../Common/BodyWrapper";
import AppImage from "../../Common/AppImage";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import AppVideo from "../../Common/AppVideo";
import { motion } from "framer-motion";
import {
  Chip,
  Grid,
  List,
  ListItemText,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProjectComponent from "../ProjectComponent";
import ProjectSectionWrapper from "../ProjectSectionWrapper";
import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";

const SavvyShopper = (props: {}) => {
  const TextBoxSize = {
    xs: 12,
    md: 8,
    lg: 8,
  };

  const AppImageSize = {
    xs: 10,
    md: 6,
    lg: 8,
  };

  const AppVideoSize = {
    xs: 12,
    sm: 6,
    lg: 10,
  };

  // const [playing, setPlaying] = useState(false);
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", debounce(handleScroll, 200));

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const startVideo = () => {
  //   videoRef.current.pause();
  //   setPlaying(false);
  // };

  // const pauseVideo = () => {
  //   videoRef.current.play();
  //   setPlaying(true);
  // };

  // const handleScroll = (e) => {
  //   if (playing) {
  //     pauseVideo();
  //   }
  // };

  // const handleVideoPress = () => {
  //   if (playing) {
  //     startVideo();
  //   } else {
  //     pauseVideo();
  //   }

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.5 : 1;

  // const techStack: string[] = [
  //   `Web crawler: Python, Scrapy framework, Scrapyd, Heroku(Hosting the crawlers), AWS Lambda(scheduling and triggering the crawlers)  `,
  //   `Backend: Python, Flask,Flask restful, data science libraries like numpy and pandas`,
  //   `Database: Dynamodb, Mongodb`,
  //   `Mobile app: Flutter - includes ui, rest api connection to backend, state management`,
  //   `Chrome extension: Javascript, CSS, HTML`,
  // ];

  const techStack = {
    webCrawler: ["Python", "Scrapy", "Scrapyd", "Heroku", "AWS Lambda"],
    backend: ["Python", "Flask", "Flask RESTful", "NumPy", "Pandas"],
    database: ["DynamoDB", "MongoDB"],
    mobileApp: ["Flutter"],
    chromeExtension: ["JavaScript", "CSS", "HTML"],
  };

  const keyFeatures = [
    {
      primary: "Web Crawler",
      secondary:
        "Utilizes Python and Scrapy framework, hosted on Heroku with AWS Lambda for scheduling and triggering.",
    },
    {
      primary: "Robust Backend",
      secondary:
        "Built with Python, Flask, and Flask RESTful, incorporating data science libraries for advanced processing.",
    },
    {
      primary: "Flexible Database Solutions",
      secondary:
        "Employs both DynamoDB and MongoDB for efficient data storage and retrieval.",
    },
    {
      primary: "Cross-platform Mobile App",
      secondary:
        "Developed using Flutter, featuring UI components, REST API connection, and state management.",
    },
    {
      primary: "Chrome Extension",
      secondary:
        "Created using JavaScript, CSS, and HTML for seamless browser integration.",
    },
  ];

  return (
    <BodyWrapper>
      <ProjectComponent
        title={"Savvy Shopper - A Shopping App"}
        skills={["Design", "Mobile development", "Backend development"]}
        bgImage={
          <AppImage
            showFrame={false}
            src="/static/images/savvy_shopper_image_1.png"
            alt="savvy shopper mockup image "
            height={2812}
            width={5000}
            maxHeight={"90vh"}
          />
        }
      >
        {/* ////////////////////////////////////   ROW 1   /////////////////////////////////////////////////////////  */}
        <ProjectSectionWrapper
          firstComponent={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * mobileAnimationFactor,
                duration: 0.5 * mobileAnimationFactor,
              }}
              viewport={{ once: true }}
            >
              <AppVideo
                src={"https://youtu.be/gdaONGEOrPc"}
                alt={"Savvy shopper demo"}
                size={AppVideoSize}
                aspectRatio={168 / 360}
                // borderRadius={"1rem"}
                sx={{
                  whiteSpace: "break-spaces",
                  wordBreak: "normal",
                }}
                frameHeight={"40.5rem"}
              />
            </motion.div>
          }
          firstComponentScale={{
            lg: 4,
          }}
          secondComponent={
            <>
              <Typography
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 * mobileAnimationFactor,
                  duration: 0.3 * mobileAnimationFactor,
                }}
                viewport={{ once: true }}
                variant={"h4"}
              >
                {"Mobile application"}
              </Typography>

              <Typography
                variant="body2"
                component="div"
                paragraph
                sx={{
                  whiteSpace: "break-spaces",
                  wordBreak: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                {`Throughout my career, I have taken on many challenging projects, but perhaps none as complex as Savvy Shopper. As the sole developer, I was responsible for every aspect of the project from design to programming, utilizing a variety of programming languages, frameworks, and platforms.

The project spanned several months and included a web scraper component using Scrapy and Scrapyd Server, cloud-based key-value store databases like MongoDB and DynamoDB, a REST API server built with Flask, and a mobile app built with Flutter that can be deployed to both iOS and Android platforms. Additionally, a Chrome extension was developed to further enhance the user experience.

Successfully completing this project played a pivotal role in my career, as it helped me land my first job as a data scientist at Shoprite ZA, despite my background in accounting. I am proud of the work I accomplished on Savvy Shopper and the impact it has had on my professional growth.

                `}
              </Typography>
            </>
          }
          secondComponentScale={{
            // xs: 0,
            // sm: 0,
            // md: 0,
            lg: 6,
          }}
        />

        {/* ////////////////////////////////////   ROW 2  /////////////////////////////////////////////////////////  */}

        <ProjectSectionWrapper
          firstComponent={
            <>
              {/* <ProjectTextBox
              title={"Mobile application features"}
              size={TextBoxSize}
              sx={{
                whiteSpace: "break-spaces",
                wordBreak: "normal",
              }}
            >
              {`The mobile application allowed users to view prices of products from their favorite stores across three different categories: clothing, groceries, and electronic accessories. The data was web scraped daily from 12 different stores.

For a selected store, the app would display the products that were considered "good buys" or "bad buys" based on an algorithm that analyzed the historical prices of products to determine if the current price was cheaper or more expensive.

If a product was not included in the "good buys" or "bad buys" list, users could search for the product and view its historical prices. The app also provided information on competitor prices for the same or similar products.

Additionally, the app featured a "shopping list" feature for groceries that allowed users to create a list and compare prices across different stores.
`}
            </ProjectTextBox> */}

              <Typography paragraph variant="body2">
                {
                  "The mobile application allowed users to view prices of products from their favorite stores across three different categories: clothing, groceries, and electronic accessories. The data was web scraped daily from 12 different stores."
                }
              </Typography>
              <Typography paragraph variant="body2">
                {`For a selected store, the app would display the products that were considered "good buys" or "bad buys" based on an algorithm that analyzed the historical prices of products to determine if the current price was cheaper or more expensive.`}
              </Typography>
              <Typography paragraph variant="body2">
                {`If a product was not included in the "good buys" or "bad buys" list, users could search for the product and view its historical prices. The app also provided information on competitor prices for the same or similar products.`}
              </Typography>

              <Typography paragraph variant="body2">
                {`Additionally, the app featured a "shopping list" feature for groceries that allowed users to create a list and compare prices across different stores.`}
              </Typography>
            </>
          }
          firstComponentScale={{
            lg: 6,
            xs: 12,
          }}
          secondComponent={
            <AppImage
              src="/static/images/savvy_shopper_shopping_list3.png"
              alt={"savvy shopper image "}
              width={860}
              height={1656}
              size={AppImageSize}
            />
          }
          secondComponentScale={{
            xs: 12,
            // sm: 0,
            // md: 0,
            lg: 5,
          }}
        />

        {/* ////////////////////////////////////   ROW 3  /////////////////////////////////////////////////////////  */}

        <ProjectSectionWrapper
          firstComponent={
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 * mobileAnimationFactor,
                duration: 0.3 * mobileAnimationFactor,
              }}
              viewport={{ once: true }}
            >
              <AppImage
                src="/static/images/woolies_savvy_shopper.png"
                alt={"savvy shopper store feature"}
                size={AppImageSize}
              />
            </motion.div>
          }
          firstComponentScale={{
            xs: 12,
            md: 6,

            lg: 4,
          }}
          secondComponent={
            <ProjectTextBox title={"Tech Stack"} size={TextBoxSize}>
              <Paper
                elevation={0}
                sx={{ py: 2, backgroundColor: "transparent" }}
              >
                <ProjectDescriptionSubtitle>
                  Key Features
                </ProjectDescriptionSubtitle>
                <List>
                  {keyFeatures.map((feature, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText
                        primary={feature.primary}
                        secondary={feature.secondary}
                        sx={{ color: "white" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>

              {/* {techStack.map((value: string, index: number) => {
                return (
                  <ListItem
                    key={index}
                    sx={{
                      display: "list-item",
                      m: 0,
                      my: 0.5,
                      p: 0,
                    }}
                  >
                    {value}
                  </ListItem>
                );
              })} */}
            </ProjectTextBox>
          }
          secondComponentScale={{
            // xs: 0,
            // sm: 0,
            // md: 0,
            xs: 12,
            lg: 7,
          }}
        />

        {/* ////////////////////////////////////   ROW 4  /////////////////////////////////////////////////////////  */}

        <ProjectSectionWrapper
          firstComponent={
            <>
              <Typography
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 * mobileAnimationFactor,
                  duration: 0.3 * mobileAnimationFactor,
                }}
                viewport={{ once: true }}
                variant={"h4"}
              >
                {"Chrome extension"}
              </Typography>

              <Box my={{ lg: 0, md: 4, xs: 6 }} />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * mobileAnimationFactor,
                  duration: 0.5 * mobileAnimationFactor,
                }}
                viewport={{ once: true }}
              >
                <AppVideo
                  showFrame={false}
                  // frameType={FrameType.MacBook}
                  src={"https://youtu.be/rMTp4SYL2Ow"}
                  alt={"Savvy shopper chrome extension "}
                  aspectRatio={1280 / 720}
                  size={{ xs: 12, lg: 9 }}
                  sx={{
                    mt: { lg: 7 },
                  }}
                />
              </motion.div>
            </>
          }
          firstComponentScale={{
            xs: 12,
            md: 6,
            lg: 12,
          }}
          secondComponent={
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 * mobileAnimationFactor,
                duration: 0.3 * mobileAnimationFactor,
              }}
              viewport={{ once: true }}
            >
              <ProjectTextBox
                title={"Description"}
                sx={{
                  whiteSpace: "break-spaces",
                  wordBreak: "normal",
                  width: { lg: "65%" },
                  mt: { lg: 3 },
                }}
              >
                {`
Following the success of the Savvy Shopper mobile app, I developed a Chrome extension that provided users with access to the same data from the app.The extension was primarily aimed at users who preferred to shop on their computers.
`}
              </ProjectTextBox>

              <Box sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
                <ProjectDescriptionSubtitle>
                  {"Technical Implementation"}
                </ProjectDescriptionSubtitle>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 3,
                    pl: 0,
                  }}
                >
                  {Object.entries(techStack).map(([category, technologies]) => (
                    <Grid item xs={12} sm={6} key={category}>
                      <Typography variant="h6" gutterBottom>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {technologies.map((tech) => (
                          <Chip key={tech} label={tech} variant="outlined" />
                        ))}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          }
          secondComponentScale={{
            // xs: 0,
            // sm: 0,
            // md: 0,
            lg: 12,
          }}
          showDivider={false}
        />
      </ProjectComponent>
    </BodyWrapper>
  );
};

export default SavvyShopper;
