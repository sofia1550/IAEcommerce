import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import styled from "styled-components";

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const CustomCard = styled(Card)`
  max-width: 345px;
  width: 100%;
  margin: 20px;
  background-color: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 8px;
    border-radius: 15px;
    font-weight: bold;
    background-color: #007bff; // Un azul más claro para variar y atraer atención.
    color: white;
    width: 100%;

    &:hover {
      background-color: #0056b3; // Un azul más oscuro para el hover.
    }
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CustomCard>
      <CardActionArea>
        <StyledCardMedia
          image={product.imageUrl} // URL de la imagen
          title={product.name} // Texto alternativo para la imagen
        />
        <ProductInfo>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </ProductInfo>
      </CardActionArea>
      <CardActions>
        <StyledButton variant="contained">Agregar al Carrito</StyledButton>
      </CardActions>
    </CustomCard>
  );
};

export default ProductCard;
