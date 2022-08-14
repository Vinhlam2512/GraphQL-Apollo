import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookDetails from './BookDetails';

import { useQuery } from '@apollo/client';
import { getBooks } from '../graphql-client/queries';

const BookList = () => {
    const [bookSelected, setBookSelected] = useState(null);
    const { loading, error, data } = useQuery(getBooks);

    if (loading) {
        return <p>Loading Book.....</p>;
    }
    if (error) {
        return <p>Error loading books!</p>;
    }
    return (
        <Row>
            <Col xs={8}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
                    {data.books.map(book => (
                        <Card
                            border='info'
                            text='info'
                            className='text-center  shadow'
                            key={book.id}
                            onClick={setBookSelected.bind(this, book.id)}>
                            <Card.Body>{book.name}</Card.Body>
                        </Card>
                    ))}
                </div>
            </Col>
            <Col>
                <BookDetails bookId={bookSelected}></BookDetails>
            </Col>
        </Row>
    );
};

export default BookList;
