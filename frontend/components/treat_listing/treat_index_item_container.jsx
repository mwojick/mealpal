import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TreatIndexItem from './treat_index_item';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';
import { createReservation,
   updateReservation } from '../../actions/reservation_actions';
import { changeFilter } from '../../actions/filter_actions';

const msp = (state, ownProps) => {
  return {
    treat: ownProps.treat,
    shop: ownProps.shop,
    favorite: ownProps.favorite,
    favId: ownProps.favId,
    currentUser: state.entities.users[state.session.id],
    resToday: state.ui.filters.restoday
  };
};

const mdp = (dispatch) => {
  return {
    createFavorite: (fav) => dispatch(createFavorite(fav)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
    createReservation: (res) => dispatch(createReservation(res)),
    updateReservation: (res) => dispatch(updateReservation(res)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
  };
};

export default withRouter(connect(msp, mdp)(TreatIndexItem));
