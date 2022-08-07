const Author = require('../models/Author');
const Book = require('../models/Book');

const resolvers = {
    // Query
    Query: {
        // define query
        // context is created in app.js
        // can pass context or {mongoDataMethods}
        // args is an object
        // parent is data is got
        books: async (parent, args, context) => await context.mongoDataMethods.getAllBooks(),
        book: async (parent, { id }, context) => await context.mongoDataMethods.getBookById(id),
        authors: async (parent, args, context) => await context.mongoDataMethods.getAllAuthors(),
        author: async (parent, args, context) => await context.mongoDataMethods.getAuthorById(args.id),
    },
    Book: {
        // when query have Book field
        author: async (parent, args, context) => {
            // define when Book have author field
            return await context.mongoDataMethods.getAuthorById(parent.authorId);
        },
    },
    Author: {
        books: async (parent, args, context) => await context.mongoDataMethods.getAllBooks({ authorId: parent.id }),
    },
    // Mutation
    Mutation: {
        createAuthor: async (parent, args, context) => await context.mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, context) => await context.mongoDataMethods.createBook(args),
    },
};

module.exports = resolvers;
