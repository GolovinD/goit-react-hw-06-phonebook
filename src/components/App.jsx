// import React, { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

function App() {
  const contacts = useSelector(getContacts);

  // const [contacts, setContacts] = useState(getContacts);
  // const [filter, setFilter] = useState('');

  // function getContacts() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'))
  //   if (contacts) {
  //     return contacts;
  //     }
  // }

  // // useEffect(() => {
  // //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // // }, [contacts]);

  // const getWantedContacts = () => {
  //   // console.log(filter);
  //   const standarValue = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(standarValue)
  //   );
  // };

  // function handleNameChange (event) {
  //   setFilter(event.currentTarget.value);
  // }

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contact">
        <Filter
        // filterData={filter}
        // onFilter={handleNameChange}
        />
        {contacts.length > 0 && <ContactList />}
      </Section>
    </div>
  );
}

export default App;
