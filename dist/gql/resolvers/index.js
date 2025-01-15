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
        // get all categories
        categories: () => db.categories,
        // get single category by id
        category: (parent, args, context) => {
            const result = db.categories.find((category) => category.id === args.categoryId);
            return result;
        },
    },
};
