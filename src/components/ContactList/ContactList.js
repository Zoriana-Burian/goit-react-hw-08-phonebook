import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as contactOperations from '../../redux/operations-phone/operations-phone';
import { visibleContacts } from '../../redux/selector-phone/selector-phone';
import { Button } from '@material-ui/core';

const ContactList = () => {
  const contacts = useSelector(visibleContacts);
  const dispatch = useDispatch();
  const OnDeleteContact = id => dispatch(contactOperations.deleteContacts(id));
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contacts} key={id}>
          <p className={s.name}>{name}:</p>
          <p className={s.number}>{number}</p>
          <Button
            variant="contained"
            color="primary"
            type="button"
            style={{ marginRight: 15 }}
            onClick={() => OnDeleteContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  OnDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
