import User from "../schemes/User";
import Product from "../schemes/Product";


const resolvers = {
  Query: {
    products: async () => await Product.find({}).clone()
  },
  Mutation: {
    createProduct: async (_, {input}) => {
      await Product.create(input)
      return input
    },
    createUser: (_, {input}) => {
      User.create(input)
    }
  }
};

export default resolvers;