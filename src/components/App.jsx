import Form from './Form';
import Contacts from './Contacts';
import Container from './Container';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from './../redux/contacts/contacts-selectors';

export default function App() {
  const contacts = useSelector(getFilteredContacts);
  return (
    <>
      <Container title="Phonebook">
        <Form />
      </Container>
      {contacts && (
        <Container title="Contacts">
          <Filter />
          <Contacts />
        </Container>
      )}
    </>
  );
}
