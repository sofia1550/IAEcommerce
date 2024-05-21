"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { TextField, Button, Snackbar, Alert, AlertColor } from "@mui/material";
import { motion } from "framer-motion";
import {
  ButtonContainer,
  ImageContainer,
  PanelContainer,
  StyledButton,
  StyledTextField,
  SwiperContainer,
} from "./ecommerceStyles";
import { Product } from "@/redux/features/cart/cartSlice";
import Image from "next/image";

interface EcommerceUIProps {
  products: Product[];
  editMode: boolean;
  editedProduct: Product | null;
  selectedImage: File | null;
  snackbarMessage: string;
  openSnackbar: boolean;
  snackbarSeverity: AlertColor;
  handleEditClick: (product: Product) => void;
  handleSaveChanges: () => void;
  handleDeleteProduct: (id: string) => void;
  handleCancelEdit: () => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (field: keyof Product, value: string | number) => void;
  setOpenSnackbar: (open: boolean) => void;
}

const EcommerceUI: React.FC<EcommerceUIProps> = ({
  products,
  editMode,
  editedProduct,
  selectedImage,
  snackbarMessage,
  openSnackbar,
  snackbarSeverity,
  handleEditClick,
  handleSaveChanges,
  handleDeleteProduct,
  handleCancelEdit,
  handleImageChange,
  handleChange,
  setOpenSnackbar,
}) => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SwiperContainer>
        <Swiper
          initialSlide={2}
          spaceBetween={10}
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

export default EcommerceUI;
