import React, { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { useDispatch } from 'react-redux';
import * as contactOperations from '../../redux/operations-phone/operations-phone';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContact());
  }, [dispatch]);

  return (
    <div style={{ marginTop: 100 }}>
      <h1 style={{ color: '#00008B', textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 style={{ color: '#008B8B' }}>Contacts</h2>
      <ContactList />
    </div>
  );
}
