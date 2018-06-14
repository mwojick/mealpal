import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { times, timeVals } from '../../util/time_vars.js';

class Reservations extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      resTime: this.props.resTime
    };
  }

  componentDidMount(){
    if (this.state.resTime !== undefined) {
      if (this.state.resTime.constructor !== Array){
        this.props.changeFilter('restoday', this.props.reservations[0]);
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.reservations.length !== 0) {
      if (this.state.resTime !== newProps.reservations[0].time) {
        this.setState({resTime: newProps.reservations[0].time});
      }
    }
    if (this.state.resTime !== undefined) {
      if (this.state.resTime.constructor === Array){
        this.props.changeFilter('restoday', false);
      }
    }
  }

  updateRes(e) {
    let newRes = Object.assign({}, this.props.reservations[0]);
    newRes.time = e.currentTarget.value;
    this.props.updateReservation(newRes);
  }

  render() {
    let { reservations, treats, shops } = this.props;

    let mins = new Date(Date.parse(this.state.resTime)).getMinutes();
    let hrs = new Date(Date.parse(this.state.resTime)).getHours();

    let minutes = '00';
    if (mins.toString().length > 1) {
      minutes = mins;
    }

    let selResTime = `${hrs}:${minutes}`;


    let days = ["Sunday", "Monday", "Tuesday",
     "Wednesday", "Thursday", "Friday", "Saturday"];

    let fiveDays = [];
    let day = (new Date().getDay()-4+7+1);
    for (let i = 0; i < 5; i++) {
      fiveDays.push(days[day%7]);
      day++;
    }

    let savings = 0;
    reservations.forEach((res) => {
      if (res.length === 0) {
        savings = savings;
      } else {
        savings = savings + treats[res.treatId].price - 3;
      }
    });

    return (
      <div className="reservations-component">
        <div className="res-items">
          { reservations.slice(1).reverse().map((res, id) => {

            if (res.length === 0) {
              return <div key={id} className="res-nonresed">
                {fiveDays[id]}
                You didn't have a treat on this day.

              </div>;
            } else {
              return <div key={id} className="res-resed">
                {fiveDays[id]}

                <img src={treats[res.treatId].imageUrl}></img>
                You had
                {shops[treats[res.treatId].shopId].name}
                on
                {fiveDays[id]}

              </div>;
            }

          }) }
        </div>
        <div className="res-today">
          { reservations.slice().reverse().slice(-1).map((res, id) => {

            if (res.length === 0) {
              return <div key={id} className="not-resed-today">
                {fiveDays.slice(-1)[0]}
                Try something new today!
              </div>;
            } else {

              return <div key={id} className="resed-today">
                {fiveDays.slice(-1)[0]}
                {treats[res.treatId].name}
                {shops[treats[res.treatId].shopId].name}
                {shops[treats[res.treatId].shopId].address}


                <img src={treats[res.treatId].imageUrl}></img>

                <select
                  value={selResTime}
                  onChange={ (e) => this.updateRes(e)}>
                    {timeVals.map( (tv, idx) => {
                      return <option key={idx}
                      value={tv}>{times[idx]}</option>;
                    })}
                </select>

                <button onClick={()=>this.props.deleteReservation(res.id)}>
                  Cancel
                </button>

              </div>;
            }
          })}

        </div>
        <div className="res-savings">
          Holy Guacamole!
          You'll be saving an estimated ${savings.toFixed(2)}
          on treats this week!
        </div>

      </div>
    );
  }
}

export default Reservations;
