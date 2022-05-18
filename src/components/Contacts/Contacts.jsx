import s from './Contacts.module.css';
import { FaRegUserCircle, FaBan } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/contacts/contacts-actions';
import { getFilteredContacts } from './../../redux/contacts/contacts-selectors';

export default function Contacts() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              <FaRegUserCircle size="13px" /> {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(remove(id))}>
              <FaBan />
            </button>
          </li>
        ))}
    </ul>
  );
}
