import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import BodyWrapper from "../Common/BodyWrapper";
import HighlightTypography from "../Common/HighlightTypography";

const Footer = () => {
  const date = new Date().getFullYear();
  const theme = useTheme();
  const text = `  Copyright ${date}     Takudzwa `;
  return (
    <BodyWrapper>
      <Grid
        container
        sx={{
          my: 5,
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
        <Typography
          variant="body2"
          sx={{
            opacity: 0.4,
            textAlign: "center",
            width: "100%",
          }}
        >
          {" "}
          {text}
        </Typography>
        <Grid lg={0} xs={12}></Grid>
      </Grid>
    </BodyWrapper>
  );
};

export default Footer;
