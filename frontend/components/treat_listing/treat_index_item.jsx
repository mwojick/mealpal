import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class TreatIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { treat, shop } = this.props;
    return (
      <div className="tr-col-xs tr-col-sm tr-col-md tr-col-lg treat-box">

        <div className="treat-box-title">
          <li>
            DESSERT
          </li>
        </div>


          <img src={treat.imageUrl}></img>


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
