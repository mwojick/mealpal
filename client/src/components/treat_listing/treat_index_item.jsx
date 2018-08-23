import React from "react";
import { times, timeVals } from "../../util/time_vars";
import { handleReserve } from "../../actions/reservation_actions";

class TreatIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seltime: ""
    };
  }

  update(type) {
    return e =>
      this.setState({
        [type]: e.currentTarget.value
      });
  }

  handleToggle() {
    if (this.props.favorite) {
      this.props.deleteFavorite(this.props.favId);
    } else {
      this.props.createFavorite({
        userId: this.props.currentUser.id,
        shopId: this.props.shop.id
      });
    }
  }

  handleHover(shopId = null) {
    this.props.changeFilter("marker", shopId);
  }

  render() {
    let { treat, shop, favorite } = this.props;
    return (
      <div
        onMouseEnter={() => this.handleHover(shop.id)}
        onMouseLeave={() => this.handleHover()}
        className="treat-box"
      >
        <button
          className={favorite ? "favorited" : "unfavorited"}
          onClick={() => this.handleToggle()}
          id="favorite-button"
        >
          <img
            alt=""
            src={
              favorite
                ? "https://res.cloudinary.com/mwojick/image/upload/v1528825174/TreatPal/icons/favorited.png"
                : "https://res.cloudinary.com/mwojick/image/upload/v1528825174/TreatPal/icons/unfavorited.png"
            }
          />
        </button>

        <select
          value={this.state.seltime}
          onChange={this.update("seltime")}
          className="select-time"
        >
          <option hidden value={null}>
            Pickup Time
          </option>
          {timeVals.map((tv, idx) => {
            return (
              <option key={idx} value={tv}>
                {times[idx]}
              </option>
            );
          })}
        </select>

        <button
          className={
            this.state.seltime === ""
              ? "reserve-btn time-not-selected"
              : "reserve-btn time-selected"
          }
          onClick={() => handleReserve(this.props, this.state)}
          id={`reserve-button`}
          disabled={this.state.seltime === ""}
        >
          RESERVE NOW
        </button>

        <div className="treat-box-title">
          <li>DESSERT</li>
        </div>

        <img alt="" src={treat.imageUrl} />

        <div className="hidden-description">
          <ul>
            <li className="hidden-treat-name">{treat.name.toUpperCase()}</li>
            <li className="hidden-treat-desc">{treat.description}</li>
          </ul>
        </div>

        <div className="treat-box-description">
          <li className="tbd-item treat-name">{treat.name}</li>
          <li className="tbd-item shop-name">{shop.name}</li>
          <li className="tbd-item shop-address">{shop.address}</li>
        </div>
      </div>
    );
  }
}

export default TreatIndexItem;
