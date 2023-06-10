import { ContactForm } from './ContactForm/contactForm'
import { ContactList } from './ContactList/contactList';
import Filter from './Filter/filter';
import { Title } from 'Global.styles';
import { useState, useEffect } from 'react';



const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  }
};


export default function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

 
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  

  const addNewContact = (newContact, { actions }) => {
    const duplicateName = contacts.map(el => el.name.toLowerCase());

   return duplicateName.includes(newContact.name.toLowerCase())
     ? alert(`${newContact.name} is already in contacts.`)
     : setContacts(prevContacts => {
       actions.resetForm();
      return [...prevContacts, newContact]})
  };

    const getVisibleContact = () => {

    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

   const onDeleteContacts = id => {
    setContacts(prevCOntacts => 
    prevCOntacts.filter(el => el.id !== id))
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  
  return (
      <div
      style={{
        fontSize: 40,
        color: '#010101'
      }}
      >
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addNewContact} />

        
        <Title>Contacts</Title>

        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={getVisibleContact()} delContact={onDeleteContacts} />

    </div>
    )
}

