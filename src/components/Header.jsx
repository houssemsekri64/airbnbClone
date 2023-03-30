import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import {
  dFlex,
  displayOnDesktop,
  flexBetweenCenter,
} from "../themes/commonTheme";
import LocationSearch from "./LocationSearch";
import Logo from "./Logo";
import MobileSearch from "./MobileSearch";
import ProfileSettings from "./ProfileSettings";

function Header() {
  return (
    <Box
      sx={{ ...dFlex, minHeight: 70, borderBottom: "solid 1px #ddd", px: 4 }}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          ...flexBetweenCenter,
          minHeight: 90,
          px: 4,
        }}
      >
        <Box sx={displayOnDesktop}>
          <Logo />
        </Box>
        <Box sx={displayOnDesktop}>
          <LocationSearch />
        </Box>
        <Box sx={displayOnDesktop}>
          <ProfileSettings />
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          {" "}
          <MobileSearch />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
