import s from './Contacts.module.css';
import { FaRegUserCircle, FaBan } from 'react-icons/fa';
import { useDeleteContactMutation } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export default function ContactsList({ contacts }) {
  const [remove] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const contactsList = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
