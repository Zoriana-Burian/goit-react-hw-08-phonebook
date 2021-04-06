import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import * as contactOperations from '../../redux/operations-phone/operations-phone';
import { Button, TextField } from '@material-ui/core';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

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
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      {/* <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
      </label> */}
      <TextField
        label="Number"
        type="text"
        name="number"
        value={number}
        onChange={handleChange}
      />
      {/* <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        ></input>
      </label> */}
      <Button variant="outlined" color="secondary" type="submit">
        Add contact
      </Button>
      {/* <button className={s.button} type="submit">
        Add contact
      </button> */}
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
