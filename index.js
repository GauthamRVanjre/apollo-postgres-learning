import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/schema.js";

async function startServer() {
  const server = new ApolloServer({ typeDefs });
  const { url } = await startStandaloneServer(server);

  console.log(`🚀  Server ready at: ${url}`);
}

await startServer();
