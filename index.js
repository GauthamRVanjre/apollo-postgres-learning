import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/schema.js";
import { resolvers } from "./resolvers/resolvers.js";

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server);

  console.log(`🚀  Server ready at: ${url}`);
}

await startServer();
