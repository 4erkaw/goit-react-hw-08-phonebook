import { NavLink } from 'react-router-dom';
import s from '../Navbar/Navbar.module.css';

export default function AuthNav() {
  return (
    <>
      <NavLink
        to="login"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Log in
      </NavLink>
    </>
  );
}
