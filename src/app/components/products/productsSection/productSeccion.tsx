import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";
import ProductCard  from "../productCard/productCard"; // Asegúrate de ajustar la ruta de importación según tu estructura
import { motion } from "framer-motion";
import { Product } from "@/app/types/types";
interface ProductsSectionProps {
  products: Product[];
}

const SectionContainer = styled.div`
  padding: 60px 0;
  background-color: #f0f4f8;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 40px;
  text-align: center;
  font-weight: 600;
  color: #324960;
`;

const MotionGrid = motion(Grid);

// Ajustes sutiles en las animaciones para una carga más fluida
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SectionContainer>
      <StyledTypography variant="h4" gutterBottom align="center">
        Explora Nuestros Productos
      </StyledTypography>
      <MotionGrid
        container
        spacing={isMobile ? 2 : 4}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <MotionGrid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            variants={itemVariants}
          >
            <ProductCard product={product} />
          </MotionGrid>
        ))}
      </MotionGrid>
    </SectionContainer>
  );
};

export default ProductsSection;
