import { db } from "../../lib/db.js";
export const resolvers = {
    Query: {
        // get all products
        products: () => db.products,
        // get single products
        product: (parent, args, context) => {
            return db.products.find((pd) => pd.id === args.productId);
        },
        // get all categories
        categories: () => db.categories,
        // get single category by id
        category: (parent, args, context) => {
            return db.categories.find((category) => category.id === args.categoryId);
        },
    },
    // query
    Product: {
        category: (parent, args, context) => {
            return db.categories.find((category) => category.id === parent.categoryId);
        },
    },
    Category: {
        products: (parent, args, context) => {
            return db.products.filter((product) => product.categoryId === parent.id);
        },
    },
};
