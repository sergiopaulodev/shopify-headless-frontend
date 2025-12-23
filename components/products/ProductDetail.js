export function ProductDetail({ product }) {
    return (
        <article>
            <h1>{product.title}</h1>
            {product.description && <p>{product.description}</p>}
        </article>
    );
}