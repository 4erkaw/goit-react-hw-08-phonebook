import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from './../../redux/contacts/contacts-actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <input
      className={s.filter}
      type="text"
      onChange={e => dispatch(changeFilter(e.target.value))}
      value={value}
    />
  );
}
