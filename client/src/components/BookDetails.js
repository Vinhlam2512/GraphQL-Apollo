import { useQuery } from '@apollo/client';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { getSingleBook } from '../graphql-client/queries';

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(getSingleBook, {
        variables: {
            // pass data to query
            id: bookId,
        },
        skip: bookId === null,
    });

    if (loading) {
        return <p>Loading Book Detail.....</p>;
    }
    if (error) {
        return <p>Error loading books!</p>;
    }

    const book = bookId !== null ? data.book : null;
    console.log(book);
    return (
        <Card bg='info' text='white' className='shadow'>
            <Card.Body>
                {book == null ? (
                    <Card.Text>Please select a book</Card.Text>
                ) : (
                    <div>
                        <Card.Title>{book.name}</Card.Title>
                        <Card.Subtitle>{book.genre}</Card.Subtitle>
                        <p>{book.author.name}</p>
                        <p>Age :{book.author.age}</p>
                        <p>All book by this author</p>
                        <ul>
                            {book.author.books.map(book => (
                                <li key={book.id}>{book.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default BookDetails;
