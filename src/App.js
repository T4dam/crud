import {useState} from 'react';
import Header from './components/header.js';
import AddContact from './components/add-contact.js';
import ContactList from './components/contact-list.js';


function App() {
const [contacts, setContacts] = useState([])

  // const contacts = [
  //   {
  //     id: '1',
  //     name: "John",
  //     email: "cena@gmail.com"
  //   },
  //   {
  //     id: '2',
  //     name: "Eduard",
  //     email: "Batista@gmail.com"
  //   },
  // ]
const addContactHandler = (deliveredProps) => { //gauna kontaktus per propsus iš vaikinio elemento add-contact per per propsus
  console.log(deliveredProps)
  setContacts([...contacts, deliveredProps])//...išlaiko esama kontaktu sąrašą ir prideda naujus.
}

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
