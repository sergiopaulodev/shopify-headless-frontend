const MOCK_PRODUCTS = [
  {
    id: "prod_001",
    handle: "camiseta-basica",
    title: "Camiseta básica",
    description: "Camiseta de algodón 100%, corte regular.",
    price: {
      amount: 12990,
      currencyCode: "ARS"
    },
    images: [
      {
        url: "/images/camiseta-basica.jpg",
        alt: "Camiseta básica color blanco"
      }
    ]
  },
  {
    id: "prod_002",
    handle: "buzo-oversize",
    title: "Buzo oversize",
    description: "Buzo oversize de frisa pesada.",
    price: {
      amount: 25990,
      currencyCode: "ARS"
    },
    images: []
  },
];

export { MOCK_PRODUCTS };