import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Reservations from './reservations';
import {
  updateReservation,
  deleteReservation
} from '../../actions/reservation_actions';
import { getCityReservations, getPastFive } from '../../util/selectors';

const msp = ({entities: {users, treatRes, shops, reservations}, session}) => {

  let cityReservations = getCityReservations(reservations, treatRes);

  cityReservations = cityReservations.sort((a,b) => {
    return new Date(b.date) - new Date(a.date);
  });

  //get the reservations for the past 5 days
  //(including tomorrow) if there are any. if not, put blank.
  let pastFive = [];
  if (cityReservations.length !== 0) {
    pastFive = getPastFive(cityReservations);
  }

  return {
    currentUser: users[session.id],
    reservations: pastFive,
    treats: treatRes,
    shops: shops
  };
};

const mdp = (dispatch) => {
  return {
    updateReservation: (res) => dispatch(updateReservation(res)),
    deleteReservation: (id) => dispatch(deleteReservation(id))
  };
};

export default withRouter(connect(msp, mdp)(Reservations));
