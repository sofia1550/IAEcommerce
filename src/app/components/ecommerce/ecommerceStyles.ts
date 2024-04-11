import styled from "styled-components";
import { Button, TextField } from "@mui/material";

// PanelContainer complementará el tema oscuro y moderno de tu Navbar
export const PanelContainerDad = styled.div`
  position: relative;
  margin-bottom: 250px;

`;
export const PanelContainer = styled.div`
  display: flex;

  gap: 20px;
  padding: 20px;
  position: relative;
  top: 100px;
  margin-bottom: 50px !important;

  background-color: white; // Un fondo oscuro que complementa el Navbar
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1); // Sombra suave para darle profundidad
  width: 80%;

  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

// TextField estilizado para integrarse con el tema oscuro
export const StyledTextField = styled(TextField)`
  label {
    color: #a2facf; // Color que combina con el esquema del Navbar
  }
  .MuiInputBase-input {
    color: white; // Texto blanco para contraste
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #a2facf; // Borde que combina
    }
    &:hover fieldset {
      border-color: #64acff; // Color de borde al pasar el mouse
    }
    &.Mui-focused fieldset {
      border-color: #a2facf; // Color de borde en foco
    }
  }
`;

// Botones estilizados para mantener coherencia con los estilos de la Navbar
export const StyledButton = styled(Button)`
  && {
    color: white;
    font-weight: bold;
    margin-top: 10px;
    border-radius: 20px;
    padding: 10px 30px;
    background-color: #3a6073; // Color principal que combina con el gradiente del Navbar
    &:hover {
      background-color: #16222a; // Un tono más oscuro para el hover
    }
  }
`;

// Proporcionar espacio adicional y organización visual
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
