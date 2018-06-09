import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class TreatIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { treat, shop } = this.props;
    return (
      <div className="treat-box">

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
