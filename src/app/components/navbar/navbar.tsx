// Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery, Box, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  AuthButtonsContainer,
  CustomAppBar,
  CustomToolbar,
  Nav,
  SignInButton,
  SignUpButton,
  StyledIconButton,
  StyledLink,
  Title,
} from "./navbarStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useAuthToken } from "../../hooks/useAuthToken";
import { checkAuthentication } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import DropdownMenu from "./dropdownMenu/dropdownMenu"; 

const Navbar = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const dispatch = useAppDispatch();

  const isMobile = useMediaQuery("(max-width:600px)");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { logout } = useAuthToken();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    logout();
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest("#menu-container")) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

  return (
    <Nav
      className="page"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <CustomAppBar position="static">
        <CustomToolbar>
          {isMobile && (
            <StyledIconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </StyledIconButton>
          )}
          <Title variant="h6" noWrap>
            LogoTech
          </Title>
          <AnimatePresence>
            {isMobile && (
              <DropdownMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            )}
          </AnimatePresence>
          {!isMobile && (
            <Box className="flex justify-center flex-grow">
              <Link href="/ecommerce" passHref>
                <StyledLink>Ecommerce</StyledLink>
              </Link>
              <Link href="/sales-analysis" passHref>
                <StyledLink>Sales Analysis</StyledLink>
              </Link>
              <Link href="/chatbot" passHref>
                <StyledLink>AI Chatbot</StyledLink>
              </Link>
            </Box>
          )}
          {!isAuthenticated ? (
            <AuthButtonsContainer>
              <Link
                href="https://9175-179-62-88-219.ngrok-free.app/auth/google"
                passHref
              >
                <SignInButton>Sign In</SignInButton>
              </Link>
              <Link
                href="https://9175-179-62-88-219.ngrok-free.app/auth/google"
                passHref
              >
                <SignUpButton>Register</SignUpButton>
              </Link>
            </AuthButtonsContainer>
          ) : (
            <>
              <StyledIconButton onClick={handleMenu} color="inherit">
                <AccountCircle />
              </StyledIconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleLogoutClick}>Log Out</MenuItem>
              </Menu>
            </>
          )}
        </CustomToolbar>
      </CustomAppBar>
    </Nav>
  );
};

export default Navbar;
