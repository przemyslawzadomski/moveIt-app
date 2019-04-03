import React, { Component } from "react";
import Furnitures from "./Furnitures";
import Pickup from "./Pickup";
import Delivery from "./Delivery";
import DateOfRemoval from "./DateOfRemoval";
import Success from "./Success";
import FurnitureForm from "./FurnitureForm";

class MainForm extends Component {
  state = {
    step: 1,
    furnitures: [],
    deliveryAddress: {},
    pickupAddress: {},
    bringFurnitures: false,
    comments: "",
    dateOfRemoval: "",
    hourOfRemoval: ""
  };

  handleFurnitureAdd = furniture => {
    this.setState({
      furnitures: [...this.state.furnitures, furniture]
    });
  };

  pickupAddressAdd = address => {
    this.setState({
      pickupAddress: address
    });
  };

  deliveryAddressAdd = address => {
    this.setState({
      deliveryAddress: address
    });
  };

  handleSubmit = () => {
    const { step, offert, ...data } = this.state;
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      deliveryAddress,
      furnitures,
      pickupAddress,
      bringFurnitures,
      comments,
      dateOfRemoval,
      hourOfRemoval
    } = this.state;

    switch (step) {
      case 1:
        return (
          <Furnitures
            nextStep={this.nextStep}
            furnitures={furnitures}
            handleFurnitureAdd={this.handleFurnitureAdd}
          >
            <FurnitureForm addFurniture={this.handleFurnitureAdd} />
          </Furnitures>
        );
      case 2:
        return (
          <Pickup
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            pickupAddress={pickupAddress}
            pickupAddressAdd={this.pickupAddressAdd}
          />
        );
      case 3:
        return (
          <Delivery
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            deliveryAddress={deliveryAddress}
            deliveryAddressAdd={this.deliveryAddressAdd}
          />
        );
      case 4:
        return (
          <DateOfRemoval
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            dateOfRemoval={dateOfRemoval}
            hourOfRemoval={hourOfRemoval}
          />
        );
      case 5:
        return <Success 
        deliveryAddress={deliveryAddress}
        furnitures={furnitures}
        pickupAddress={pickupAddress}
        dateOfRemoval={dateOfRemoval}
        />;
      default:
        break;
    }
  }
}

export default MainForm;
