
// @ts-nocheck
import markdownStyles from "../../styles/markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import Typography from "@mui/material/Typography";

export default function PostBody({ body }) {
  return (
    <Typography
      variant="body1"
      className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}
      mt={0}
      sx={{
        // settings are from medium blog
        letterSpacing: "-0.003em",
        lineHeight: "32px",
        fontSize: "20px",
        wordBreak: "break-word"
      }}
    >
      {<PortableText value={body} />}
    </Typography>
  );
}
