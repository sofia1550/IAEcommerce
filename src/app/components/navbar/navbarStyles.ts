// Navbar.tsx
"use client";
import { motion } from "framer-motion";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";

import styled from "styled-components";
// Mejoras en Nav para garantizar una transición suave y un gradiente más moderno.
export const Nav = styled(motion.nav)`
  flex-grow: 1;
  background: linear-gradient(135deg, #16222a 0%, #3a6073 100%);
  z-index: 9999;
`;

// Actualización de Title para que resalte sobre el gradiente mejorado.
export const Title = styled(Typography)`
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  flex-grow: 1;
  text-align: center;
`;

// Manteniendo CustomAppBar transparente para una integración visual completa.
export const CustomAppBar = styled(AppBar)`
  background: transparent;
  box-shadow: none;
  position: fixed; // Cambiado de 'relative' a 'fixed'
  z-index: 1100;
`;

// CustomToolbar ajustado para promover una estructura limpia y moderna.
export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
  z-index: 9999;
`;

// Mejorando StyledIconButton con efecto hover refinado y moderno.
export const StyledIconButton = styled(IconButton)`
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// StyledLink con una transición más suave para mejorar la experiencia de usuario.
export const StyledLink = styled(Typography)`
  cursor: pointer;
  color: white;
  margin: 0 10px;
  &:hover {
    color: #a2facf; // Un color más claro para el hover que sea coherente con el header.
    text-decoration: none;
  }
  transition: color 0.3s ease;
`;

// MenuContainer con un gradiente complementario y moderno.
export const MenuContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #3a6073, #16222a);
  padding: 4px;
  z-index: 1200;
`;

// SignInButton y SignUpButton actualizados para cohesión con el nuevo diseño.
export const SignInButton = styled(StyledLink).attrs({ as: "button" })`
  margin-right: 15px;
  padding: 5px 15px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  &:hover {
    background-color: #ffffff;
    color: #16222a;
  }
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const SignUpButton = styled(StyledLink).attrs({ as: "button" })`
  padding: 5px 15px;
  background-color: #3a8eba; // Un azul más vibrante para el botón de registro.
  border-radius: 20px;
  &:hover {
    background-color: #307896; // Un tono más oscuro para el hover.
  }
`;

// AuthButtonsContainer para alinear visualmente los botones de autenticación.
export const AuthButtonsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
