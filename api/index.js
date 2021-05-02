const { ApolloServer } = require("apollo-server");
const { mergeTypeDefs } = require("graphql-tools");
const { userSchema } = require("./user/schema/user.graphql");

const users = [
  {
    name: "Gui",
    ativo: true,
  },
  {
    name: "Nat",
    ativo: false,
  },
];

const typeDefs = [userSchema];
const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`);
});
