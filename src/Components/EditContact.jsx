import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../src/styles/editcontact.css";
import { useContactsContext } from "../context/ContextApi";

const EditContact = () => {
  const location = useLocation();
  const { id, name, email } = location.state.contact;
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const navigate = useNavigate();
  const { updateContactHandler } = useContactsContext();
  const update = (e) => {
    e.preventDefault();
    if (editName === "" || editEmail === "") {
      alert("All fields are mandetory");
      return;
    }
    updateContactHandler({ id, name: editName, email: editEmail });
    setEditName("");
    setEditEmail("");
    navigate("/");
  };
  return (
    <div className="container top">
      <h4 className="text-center m-3">Edit Contact</h4>
      <form onSubmit={update}>
        <div className="form-group mt-3">
          <label for="name" className="mt-3">
            Name
          </label>
          <input
            type="text"
            className="form-control mt-3 w-100"
            name="name"
            placeholder="enter your name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="email" className="mt-3">
            Email
          </label>
          <input
            type="text"
            className="form-control mt-3 w-100"
            name="email"
            placeholder="enter your email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">EditContact</button>
      </form>
    </div>
  );
};

export default EditContact;
