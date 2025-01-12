import { db } from "../../lib/db.js";

export const resolvers = {
  Query: {
    // get all products
    products: () => db.products,
    // get single products
    product: (parent: any, args: { productId: string }, context: any) => {
      const result = db.products.find((pd) => pd.id === args.productId);
      return result;
    },
  },
};
