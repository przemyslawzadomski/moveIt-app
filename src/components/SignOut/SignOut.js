import React from 'react';
import { NavLink } from 'react-router-dom';
import "./SignOut.css";
import Header from '../Header';
import Footer from '../Footer';

export function SignOut() {
    return(
    
        <div className="sign-out_root Width_480px"
        >
        <Header />
        <div className="sign-out_main">
        <h1>Przepraszamy!</h1>
        <span>Musisz być zalogowany żeby zobaczyć tę stronę</span>
        <div>
        <p>Jeżeli masz już konto to <NavLink to="/signin">zaloguj się.</NavLink></p><p> Jeżeli nie masz konta to <NavLink to="/sign-up">zarajestruj się.</NavLink></p>
        </div>
        </div>
        <Footer />
        </div>
      
    )
}