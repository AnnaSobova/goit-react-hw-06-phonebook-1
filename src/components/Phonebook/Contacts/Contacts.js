import React from 'react';
import ContactsItem from './Contacts.styled';
import InputFilter from '../Input/InputFilter/inputFilter';
import LabelFilter from '../Label/LabelFilter/LabelFilter';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const Contacts = ({ name }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

  return (
    <ContactsItem>
      <p>{name}</p>
      <LabelFilter title="Find contacts by name">
        <InputFilter />
      </LabelFilter>
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} {contact.number}
            </span>
            <ButtonDelete
              name="Delete"
              onClickDelete={() => dispatch(removeContact(contact.id))}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </ContactsItem>
  );
};

export default Contacts;

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
};
