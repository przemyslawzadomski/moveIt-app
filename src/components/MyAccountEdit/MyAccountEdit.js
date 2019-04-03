import React, { Component } from "react";
import "./MyAccountEdit.css";
import "../MyAccount/MyAccount.css";

class MyAccountEdit extends Component {
  state = {
    name: this.props.user.name,
    surname: this.props.user.surname,
    phone: this.props.user.phone,
    email: this.props.user.email,
    company: this.props.user.company,
    isCarrier: this.props.isCarrier
  };

  handleChange = event => {
    const fieldName = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({
      [fieldName]: value
    });
  };

  handleSaveClick = () => {
    this.props.handleData(
      this.state.company,
      this.state.name,
      this.state.surname,
      this.state.email,
      this.state.phone
    );
  };

  render() {
    return (
      <div className="MyAccount_carrier-information Width_480px">
        <h1 className="MyAccountEdit_title">
          {this.props.extraButtons()}
          <button
            onClick={this.handleSaveClick}
            className="MyAccount_add-button"
          >
            Zapisz
          </button>
        </h1>
        <div>
          <img
            className="MyAccount_user-photo"
            src="https://robohash.org/perferendisfugiatvoluptas.bmp?size=100x100&set=set1"
            alt="moje zdjęcie"
          />
        </div>
        {this.state.isCarrier?<div className="MyAccount_company-name">
          <input
            className="MyAccountEdit_input"
            value={this.state.company}
            name="company"
            onChange={this.handleChange}
          />
        </div>:null}
        
        <div className="MyAccount_information">
          <span className="MyAccount_information-title"></span>
          <input
            className="MyAccountEdit_input"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="MyAccount_information">
          <span className="MyAccount_information-title"></span>{" "}
          <input
            className="MyAccountEdit_input"
            value={this.state.surname}
            name="surname"
            onChange={this.handleChange}
          />
        </div>
        
        <div className="MyAccount_information">
          <span className="MyAccount_information-title"></span>{" "}
          <input
            className="MyAccountEdit_input"
            value={this.state.phone}
            name="phone"
            onChange={this.handleChange}
          />
        </div>
        <div className="MyAccount_information">
          <span className="MyAccount_information-title">E-mail: <span className="MyAccount_information-email">{this.state.email}</span> </span>{" "}
        
        </div>
      </div>
    );
  }
}

export default MyAccountEdit;
