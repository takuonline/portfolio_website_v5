import { Box } from "@mui/material";

import { Link, Typography, useTheme } from "@mui/material";

import { FC } from "react";

import { IoOpenOutline } from "react-icons/io5";
interface ServiceLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const ServiceLink: FC<ServiceLinkProps> = ({ href, label, icon }) => {
  const theme = useTheme();
  return (
    <Link href={href}>
      <Box
        component="a"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1,
          width: "100%",
          borderRadius: 1,
          textDecoration: "none",
          color: theme.palette.primary.main,
          transition: theme.transitions.create(["color"], {
            duration: theme.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <Box
          component="span"
          sx={{ color: theme.palette.primary.main, display: "flex" }}
        >
          {icon}
        </Box>
        <Typography component="span" variant="body2" sx={{ mr: 0.5 }}>
          {label}
        </Typography>
        <IoOpenOutline size={16} />
      </Box>
    </Link>
  );
};
