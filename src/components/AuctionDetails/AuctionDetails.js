import React from "react";
import firebase from 'firebase';
import Header from "../Header";
import Footer from "../Footer";
import { withAuth } from "../../contexts/AuthContext";
import "./AuctionDetails.css";
import AuctionDetailsOffert from "../AuctionDetailsOffert/AuctionDetailsOffert";

function AuctionDetails(props) {
  const offerId = props.match.params.offerId;
  const offer = props.authContext.offers.find(
    offer => offer.offerId === props.match.params.offerId
  );
  const auction = props.authContext.auctions.find(
    auction => auction.clientId === offer.clientId
  );
  const user = props.authContext.users.find(user => user.id === offer.clientId);

  function removeOffer(offerId){
    firebase.database().ref("offers").child(offerId).remove();
    this.props.history.push("/myauctions")
  }

  if (offer === null) {
    return <p>Loading...</p>;
  }
  return (
    <div className="Width_480px">
      <Header />
      <div className="Offert">
        <h1 className="offert-header">Szczegóły oferty</h1>
        <div className="Ofert_first-section">
          <AuctionDetailsOffert
          offerId={offerId}
          />
          <h1 className="Offert_title-section-first">
            Szczegóły miejsca odbioru
          </h1>
          <p className="Offert_offert-information-all">
            <span className="Offert_offert-information">
              {user&&user.name} {user&&user.surname} {"("}  {user&&user.phone}  {")"}
            </span>
          </p>
          <ul className="Offert_main-section">
            <li className="Offert_offert-information-all">
              <span>Adres odbioru: </span>
              <div className="Offert_offert-information">
                {auction&&auction.pickupAddress.city} {auction&&auction.pickupAddress.address}
              </div>
            </li>
            <li className="Offert_offert-information-all">
              <span>Winda: </span>
              <span className="Offert_offert-information">
                {" "}
                {auction&&auction.pickupAddress.isElevator ? "TAK" : "NIE"}
              </span>
            </li>
            <li className="Offert_offert-information-all">
              <span>Piętro: </span>{" "}
              <span className="Offert_offert-information">
                {" "}
                {auction&&auction.pickupAddress.floor}
              </span>
            </li>
            <li className="Offert_offert-information-all">
              <span>Data: </span>
              <span className="Offert_offert-information">
                {auction&&auction.dateOfRemoval}
              </span>
            </li>
            <li className="Offert_offert-information-all">
              <span>Godzina: </span>
              <span className="Offert_offert-information">
                {auction&&auction.hourOfRemoval}
              </span>
            </li>

            <li className="Offert_offert-information-all">
              <span>Wniesienie: </span>
              <span className="Offert_offert-information">
                {" "}
                {auction&&auction.bringFurnitures ? "TAK" : "NIE"}
              </span>
            </li>
            <li className="Offert_offert-information-all">
              <span>Uwagi: </span>{" "}
              <span className="Offert_offert-information">
                {auction&&auction.comment}
              </span>
              <div className="Offert_span" />
            </li>
          </ul>
          <div>
            <h1 className="Offert_title-section-secound">
              Szczegóły miejsca dostawy
            </h1>
            <li className="Offert_offert-information-all">
              <span>Adres dostawy: </span>
              <div className="Offert_offert-information">
                {auction&&auction.deliveryAddress.city}
                {auction&&auction.deliveryAddress.address}
              </div>
            </li>
            <li className="Offert_offert-information-all">
              Winda:{" "}
              <span className="Offert_offert-information">
                {" "}
                {auction&&auction.deliveryAddress.isElevator ? "TAK" : "NIE"}
              </span>
            </li>
            <li className="Offert_offert-information-all">
              Piętro:{" "}
              <span className="Offert_offert-information">
                {auction&&auction.deliveryAddress.floor}
              </span>
            </li>
          </div>
        </div>
        <div className="offert-furnitures">
          <h1 className="Offert_furniture-title-main">
            <span>Meble: </span>
          </h1>
          <h2 className="Offert_furnitures-title"> </h2>
          {auction&&auction.furnitures.map(furniture => (
            <div className="Offert_last-section">
              <p className="Offert_furnitures-type">{furniture.name}</p>
              <table>
                <thead>
                  <tr>
                    <th className="Offert_furnitures-information">Głębokość</th>
                    <th className="Offert_furnitures-information">
                      {" "}
                      Szerokość
                    </th>
                    <th className="Offert_furnitures-information">Wysokość</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="Offert_furnitures-details">
                      {furniture.depth}
                    </td>
                    <td className="Offert_furnitures-details">
                      {furniture.width}
                    </td>
                    <td className="Offert_furnitures-details">
                      {furniture.height}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default withAuth(AuctionDetails);
