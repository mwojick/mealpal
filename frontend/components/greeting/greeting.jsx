import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TreatIndexContainer from '../treat_listing/treat_index_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  render() {

    return (
      <div className="greeting-container">

        <TreatIndexContainer />

      </div>
    );
  }
}

export default Greeting;
