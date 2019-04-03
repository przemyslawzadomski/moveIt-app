import React, { Component } from "react";
import "./Success.css";

class Success extends Component {

  render() {
    const { furnitures } = this.props;

    return (
     <>
     <div className="success">
     Pomyślnie dodano ofertę
     </div>
     </>
    );
  }
}

export default Success;
