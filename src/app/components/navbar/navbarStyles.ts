// Navbar.tsx
"use client";
import { motion } from "framer-motion";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";

import styled from "styled-components";
export const Nav = styled(motion.nav)`
  flex-grow: 1;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  z-index: 9999 !important; 

`;

export const Title = styled(Typography)`
  @apply text-white;
  font-weight: bold;
  letter-spacing: 1px;
  flex-grow: 1; 
  text-align: center;
`;

export const CustomAppBar = styled(AppBar)`
  background: transparent;
  box-shadow: none;
  @apply relative; // Mantenemos esto
  z-index: 1100; 
`;
export const CustomToolbar = styled(Toolbar)`
  @apply flex justify-between container mx-auto px-4;
  z-index: 9999;
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const StyledLink = styled(Typography)`
  cursor: pointer;
  color: white;
  margin: 0 10px; 
  &:hover {
    color: #bbbbbb;
    text-decoration: none;
  }
  transition: color 0.3s ease;
`;
export const MenuContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to r, from-gray-700 to-gray-900);
  padding: 4px;
  z-index: 1200; 
`;
export const SignInButton = styled(StyledLink)`
  margin-right: 15px;
  padding: 5px 15px;
  border: 2px solid white;
  border-radius: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 1200; 

  &:hover {
    background-color: white;
    color: #0f2027;
  }
`;

export const SignUpButton = styled(StyledLink)`
  padding: 5px 15px;
  background-color: #ff4081;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f50057;
  }
`;
export const AuthButtonsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
