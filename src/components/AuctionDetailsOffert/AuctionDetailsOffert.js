import React, { Component } from "react";
import firebase from 'firebase';
import { withAuth } from "../../contexts/AuthContext";



class AuctionDetailsOffert extends Component {
    state = {
        offers: this.props.authContext.offers,
    }
  
    render() {
        const offer = this.state.offers.find(
            offer => offer.offerId === this.props.offerId
          );
    return (
      <>
        <h1 className="Offert_title-section-secound">
          Szczegóły Twojej oferty
        </h1>
        <li className="Offert_offert-information-all">
          Twoja oferta:{" "}
          <span className="Offert_offert-information">
            {" "}
            {offer && offer.price + "zł"}
          </span>
        </li>
        <li className="Offert_offert-information-all">
          Data złożenia oferty:{" "}
          <span className="Offert_offert-information">
            {offer && offer.date}
          </span>
        </li>
        <li className="Offert_offert-information-all">
          <span className="Offert_offert-information">
            {offer && offer.chosen
              ? "Twoja oferta została zaakceptowana"
              : "Twoja oferta nie została zaakceptowana"}
          </span>
        </li>
        {offer && offer.chosen ? (
          <li className="Offert_offert-information-all">
            <button
              style={{ opacity: 0.15 }}
              disabled
              className="offert-button"
            >
              oferta została przyjęta
            </button>
          </li>
        ) : (
          <li className="Offert_offert-information-all">
            <button className="offert-button">wycofaj ofertę</button>
          </li>
        )}
      </>
    );
  }
}
export default withAuth(AuctionDetailsOffert);
