import Container from 'components/Container';
import Form from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import { useFetchContactsQuery } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth';

export default function Contacts() {
  const name = useSelector(getUserName);
  const { data } = useFetchContactsQuery(name);

  return (
    <>
      <Container title="Phonebook">
        <Form contacts={data} />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactsList contacts={data} />
      </Container>
    </>
  );
}
