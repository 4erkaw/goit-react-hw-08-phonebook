import s from './Welcome.module.css';
// import { getUserName } from 'redux/auth';
import { useSelector } from 'react-redux';

export default function Welcome() {
  // const name = useSelector(getUserName);
  return (
    <div className={s.welcome}>
      <h1>Glad to see you!</h1>
    </div>
  );
}
