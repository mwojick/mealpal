import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Reservations extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { reservations, treats, shops } = this.props;

    let times = [];
    let timeVals = ['11:00','11:30','12:00','12:30',
    '13:00','13:30','14:00','14:30','15:00','15:30',
    '16:00','16:30'];

    let days = ["Sunday", "Monday", "Tuesday",
     "Wednesday", "Thursday", "Friday", "Saturday"];

    let savings = 0;
    reservations.forEach((res) => {
      if (res === null) {
        savings = savings;
      } else {
        savings = savings + treats[res.treatId].price - 3;
      }
    });

    return (
      <div className="reservations-component">
        <div className="res-items">
          { reservations.slice(1).reverse().map((res, id) => {

            if (res === null) {

              return <div key={id} className="res-nonresed">
                You didn't have a treat on this day.

              </div>;
            } else {
              return <div key={id} className="res-resed">

                <img src={treats[res.treatId].imageUrl}></img>
                You had
                {shops[treats[res.treatId].shopId].name}
                on
                {}

              </div>;
            }

          }) }
        </div>
        <div className="res-today">
          { reservations.slice().reverse().slice(-1).map((res, id) => {

            if (res === null) {
              return <div key={id} className="not-resed-today">
                Try something new today!
              </div>;
            } else {

              return <div key={id} className="resed-today">
                {treats[res.treatId].name}
                {shops[treats[res.treatId].shopId].name}
                {shops[treats[res.treatId].shopId].address}
                <img src={treats[res.treatId].imageUrl}></img>

                <select>

                </select>

              </div>;
            }
          })}

        </div>
        <div className="res-savings">
          Holy Guacamole!
          You'll be saving an estimated ${savings}
          on treats this week!
        </div>

      </div>
    );
  }
}

export default Reservations;
