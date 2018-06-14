import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Reservations extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { reservations, treats, shops } = this.props;

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
                You had ... this day.

              </div>;
            }

          }) }
        </div>
        <div className="res-today">
          { [reservations[0]].map((res, id) => {
            if (res === null) {
              return <div key={id} className="not-resed-today">
                Reserve something!
              </div>;
            } else {
              return <div key={id} className="resed-today">
                this is what you will get tomorrow..
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
