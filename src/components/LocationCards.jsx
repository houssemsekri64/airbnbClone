import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { locations as cardLocations } from "../data/mock-data";
// import CarouselCard from "./CarouselCard";

function LocationCards() {
  const [cards] = React.useState(cardLocations);
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((card) => {
          return (
            <Grid key={card.id} xs={12} md={4} lg={3}>
              {card.location}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default LocationCards;
