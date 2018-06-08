import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TreatIndexItem from './treat_index_item';

const msp = (state, ownProps) => {
  return {
    treat: ownProps.treat,
    shop: ownProps.shop
  };
};

const mdp = (dispatch) => {
  return {
  };
};

export default withRouter(connect(msp, mdp)(TreatIndexItem));
