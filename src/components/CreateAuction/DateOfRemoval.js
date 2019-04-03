import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import "./DateOfRemoval.css";
import { SingleDatePicker } from "react-dates";


import moment from "moment";

import "react-dates/initialize";

import "moment/locale/pl";

moment.locale("pl");
class DateOfRemoval extends Component {
  state = {
    date: moment(),
    dateOfRemoval: "",
    hourOfRemoval: "",
    comment: ""
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  saveAndContinue = () => {
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    return (
      < div className= "Width_480px">
       <h1 className="DateOfRemoval_header">Dodawanie zamówienia</h1>
        <div className ="DateOfRemoval_progress-bar">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        </div>
        <div className ="DateOfRemoval_list-title">Data i godzina przeprowadzki:</div>
        <div className="DateOfRemoval_calender"><SingleDatePicker
          date={this.state.dateOfRemoval || this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel={true}
        />
        <select>
          <option value="00:00" name="hourOfRemoval">00:00</option>
          <option value="01:00" name="hourOfRemoval">01:00</option>
          <option value="02:00" name="hourOfRemoval">02:00</option>
          <option value="03:00" name="hourOfRemoval">03:00</option>
          <option value="04:00" name="hourOfRemoval">04:00</option>
          <option value="05:00" name="hourOfRemoval">05:00</option>
          <option value="06:00" name="hourOfRemoval">06:00</option>
          <option value="07:00" name="hourOfRemoval">07:00</option>
          <option value="08:00" name="hourOfRemoval">08:00</option>
          <option value="09:00" name="hourOfRemoval">09:00</option>
          <option value="10:00" name="hourOfRemoval">10:00</option>
          <option value="11:00" name="hourOfRemoval">11:00</option>
          <option value="12:00" name="hourOfRemoval">12:00</option>
          <option value="13:00" name="hourOfRemoval">13:00</option>
          <option value="14:00" name="hourOfRemoval">14:00</option>
          <option value="15:00" name="hourOfRemoval">15:00</option>
          <option value="16:00" name="hourOfRemoval">16:00</option>
          <option value="17:00" name="hourOfRemoval">17:00</option>
          <option value="18:00" name="hourOfRemoval">18:00</option>
          <option value="19:00" name="hourOfRemoval">19:00</option>
          <option value="20:00" name="hourOfRemoval">20:00</option>
          <option value="21:00" name="hourOfRemoval">21:00</option>
          <option value="22:00" name="hourOfRemoval">22:00</option>
          <option value="23:00" name="hourOfRemoval">23:00</option>
          <option value="24:00" name="hourOfRemoval">24:00</option>
        </select>
        </div>
        <p className="DateOfRemoval_list-title">Uwagi:</p>
        <textarea className="DateOfRemoval_textarea"></textarea>
       <div><button className="DateOfRemoval_back-button" onClick={this.back}>
          Wstecz
        </button>
        <button
          className="DateOfRemoval_next-button"
          type={"submit"}
          onClick={this.saveAndContinue}>
       Dodaj ofertę
        </button></div>
      </div>
    );
  }
}

export default DateOfRemoval;
