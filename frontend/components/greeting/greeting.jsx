import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TreatIndexContainer from '../treat_listing/treat_index_container';
import SearchContainer from '../search/search_container';
import TreatMapContainer from '../map/treat_map_container';
import LoadingIcon from './loading_icon';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTreats(this.props.currentUser.preferredCity);
    this.props.fetchCities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== '/') {
      this.props.history.push('/');
    }
    if (nextProps.currentUser.preferredCity !==
      this.props.currentUser.preferredCity) {
        this.props.fetchTreats(nextProps.currentUser.preferredCity);
    }
  }

  render() {

    if (this.props.loading) {
      return <LoadingIcon />;
    }

    return (
      <div className="greeting-container">

        <div className="search-container">
          <SearchContainer />
        </div>

        <div className="treats-and-map">
          <TreatIndexContainer />
          <div className="map-container">
            <TreatMapContainer />
          </div>
        </div>

      </div>
    );
  }
}

export default Greeting;
