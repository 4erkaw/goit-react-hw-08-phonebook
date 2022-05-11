import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Form from './Form';
import Contacts from './Contacts';
import Container from './Container';
import Filter from './Filter';
import useLocalStorage from '../hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');
  const addContact = info => {
    if (checkContact(info.name)) {
      return Notify.failure(`${info.name} is already in contacts list`);
    }
    setContacts(prev => [{ id: nanoid(), ...info }, ...prev]);
    setContacts([{ id: nanoid(), ...info }, ...contacts]);
  };

  const checkContact = name => {
    if (!contacts) {
      return false;
    }
    const find = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    return find;
  };

  const remove = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Container title="Phonebook">
        <Form addContact={addContact} />
      </Container>
      {contacts && (
        <Container title="Contacts">
          <Filter value={filter} onChange={changeFilter} />
          <Contacts remove={remove} contacts={filteredContacts()} />
        </Container>
      )}
    </>
  );
}

// export default class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contactsList = localStorage.getItem('Contacts');
//     const parsedContacts = JSON.parse(contactsList);
//     if (parsedContacts) {
//       this.setState({
//         contacts: parsedContacts,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = info => {
//     if (this.checkContact(info.name)) {
//       return Notify.failure(`${info.name} is already in contacts list`);
//     }
//     this.setState(({ contacts }) => ({
//       contacts: [{ ...info, id: nanoid() }, ...contacts],
//     }));
//   };

//   checkContact = name => {
//     const find = this.state.contacts.some(contact => {
//       return contact.name.toLowerCase() === name.toLowerCase();
//     });
//     return find;
//   };

//   changeFilter = e => {
//     e.preventDefault();
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   remove = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   filteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const toLowerCaseFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(toLowerCaseFilter)
//     );
//   };
//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.filteredContacts();
//     return (
//       <>
//         <Container title="Phonebook">
//           <Form addContact={this.addContact} />
//         </Container>
//         <Container title="Contacts">
//           <Filter value={filter} onChange={this.changeFilter} />
//           <Contacts remove={this.remove} contacts={filteredContacts} />
//         </Container>
//       </>
//     );
//   }
// }
