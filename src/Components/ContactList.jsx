import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import "../../src/styles/contactlist.css";

const ContactList = (props) => {
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="container list-top">
      <h3 className="text-center m-3">Contact Lists</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          ref={inputEl}
          placeholder="search contacts"
          value={props.term}
          onChange={getSearchTerm}
        />
        <Link to="/add">
          <button className="btn btn-primary d-block mx-auto">
            Add Contact
          </button>
        </Link>
      </div>
      {/* {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}
       */}
      {renderContactList}
    </div>
  );
};

export default ContactList;
