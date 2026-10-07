import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Product {
      id: ID
      name: String
      description: String
      price: Float
      soldout: Boolean
      stores: [Store]!
    }

    type Store {
      store: String
    }

    type Query {
      hello: String
      product: Product
    }

    input StoreInput {
      store: String
    }

    input ProductInput {
      id: ID
      name: String
      description: String
      price: Float
      soldout: Boolean
      stores: [StoreInput]!
    }

    type Mutation {
      createProduct(input: ProductInput): Product
    }
`)

export default schema;