// @ts-nocheck
import markdownStyles from "../../styles/markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import Typography from "@mui/material/Typography";

export default function PostBody({ body }) {
  return (
    <Typography
      variant="body2"
      className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}
      mt={0}
      sx={{
        // settings are from medium blog
        // letterSpacing: "-0.003em",
        // lineHeight: "32px",
        // fontSize: "16px",
        // wordBreak: "break-word"

        // from https://dribbble.com/resources/nina-geometrieva-product-designer-instagram?utm_campaign=2023-06-14&utm_medium=email&utm_source=insider-20230614
        fontWeight: 400,
        lineHeight: "28px",
        opacity:.80
      }}
    >
      {<PortableText value={body} />}
    </Typography>
  );
}
