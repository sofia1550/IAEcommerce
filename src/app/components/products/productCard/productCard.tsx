import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Product, CartProduct } from "@/app/types/types";
import Image from "next/image";

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

const StyledCardMedia = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 8px;
    border-radius: 15px;
    font-weight: bold;
    background-color: #007bff;
    color: white;
    width: 100%;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const cartProduct: CartProduct = {
      ...product,
      imageUrl: product.imageUrl || "",
    };
    dispatch(addToCart(cartProduct));
  };

  return (
    <CustomCard>
      <CardActionArea>
        <StyledCardMedia>
          {product.imageFileName ? (
            <Image
              src={`http://localhost:3001/uploads/${product.imageFileName}`}
              alt={product.name}
              width={100}
              height={100}
              style={{ width: "100%", height: "auto" }}
            />
          ) : (
            <Image
              src="/default-image.jpg"
              alt="Imagen por defecto"
              width={100}
              height={100}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </StyledCardMedia>
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
        <StyledButton variant="contained" onClick={handleAddToCart}>
          Agregar al Carrito
        </StyledButton>
      </CardActions>
    </CustomCard>
  );
};

export default ProductCard;
