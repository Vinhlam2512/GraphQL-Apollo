const express = require('express');

const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Load Schema and Resolvers

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// Load DB methods
const mongoDataMethods = require('./data/db');

//Connect to mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/GraphQL', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
connectDB();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
    console.log(`Server start at http://localhost:4000${server.graphqlPath}`);
});
