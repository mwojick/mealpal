import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { searchTreats } from '../../actions/treat_actions';
import { changeFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import Search from './search';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    cities: Object.values(state.entities.cities),
    bounds: state.ui.filters.bounds,
    favorite: state.ui.filters.favorite,
    search: state.ui.filters.search
  };
};

const mdp = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    searchTreats: (search) => dispatch(searchTreats(search)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
  };
};

export default withRouter(connect(msp, mdp)(Search));
