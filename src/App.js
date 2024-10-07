import './App.css';
import { useState } from 'react';
import Contacts from './components/contact/Contacts';
import Navbar from './components/Navbar';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContact, setContact] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContact} loading={loading} />
    </div>
  );
}

export default App;
