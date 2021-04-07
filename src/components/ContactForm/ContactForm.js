import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as contactOperations from '../../redux/operations-phone/operations-phone';
import { Button, Grid, Paper, TextField } from '@material-ui/core';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const paperStyle = {
    padding: 20,
    heihth: 70,
    width: 400,
    margin: '20px auto',
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(contactOperations.addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <Grid align="center">
      <Paper style={paperStyle}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Number"
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            fullWidth
          />

          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            style={{ marginTop: 20 }}
          >
            Add contact
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
