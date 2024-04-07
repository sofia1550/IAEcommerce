import React from "react";
import ProductCard from "../productCard/productCard"; // Asegúrate de que la ruta sea correcta
import { Product } from "../productCard/productCard"; // Asegúrate de que la ruta y la exportación sean correctas
import styled from "@emotion/styled";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; // Ajusta según necesites
  padding: 20px 0; // Añade un poco de padding alrededor de la grilla
`;

const ProductWrapper = styled.div`
  width: calc(33.333% - 20px); // Ajusta para el espaciado entre productos
  display: flex;
  justify-content: center;
`;

// Definiendo las props del componente
interface MoreProductsGridProps {
  products: Product[];
}

const MoreProductsGrid: React.FC<MoreProductsGridProps> = ({ products }) => {
  return (
    <GridContainer>
      {products.map((product, index) => (
        <ProductWrapper key={index}>
          <ProductCard product={product} />
        </ProductWrapper>
      ))}
    </GridContainer>
  );
};

export default MoreProductsGrid;
