import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/styles/addcontact.css";
import { useContactsContext } from "../context/ContextApi";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addContactHandler } = useContactsContext();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandetory");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };
  return (
    <div className="container top">
      <h4 className="text-center m-3">Add Contact</h4>
      <form onSubmit={add}>
        <div className="form-group mt-3">
          <label for="name" className="mt-3">
            Name
          </label>
          <input
            type="text"
            className="form-control mt-3 w-100"
            name="name"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary text-decoration-none">
          AddContact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
