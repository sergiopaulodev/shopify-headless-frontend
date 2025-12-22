import { getProductByHandle } from "@/lib/commerce";

export default async function ProductPage({ params }) {
    const { handle } = await params;
    const product = await getProductByHandle(handle);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <main>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </main>
    );
};