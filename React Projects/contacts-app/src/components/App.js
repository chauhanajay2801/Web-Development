import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactCard from './ContactCard';


function App() {

  const contacts = [
    {
      id: "1",
      name : "Ajay Chauhan",
      email: "chauhanajay280195@gmail.com"
    },
    {
      id: "2",
      name : "Aviral Bhardwaj",
      email: "aviral1102@gmail.com"
    },
  ];

  return (
    <div className='ui container'>
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
    {/* <ContactCard contacts={contacts}/> */}
    </div>
  );
}

export default App;
