import Container from 'components/Container';
import Form from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

export default function Contacts() {
  return (
    <>
      <Container title="Phonebook">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
}
