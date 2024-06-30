import theme from "@/common/themes/theme";
import { Typography, useTheme } from "@mui/material";

const ProjectDescriptionSubtitle = (props: { children: React.ReactNode }) => {

  return (
    <Typography
      variant="h5"
      sx={{
        color: "primary.main", // Royal blue for contrast
        fontWeight: 700,
        mb: 2,
        textTransform: "uppercase",
        borderBottom: theme => `2px solid ${theme.palette.primary.main}`,
        paddingBottom: "8px",
        display: "inline-block",
      }}
      gutterBottom
    >
      {props.children}
    </Typography>
  );
};

export default ProjectDescriptionSubtitle;
