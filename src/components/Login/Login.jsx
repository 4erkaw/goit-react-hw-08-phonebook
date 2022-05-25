import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth';
import { useLoginUserMutation } from 'redux/auth';
import s from '../ContactForm/ContactForm.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
    // return Notify.success(`${name} was added to your contacts`);
  };

  return (
    <form className={s.container} onSubmit={onSubmit}>
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
      <button type="submit">Log in</button>
    </form>
  );
}
