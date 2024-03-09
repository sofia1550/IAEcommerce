import React from "react";
import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import styled, { keyframes } from "styled-components";
import BackgroundAnimation from "./BackgroundAnimation"; 

const HeaderContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
  overflow: hidden;
  width: 100%;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;

const HeaderContent = styled(motion.div)`
  z-index: 10;
  padding: 20px;
  max-width: 600px;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledTypography = styled(Typography)`
  &.MuiTypography-root {
    
    background: -webkit-linear-gradient(left, #a2facf, #64acff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 2s ease-out;
  }
`;

const ExploreButtonStyled = styled(Button)`
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 18px;
  background-color: #ff4081;
  color: white;
  box-shadow: 0px 4px 15px rgba(255, 64, 129, 0.5);
  &:hover {
    transform: scale(1.05);
    background-color: #f50057;
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundLayer />

      <HeaderContent>
        <BackgroundAnimation />
        <StyledTypography variant="h3" sx={{ fontWeight: 700 }}>
          Revolutionize Your Tech Experience
        </StyledTypography>
        <StyledTypography
          variant="h6"
          sx={{ marginTop: "20px", fontWeight: 500 }}
        >
          Explore the latest in tech and AI to take your business to the next
          level.
        </StyledTypography>
        <ExploreButtonStyled variant="contained" size="large">
          Explore Now
        </ExploreButtonStyled>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
