import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import "./Home.css";
import Header from "../Header";
import Footer from "../Footer";

import { withAuth } from "../../contexts/AuthContext";

class Home extends Component {
  render() {
    // const { user, signOut } = this.props.authContext;
    return (
      <div className="Main-Container Width_480px">
        <Header />
        {/* {user && (
          <p>
            {user.email}{' '}
            <button onClick={() => signOut()}>Sign out</button>
          </p>
        )} */}
        <div className="hero-image">
          <h1 className="first-claim upperCase">Planujesz przeprowadzkę ?</h1>
          <h1 className="second-claim upperCase">Daj sobie pomóc!</h1>

          <p className="title-hero-image margin-bottom-small">
            <span className="white-text">Aplikacja MoveIt porówna</span> ceny
            przewoźników z Twojej okolicy.{" "}
            <span className="white-text">
              Dzięki temu wybierzesz najlepszą ofertę, spełniającą Twoje
              kryteria.
            </span>
          </p>
          <div className="home_buttons-box margin-bottom-small">
          <NavLink to="/signin"><button className="home-login-button">ZALOGUJ SIĘ</button></NavLink>
          <NavLink to="/sign-up"><button className="home-login-button">ZAREJESTRUJ SIĘ</button></NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withAuth(Home);
