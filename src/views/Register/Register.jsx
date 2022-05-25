import { useState } from 'react';
import { register } from 'redux/auth';
import { useDispatch } from 'react-redux';
import s from '../../components/ContactForm/ContactForm.module.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    // return Notify.success(`${name} was added to your contacts`);
  };

  return (
    <form className={s.container} onSubmit={onSubmit}>
      <p>Username</p>
      <input
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <p>Email</p>
      <input
        value={email}
        type="email"
        name="email"
        required
        onChange={handleChange}
      />
      <p>Password</p>
      <input
        value={password}
        type="password"
        name="password"
        required
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}
