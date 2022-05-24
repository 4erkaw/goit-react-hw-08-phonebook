import Container from '../../components/Container';
import Register from 'components/Register/Register';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Welcome from './../../components/Welcome/Welcome';

export default function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Container>
          <Welcome />
        </Container>
      ) : (
        <Register />
      )}
    </>
  );
}
