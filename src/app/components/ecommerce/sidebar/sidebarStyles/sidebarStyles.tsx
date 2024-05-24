import Button from "@mui/material/Button/Button";
import IconButton from "@mui/material/IconButton/IconButton";
import TextField from "@mui/material/TextField/TextField";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 80%;
  max-width: 800px;
  height: 30vh; // Ajusta la altura según sea necesario
  overflow-y: auto; // Agrega scroll si el contenido excede la altura
  background: linear-gradient(135deg, #16222a 0%, #3a6073 40%);
  color: #000000;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1000;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItemStyled = styled.div`
  padding: 10px;
  width: 100%;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MenuButton = styled(IconButton)`
  margin-right: 16px;
  color: #ffffff;
  background-color: #3f51b5;
  &:hover {
    background-color: #303f9f;
  }
`;

export const MainContent = styled.div`
  margin-top: 20%;
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #16222a 0%, #3a6073 100%);
`;

export const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    font-size: 0.875rem; // Reduce el tamaño de la fuente
  }
  .MuiFormLabel-root {
    font-size: 0.875rem; // Reduce el tamaño de la etiqueta
  }
`;

export const StyledButton = styled(Button)`
  padding: 8px 16px; // Reduce el tamaño del botón
  font-size: 0.875rem; // Reduce el tamaño de la fuente del botón
`;