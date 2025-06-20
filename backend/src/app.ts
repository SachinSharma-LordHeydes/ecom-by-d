import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { resolvers, typeDefs } from "./graphql";
import { dbConnect } from "./utils/database/dbConnect";

interface MyContext {
  req: Request;
  res: Response;
}

export const startServer = async () => {
  dotenv.config();
  await dbConnect();

  const app = express();
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ req, res }),
    })
  );
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
};
