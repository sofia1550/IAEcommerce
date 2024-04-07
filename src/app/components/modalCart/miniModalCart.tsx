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
  width: "auto", // Permite que el ancho se ajuste al contenido hasta un máximo establecido
  maxWidth: "80%", // En dispositivos más grandes, limita el ancho para no ocupar toda la pantalla
  minHeight: "300px", // Asegura un mínimo de contenido visible
  maxHeight: "90vh", // Evita que el modal sea demasiado alto
  overflowY: "auto", // Permite desplazamiento si el contenido excede la altura máxima
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
    // Media query para pantallas pequeñas
    width: "90%", // Aumenta el ancho en dispositivos pequeños para usar más espacio de la pantalla
    maxHeight: "80vh", // Reduce la altura máxima para asegurar que el modal no sea demasiado largo
    padding: theme.spacing(2), // Reduce el padding para maximizar el espacio disponible
    overflowY: "scroll", // Cambia a scroll para mejorar la accesibilidad en pantallas pequeñas
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
