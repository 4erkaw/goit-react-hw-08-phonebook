import s from './Contacts.module.css';
import { FaRegUserCircle, FaBan } from 'react-icons/fa';
import { useDeleteContactMutation } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter';
import { Notify } from 'notiflix';

export default function ContactsList({ contacts }) {
  const [remove] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const contactsList = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  console.log(contacts);
  const removeContact = (id, name) => {
    remove(id);
    Notify.info(`${name} contact was removed`);
  };
  return (
    <ul className={s.list}>
      {contactsList?.length > 0 &&
        contactsList.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              <FaRegUserCircle size="13px" /> {name}: {number}
            </p>
            <button type="button" onClick={() => removeContact(id, name)}>
              <FaBan />
            </button>
          </li>
        ))}
    </ul>
  );
}
