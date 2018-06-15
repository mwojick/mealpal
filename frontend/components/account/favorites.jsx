import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Favorites extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTreats(this.props.currentUser.preferredCity);
    this.props.fetchFavorites();
  }

  render() {
    let { treats, shops } = this.props;

    return (
      <div className="favorites-page">
        <div className="favorites-container">
          <div className="favorites-title">
            MY FAVORITE SHOPS
          </div>

          <div className="favorites-list">
            {treats.map( (treat) => {
              return <div key={treat.id} className="favorite-item">
                <div className="fav-title-icon">

                  <div className="fav-title">
                    {shops[treat.shopId].name}
                  </div>

                  <div className="fav-icon">
                    <img src="https://res.cloudinary.com/mwojick/image/upload/v1528825174/favorited.png"></img>
                  </div>

                </div>

                <div className="fav-address">
                  {shops[treat.shopId].address}
                </div>

              </div>;
            })}

          </div>

        </div>

      </div>
    );
  }
}

export default Favorites;
