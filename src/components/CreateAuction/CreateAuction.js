import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import MainForm from "./MainForm";


class CreateAuction extends Component {
  render() {
    return (
      <div className="Width_480px">
      <Header/>
        <MainForm />
        <Footer />
      </div>
    );
  }
}

export default CreateAuction;
