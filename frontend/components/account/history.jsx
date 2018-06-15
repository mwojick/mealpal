import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class History extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTreats(this.props.currentUser.preferredCity);
    this.props.fetchFavorites();
    this.props.fetchReservations();
  }

  render() {
    let { treats, shops, cityReses, favIds } = this.props;


    if (cityReses.length === 0) {
      return (
        <div className="favorites-page">
          <div className="favorites-container">
            <div className="favorites-title">
              MY HISTORY
            </div>

            <div className="favorites-list">

            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="favorites-page">
        <div className="favorites-container">
          <div className="history-title">
            MY HISTORY
          </div>

          <div className="favorites-list">
            {cityReses.map( (res) => {
              return <div key={res.id} className="res-item">
                <div className="reserv-image">
                  <img src={treats[res.treatId].imageUrl}>
                  </img>
                </div>

                <div className="reserv-text">

                  <div className="res-title-icon">
                    <div className="res-title">
                      {treats[res.treatId].name}
                    </div>

                    <div className="fav-icon">
                      <img src={favIds[treats[res.treatId].shopId] ? "https://res.cloudinary.com/mwojick/image/upload/v1528825174/favorited.png" : ""}></img>
                    </div>
                  </div>

                  <div className="res-shopname">
                    {shops[treats[res.treatId].shopId].name}
                  </div>


                  <div className="fav-address">
                    {shops[treats[res.treatId].shopId].address}
                  </div>

                  <div className="res-date">
                    {res.date}
                  </div>

                </div>

              </div>;
            })}

          </div>

        </div>

      </div>
    );
  }
}

export default History;
