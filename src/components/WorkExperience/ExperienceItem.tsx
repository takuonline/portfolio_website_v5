import Box from "@mui/material/Box";

import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";

import { WorkExperienceSchema } from "../../common/data/work-experience";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

const ExperienceItem = (props: { item: WorkExperienceSchema }) => {
  const item = props.item;
  const theme = useTheme();

  const startDateFormatted = new Date(item.startDate).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" }
  );
  const endDateFormatted =
    item.endDate === undefined
      ? "Present"
      : new Date(item.endDate).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });

  return (
    <>
      <Grid
        container
        sx={{
          mb: 7,
          border: (t) => `1px solid ${alpha(t.palette.common.black, 0.2)}`,
          borderRadius: 20,
          textAlign: "left",
          px: 9,
          py: 10,

          [theme.breakpoints.down("md")]: {
            px: 4,
            py: 7,
            borderRadius: 15,
          },
          [theme.breakpoints.down("sm")]: {},
        }}
        xs={12}
      >
        <Grid
          item
          sx={{
            dispaly: "flex",
            flexDirection: "column",
          }}
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: "flex",
              opacity: 0.5,
              mb: 2,
            }}
          >
            <Typography
              variant={"body2"}
            >{` ${startDateFormatted} - ${endDateFormatted}`}</Typography>
          </Box>

          <Typography
            variant={"h3"}
            sx={{
              typography: { md: "h3", xs: "h6" },

              mt: "auto",
              lineHeight: "100%",
            }}
          >
            {item.companyName}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              mt: 2,
              gap: 1,
            }}
          >
            {item.skills.map((v, idx) => (
              <Chip
                label={v}
                variant="outlined"
                key={idx}
                sx={{
                  color: "black",
                  mr: 1,
                }}
              />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
          {item.desc.map((value: string, index: number) => {
            return (
              <ListItem
                key={index}
                sx={{ display: "list-item", m: 0, p: 0, py: 0.5 }}
              >
                {value}
              </ListItem>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default ExperienceItem;
