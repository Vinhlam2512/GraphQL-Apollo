const resolvers = {
    Query: {
        books: () => [
            {
                id: 1,
                name: 'vinh',
                genre: 'Adventure',
            },
            {
                id: 2,
                name: 'Test',
                genre: 'test',
            },
        ],
    },
};

module.exports = resolvers;
