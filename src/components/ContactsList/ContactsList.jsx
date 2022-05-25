import s from './Contacts.module.css';
import { FaRegUserCircle, FaBan } from 'react-icons/fa';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter';
import { Notify } from 'notiflix';
import { getUserName } from 'redux/auth';

export default function ContactsList() {
  const email = useSelector(getUserName);
  const contactsList = useFetchContactsQuery(email);
  const [remove] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  console.log(contactsList);

  const contacts = contactsList.data?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  const removeContact = (id, name) => {
    remove(id);
    Notify.info(`${name} contact was removed`);
  };
  return (
    <ul className={s.list}>
      {contacts?.length > 0 &&
        contacts.map(({ name, number, id }) => (
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
