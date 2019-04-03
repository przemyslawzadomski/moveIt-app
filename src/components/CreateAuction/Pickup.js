import React, { Component } from "react";
import "./Pickup.css";

class Pickup extends Component {
  state = {
    address: this.props.pickupAddress.address || "",
    city: this.props.pickupAddress.city || "",
    postalCode: this.props.pickupAddress.postalCode || "",
    isElevator: this.props.pickupAddress.isElevator || false,
    floor: this.props.pickupAddress.floor || ""
  };

  saveAndContinue = () => {};

  back = event => {
    event.preventDefault();
    this.props.previousStep();
  };
  addAddress = event => {
    event.preventDefault();
    this.props.pickupAddressAdd(this.state);
    this.props.nextStep();
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { address, city, postalCode, floor, isElevator } = this.state;

    return (
      <div className= "Pickup_all Width_480px">
      
        <h1 className="Pickup_header">Dodawanie zamówienia</h1>
        <form onSubmit={this.addAddress}>
        <div className ="Pickup_progress-bar">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        </div>
          <h2 className="Pickup_list-title"> Szczegóły miejsca odbioru</h2>
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
                onChange={this.handleChange("isElevator")} value="true" />
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

export default Pickup;
