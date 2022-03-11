import React from "react";
import { Link, useLocation } from "react-router-dom";
import Pixbay from "../Images/pixbay.png";
import "../../src/styles/contactdetail.css";

const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state.contact;
  return (
    <>
      <div className="container details">
        <div className="row">
          <div className="col">
            <div className="card w-100 d-block mx-auto">
              <img
                className="card-img-top m-3 img-thumbnail w-25 d-block mx-auto"
                src={Pixbay}
                alt="pixbay"
              />
              <div className="card-body m-3 text-center border">
                <div className="card-title">{name}</div>
                <div className="card-text">{email}</div>
                <Link to="/">
                  <button className="btn btn-primary mx-auto d-block">
                    Back to Contact List
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
