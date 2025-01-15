import { db } from "../../lib/db.js";

export const resolvers = {
  Query: {
    // get all products
    products: () => db.products,
    // get single products
    product: (parent: any, args: { productId: string }, context: any) => {
      return db.products.find((pd) => pd.id === args.productId);
    },

    // get all categories
    categories: () => db.categories,
    // get single category by id
    category: (parent: any, args: { categoryId: string }, context: any) => {
      return db.categories.find((category) => category.id === args.categoryId);
    },
  },
};
