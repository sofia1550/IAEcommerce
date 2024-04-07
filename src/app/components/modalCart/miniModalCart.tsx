// MiniCartModal.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography, Button, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { RootState } from "@/redux/store";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../../redux/features/cart/cartSlice"; // Asegúrate de importar las acciones correctamente
import Image from "next/image";

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string; // Asegúrate de incluir esta propiedad
}
interface CartItemProps {
  item: CartProduct;
}
interface MiniCartModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

// Estilos personalizados para el modal
// Ajustamos el width para dar más espacio
const CustomModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // Hace que el ancho se ajuste al contenido con un máximo establecido
  maxWwidth: "80%", // Establece un ancho máximo para evitar que sea demasiado grande
  minHeight: "300px", // Altura mínima para asegurar que el modal no sea demasiado pequeño
  maxHeight: "90vh", // Altura máxima para asegurar que siempre haya un margen con el borde de la ventana
  overflowY: "auto", // Permite scroll vertical si el contenido excede la altura máxima
  bgcolor: "background.default",
  border: "2px solid #000",
  p: 4,
  borderRadius: theme.shape.borderRadius,
  background: "linear-gradient(135deg, #3a6073 0%, #16222a 100%)",
  color: "white",
  boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px, rgba(0, 0, 0, 0.22) 0px 9px 28px, rgba(0, 0, 0, 0.20) 0px 11px 15px`, // Sombra más profunda y extendida
  display: "flex", // Utiliza flexbox para manejar el contenido internamente
  flexDirection: "column", // Organiza el contenido en una columna
  alignItems: "center", // Centra los elementos horizontalmente
  justifyContent: "space-around", // Distribuye el espacio entre elementos uniformemente
  padding: theme.spacing(4), // Utiliza el sistema de espaciado del tema para el padding
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
          width={60} // Especifica el ancho de la imagen
          height={60} // Especifica la altura de la imagen
          style={{ borderRadius: "4.5px" }} // Se mantiene el borderRadius en el estilo
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="body2">${item.price}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {" "}
        {/* Asegura que los elementos internos estén alineados verticalmente */}
        <Button
          onClick={() => dispatch(decrementQuantity(item.id))}
          disabled={item.quantity <= 1} // Deshabilita el botón si la cantidad es 1
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

const MiniCartModal: React.FC<MiniCartModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <Typography>Tu carrito está vacío.</Typography>
        )}
        {/* Mostrar el total del carrito */}
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
