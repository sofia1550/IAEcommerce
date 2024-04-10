import React, { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  deleteProduct,
  updateProduct,
} from "@/redux/features/product/productSlice";
import { Product } from "../products/productCard/productCard";

interface ProductAdminPanelProps {
  product: Product;
}

const ProductAdminPanel: React.FC<ProductAdminPanelProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [newPrice, setNewPrice] = useState(product.price.toString());

  const handleUpdateProduct = () => {
    const updatedProduct = { ...product, price: parseFloat(newPrice) };
    dispatch(updateProduct(updatedProduct));
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.id));
  };
  return (
    <div>
      <input
        type="number"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      {/* Aquí iría tu formulario o los controles para editar el producto */}
      <button onClick={handleUpdateProduct}>Actualizar Producto</button>
      <button onClick={handleDeleteProduct}>Eliminar Producto</button>
    </div>
  );
};

export default ProductAdminPanel;
