import React, { Component } from "react";
import "./FurnitureForm.css";

class FurnitureForm extends Component {
  state = {
    name: "",
    width: null,
    height: null,
    deepness: null,
    count: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addFurniture(this.state);
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const furniture = this.state;

    return (
      <div className="Width_480px">
        <div className="FurnitureForm_title"> Dodaj mebel: </div>
        <form onSubmit={this.handleSubmit}>
          <div className="FurnitureForm_information">
            <div className="FurnitureForm_information-details">
              Mebel:
              <input
                className="FurnitureForm_input1"
                placeholder=""
                defaultValue={furniture.name}
                onChange={this.handleChange("name")}
              />
            </div>
            <div className="FurnitureForm_information-details">
              Szerokość:
              <input
                className="FurnitureForm_input2"
                placeholder="cm"
                defaultValue={furniture.width}
                onChange={this.handleChange("width")}
              />
            </div>
            <div className="FurnitureForm_information-details">
              Wysokość:
              <input
                className="FurnitureForm_input3"
                placeholder="cm"
                defaultValue={furniture.height}
                onChange={this.handleChange("height")}
              />
            </div>
            <div className="FurnitureForm_information-details">
              Głębokość:
              <input
                className="FurnitureForm_input4"
                placeholder="cm"
                defaultValue={furniture.deepness}
                onChange={this.handleChange("deepness")}
              />
            </div>
            <div className="FurnitureForm_information-details">
              Ilość:
              <input
                className="FurnitureForm_input5"
                placeholder="Ile sztuk"
                defaultValue={furniture.count}
                onChange={this.handleChange("count")}
              />
            </div>
           
          </div>
          <button className="FurnitureForm_button" type={"submit"}>
            Dodaj{" "}
          </button>
        </form>
      
      </div>
    );
  }
}

export default FurnitureForm;
