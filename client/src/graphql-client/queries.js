import { gql } from '@apollo/client';

const getBooks = gql`
    query getBooksQuery {
        books {
            id
            name
            author {
                name
            }
        }
    }
`;

//$id: ID! truyền tham số là $id có dạng là ID
const getSingleBook = gql`
    query getSingleBook($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`;

const getAuthors = gql`
    query getAuthorsQuery {
        authors {
            id
            name
        }
    }
`;

export { getBooks, getSingleBook, getAuthors };
