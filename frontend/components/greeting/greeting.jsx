import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TreatIndexContainer from '../treat_listing/treat_index_container';
import LoadingIcon from './loading_icon';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTreats(this.props.currentUser.preferredCity);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  render() {

    if (this.props.loading) {
      return <LoadingIcon />;
    }

    return (
      <div className="greeting-container">

        <TreatIndexContainer />

      </div>
    );
  }
}

export default Greeting;
