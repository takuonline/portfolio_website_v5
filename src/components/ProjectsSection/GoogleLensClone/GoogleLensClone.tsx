import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ProjectTextBox from "../ProjectTextBox";
import ProjectTitleHeader from "../ProjectTitleHeader";

import BodyWrapper from "../../Common/BodyWrapper";
import AppVideo from "../../Common/AppVideo";
import { motion } from "framer-motion";

const GoogleLensClone = (props: { index: number }) => {
  const TextBoxSize = {
    xs: 12,
    lg: 9,
  };

  const AppImageSize = {
    xs: 10,
    md: 6,
    lg: 8,
  };

  const AppVideoSize = {
    xs: 12,
    lg: 9,
  };
  const viewport = { once: true };

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.6 : 1;
  return (
    <BodyWrapper>
      <ProjectTitleHeader title={"Google Lens Clone"} index={props.index} />

      <Grid container gap={{ md: 12, sm: 4 }}>
        <Grid
          item
          xs={12}
          sm={5}
          component={motion.div}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2*mobileAnimationFactor, duration: 0.4*mobileAnimationFactor }}
          viewport={viewport}
        >
          <AppVideo
            src={"https://youtube.com/shorts/d4Py46Wakw8"}
            // src={"../../public/static/videos/Google lens clone.mp4"}
            alt={"Google lens clone "}
            aspectRatio={15 / 32}
            size={AppVideoSize}
            sx={{
              my: { sm: 20, xs: 10 },
            }}
          />

          <ProjectTextBox title={"Project Description"} size={TextBoxSize}>
            {`I was truly amazed the first time I used the Google Lens application.

It seemed like magic - you take a picture and, regardless of how many other objects are in the frame, it quickly finds the object you're pointing your camera at and searches the entire internet for relevant information.

Years later, I decided to take on the challenge of building my own Google Lens from scratch.

It wasn't easy to figure out exactly how they had accomplished this, but I did a lot of research and studying, and eventually I had accumulated enough knowledge to build my own "Google Lens clone."

This was one of my favourite "full stack machine learning" projects, in which I implemented multiple deep learning models within a full stack application and built the entire thing end-to-end with no help or assistance from anyone.


            `}
          </ProjectTextBox>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8*mobileAnimationFactor, duration: 0.5 *mobileAnimationFactor}}
          viewport={viewport}
        >
          <ProjectTextBox
            title={"Features"}
            size={TextBoxSize}
            sx={{
              my: { lg: 10, sm: 15, xs: 5 },
            }}
          >
            {`- Point your camera at any object and snap a photo.

- The application will take a picture send it to the backend and find similar images after extracting the most prominent object in the picture.

- My version finds products which where scraped from the retailer GAME(https://www.game.co.za/) and returns the name of the product, price information, etc

- the application allows you to also point using a bounding box which product in an image you want to search.



            `}
          </ProjectTextBox>
          <Box />
          <AppVideo
            src={"https://youtube.com/shorts/d4Py46Wakw8"}
            // src={"../../public/static/videos/Google lens clone.mp4"}
            alt={"Google lens clone "}
            aspectRatio={15 / 32}
            size={AppVideoSize}
          />

          <Box my={{ sm: 20, xs: 10 }} />
        </Grid>
      </Grid>
      <Box>
        <Grid container xs={12}>
          <Typography
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2*mobileAnimationFactor }}
            viewport={viewport}
            mb={3}
          >
            {"Project architecture visualisation"}
          </Typography>
          <iframe
            style={{
              minHeight: "70vh",
              height: "auto",
              width: "100%",
              borderRadius: 15,
            }}
            src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Google%20lense%20clone.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1hwp_0f3yndP-eoWONO2wO0LGbcOD0rpV%26export%3Ddownload"
          />

          <ProjectTextBox
            title={"How it all works and the tech Stack"}
            size={TextBoxSize}
            sx={{
              my: { xs: 7 },
            }}
          >
            {`- When a picture is taken and sent to the backend, the first ml model(Yolov7) finds the most prominent objects in the image and selects one with the highest probability.

- An image clip of this object is created and is then passed on to the Resnet model which extracts features from the clip and turns them into embeddings of 2048 dimensions.

- The embeddings are then queried against a precomputed index using Spotify's annoy library which returns the index of the best matches.

- The index is then used to query a database of product information and the rest api returns this information.
`}

            {`
Tech Stack:
- Devops: Docker, AWS EC2 Linux, GitHub version control,
- Languages: Python, Dart(Flutter)
- ML models: Pytorch, Yolov7, Resnet model
`}
          </ProjectTextBox>
        </Grid>
      </Box>
    </BodyWrapper>
  );
};

export default GoogleLensClone;