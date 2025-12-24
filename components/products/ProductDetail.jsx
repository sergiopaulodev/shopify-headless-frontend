export function ProductDetail({ product }) {
    return (
        <article>
            <h1>{product.title}</h1>
            {product.description && <p>{product.description}</p>}
        
        {product.price ? (
            <p>
                {product.price.amount} {product.price.currencyCode}
            </p>
            ) : (
                <p>Precio no disponible</p>
            )
        }
        
        </article>
    );
}