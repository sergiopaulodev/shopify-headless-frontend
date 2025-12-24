import { MOCK_PRODUCTS } from "../commerce-providers/mock/products" 

export async function getProducts() {
    return MOCK_PRODUCTS.filter(p => p.status !== "ARCHIVED");
}

export async function getProductByHandle(handle) {
    return MOCK_PRODUCTS.find(p => p.handle === handle ) || null;
}


export { getProducts, getProductByHandle }