import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {

const LOCAL_STORAGE_KEY = "contacts"; // key to provide in the use effect for local storage need
const [contacts, setContacts] = useState([])

const addContactHandler = (contact) =>{
  console.log(contact)
  setContacts([...contacts, contact]) //array destructuring
};

useEffect(()=>{ // this one needed to add the data from the local storage 
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //adding key
  // if (retrieveContacts) 
  setContacts(retrieveContacts);
},[]) 

useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); //adding key
},[contacts]) //adding contacts as dependency


  return (
    <div className='ui container'>
    <Header/>
    <AddContact addContactHandler = {addContactHandler}/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
