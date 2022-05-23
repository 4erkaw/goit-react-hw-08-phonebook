import s from './Navbar.module.css';
import Container from './../Container/Container';
import AuthNav from './AuthNav';
import authSelectors from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
export default function Navbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
