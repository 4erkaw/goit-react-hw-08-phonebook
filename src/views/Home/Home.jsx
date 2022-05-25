import Container from '../../components/Container';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Welcome from './../../components/Welcome/Welcome';

const welcomeContent = {
  welcome: 'Welcome to Contacts Service!',
  authorize: 'Please authorize to start',
};

export default function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      {isLoggedIn ? <Welcome /> : <Welcome content={welcomeContent} />}
    </Container>
  );
}

// {isLoggedIn ? (
//   <Container>
//     <Welcome />
//   </Container>
// ) : (
//   <Container>
//     <Welcome content={welcomeContent} />
//   </Container>
// )}
