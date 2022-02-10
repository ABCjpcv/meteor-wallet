import React from 'react';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactsForm';

//Contacts: name, email, imageURL
export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactForm />
    <ContactList />
  </div>
);
