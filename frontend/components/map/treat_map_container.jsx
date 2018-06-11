import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import TreatMap from './treat_map';

const msp = ({entities: {users, treats, shops, cities}, session}) => {

  let currentUser = users[session.id];

  let preferredCity = Object.values(cities).filter(city =>
    currentUser.preferredCity === city.name);

  preferredCity = preferredCity[Object.keys(preferredCity)[0]]
  || { latitude: 37.789232, longitude: -122.409499};

  return {
    treats: Object.values(treats),
    shops: shops,
    preferredCity: preferredCity
  };
};


const mdp = (dispatch) => {
  return {

  };
};

export default withRouter(connect(msp, mdp)(TreatMap));
