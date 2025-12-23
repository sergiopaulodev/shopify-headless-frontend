import { getProducts } from "@/lib/commerce";
import { ProductList } from "@/components/products/ProductList";

export default async function HomePage() {
    const products = await getProducts();

    return (
        <main>
            <h1>Products</h1>
            <ProductList products={products}/>
            {/* <ul>
                {products.map((product) => (
                    
                        <li key={product.id}>
                            <a href={`/products/${product.handle}`}>
                            {product.title}
                            </a>
                        </li>

                        ) 
                    )
                }
            </ul> */}
        </main>
    );
}