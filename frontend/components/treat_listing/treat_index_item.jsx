import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { times, timeVals } from '../../util/time_vars';

class TreatIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seltime: ''
    };
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  handleReserve(e) {
    if (this.props.resToday.constructor !== Array) {
      let newRes = Object.assign({}, this.props.resToday);
      newRes.treatId = this.props.treat.id;
      newRes.time = this.state.seltime;

      this.props.updateReservation(newRes);
    } else {
      let newRes = {userId: this.props.currentUser.id,
                    treatId: this.props.treat.id,
                    time: this.state.seltime};
      this.props.createReservation(newRes);
    }
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

        <select
          value={this.state.seltime}
          onChange={this.update('seltime')}
          className="select-time">
            <option hidden value={null}>Pickup Time</option>
            {timeVals.map( (tv, idx) => {
              return <option key={idx}
              value={tv}>{times[idx]}</option>;
            })}
        </select>


        <button
          className={this.state.seltime === '' ?
            "reserve-btn time-not-selected" : "reserve-btn time-selected"}
          onClick={()=>this.handleReserve()}
          id={`reserve-button`}
          disabled={this.state.seltime === ''}>
          RESERVE NOW
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
