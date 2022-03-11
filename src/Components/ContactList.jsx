import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import "../../src/styles/contactlist.css";
import { useContactsContext } from "../context/ContextApi";

const ContactList = () => {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsContext();

  useEffect(() => {
    retrieveContacts();
  }, []);

  const renderContactList = (searchTerm < 1 ? contacts : searchResults).map(
    (contact) => {
      return <ContactCard contact={contact} key={contact.id} />;
    }
  );

  const onSearch = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <div className="container list-top">
      <h3 className="text-center m-3">Contact Lists</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="search contacts"
          value={searchTerm}
          onChange={(e) => onSearch(e)}
        />
        <Link to="/add">
          <button className="btn btn-primary d-block mx-auto">
            Add Contact
          </button>
        </Link>
      </div>
      {renderContactList.length > 0
        ? renderContactList
        : "No Contacts Available"}
    </div>
  );
};

export default ContactList;
