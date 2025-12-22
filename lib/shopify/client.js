const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION;

const SHOPIFY_API_URL = `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`;
const SHOPIFY_ENDPOINT = `https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

export async function shopifyFetch ({ query, variables = {} }) {

    const response = await fetch(SHOPIFY_API_URL, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'applicattion/json',
                'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
                },
            body: JSON.stringify({
                query,
                viariables,
            }),

        });
    
    if(!response.ok) {
        throw new Error(`Shopify API error: ${response.status}`);
        }
    
    const data = await response.json();

    if (data.errors) {
        throw new Error(`Shopify GraphQL error: ${JSON.stringify(data.errors)}`);

        }
    return data.data;
}

export async function shopifyFetch({ query, variables }) {

    const response = await fetch(SHOPIFY_ENDPOINT, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'applicattion/json',
                'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN,
                },
            body: JSON.stringify({
                query,
                viariables,
            }),

        });
    
    if(!response.ok) {
        throw new Error(`Shopify API error: ${response.status}`);
        }
    
    const data = await response.json();

    if (data.errors) {
        console.error(data.errors);
        throw new Error('Shopify GraphQL error');
        }
    
    return data.data;
}
