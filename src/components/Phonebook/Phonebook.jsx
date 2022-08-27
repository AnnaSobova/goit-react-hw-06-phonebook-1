import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/store';

import InputName from './Input/InputName/InputName';
import LabelPhoneBook from './Label/Label';
import ButtonSubmit from './Button/ButtonSubmit';
import InputNumber from './Input/InputNumber/inputNumber';
import FormPhonebook from './Form/Form';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const formSubmitHandle = data => {
    const id = nanoid();
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    data.id = id;

    dispatch(addContact(data));
  };

  const clickOnBtnSubmit = e => {
    e.preventDefault();
    formSubmitHandle({ name, number });
    reset();
  };

  return (
    <FormPhonebook onSubmit={clickOnBtnSubmit}>
      <LabelPhoneBook title="Name">
        <InputName value={name} onChange={handleChange} />
      </LabelPhoneBook>
      <LabelPhoneBook title="Number">
        <InputNumber value={number} onChange={handleChange} />
      </LabelPhoneBook>
      <ButtonSubmit text="Add contact" />
    </FormPhonebook>
  );
};

export default Phonebook;
