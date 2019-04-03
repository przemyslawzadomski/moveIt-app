import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import { withAuth } from "../../contexts/AuthContext";
import logo from "./logo.png";
import menu from "./menu-mobile.svg";

class Header extends Component {
  state = {
    class: ""
  };

  toggle = () => {
    this.state.class === ""
      ? this.setState({
          class: "expanded"
        })
      : this.setState({
          class: ""
        });
  };

  render() {
    const user = this.props.authContext.user;
    const signOut = this.props.authContext.signOut;
    const isCarrier =
      this.props.authContext.getIsCarrier &&
      this.props.authContext.getIsCarrier();
    return (
      <nav className="menu Width_480px">
        <NavLink to="/">
          <img src={logo} alt="logo-MoveIt" className="logo" />
        </NavLink>
        <div className="menu-absolute">
          <img
            src={menu}
            alt="icon-hamburger-menu"
            className="js-toggler"
            onClick={this.toggle}
          />
        </div>

        {user ? (
          <ul className={`js-menu-upgrade upperCase ${this.state.class}`}>
            <li className="Link-Style">
              <NavLink to="/">Strona główna</NavLink>
            </li>
            <li className="Link-Style">
              <NavLink to="/myAccount">Moje konto</NavLink>
            </li>
            <li className="Link-Style">
              <NavLink to="/myauctions">Moje przeprowadzki</NavLink>
            </li>
            {isCarrier ? (
              <li className="Link-Style">
                <NavLink to="/offerts">Oferty przeprowadzek</NavLink>
              </li>
            ) : (
              <li className="Link-Style">
                <NavLink to="/create-auction">Zaplanuj przeprowadzkę</NavLink>
              </li>
            )}

            <li className="Link-Style">
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li className="header_user-email lowerCase login-shadow ">
              {user.email}
            </li>
            <li className="header_user-email " onClick={signOut}>
              <NavLink to="/">Wyloguj się</NavLink>
            </li>
          </ul>
        ) : (
          <ul className={`js-menu upperCase ${this.state.class}`}>
            <li className="Link-Style">
              <NavLink to="/">Strona główna</NavLink>
            </li>
            <li className="Link-Style">
              <NavLink to="/signin">Logowanie</NavLink>
            </li>
            <li className="Link-Style">
              <NavLink to="/sign-up">Rejestracja</NavLink>
            </li>
            <li className="Link-Style">
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default withAuth(Header);
