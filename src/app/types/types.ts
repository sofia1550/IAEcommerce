export interface BaseProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Product extends BaseProduct {
  imageUrl?: string; // Opcional
  imageFileName?: string; // Opcional
}

export interface CartProduct extends BaseProduct {
  imageUrl: string; // Obligatorio en el carrito
}
