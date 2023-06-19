const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Product {
    id: String
    name: String
    rating: Int
    imageUrl: String
    price: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    products: [Product]
  }
  
   type User {
    email: String
    password: String
    phone: String
  }
  
  input UserInput {
    email: String!
    password: String!
    phone: String
  }
  
  input ProductInput {
    name: String!
    rating: Int!
    imageUrl: String
    price: Int!
  }
  
  type Mutation {
    createUser(input: UserInput): User  
    createProduct(input: ProductInput): Product  
  }
  
`;

export default typeDefs;