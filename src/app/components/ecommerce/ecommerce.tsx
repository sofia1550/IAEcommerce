"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchProducts,
  updateProduct,
  deleteProduct,
} from "@/redux/features/product/productSlice";
import { Product } from "@/redux/features/cart/cartSlice";
import EcommerceUI from "./ecommerceStylesUI/ecommerceUI";
import { AlertColor } from "@mui/material";

const Ecommerce = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.visibleProducts);
  const filters = useAppSelector((state) => state.sidebar.filters);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("info");
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterProducts = useCallback(() => {
    let tempProducts = [...products];
    if (filters.name) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.minPrice !== null) {
      tempProducts = tempProducts.filter(
        (product) => product.price >= filters.minPrice!
      );
    }
    if (filters.maxPrice !== null) {
      tempProducts = tempProducts.filter(
        (product) => product.price <= filters.maxPrice!
      );
    }
    if (filters.minQuantity !== null) {
      tempProducts = tempProducts.filter(
        (product) => product.quantity >= filters.minQuantity!
      );
    }
    if (filters.maxQuantity !== null) {
      tempProducts = tempProducts.filter(
        (product) => product.quantity <= filters.maxQuantity!
      );
    }
    setFilteredProducts(tempProducts);
  }, [products, filters]);

  useEffect(() => {
    filterProducts();
  }, [products, filters, filterProducts]);

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
      <EcommerceUI
        products={filteredProducts}
        editMode={editMode}
        editedProduct={editedProduct}
        selectedImage={selectedImage}
        snackbarMessage={snackbarMessage}
        openSnackbar={openSnackbar}
        snackbarSeverity={snackbarSeverity}
        handleEditClick={handleEditClick}
        handleSaveChanges={handleSaveChanges}
        handleDeleteProduct={handleDeleteProduct}
        handleCancelEdit={handleCancelEdit}
        handleImageChange={handleImageChange}
        handleChange={handleChange}
        setOpenSnackbar={setOpenSnackbar}
      />
    </>
  );
};

export default Ecommerce;
