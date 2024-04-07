import React from "react";
import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import styled, { keyframes, css } from "styled-components";
import BackgroundAnimation from "./BackgroundAnimation";

// Animación para el fadeIn del texto
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

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

// Animación de gradiente animado para el fondo, crea un efecto visual dinámico
const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(
    270deg,
    #0f2027,
    #203a43,
    #2c5364,
    #203a43,
    #0f2027
  );
  background-size: 200% 200%;
  animation: ${animatedGradient} 15s ease infinite;
`;

const HeaderContent = styled(motion.div)`
  z-index: 10;
  padding: 20px;
  max-width: 600px;
`;

// Estilización con gradientes y sombras para el texto, aplicando fadeIn
const StyledTypography = styled(Typography)(
  ({ theme }) => css`
    background: -webkit-linear-gradient(left, #a2facf, #64acff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 2s ease-out;
  `
);

// Animación más sutil para el efecto de parpadeo del botón "Explore Now"
const subtleBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const ExploreButtonStyled = styled(Button)`
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 18px;
  background-color: #3A8EBA; // Color azul vibrante para el botón.
  color: white;
  box-shadow: 0px 4px 15px rgba(58, 142, 186, 0.5); // Ajustamos la sombra para que coincida con el color azul.
  animation: ${subtleBlink} 2.5s infinite;

  &:hover {
    transform: scale(1.05);
    background-color: #307896; // Un tono de azul más oscuro para el hover, en lugar del rosa.
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
