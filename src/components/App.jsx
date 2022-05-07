import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';
import Container from './Container';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsList = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(contactsList);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = info => {
    this.setState(({ contacts }) => ({
      contacts: [{ ...info, id: nanoid() }, ...contacts],
    }));
  };

  checkContact = name => {
    const find = this.state.contacts.find(contact => contact.name === name);
    return Boolean(find);
  };

  changeFilter = e => {
    e.preventDefault();
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  remove = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(toLowerCaseFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const filteredContacts = this.filteredContacts();
    return (
      <>
        <Container title="Phonebook">
          <Form checkContact={this.checkContact} addContact={this.addContact} />
        </Container>
        <Container title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts remove={this.remove} contacts={filteredContacts} />
        </Container>
      </>
    );
  }
}
