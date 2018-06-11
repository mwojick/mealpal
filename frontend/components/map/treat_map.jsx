import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class TreatMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // debugger;
    const mapOptions = {
      center: {
        lat: this.props.preferredCity.latitude,
        lng: this.props.preferredCity.longitude
      },
      zoom: 14
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);

  }

  render() {
    return (
      <div id='map' ref='map'>

      </div>
    );
  }
}

export default TreatMap;
