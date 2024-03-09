import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";
import ProductCard from "../productCard/productCard"; 
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

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

const containerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
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
