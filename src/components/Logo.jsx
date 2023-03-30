import Box from "@mui/material/Box";
import React from "react";
import { flexCenter } from "../themes/commonTheme";
import { FaAirbnb } from "react-icons/fa";
import { pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

function Logo() {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: "28px",
          fontWeight: "bold",
        }}
        component="h3"
      >
        Airbnb
      </Typography>
    </Box>
  );
}

export default Logo;
