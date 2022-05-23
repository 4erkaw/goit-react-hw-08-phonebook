import s from './Container.module.css';
import PropTypes from 'prop-types';

export default function Container({ title, children }) {
  return (
    <div className={s.container}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
