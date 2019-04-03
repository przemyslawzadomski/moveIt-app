import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withAuth } from "../../contexts/AuthContext";

class MyAuctionUser extends Component {
  state = {
    auctions: this.props.auctions,
    userId: this.props.userId
  };

  render() {
      const userId = this.props.userId
      const user =this.props.users&& this.props.users.filter(user => user.id === userId)
      const filteredAuctions = this.props.auctions&&this.props.auctions.filter(auction => auction.clientId === userId) 
    return (
      <div className="Width_480px">
        <div className="Offerts">
          <h1 className="offert-header">Moje przeprowadzki</h1>
          <div>
            <table className="offert-table">
              <thead />
              <tbody>
                {filteredAuctions.map(auction => {
                  return (
                    <tr key={auction.id} className="Offerts_table">
                      <td className="offert-table-data">
                        <p className="offerts-title">{auction.name}</p>
                        <ul className="offert-list">
                        <li>
                           <b>
                           <span className="Offerts_list-information"> {user && user.name}{" "}
                            {user && user.surname}</span></b>
                          </li>
                          <li><b>Miasto: </b><span className="Offerts_list-information">
                          {auction.deliveryAddress.city + " " + auction.deliveryAddress.address}</span>
                            </li>
                          <li>
                            <b>Meble: </b>
                            <span className="Offerts_list-information">{auction.furnitures.length}</span>
                          </li>
                          
                          <li>
                            <b>Data: </b>
                            <span className="Offerts_list-information">{auction.dateOfRemoval}</span>
                          </li>
                          <li>
                            <b>Wniesienie: </b>
                            <span className="Offerts_list-information">{auction.bringFurnitures ? "Tak" : "Nie"}</span>
                          </li>
                          <li>
                            <Link to={`/offerts/${auction.auctionId}`}>
                              <button className="offert-button">
                                Zobacz ofertę
                              </button>
                            </Link>
                          </li>

                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(MyAuctionUser);
