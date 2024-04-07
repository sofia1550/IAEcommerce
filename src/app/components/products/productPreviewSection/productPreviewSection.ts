import styled from "styled-components";
import { Typography } from "@mui/material";

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
