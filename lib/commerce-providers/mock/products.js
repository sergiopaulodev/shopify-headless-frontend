const MOCK_PRODUCTS = [
  {
    id: 'prod_1',
    handle: 'camiseta-basica',
    title: 'Camiseta básica',
    description: 'Camiseta de algodón, corte clásico.',
    price: {
      amount: 29.99,
      currencyCode: 'USD',
    },
    images: {
      src: 'https://via.placeholder.com/300',
      alt: 'Camiseta básica',
    },
  },
  {
    id: 'prod_2',
    handle: 'buzo-oversize',
    title: 'Buzo oversize',
    description: 'Buzo cómodo de fit amplio.',
    price: {
      amount: 59.99,
      currencyCode: 'USD',
    },
    images: {
      src: 'https://via.placeholder.com/300',
      alt: 'Buzo oversize',
    },
  },
];


export async function getProducts({ first = 10 } = {}) {
    return MOCK_PRODUCTS.slice(0, first);
}

export async function getProductByHandle(handle) {
    return MOCK_PRODUCTS.find((product) => product.handle === handle ) || null;
}