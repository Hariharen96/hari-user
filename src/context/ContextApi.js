import { createContext, useContext, useState } from "react";
import { uuid } from "uuidv4";
import api from "../api/contacts";

const contactsContext = createContext();

export const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //getcontacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  };

  //deletecontacts
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //addcontacts
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  //updatecontacts
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  //searchhandler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  const value = {
    contacts,
    retrieveContacts,
    removeContactHandler,
    addContactHandler,
    updateContactHandler,
    searchTerm,
    searchResults,
    searchHandler,
  };
  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  );
};

export const useContactsContext = () => {
  return useContext(contactsContext);
};
