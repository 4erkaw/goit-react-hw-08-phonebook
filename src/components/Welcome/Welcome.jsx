import s from './Welcome.module.css';
import { getUserName } from 'redux/auth';
import { useSelector } from 'react-redux';

export default function Welcome({ content }) {
  const { welcome, authorize } = content || '';
  const name = useSelector(getUserName);
  return (
    <div className={s.welcome}>
      {content ? (
        <>
          <h2>{welcome}</h2>
          <h2>{authorize}</h2>
        </>
      ) : (
        <h1>Glad to see you {name}!</h1>
      )}
    </div>
  );
}
