import React from "react";
import { Link } from "react-router-dom";
import "../../src/styles/contactcard.css";
import { useContactsContext } from "../context/ContextApi";
import user from "../Images/user.jpg";

const ContactCard = (props) => {
  const { removeContactHandler } = useContactsContext();

  const deleteContact = (id) => {
    removeContactHandler(id);
  };
  const { id, name, email } = props.contact;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card m-3">
              <img
                src={user}
                alt={name}
                className="img-fluid img-thumbnail profile m-3"
              />
              <div className="card-body">
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                  <div className="card-text">
                    <div className="card-title">Name: {name}</div>
                    <p className="card-text">Email-Id: {email}</p>
                  </div>
                </Link>
                <i
                  className="fas fa-trash m-3"
                  onClick={() => deleteContact(id)}
                ></i>
                <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
                  <i className="fas fa-edit"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
