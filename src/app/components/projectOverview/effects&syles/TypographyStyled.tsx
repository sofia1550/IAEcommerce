import React from "react";
import { Typography } from "@mui/material";
import styled, { css } from "styled-components";
import { useTheme } from "@mui/material/styles";

interface TypographyStyledProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  paragraph?: boolean;
  gutterBottom?: boolean;
  children: React.ReactNode;
}

const baseStyles = css`
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(#ffff, #ffff, #ffff);
`;

const TypographyStyled = styled(
  ({
    variant,
    paragraph,
    gutterBottom,
    ...otherProps
  }: TypographyStyledProps) => (
    <Typography
      variant={variant}
      paragraph={paragraph}
      gutterBottom={gutterBottom}
      {...otherProps}
    />
  )
).withConfig({
  shouldForwardProp: (prop) =>
    !["variant", "paragraph", "gutterBottom"].includes(prop),
})`
  ${({ variant, theme }) => css`
    ${baseStyles}
    // Ejemplo para 'h4'
    ${variant === "h4" &&
    css`
      font-size: 2.2rem;
      font-weight: 700;
      background-image: linear-gradient(45deg, #a2facf, #64acff);
      margin-bottom: 20px;

      ${theme.breakpoints.down("sm")} {
        font-size: 1.8rem;
      }
    `}
    // Ejemplo para 'body1'
    ${variant === "body1" &&
    css`
      font-size: 1.1rem;
      color: white;
      line-height: 1.6;
      margin-bottom: 20px;

      ${theme.breakpoints.down("sm")} {
        font-size: 1rem;
      }
    `}
    // Añade aquí más variantes con estilos específicos
    // Por ejemplo, ajustes para 'h1'
    ${variant === "h1" &&
    css`
      font-size: 3.6rem;
      font-weight: 700;

      ${theme.breakpoints.down("sm")} {
        font-size: 2.5rem;
      }
    `}
    // Ajustes para 'subtitle1'
    ${variant === "subtitle1" &&
    css`
      font-size: 1.2rem;

      ${theme.breakpoints.down("sm")} {
        font-size: 1rem;
      }
    `} // Continúa ajustando según necesites...
  `}
`;

const ResponsiveTypographyStyled: React.FC<TypographyStyledProps> = (props) => {
  const theme = useTheme();

  return <TypographyStyled theme={theme} {...props} />;
};

export default ResponsiveTypographyStyled;
