import ProjectTextBox from "../ProjectTextBox";

import BodyWrapper from "../../Common/BodyWrapper";
import AppImage from "../../Common/AppImage";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import AppVideo from "../../Common/AppVideo";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";
import ProjectComponent from "../ProjectComponent";
import ProjectSectionWrapper from "../ProjectSectionWrapper";

const SavvyShopper = (props: { index: number }) => {
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

  const techStack: string[] = [
    `Web crawler: Python, Scrapy framework, Scrapyd, Heroku(Hosting the crawlers), AWS Lambda(scheduling and triggering the crawlers)  `,
    `Backend: Python, Flask,Flask restful, data science libraries like numpy and pandas`,
    `Database: Dynamodb, Mongodb`,
    `Mobile app: Flutter - includes ui, rest api connection to backend, state management`,
    `Chrome extension: Javascript, CSS, HTML`,
  ];

  return (
    <BodyWrapper>
      <ProjectComponent
        title={"Savvy Shopper"}
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
                src={"https://youtu.be/Z1sugeKre8I"}
                alt={"Savvy shopper demo"}
                size={AppVideoSize}
                // borderRadius={"1rem"}
                sx={{
                  whiteSpace: "break-spaces",
                  wordBreak: "normal",
                }}
                frameHeight={"47.5rem"}
              />
            </motion.div>
          }
          firstComponentScale={{
            // xs: 0,
            // sm: 0,
            // md: 0,
            lg: 4,
          }}
          secondComponent={
            <Typography
              variant="body2"
              component="div"
              sx={{
                whiteSpace: "break-spaces",
                wordBreak: "normal",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 10,
              }}
            >
              {`Savvy Shopper is one of the largest projects that I have ever undertaken, requiring expertise in multiple programming languages, frameworks, and platforms.

  As the sole developer on this project, I was responsible for its design, architecture, and programming.

  The project took several months to complete and includes a web scraper component built using Scrapy and Scrapyd Server, cloud key-value store databases such as MongoDB and DynamoDB, a backend REST API server built with Flask, a frontend mobile app built with Flutter that can be deployed to iOS and Android, and a Chrome extension.

  This project also played a crucial role in my ability to secure my first job at Shoprite ZA as a data scientist, despite having a degree in Accounting.


  - After the success of the savvy shopper mobile app l went on further to develop a chrome extension based on the same data from the mobile application.

- This was mostly meant for people who preferred to do their shopping on a computer.
                `}
            </Typography>
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
            <ProjectTextBox
              title={"Mobile application features"}
              size={TextBoxSize}
              sx={{
                whiteSpace: "break-spaces",
                wordBreak: "normal",
              }}
            >
              {`- The mobile application allowed uses to look at the prices of products from their favourite stores spanning over 3 different categories namely Clothing, Groceries and Electronic accessories and 12 different stores which
where web scraped daily

- For a chosen store the application would show you the products that were deemed to be "GOOD BUYS" or "BAD BUYS" based on an algorithm that looked at the historic prices of the products to determine if
price of the products was cheaper/more expensive.

- You could also search for a product as well if it did not appear in the list of "GOOD BUYS" or "BAD BUYS" and see its historic prices.

- The application would also show you competitor's prices for the same product or similar products.

- It also feature a "Shopping list" feature for groceries where you could create a shopping list and could search through different stores and compare prices.
          `}
            </ProjectTextBox>
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
              {techStack.map((value: string, index: number) => {
                return (
                  <ListItem
                    key={index}
                    sx={{ display: "list-item", m: 0, my: 0.5, p: 0 }}
                  >
                    {value}
                  </ListItem>
                );
              })}
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
- After the success of the savvy shopper mobile app l went on further to develop a chrome extension based on the same data from the mobile application.

- This was mostly meant for people who preferred to do their shopping on a computer.
`}
              </ProjectTextBox>
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
