import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MiniCartModal from "./miniModalCart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CartIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [showBadge, setShowBadge] = useState(false);
  // Introduce un estado para rastrear el conteo de ítems en el carrito al momento de abrir el modal.
  const [itemsCountAtModalOpen, setItemsCountAtModalOpen] = useState(0);


  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Actualiza el estado de showBadge cada vez que cambia el número de ítems en el carrito.
  useEffect(() => {
    // Solo muestra el badge si el número de ítems ha aumentado desde la última vez que el modal fue abierto.
    if (cartItems.length > itemsCountAtModalOpen) {
      setShowBadge(true);
    }
  }, [cartItems.length, itemsCountAtModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

    if (!isModalOpen) {
      // Al abrir el modal, registra el número actual de ítems en el carrito y oculta el badge.
      setItemsCountAtModalOpen(cartItems.length);
      setShowBadge(false);
    } else {
      // Al cerrar el modal, mantiene showBadge en false. El useEffect se encargará de mostrarlo si es necesario.
      // No es necesario cambiar showBadge aquí ya que useEffect maneja la lógica basada en cartItems.length y itemsCountAtModalOpen.
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // No es necesario cambiar el estado aquí, el useEffect maneja la lógica para mostrar el badge.
  };
  useEffect(() => {
    console.log("Número de ítems en el carrito:", cartItems.length);
  }, [cartItems]);
  
  return (
    <>
      <Badge
        badgeContent={totalItems}
        color="secondary"
        invisible={cartItems.length === 0} // Solo invisible si no hay ítems
      >
        <ShoppingCartIcon onClick={toggleModal} style={{ cursor: "pointer" }} />
      </Badge>
      <MiniCartModal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default CartIcon;
