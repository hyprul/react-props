import React from "react";
import Card from './Card';
import contacts from '../contacts';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(Contact =>
        <Card name={Contact.name} imgURL={Contact.imgURL} phone={Contact.phone} email={Contact.email} />)}
    </div>

  )
}

export default App;
