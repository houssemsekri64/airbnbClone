import React, { useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// mui icons
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// 3rd party
import SwipeableViews from "react-swipeable-views";

// react icons
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from "../themes/commonTheme";
import "./CarouselCard.css";

function CarouselCard({ location }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxStep = location.locationImages.length;
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box className="carouselCard" sx={{ flexGrow: 1, position: "relative" }}>
      <Box sx={fixedIcon}>
        <FaRegHeart sixze={24} color="#fff" />{" "}
      </Box>
      {location.locationImages.length > 0 && (
        <SwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((image, index) => {
            return (
              <div key={image.id}>
                <Box component="img" src={image.url} sx={carouselImage}></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}
      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          steps={maxStep}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxStep - 1}
              sx={carouselDot}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={carouselDot}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {location.location}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography component="h5"> {location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <>
                <Typography component="h5"> New</Typography>
                <AiFillStar size={18} />
              </>
            ) : (
              <>
                <Typography component="h5"> {location.rating}</Typography>
                <AiFillStar size={18} />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CarouselCard;
