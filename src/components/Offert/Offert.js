import React, { Component } from "react";
import firebase from "firebase";
import Header from "../Header";
import Footer from "../Footer";
import "./Offert.css";
import { withAuth } from "../../contexts/AuthContext";

class Offert extends Component {
  state = {
    classOffert: "",
    auction: this.props.authContext.auctions,
    client: this.props.authContext.users,
    price: "",
    commentToPrice: "",
    chosen: false
  };

  toggleOffert = () => {
    this.state.classOffert === ""
      ? this.setState({
          classOffert: "expanded-offert"
        })
      : this.setState({
          classOffert: ""
        });
  };

  addPrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  addCommentToPrice = event => {
    this.setState({
      commentToPrice: event.target.value
    });
  };
  acceptOffer = offerId => {
    firebase
      .database()
      .ref("offers")
      .child(offerId)
      .update({ chosen: true });
  };
  addOffer = (price, comment, auctionId, carrierId, clientId, date) => {
    firebase.database().ref("offers").push().set({
      price,
      comment,
      auctionId,
      carrierId,
      clientId,
      date
    })
  }
  // addOfferToAuction = (price, comment, auctionId) => {
  //   firebase.database().ref("offers").child(offerId).remove()
  // }
  // ściągnąć offers z withAuth i porównać z auctionId.
  // .find(auction=>auction.auctionId === offertId)
  render() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    const userId = this.props.authContext.user.uid;
    const auctionId = this.props.match.params.offertId;
    const singleAuction = this.state.auction.find(
      auction => auction.auctionId === auctionId
    );
    const client = this.state.client.find(
      client => client.id === singleAuction.clientId
    );
    const isCarrier = this.props.authContext.getIsCarrier();
    const auctionOffers = this.props.authContext.offers.filter(
      offer => offer.auctionId === auctionId
    );
    const users = this.props.authContext.users;
    if (this.state.auction === null) {
      return <p>Loading...</p>;
    }
    return (
      <div className="Width_480px">
        <Header />
        <div className="Offert">
          <h1 className="offert-header">Oferta</h1>
          <div className="Ofert_first-section">
            <h2 className="offert-title">{singleAuction.name}</h2>
            {isCarrier && isCarrier? 
            (auctionOffers.length === 0? 
              <a href="#make-offert">
                  <button
                    className="Offert_offert-button"
                    onClick={this.toggleOffert}
                  >
                    Złóż ofertę
                  </button>
                </a>
              :
              auctionOffers.some(
                  offer => offer.carrierId === userId
                ) === false? 
                (
                <a href="#make-offert">
                  <button
                    className="Offert_offert-button"
                    onClick={this.toggleOffert}
                  >
                    Złóż ofertę
                  </button>
                </a>
              ) 
              : 
              (
                <p>złożyłeś ofertę w tej aukcji</p>
              )
            ) : 
            null}
            {auctionOffers.length === 0 ? (
              <p>nie ma żadnych ofert</p>
            ) : (
              auctionOffers.map(offer => (
                <>
                  <ul className="Offert_main-section">
                    <li className="Offert_offert-information-all">
                      <span>Oferta: </span>
                      <div className="Offert_offert-information">
                        {offer.price}
                      </div>
                      <span>Przewoźnik: </span>
                      <div className="Offert_offert-information">
                        {users.find(user => user.id === offer.carrierId).name}
                      </div>
                      <span>Data złożenia oferty: </span>
                      <div className="Offert_offert-information">
                        {offer.date}
                      </div>
                      {isCarrier ? null : offer.chosen === true ? (
                        <p>oferta została zaakceptowana</p>
                      ) : (
                        <div className="Offert_offert-information">
                          <button
                            className="Offert_offert-button"
                            onClick={() => this.acceptOffer(offer.offerId)}
                          >
                            Zaakceptuj ofertę
                          </button>
                        </div>
                      )}
                    </li>
                  </ul>
                </>
              ))
            )}
            <h1 className="Offert_title-section-first">
              Szczegóły miejsca odbioru
            </h1>
            <p className="Offert_offert-information-all">
              <span className="Offert_offert-information">
                {client.name} {client.surname}{" "}
              </span>
            </p>
            <ul className="Offert_main-section">
              <li className="Offert_offert-information-all">
                <span>Adres odbioru: </span>
                <div className="Offert_offert-information">
                  {singleAuction.pickupAddress.city +
                    " " +
                    singleAuction.pickupAddress.address}
                </div>
              </li>
              <li className="Offert_offert-information-all">
                <span>Winda: </span>
                <span className="Offert_offert-information">
                  {" "}
                  {singleAuction.isElevator ? "TAK" : "NIE"}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Piętro: </span>{" "}
                <span className="Offert_offert-information"> 3</span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Data: </span>
                <span className="Offert_offert-information">
                  {singleAuction.dateOfRemoval}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Godzina: </span>
                <span className="Offert_offert-information">
                  {singleAuction.hourOfRemoval}
                </span>
              </li>

              <li className="Offert_offert-information-all">
                <span>Wniesienie: </span>
                <span className="Offert_offert-information">
                  {" "}
                  {singleAuction.bringFurnitures ? "TAK" : "NIE"}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                <span>Uwagi: </span>{" "}
                <span className="Offert_offert-information">
                  {singleAuction.comment}
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
                  {singleAuction.deliveryAddress.city +
                    " " +
                    singleAuction.deliveryAddress.address}
                </div>
              </li>
              <li className="Offert_offert-information-all">
                Winda:{" "}
                <span className="Offert_offert-information">
                  {" "}
                  {singleAuction.isElevator ? "TAK" : "NIE"}
                </span>
              </li>
              <li className="Offert_offert-information-all">
                Piętro: <span className="Offert_offert-information">2</span>
              </li>
            </div>
          </div>
          <div className="offert-furnitures">
            <h1 className="Offert_furniture-title-main">
              <span>Meble: </span>
            </h1>
            <h2 className="Offert_furnitures-title"> </h2>
            {singleAuction.furnitures.map(furniture => (
              <div className="Offert_last-section">
                <p className="Offert_furnitures-type">{furniture.name}</p>
                <table>
                  <thead>
                    <tr>
                      <th className="Offert_furnitures-information">
                        Głębokość
                      </th>
                      <th className="Offert_furnitures-information">
                        {" "}
                        Szerokość
                      </th>
                      <th className="Offert_furnitures-information">
                        Wysokość
                      </th>
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
            

            <div className={`Offert_form ${this.state.classOffert}`}>
              <p className="Offert_form-title" id="make-offert">
                Złóż ofertę:{" "}
              </p>
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.addPrice}
                placeholder="Wpisz swoją wycenę..."
              />
              <div className="Offert_form-title">
                <textarea
                  name="description"
                  value={this.state.commentToPrice}
                  onChange={this.addCommentToPrice}
                  placeholder="Jeśli chcesz dodać komentarz do oferty, wpisz go tutaj..."
                />
              </div>
              <div className="offert-box-buttons">
                <button className="Offert_form-button" onClick={()=>this.addOffer(this.state.price, this.state.commentToPrice, auctionId, userId, client.id, today)}>Wyślij</button>
                <p className="offert-back" onClick={this.toggleOffert}>
                  Zwiń ->{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withAuth(Offert);
