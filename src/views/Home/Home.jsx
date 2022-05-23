import Container from '../../components/Container';
import Register from 'components/Navbar/Register';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Contacts from '../Contacts/Contacts';

export default function Home() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Container>
          <h1>Welcome to Contacts Service</h1>
        </Container>
      ) : (
        <Container title="Register">
          <Register />
        </Container>
      )}
    </>
  );
}
