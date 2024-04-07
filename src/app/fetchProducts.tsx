export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export async function fetchProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      name: "Smartphone XYZ",
      price: 799,
      imageUrl:
        "https://media.metrolatam.com/2020/06/03/template65-a07d8fd96c3e3cf6dc5ae622601987f8-800x800.jpg",
    },
    {
      id: 2,
      name: "Laptop ABC",
      price: 1200,
      imageUrl:
        "https://th.bing.com/th/id/OIP.o6HHjBAbltnZV8mbP9hwkwHaEL?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Smartwatch DEF",
      price: 299,
      imageUrl:
        "https://th.bing.com/th/id/OIP.J4FOEsWzMnp7XuWqdU5LpgHaGx?rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      name: "Smartphone XYZ",
      price: 799,
      imageUrl:
        "https://media.metrolatam.com/2020/06/03/template65-a07d8fd96c3e3cf6dc5ae622601987f8-800x800.jpg",
    },
    {
      id: 5,
      name: "Laptop ABC",
      price: 1200,
      imageUrl:
        "https://th.bing.com/th/id/OIP.o6HHjBAbltnZV8mbP9hwkwHaEL?rs=1&pid=ImgDetMain",
    },
    {
      id: 6,
      name: "Smartwatch DEF",
      price: 299,
      imageUrl:
        "https://th.bing.com/th/id/OIP.J4FOEsWzMnp7XuWqdU5LpgHaGx?rs=1&pid=ImgDetMain",
    },
  ];
}
