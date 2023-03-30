import { Box, Link, Stack, Button } from "@mui/material";
import React from "react";
import { flexCenter } from "../themes/commonTheme";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
function ProfileSettings() {
  return (
    <Box sx={{ ...flexCenter }}>
      <Link href="#"> Become A Host</Link>
      <Stack>
        <Button>
          <BsGlobe size={24} />
        </Button>
        <Button sx={{ borderRadius: 10, border: "solid 1px #ddd" }}>
          <Stack>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
}

export default ProfileSettings;
