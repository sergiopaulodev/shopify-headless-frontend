export const ProductContract = {
    id: 'string',
    handle: 'string',
    title: 'string',
    description: 'string',

    price: {
        amount: 'number',
        currencyCode: 'string',
    },

    images: [
        {
            url: 'string',
            alt: 'string | null',
        },
    ],
};