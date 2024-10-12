import './App.css';
import { useState } from 'react';
import Contacts from './components/contact/Contacts';

import { AddContact, EditContact, ViewContact, Navbar } from './components';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContact, setContact] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <AddContact />
      <EditContact />
      <ViewContact />
      <Contacts contacts={getContact} loading={loading} />
    </div>
  );
}

export default App;
