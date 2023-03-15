import Grid from "@mui/material/Grid";

import React from "react";
import BodyWrapper from "../Common/BodyWrapper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import SectionHeader from "../Common/SectionHeader";

import TextDivider from "../Common/TextDivider";
import { motion } from "framer-motion";
import CustomDivider from "../Common/CustomDivider";
import ExperienceItem from "./ExperienceItem";
import workExperienceData, {
  WorkExperienceSchema,
} from "../../common/data/work-experience";

const WorkExperience = () => {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const delayFactor = isMobileView ? 0.5 : 1;

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3 * delayFactor,
        staggerChildren: 0.2,
      },
    },
  };

  const viewport = { once: true };

  return (
    <>
      <CustomDivider />

      <BodyWrapper>
        <SectionHeader title={"experience"} />

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 8,
            textAlign: "right",
            mb: {
              xs: 20,
            },
          }}
          container
        >
          <Grid item lg={3} xs={0}></Grid>

          <Grid
            item
            lg={9}
            xs={12}
            component={motion.div}
            variants={container}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            <motion.hr
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              style={{
                width: "100%",
                height: "1px",
                marginTop: 35,
                backgroundColor: theme.palette.text.primary,
              }}
            />

            {workExperienceData.map(
              (value: WorkExperienceSchema, index: number) => (
                <motion.div key={index} variants={itemAnimation}>
                  <ExperienceItem key={index} item={value} />
                </motion.div>
              )
            )}
          </Grid>
        </Grid>

        <TextDivider
          text={`“Experience is the name we give to our mistakes.”

            `}
            author={"Oscar Wilde"}
        />
      </BodyWrapper>
    </>
  );
};

export default WorkExperience;
