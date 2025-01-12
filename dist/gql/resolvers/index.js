import { db } from "../../lib/db.js";
export const resolvers = {
    Query: {
        // get all products
        products: () => db.products,
        // get single products
        product: (parent, args, context) => {
            const result = db.products.find((pd) => pd.id === args.productId);
            return result;
        },
    },
};
