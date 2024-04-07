import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

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
`;
export const ViewMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const ViewMoreButtonStyled = styled(Button)`
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 18px;
  background-color: #3A8EBA; // Color azul vibrante para el botón.
  color: white;
  box-shadow: 0px 4px 15px rgba(58, 142, 186, 0.5);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08); // Un efecto de crecimiento más notable
    background-color: #307896; // Un tono de azul más oscuro para el hover.
    box-shadow: 0px 6px 20px rgba(48, 121, 150, 0.6); // Una sombra más pronunciada para el hover.
  }
`;