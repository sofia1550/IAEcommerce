import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { RootState } from "@/redux/store";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../../redux/features/cart/cartSlice"; // Asegúrate de importar las acciones correctamente
import Image from "next/image";
import { CartProduct } from "@/app/types/types";

interface CartItemProps {
  item: CartProduct;
}

interface MiniCartModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

// Estilos personalizados para el modal
const CustomModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  maxWidth: "80%",
  minHeight: "300px",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.default",
  border: "2px solid #000",
  p: 4,
  borderRadius: theme.shape.borderRadius,
  background: "linear-gradient(135deg, #3a6073 0%, #16222a 100%)",
  color: "white",
  boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px, rgba(0, 0, 0, 0.22) 0px 9px 28px, rgba(0, 0, 0, 0.20) 0px 11px 15px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    maxHeight: "80vh",
    padding: theme.spacing(2),
    overflowY: "scroll",
  },
}));

// Componente para manejar cada ítem del carrito
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 2, width: "100%" }}>
      <Box sx={{ marginRight: "16px" }}>
        <Image
          src={item.imageUrl}
          alt={item.name}
          priority
          width={60}
          height={60}
          style={{ borderRadius: "4.5px" }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="body2">${item.price}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          onClick={() => dispatch(decrementQuantity(item.id))}
          disabled={item.quantity <= 1}
        >
          -
        </Button>
        <Typography variant="body2" sx={{ mx: 2 }}>
          {item.quantity}
        </Typography>
        <Button onClick={() => dispatch(incrementQuantity(item.id))}>+</Button>
        <Button
          onClick={() => dispatch(removeFromCart(item.id))}
          color="error"
          sx={{ ml: 2 }}
        >
          Eliminar
        </Button>
      </Box>
    </Box>
  );
};

const MiniCartModal: React.FC<MiniCartModalProps> = ({ isOpen, handleClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="mini-cart-modal"
      aria-describedby="mini-cart-modal-description"
    >
      <CustomModalBox>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: 2 }}
        >
          Carrito de Compras
        </Typography>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={`${item.id}-${index}`} item={item} />
          ))
        ) : (
          <Typography>Tu carrito está vacío.</Typography>
        )}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Total: ${total.toFixed(2)}
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }}>
          Cerrar
        </Button>
      </CustomModalBox>
    </Modal>
  );
};

export default MiniCartModal;
