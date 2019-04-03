import React from 'react';
import './WorkInProgress.css';
import Header from '../Header';
import Footer from '../Footer';
import WIP from './work-in-progress.png';

export function WorkInProgress(){
    return(
        <div className="work-in-progress_root">
        <Header/>
        <div className="work-in-progress_main">

        <h1>Strona w budowie...</h1>
        <img src={WIP} alt="work in progress sign"/>
        <p>Przepraszamy!</p>

        </div>
        <Footer/>
        </div>
    )
}