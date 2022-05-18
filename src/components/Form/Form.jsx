import s from './Form.module.css';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { FaPhone, FaRegUser } from 'react-icons/fa';
import { add } from 'redux/contacts/contacts-actions';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from 'redux/contacts/contacts-selectors';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
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

  const checkContact = name => {
    if (!contacts) {
      return false;
    }
    const find = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    return find;
  };

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    if (checkContact(name)) {
      return Notify.failure(`${name} is already in contacts list`);
    }
    dispatch(add({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.container} onSubmit={onSubmit}>
      <p>
        Name <FaRegUser size="12px" />
      </p>
      <input
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <p>
        Phone <FaPhone size="12px" />
      </p>
      <input
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
