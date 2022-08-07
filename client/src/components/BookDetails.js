import React from 'react';
import Card from 'react-bootstrap/Card';

const BookDetails = () => {
    return (
        <Card bg='info' text='white' className='shadow'>
            <Card.Body>
                <Card.Title>Vinh</Card.Title>
                <Card.Subtitle>Tieu thuyest</Card.Subtitle>
                <Card.Text>
                    <p>lam quang Vinh</p>
                    <p>Age: 90</p>
                    <p>All book by this author</p>
                    <ul>
                        <li>test1</li>
                        <li>test2</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BookDetails;
