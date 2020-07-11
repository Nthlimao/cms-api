require("dotenv").config();

const { GraphQLServer, PubSub } = require("graphql-yoga");
const path = require("path");
const cors = require("cors");

const pubsub = new PubSub();
const typeDefs = path.resolve(__dirname, "./routes/api/schema.graphql");
const resolvers = require("./routes/api/resolvers.graphql");
// const middlewares = require('./routes/api/middlewares.graphql');
// middlewares: [middlewares],

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: (req) => ({ ...req, pubsub }),
});

server.express.use(cors());
server.start();
// http://localhost:4000
