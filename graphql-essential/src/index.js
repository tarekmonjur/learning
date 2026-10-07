import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { randomUUID } from "node:crypto";
import { ruruHTML } from "ruru/server";
import schema from "./schema/index.js";

// The root provides a resolver function for each API endpoint
const root = {
  hello() {
    return "Hello world!";
  },
  product() {
    return {
      id: 3242342342,
      name: 'widget',
      description: 'Beautiful widget to use in your garden',
      price: 23.56,
      soldout: false,
      stores: [
        { store: "Chittagong" },
        { store: "Feni" }
      ]
    };
  },
  createProduct: ({input}) => {
    let id = randomUUID();
    productDatabase[id] = input;
    return new Product(id, input);
  }
};

class Product {
  constructor(id, { name, description, price, soldout, stores}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.stores = stores;
  }
}

const productDatabase = {};

const app = express();

// app.get("/", (req, res) => {
//   res.send("GraphQl is amazing");
// });

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/gql" }));
});

// Create and use the GraphQL handler.
app.all(
  "/gql",
  createHandler({
    schema: schema,
    rootValue: root,
  }),
);

app.listen(8080, () => console.log("running the graphql server on port 8080"));
