import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Reservations from './reservations';
import {
  updateReservation,
  deleteReservation
} from '../../actions/reservation_actions';
import { getCityReservations } from '../../util/selectors';

const msp = ({entities: {users, treats, shops, reservations}, session}) => {

  let cityReservations = getCityReservations(reservations, treats);

  return {
    currentUser: users[session.id],
    reservations: cityReservations,
    treats: Object.values(treats),
    shops: shops
  };
};

const mdp = (dispatch) => {
  return {
  };
};

export default withRouter(connect(msp, mdp)(Reservations));
