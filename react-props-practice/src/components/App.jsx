import React from "react";
import Card from './Card';
import contacts from '../contacts';

function App() {
  return (
    <div>
      {contacts.map(Contact =>
        <Card name={Contact.name} imgURL={Contact.imgURL} phone={Contact.phone} email={Contact.email} />)}
    </div>

  )
}

export default App;
