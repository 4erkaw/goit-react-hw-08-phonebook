import s from './ContactForm.module.css';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { FaPhone, FaRegUser } from 'react-icons/fa';
import { useAddContactMutation, useFetchContactsQuery } from 'redux/contacts';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

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
    if (!data) {
      return false;
    }
    const find = data.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    return find;
  };

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    if (checkContact(name)) {
      return Notify.failure(`${name} is already in contacts`);
    }
    addContact({ name, number });
    setName('');
    setNumber('');
    return Notify.success(`${name} was added to your contacts`);
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
