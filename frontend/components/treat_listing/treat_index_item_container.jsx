import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TreatIndexItem from './treat_index_item';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const msp = (state, ownProps) => {
  return {
    treat: ownProps.treat,
    shop: ownProps.shop,
    favorite: ownProps.favorite,
    favId: ownProps.favId,
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    createFavorite: (fav) => dispatch(createFavorite(fav)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id))
  };
};

export default withRouter(connect(msp, mdp)(TreatIndexItem));
