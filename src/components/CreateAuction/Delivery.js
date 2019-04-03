import React, { Component } from "react";
import "./Pickup.css";
import "./Delivery.css";

class Delivery extends Component {
  state = {
    address: this.props.deliveryAddress.address || "",
    city: this.props.deliveryAddress.city || "",
    postalCode: this.props.deliveryAddress.postalCode || "",
    isElevator: this.props.deliveryAddress.isElevator || false,
    floor: this.props.deliveryAddress.floor || "",
  };

  saveAndContinue = () => {};

  back = event => {
    event.preventDefault();
    this.props.previousStep();
  };
  addAddress = event => {
    event.preventDefault();
    this.props.deliveryAddressAdd(this.state);
    this.props.nextStep();
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { address, city, postalCode, isElevator, floor } = this.state;

    return (
      <div className="Pickup_all">
        <h1 className="Pickup_header">Dodawanie zamówienia</h1>
        <form onSubmit={this.addAddress}>
        <div className ="Delivery_progress-bar">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        </div>
          <h2 className="Pickup_list-title"> Szczegóły miejsca dostawy</h2>
          <div className="Pickup_all-information">
            <div className="Pickup_information-details">
              <label>Adres: </label>
              <input
                className="Pickup_input1"
                placeholder=""
                defaultValue={address}
                onChange={this.handleChange("address")}
              />
            </div>
            <div className="Pickup_information-details">
              {" "}
              <label>Miasto: </label>
              <input className="Pickup_input2" placeholder=""
                defaultValue={city}
                onChange={this.handleChange("city")} />
            </div>
            <div className="Pickup_information-details">
              <label>Kod pocztowy:</label>
              <input className="Pickup_input3" placeholder=""
                defaultValue={postalCode}
                onChange={this.handleChange("postalCode")} />
            </div>
            <div className="Pickup_information-details">
              <label>Piętro: </label>
              <input className="Pickup_input4" 
                defaultValue={floor}
                onChange={this.handleChange("floor")} />
            </div>
            <div className="Pickup_information-details">
              <label>Winda: </label>
              <input type="checkbox" className="Pickup_input5" name="isElevator" 
                onChange={this.handleChange("isElevator")} />
            </div>

            {this.props.children}
          </div>
          <button className="Pickup_back-button" onClick={this.back}>
            Wstecz
          </button>
          <button
            className="Pickup_next-button"
            type={"submit"}
            onClick={this.saveAndContinue}
          >
            Dalej
          </button>
        </form>
      </div>
    );
  }
}

export default Delivery;
