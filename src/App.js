import './App.css';
import { useEffect, useState } from 'react';
import Contacts from './components/contact/Contacts';
// index.jsx component
import { AddContact, EditContact, ViewContact, Navbar } from './components';
// outlet way
import { Outlet, Route, Navigate, Routes } from 'react-router-dom';
import axios from "axios";


const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContact, setContact] = useState([]);
  const [getGroup, setGroup] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true);
        const { data: contactData } = await axios.get("http://localhost:9000/contacts");
        const { data: groupData } = await axios.get("http://localhost:9000/group");
        setContact(contactData);
        setGroup(groupData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to={"/contacts"} />} />
        <Route path='/contacts' element={<Contacts contacts={getContact} loading={loading} />} />
        <Route path='/addcontact' element={<AddContact />} />
        <Route path='/contacts/:contactId' element={<ViewContact />} />
        <Route path='/contact/edit/:contactId' element={<EditContact />} />
      </Routes>
      {/* <AddContact />
      <EditContact />
      <ViewContact /> */}
      {/* <Contacts contacts={getContact} loading={loading} /> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
