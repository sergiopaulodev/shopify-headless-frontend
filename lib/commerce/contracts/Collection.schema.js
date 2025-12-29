import { z } from "zod";

const CollectionSchema = z.object({
    id: z.string(),
    handle: z.string().min(1),
    title: z.string(),
    description: z.string().nullable().optional(),
    products: z.array(z.string()),
});

export default CollectionSchema;