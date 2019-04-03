import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyAccount from "../MyAccount";
import FAQ from "../FAQ";
import Home from "../Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import { SignOut } from "../SignOut/SignOut";
import MyAuctions from "../MyAuctions";
import AuctionDetailsOffert from "../AuctionDetailsOffert";

import Offerts from "../Offerts";
import Offert from "../Offert";
import { WorkInProgress } from "../WorkInProgress/WorkInProgress";
import CreateAuction from "../CreateAuction/CreateAuction";
import AuctionDetails from "../AuctionDetails";
import commentAboutAuction from "../commentAboutAuction";
import MyAuctionsUser from "../MyAuctionsUser/MyAuctionsUser";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="Main-Container">
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/myAccount" component={MyAccount} />
            <Route path="/sign-out" component={SignOut} />
            <Route exact path="/myauctions" component={MyAuctions} />
            <Route path="/myauctions/:offerId" component={AuctionDetails}/>
            <Route exact path="/myauctions-client" component={MyAuctionsUser}/>
            <Route exact path="/offerts" component={Offerts} />
            <Route path="/offerts/:offertId" component={Offert} />
            <Route path="/comment-about-auction" component={commentAboutAuction} />
            <Route path="/create-auction" component={CreateAuction} />
            {/* <Route path="/auction-detail-offert" component={AuctionDetailsOffert} /> */}
          </div>
        </Router>
      </>
    );
  }
}

export default App;
