import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid'
import { Contacts } from './Contacts/Contacts';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  
  addContact = newContact => {
   console.log(newContact)
   this.setState(prevState =>({
    contacts:[...prevState.contacts, { ...newContact, id: nanoid()}]
   }))
  }

  render() {
    return (
      <>
        <PhonebookForm onAdd = {this.addContact}/>
        <Contacts contact = {this.state.contacts}/>
      </>
    );
  }
}
