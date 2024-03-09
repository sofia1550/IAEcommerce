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
  margin: 20px auto;
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden; 
  transition: 0.3s;

  &:hover {
    transform: scale(
      1.03
    ); 
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
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
    border-radius: 20px;
    font-weight: bold;
    background-color: #005b96; 
    color: white;
    width: 100%; 

    &:hover {
      background-color: #004c87; 
    }
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CustomCard>
      <CardActionArea>
        <StyledCardMedia image={product.imageUrl} title={product.name} />
        <ProductInfo>
          <Typography gutterBottom variant="h6" component="h2">
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
