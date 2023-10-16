import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { SearchBar } from './SearchBar/SearchBar';
import { Title } from './Title/Title';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    console.log(newContact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  chengeContactFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const getVisibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Title title = 'Phonebook'>
          <PhonebookForm onAdd={this.addContact} />
        </Title>

        <Title title = 'Contacts'>
          <SearchBar
            filter={filter}
            onChengeContact={this.chengeContactFilter}
          />
          <Contacts
            listContacts={getVisibleContacts}
            onDelete={this.deleteContact}
          />
        </Title>
      </>
    );
  }
}
