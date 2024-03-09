import React from "react";
import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

interface TypographyStyledProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
  paragraph?: boolean;
  gutterBottom?: boolean;
  children: React.ReactNode;
}

// Estilos base para Typography que se aplicarán a todas las variantes
const baseStyles = css`
  color: transparent; // Ejemplo de estilo base, ajusta según sea necesario
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

// Función helper para aplicar estilos específicos de variantes
const variantStyles = ({ variant }: TypographyStyledProps) => {
  switch (variant) {
    case "h4":
      return css`
        ${baseStyles}
        font-size: 2.2rem;
        font-weight: 700;
        background-image: linear-gradient(45deg, #a2facf, #64acff);
        margin-bottom: 20px;
      `;
    case "body1":
      return css`
        font-size: 1.1rem;
        color: #e6e6e6; // Restablecer el color para esta variante
        line-height: 1.6;
        margin-bottom: 20px;
      `;
    default:
      return '';
  }
};

const TypographyStyled = styled(({ variant, paragraph, gutterBottom, ...otherProps }: TypographyStyledProps) => (
  <Typography variant={variant} paragraph={paragraph} gutterBottom={gutterBottom} {...otherProps} />
)).withConfig({
  shouldForwardProp: (prop) => !["variant", "paragraph", "gutterBottom"].includes(prop),
})`
  ${variantStyles}
`;

export default TypographyStyled;
