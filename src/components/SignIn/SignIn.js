import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Route, Redirect } from "react-router";

import "./SignIn.css";
import { withAuth } from "../../contexts/AuthContext";
import Header from "./../Header";
import Footer from "./../Footer";
import { white } from "ansi-colors";
import Home from "../Home/Home";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    success: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { signIn } = this.props.authContext;
    signIn(this.state.email, this.state.password)
      .then(data =>
        this.setState({
          error: null,
          success: 1
        })
      )
      .catch(error => this.setState({ error: error, success: null }));
  };

  render() {
    const { user, signOut } = this.props.authContext;
    return (
      <div className="signin-main-container Width_480px Width_480px">
        <Header />
        {/* {user && (
          <p>
            {user.email}{' '}
            <button onClick={() => signOut()}>Sign out</button>
          </p>
        )} */}
        {this.state.error && (
          <p style={{ color: "red" }}>{this.state.error.message}</p>
        )}
        {this.state.success && (
          <p style={{ color: "green" }}>{this.state.success}</p>
        )}

        <div className="signin-page text-big">
          <h2 className="upperCase white-text">Logowanie</h2>
          <p className="upperCase white-text margin-bottom-small text-big">
            Wypełnij poniższe dane, aby się zalogować
          </p>
          <div />
          <form className="signin-form" onSubmit={this.handleSubmit}>
            <div>
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Wpisz swój adres email..."
              />
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Wpisz swoje hasło..."
              />
            </div>
            <div className="signin-buttons-box">
              <button className="signin-login-button">ZALOGUJ SIĘ</button>

              <div className="sigin-register-area">
                <p className="text">Nie masz jeszcze konta?</p>
                <NavLink to="/sign-up">
                  <button className="signin-register-button">
                    REJESTRACJA
                  </button>
                </NavLink>
              </div>
            </div>

            {this.state.error && (
              <p className="singn-fail">
                Logowanie nieudane. Podany login, lub hasło są nieprawidłowe.</p>
            )}
            {this.state.success && <Redirect to="/myAccount" />}

            {/* {this.state.error?<p className="sign-up_error">{this.state.error.message}</p>:<p className="sign-up_success">{this.state.success}</p>} */}
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withAuth(SignIn);
