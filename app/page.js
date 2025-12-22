import { getProducts } from "@/lib/commerce";

export default async function HomePage() {
    const products = await getProducts();

    return (
        <main>
            <h1>Products</h1>

            <ul>
                {products.map((product) => (
                    
                        <li key={product.id}>
                            <a href={`/products/${product.handle}`}>
                            {product.title}
                            </a>
                        </li>

                        ) 
                    )
                }
            </ul>
        </main>
    );
}