const cors = require("cors");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
require("dotenv").config();


const { authMiddleware } = require("./utils/auth.js");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers: {
      ...resolvers,
    },
    context: authMiddleware,
  });
  
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
  };
  
  db.on("error", console.error.bind(console, "connection error:"));
  
  db.once("open", function () {
    console.log("We are connected to the database!");
    checkConnectionState();
  
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
  
  function checkConnectionState() {
    switch (db.readyState) {
      case 0:
        console.log("Mongoose connection state: disconnected");
        break;
      case 1:
        console.log("Mongoose connection state: connected");
        break;
      case 2:
        console.log("Mongoose connection state: connecting");
        break;
      case 3:
        console.log("Mongoose connection state: disconnecting");
        break;
      default:
        console.log("Mongoose connection state: unknown");
        break;
    }
  }
  
  startApolloServer();
  
  