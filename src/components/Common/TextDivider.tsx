import { Box, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HighlightTypography from "./HighlightTypography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { motion } from "framer-motion";

const TextDividerDescription = (props: { children: React.ReactNode }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        mt: 5,
      }}
    >
      {props.children}
    </Typography>
  );
};

const TextDivider = (props: {
  text: String;
  children?: React.ReactNode;
  author?: String;
}) => {
  const theme = useTheme();
  const isMdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack spacing={2} direction="row" sx={{ mb: 35 }}>
      <Box
        sx={{
          width: "7%",
          position: "relative",
        }}
      >
        <motion.hr
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ delay: 0.7, duration: 0.3 }}
          viewport={{ once: true }}
          style={{
            marginTop: 30,
            position: "absolute",
            right: 0,
            // display: "flex",
            // flex: "4",
            width: "7%",
            height: "1px",
            backgroundColor: theme.palette.text.primary,
          }}
        />
      </Box>

      <Box
        sx={{
          width: isMdUpBreakpoint ? "50%" : "100%",
        }}
      >
        <Typography
          component={motion.div}
          variant="h3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          sx={{
            // flex: "45",
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
            width: "100%",
            backgroundColor: theme.palette.background.default,
            paddingLeft: `1.5rem`,
            paddingRight: `3rem`,
            [theme.breakpoints.down("lg")]: {
              paddingLeft: `.5rem`,
              paddingRight: `.5rem`,
            },

            [theme.breakpoints.down("lg")]: {
              paddingLeft: `.1rem`,
              paddingRight: `.1rem`,
            },
          }}
        >
          <Box
            sx={{
              display: "inline-block",
            }}
          >
            {props.text}

            {props.author && (
              <Typography
                variant="subtitle1"
                sx={{
                  mt: 1,
                  fontStyle: "italic",
                }}
              >
                {"- " + props.author}{" "}
              </Typography>
            )}
          </Box>

          <TextDividerDescription>{props.children}</TextDividerDescription>
        </Typography>
      </Box>

      {isMdUpBreakpoint && (
        <Box
          sx={{
            width: "50%",
            position: "relative",
          }}
        >
          <motion.hr
            initial={{ opacity: 0, width: "0%" }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.7, duration: 0.3 }}
            viewport={{ once: true }}
            style={{
              marginTop: 30,
              display: "flex",
              position: "absolute",
              left: "0",
              // width: "40%",
              height: "1px",
              backgroundColor: theme.palette.text.primary,
            }}
          />
        </Box>
      )}
    </Stack>
  );
};

export default TextDivider;
export { TextDividerDescription };
