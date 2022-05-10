import { useState } from 'react';
import s from './Form.module.css';
import { FaPhone, FaRegUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Form({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const onSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
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

// export default class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { value, name } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     this.props.addContact({ name, number });
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={s.container} onSubmit={this.onSubmit}>
//         <p>
//           Name <FaRegUser size="12px" />
//         </p>
//         <input
//           value={name}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleChange}
//         />
//         <p>
//           Phone <FaPhone size="12px" />
//         </p>
//         <input
//           value={number}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={this.handleChange}
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
