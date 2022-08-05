const { books, authors } = require('../data/static');

const resolvers = {
    // Query
    Query: {
        // define query
        books: () => books,
        book: (parent, args) => books.find(book => book.id == args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(author => author.id == args.id),
    },
    Book: {
        // when query have Book field
        author: (parent, args) => {
            // define when Book have author field
            return authors.find(author => author.id == parent.authorId);
        },
    },
    Author: {
        books: (parent, args) => {
            return books.filter(book => book.authorId == parent.id);
        },
    },
    // Mutation
    Mutation: {
        createAuthor: (parent, args) => {
            return args;
        },
        createBook: (parent, args) => args,
    },
};

module.exports = resolvers;
