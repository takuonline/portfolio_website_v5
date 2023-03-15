import Box from "@mui/material/Box";

import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import AddIcon from "@mui/icons-material/Add";
import { WorkExperienceSchema } from "../../common/data/work-experience";

const ExperienceItem = (props: { item: WorkExperienceSchema }) => {
  const item = props.item;
  const theme = useTheme();
  const isMdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  const [onHover, setOnHover] = React.useState<boolean>(false);

  const onMouseEnter: React.MouseEventHandler<HTMLDivElement> = () =>
    setOnHover(true);
  const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = () =>
    setOnHover(false);
  // const expanded = isMdUpBreakpoint && onHover;

  return (
    <>
      <Accordion
        square
        sx={{
          mt: { lg: 5, xs: 5 },

        }}
        // {...accordionHoverEffect}

        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        expanded={onHover}
      >
        <AccordionSummary
          sx={{
            px: 0,
            backgroundColor:"background.default"
          }}
          expandIcon={
            <AddIcon
              sx={{
                color: "text.primary",
              }}
              fontSize="large"
            />
          }

        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              textAlign: "left",
            }}
          >
            <Typography variant="body1" mb={1} sx={{}}>
              {item.companyName}
            </Typography>
            {isMdUpBreakpoint && (
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", fontWeight: 200 }}
                >{`${item.jobtitle} – ${item.department}`}</Typography>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", fontWeight: 200 }}
                >
                  {item.duration}
                </Typography>
              </Box>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            fontWeight: 300,
            backgroundColor:"background.default"

          }}
        >
          {!isMdUpBreakpoint && (
            <Box mb={1}>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", fontWeight: 200 }}
              >{`${item.jobtitle} – ${item.department}`}</Typography>

              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", fontWeight: 200 }}
              >
                {item.duration}
              </Typography>
            </Box>
          )}
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
        </AccordionDetails>
      </Accordion>

      <hr
        style={{
          width: "100%",
          height: "1px",
          marginTop: 35,
          backgroundColor: theme.palette.text.primary,
        }}
      />
    </>
  );
};
export default ExperienceItem;
