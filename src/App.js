import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import { useEffect, useState } from "react";
import ContactDetail from "./Components/ContactDetail";
import EditContact from "./Components/EditContact";
import Pagenotfound from "./Components/Pagenotfound";
import { ContactsContextProvider } from "./context/ContextApi";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    //Routing of contacts
    <div className="Container">
      <Router>
        <Header />
        <ContactsContextProvider>
          <Routes>
            <Route exact path="/" element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </ContactsContextProvider>
      </Router>
    </div>
  );
}

export default App;
