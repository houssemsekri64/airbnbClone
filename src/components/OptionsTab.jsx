import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { FaFilter } from "react-icons/fa";
import { locationsTab } from "../data/mock-data";
import { border, color } from "@mui/system";

function OptionsTab() {
  const [value, setValue] = useState(0);
  const toggleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(tabsClasses.scrollButtons);
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { sx: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          onChange={() => toggleChange}
          variant="scrollable"
          scrollButtons
          value={value}
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": {
                opacity: "0.3",
              },
            },
          }}
        >
          {locationsTab.map((location) => {
            return (
              <Tab
                key={location.id}
                label={location.label}
                icon={location.icon}
              ></Tab>
            );
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: "none", md: "flex" },
            border: "solid 1px #ddd",
            minWidth: 90,
            justifyContent: "space-between",
            borderRadius: 2,
            textTransform: "capitalize",
            py: 1,
            color: "text.primary",
          }}
        >
          <FaFilter /> Filters
        </Button>
      </Box>
    </Container>
  );
}

export default OptionsTab;
