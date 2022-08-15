import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useQuery, useMutation } from '@apollo/client';
import { getAuthors } from '../graphql-client/queries';
import { addSingleBook } from '../graphql-client/mutations';
import { getBooks } from '../graphql-client/queries';

const BookForm = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        authorId: '',
    });

    const { name, genre, authorId } = newBook;

    const onInputChange = event => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        addBook({
            variables: {
                ...newBook,
            },
            refetchQueries: [{ query: getBooks }],
        });
        setNewBook({
            name: '',
            genre: '',
            authorId: '',
        });
    };

    //GraphQl operations
    const { loading, error, data } = useQuery(getAuthors);

    const [addBook, dataMutation] = useMutation(addSingleBook);
    console.log(dataMutation);

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control type='text' placeholder='Book Name' name='name' onChange={onInputChange} value={name} />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='Book Genre' name='genre' onChange={onInputChange} value={genre} />
            </Form.Group>
            <Form.Group>
                {loading ? (
                    <p>Loading author....</p>
                ) : (
                    <Form.Control as='select' name='authorId' onChange={onInputChange} value={authorId}>
                        <option value='' disabled>
                            Select author
                        </option>
                        {data.authors.map(author => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))}
                    </Form.Control>
                )}
            </Form.Group>
            <Button className='float-right' variant='info' type='submit'>
                Add Book
            </Button>
        </Form>
    );
};

export default BookForm;
