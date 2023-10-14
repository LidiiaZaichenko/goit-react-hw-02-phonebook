import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid'
import { Contacts } from './Contacts/Contacts';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = newContact => {
   console.log(newContact)
   this.setState(prevState =>({
    contacts:[...prevState.contacts, { ...newContact, id:nanoid()}]
   }))
  }


  render() {
    return (
      <>
        <PhonebookForm onAdd = {this.addContact}/>
        <Contacts listContacts = {this.state.contacts}/>
      </>
    );
  }


}


