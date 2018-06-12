import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class TreatIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  handleToggle(){

    if (this.props.favorite) {
      this.props.deleteFavorite(this.props.favId);
    } else {
      this.props.createFavorite(
        {userId: this.props.currentUser.id,
          shopId: this.props.shop.id
        });
    }
  }

  render() {
    let { treat, shop, favorite } = this.props;
    return (
      <div className="treat-box">
        <button
          className={favorite ? "favorited" : "unfavorited"}
          onClick={()=>this.handleToggle()}
          id="favorite-button">
          <img src={favorite ? "https://res.cloudinary.com/mwojick/image/upload/v1528825174/favorited.png" : "https://res.cloudinary.com/mwojick/image/upload/v1528825174/unfavorited.png"}>
          </img>
        </button>

        <div className="treat-box-title">
          <li>
            DESSERT
          </li>
        </div>


        <img src={treat.imageUrl}></img>

        <div className="hidden-description">
          <ul>
            <li className="hidden-treat-name">
              {treat.name.toUpperCase()}
            </li>
            <li className="hidden-treat-desc">
              {treat.description}
            </li>
          </ul>
        </div>


        <div className="treat-box-description">

            <li className="tbd-item treat-name">
              {treat.name}
            </li>
            <li className="tbd-item shop-name">
              {shop.name}
            </li>
            <li className="tbd-item shop-address">
              {shop.address}
            </li>

        </div>
      </div>
    );
  }
}

export default TreatIndexItem;
