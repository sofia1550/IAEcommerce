// Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery, Box, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  AuthButtonsContainer,
  CustomAppBar,
  CustomToolbar,
  MenuContainer,
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
  
  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { stiffness: 20 } },
    closed: { opacity: 0, x: "-100%", transition: { stiffness: 20 } },
  };

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
            {isMobile && isMenuOpen && (
              <MenuContainer>
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="absolute top-0 left-0 w-full bg-gradient-to-r from-gray-700 to-gray-900 p-4"
                  id="menu-container"
                >
                  <StyledIconButton
                    color="inherit"
                    onClick={() => setMenuOpen(false)}
                    aria-label="close menu"
                    sx={{ position: "absolute", right: 8, top: 8 }}
                  >
                    <CloseIcon />
                  </StyledIconButton>
                  <Link href="/ecommerce" passHref>
                    <StyledLink onClick={() => setMenuOpen(false)}>
                      Ecommerce
                    </StyledLink>
                  </Link>
                  <Link href="/sales-analysis" passHref>
                    <StyledLink onClick={() => setMenuOpen(false)}>
                      Sales Analysis
                    </StyledLink>
                  </Link>
                  <Link href="/chatbot" passHref>
                    <StyledLink onClick={() => setMenuOpen(false)}>
                      AI Chatbot
                    </StyledLink>
                  </Link>
                </motion.div>
              </MenuContainer>
            )}
          </AnimatePresence>
          {!isMobile && (
            <Box className="flex justify-center flex-grow">
              <Link href="/ecommerce" passHref>
                <StyledLink onClick={() => setMenuOpen(false)}>
                  Ecommerce
                </StyledLink>
              </Link>
              <Link href="/sales-analysis" passHref>
                <StyledLink onClick={() => setMenuOpen(false)}>
                  Sales Analysis
                </StyledLink>
              </Link>
              <Link href="/chatbot" passHref>
                <StyledLink onClick={() => setMenuOpen(false)}>
                  AI Chatbot
                </StyledLink>
              </Link>
            </Box>
          )}
          {!isAuthenticated ? (
            <AuthButtonsContainer>
              <Link
                href="https://9175-179-62-88-219.ngrok-free.app/auth/google"
                passHref
              >
                <SignInButton onClick={() => setMenuOpen(false)}>
                  Sign In
                </SignInButton>
              </Link>
              <Link
                href="https://9175-179-62-88-219.ngrok-free.app/auth/google"
                passHref
              >
                <SignUpButton onClick={() => setMenuOpen(false)}>
                  Register
                </SignUpButton>
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
