"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper/modules';
import {
  fetchProducts,
  updateProduct,
  deleteProduct,
} from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TextField, Button, Snackbar, Alert, AlertColor } from "@mui/material";
import { motion } from "framer-motion";
import {
  ButtonContainer,
  ImageContainer,
  PanelContainer,
  StyledButton,
  StyledTextField,
  SwiperContainer,
} from "@/app/components/ecommerce/ecommerceStyles";
import { Product } from "@/redux/features/cart/cartSlice";
import Image from "next/image";

const Ecommerce = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.visibleProducts);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("info");
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEditClick = (product: Product) => {
    if (!product.id) {
      console.error("El producto no tiene un ID definido:", product);
      setSnackbarMessage("Error: El producto seleccionado no tiene un ID.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }
    setEditedProduct(product);
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    if (!editedProduct || !editedProduct.id) {
      setSnackbarMessage("Error: El producto no tiene un ID definido.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    const formData = new FormData();
    formData.append("name", editedProduct.name);
    formData.append("price", editedProduct.price.toString());
    formData.append("quantity", editedProduct.quantity.toString());
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    dispatch(updateProduct({ id: editedProduct.id, formData }))
      .unwrap()
      .then(() => {
        setSnackbarMessage("Producto actualizado con éxito.");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setEditMode(false);
      })
      .catch((error: any) => {
        const errorMessage =
          typeof error === "string"
            ? error
            : error.message || "Error al actualizar el producto.";
        setSnackbarMessage(errorMessage);
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  const handleDeleteProduct = (id: string) => {
    if (!id) {
      console.error("Intento de eliminar un producto sin ID válido");
      return;
    }
    dispatch(deleteProduct(id));
    setSnackbarMessage("Producto eliminado con éxito.");
    setSnackbarSeverity("warning");
    setOpenSnackbar(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedProduct(null);
    setSelectedImage(null);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleChange = (field: keyof Product, value: string | number) => {
    if (editedProduct) {
      setEditedProduct({
        ...editedProduct,
        [field]: value,
      });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SwiperContainer>
          <Swiper
            initialSlide={2} /* Comenzar siempre desde la posición 3 (índice 2) */
            spaceBetween={10} /* Ajustar el espacio entre slides */
            centeredSlides={true}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={`${product.id}-${index}`}>
                <PanelContainer>
                  {editMode &&
                  editedProduct &&
                  editedProduct.id === product.id ? (
                    <>
                      <StyledTextField
                        label="Precio"
                        variant="outlined"
                        type="number"
                        value={editedProduct.price}
                        onChange={(e) =>
                          handleChange("price", parseFloat(e.target.value))
                        }
                      />
                      <StyledTextField
                        label="Nombre"
                        variant="outlined"
                        value={editedProduct.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                      <StyledTextField
                        label="Cantidad"
                        variant="outlined"
                        type="number"
                        value={editedProduct.quantity}
                        onChange={(e) =>
                          handleChange("quantity", parseInt(e.target.value))
                        }
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <ButtonContainer>
                        <StyledButton
                          variant="contained"
                          color="primary"
                          onClick={handleSaveChanges}
                        >
                          Guardar Cambios
                        </StyledButton>
                        <StyledButton
                          variant="contained"
                          onClick={handleCancelEdit}
                        >
                          Cancelar
                        </StyledButton>
                      </ButtonContainer>
                    </>
                  ) : (
                    <>
                      <ImageContainer>
                        {product.imageFileName && (
                          <Image
                            src={`http://localhost:3001/uploads/${product.imageFileName}`}
                            alt={product.name}
                            width={100}
                            height={100}
                            objectFit="contain"
                          />
                        )}
                      </ImageContainer>
                      <StyledTextField
                        label="Precio"
                        variant="outlined"
                        type="number"
                        defaultValue={product.price.toString()}
                        disabled
                      />
                      <StyledTextField
                        label="Nombre"
                        variant="outlined"
                        defaultValue={product.name}
                        disabled
                      />
                      <StyledTextField
                        label="Cantidad"
                        variant="outlined"
                        type="number"
                        defaultValue={product.quantity.toString()}
                        disabled
                      />
                      <ButtonContainer>
                        <StyledButton
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleEditClick(product)}
                        >
                          Editar Producto
                        </StyledButton>
                        <StyledButton
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Eliminar Producto
                        </StyledButton>
                      </ButtonContainer>
                    </>
                  )}
                </PanelContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
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
      </motion.div>
    </>
  );
};

export default Ecommerce;

