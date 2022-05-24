import s from './Navbar.module.css';
import Container from './../Container/Container';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : s.link)}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </Container>
    </header>
  );
}
