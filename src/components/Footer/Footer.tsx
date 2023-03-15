import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import BodyWrapper from "../Common/BodyWrapper";
import HighlightTypography from "../Common/HighlightTypography";

const Footer = () => {
  const date = new Date().getFullYear();
  const theme = useTheme();
  const text = `  Copyright ${date}  |  Project heavily inspired by `;
  return (
    <BodyWrapper>
      <Grid
        container
        sx={{
          my: 7,
        }}
      >
        <Grid
          lg={12}
          xs={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        ></Grid>
        <Typography variant="body2">
          {text}

          <Link
            href={"https://caroselling.it/"}
            style={{
              color: theme.palette.text.primary,
            }}
          >
            {" "}
            <HighlightTypography>
              {" "}
              {" https://caroselling.it/"}{" "}
            </HighlightTypography>
          </Link>
        </Typography>
        <Grid lg={0} xs={12}></Grid>
      </Grid>
    </BodyWrapper>
  );
};

export default Footer;
