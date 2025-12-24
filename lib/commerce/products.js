import { MOCK_PRODUCTS } from "../commerce-providers/mock/products" 

export async function getProducts() {
    return MOCK_PRODUCTS.filter((product) => product.status === "ACTIVE");
}

export async function getProductByHandle(handle) {
    const product = MOCK_PRODUCTS.find(
        (p) => p.handle === handle );

    if (!product || product.status !== "ACTIVE"){
        return null;
    }

    return product;

}


export { getProducts, getProductByHandle }