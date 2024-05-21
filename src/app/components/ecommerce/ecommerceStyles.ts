import styled from "styled-components";
import { Button, TextField } from "@mui/material";

export const SwiperContainer = styled.div`
  width: 60%; /* Ajustar este valor para reducir el ancho en un 40% */
  margin: 0 auto; /* Centrar el contenedor */
  margin-bottom: 50px; /* Agregar margen inferior */
`;

export const PanelContainerDad = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; /* Reducir el espacio entre tarjetas */
  padding: 50px 0; /* Ajustar el padding si es necesario */
  background: linear-gradient(145deg, #2c5364, #203a43, #0f2027);
  min-height: 100vh;
  align-items: center; /* Centrar verticalmente */
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Ajuste del espacio entre elementos */
  padding: 15px; /* Ajuste del padding para hacer la tarjeta más compacta */
  background: linear-gradient(145deg, #e0f7fa, #80deea);
  border-radius: 16px;
  width: 240px; /* Reducción del ancho de las tarjetas */
  margin: 10rem auto; /* Centrado de las tarjetas */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* Reducción del efecto de hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 8px;

    label {
      color: #007bb5;
      font-weight: 500;
    }
    .MuiInputBase-input {
      color: #333;
    }
    .MuiOutlinedInput-root {
      fieldset {
        border-color: #80deea;
        border-radius: 8px;
      }
      &:hover fieldset {
        border-color: #00bcd4;
      }
      &.Mui-focused fieldset {
        border-color: #007bb5;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    color: white;
    font-weight: bold;
    border-radius: 24px;
    padding: 10px 30px;
    background-color: #007bb5;
    box-shadow: 0 4px 8px rgba(0, 123, 181, 0.4);
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #005f8f;
      transform: translateY(-2px);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 10px; /* Ajustar el margen inferior */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
