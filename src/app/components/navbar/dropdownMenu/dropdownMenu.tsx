// DropdownMenu.tsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StyledIconButton, StyledLink, MenuContainer } from "../navbarStyles";
import CloseIcon from "@mui/icons-material/Close";

interface DropdownMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  closed: {
    opacity: 0,
    x: "-100%",
    scale: 0.95,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const itemVariants = {
  closed: { opacity: 0 },
  open: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1 + 0.5 }
  }),
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, toggleMenu }) => {
  const menuItems = [
    { href: "/ecommerce", label: "Ecommerce" },
    { href: "/sales-analysis", label: "Sales Analysis" },
    { href: "/chatbot", label: "AI Chatbot" },
  ];

  return (
    <MenuContainer
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      variants={menuVariants}
      id="menu-container"
    >
      <StyledIconButton
        onClick={toggleMenu}
        aria-label="close menu"
        sx={{ position: "absolute", right: 20, top: 20, color: "white" }}
      >
        <CloseIcon />
      </StyledIconButton>
      <motion.div
        className="flex flex-col items-center justify-center space-y-6 py-12"
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item.href}
            variants={itemVariants}
            custom={index}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <Link href={item.href} passHref>
              <StyledLink onClick={toggleMenu}>{item.label}</StyledLink>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </MenuContainer>
  );
};

export default DropdownMenu;
