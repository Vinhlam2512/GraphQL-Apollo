import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useMutation } from '@apollo/client';
import { getAuthors } from '../graphql-client/queries';
import { addSingleAuthor } from '../graphql-client/mutations';

const AuthorForm = () => {
    const [newAuthor, setnewAuthor] = useState({
        name: '',
        age: '',
    });

    const { name, age } = newAuthor;

    const onInputChange = event => {
        setnewAuthor({
            ...newAuthor,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        addAuthor({
            variables: {
                name,
                age: parseInt(age),
            },
            refetchQueries: [{ query: getAuthors }],
        });
        setnewAuthor({
            name: '',
            age: '',
        });
    };

    const [addAuthor, dataMutation] = useMutation(addSingleAuthor);
    console.log(dataMutation);

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className='invisible'>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='Author Name' name='name' onChange={onInputChange} value={name} />
            </Form.Group>
            <Form.Group>
                <Form.Control type='number' placeholder='Author Age' name='age' onChange={onInputChange} value={age} />
            </Form.Group>
            <Button className='float-right' variant='info' type='submit'>
                Add Author
            </Button>
        </Form>
    );
};

export default AuthorForm;
