import React from "react";
import "../../src/styles/editcontact.css";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    console.log(this.props);
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandetory");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.props);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container top">
        <h4 className="text-center m-3">Edit Contact</h4>
        <form onSubmit={this.update}>
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
          <button className="btn btn-primary">EditContact</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
