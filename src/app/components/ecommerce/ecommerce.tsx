"use client";
import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  updateProduct,
  deleteProduct,
} from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TextField, Button, Snackbar, Alert, AlertColor } from "@mui/material";
import { motion } from "framer-motion";
import { Product } from "../products/productCard/productCard";
import {
  PanelContainer,
  PanelContainerDad,
  StyledButton,
} from "@/app/components/ecommerce/ecommerceStyles";

const Ecommercee = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.visibleProducts);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("info");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleUpdateProduct = (product: Product, newPrice: number) => {
    // Asegúrate de que newPrice es un número válido antes de llamar a la acción
    if (!isNaN(newPrice) && newPrice > 0) {
      const updatedProduct = { ...product, price: newPrice }; // Actualiza el producto con el nuevo precio
      dispatch(updateProduct(updatedProduct));
      setSnackbarMessage("Producto actualizado con éxito.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } else {
      // Manejar el caso de un precio inválido
      setSnackbarMessage("Por favor, introduce un precio válido.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
    setSnackbarMessage("Producto eliminado con éxito.");
    setSnackbarSeverity("warning");
    setOpenSnackbar(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PanelContainerDad>
          {products.map((product) => (
            <PanelContainer key={product.id}>
              <TextField
                label="Precio"
                variant="outlined"
                type="number"
                defaultValue={product.price.toString()}
                onBlur={(e) => {
                  const newPrice = parseFloat(e.target.value);
                  handleUpdateProduct(product, newPrice);
                }}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Nombre"
                variant="outlined"
                defaultValue={product.name}
                onBlur={(e) => {
                  const newPrice = parseFloat(e.target.value);
                  handleUpdateProduct(product, newPrice);
                }}
                fullWidth
                margin="normal"
              />
              <StyledButton
                variant="outlined"
                color="secondary"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Eliminar Producto
              </StyledButton>
            </PanelContainer>
          ))}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
          >
            <Alert
              onClose={() => setOpenSnackbar(false)}
              severity={snackbarSeverity}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </PanelContainerDad>
      </motion.div>
    </>
  );
};

export default Ecommercee;
