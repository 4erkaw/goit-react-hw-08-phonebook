import { NavLink } from 'react-router-dom';
import s from '../Navbar/Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { BsPersonLinesFill } from 'react-icons/bs';
import { MdExitToApp } from 'react-icons/md';
import { getUserName, logOut } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Contacs
      </NavLink>

      <p className={s.right}>
        <BsPersonLinesFill size={22} />
        Welcome {name}!
        <button
          className={s.button}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          <MdExitToApp size={24} />
        </button>
      </p>
    </>
  );
}
