import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <input className={s.filter} type="text" onChange={onChange} value={value} />
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
