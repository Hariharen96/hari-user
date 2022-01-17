import React from "react";
import "../../src/styles/addcontact.css";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandetory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.props);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container top">
        <h4 className="text-center m-3">Add Contact</h4>
        <form onSubmit={this.add}>
          <div className="form-group mt-3">
            <label for="name" className="mt-3">
              Name
            </label>
            <input
              type="text"
              className="form-control mt-3 w-100"
              name="name"
              placeholder="enter your name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
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
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="btn btn-primary text-decoration-none">
            AddContact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
