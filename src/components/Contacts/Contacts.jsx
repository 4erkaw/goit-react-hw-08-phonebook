import s from './Contacts.module.css';
import { FaRegUserCircle, FaBan } from 'react-icons/fa';
import {
  useRemoveContactMutation,
  useFetchContactsQuery,
} from 'service/contactsAPI';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { Notify } from 'notiflix';

export default function Contacts() {
  const { data } = useFetchContactsQuery();
  const [remove] = useRemoveContactMutation();
  const filter = useSelector(getFilter)?.toLowerCase().trim();
  const contacts = data?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  const removeContact = (id, name) => {
    remove(id);
    Notify.info(`${name} contact was removed`);
  };
  return (
    <ul className={s.list}>
      {contacts?.length > 0 &&
        contacts.map(({ name, phone, id }) => (
          <li key={id}>
            <p>
              <FaRegUserCircle size="13px" /> {name}: {phone}
            </p>
            <button type="button" onClick={() => removeContact(id, name)}>
              <FaBan />
            </button>
          </li>
        ))}
    </ul>
  );
}
