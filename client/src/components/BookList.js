import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookDetails from './BookDetails';

const BookList = () => {
    return (
        <Row>
            <Col xs={8}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
                    <Card border='info' text='info' className='text-center  shadow'>
                        <Card.Body>vinh</Card.Body>
                    </Card>
                    <Card border='info' text='info' className='text-center  shadow'>
                        <Card.Body>vinh</Card.Body>
                    </Card>
                    <Card border='info' text='info' className='text-center  shadow'>
                        <Card.Body>vinh</Card.Body>
                    </Card>
                    <Card border='info' text='info' className='text-center  shadow'>
                        <Card.Body>vinh</Card.Body>
                    </Card>
                    <Card border='info' text='info' className='text-center  shadow'>
                        <Card.Body>vinh</Card.Body>
                    </Card>
                    <Card border='info' text='info' className='text-center  shadow'>
                        <Card.Body>vinh</Card.Body>
                    </Card>
                </div>
            </Col>
            <Col>
                <BookDetails></BookDetails>
            </Col>
        </Row>
    );
};

export default BookList;
