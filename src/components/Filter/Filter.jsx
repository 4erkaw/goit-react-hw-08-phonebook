import s from './Filter.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from './../../redux/contacts/contacts-actions';

export default function Filter() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const value = e.target.value;
    setFilter(value);
    dispatch(changeFilter(value));
  };
  return (
    <input
      className={s.filter}
      type="text"
      onChange={handleChange}
      value={filter}
    />
  );
}
