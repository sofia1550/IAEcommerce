import React from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const ViewMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ViewMoreButtonStyled = styled(Button)`
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 18px;
  background-color: #3a8eba; // Color azul vibrante para el botón.
  color: white;
  box-shadow: 0px 4px 15px rgba(58, 142, 186, 0.5);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08); // Un efecto de crecimiento más notable
    background-color: #307896; // Un tono de azul más oscuro para el hover.
    box-shadow: 0px 6px 20px rgba(48, 121, 150, 0.6); // Una sombra más pronunciada para el hover.
  }
`;
export const PreviewContainer = styled.div`
  background: linear-gradient(145deg, #2c5364, #203a43, #0f2027);
  padding: 60px 20px;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  margin: 80px auto;
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 90%;
  max-width: 1200px;

  .swiper {
    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 40px; // Aumentamos el padding para dar espacio a los controles de navegación
  }

  .swiper-slide {
    opacity: 0.85;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
    display: flex;
    justify-content: center;
  }

  // Estilos personalizados para los botones de navegación
  .swiper-button-prev,
  .swiper-button-next {
    color: #ffffff;
    &:after {
      font-size: 20px;
    }
  }

  .swiper-pagination-bullet {
    background-color: #ffffff;
    opacity: 0.6;
    border: 2px solid #203a43; // Agregamos un borde para mayor contraste
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #0f2027; // Cambiamos el color para el activo
  }
`;

export const SectionTitle = styled(Typography)`
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.167;
  letter-spacing: 0em;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;
