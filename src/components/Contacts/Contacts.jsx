import s from './Contacts.module.css';
import { FaRegUserCircle, FaBan } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Contacts({ contacts, remove }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            <FaRegUserCircle size="13px" /> {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              remove(id);
            }}
          >
            <FaBan />
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  remove: PropTypes.func.isRequired,
};
