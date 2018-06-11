import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import Resizable from 're-resizable';

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
      zoom: 15
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    this.MarkerManager =
      new MarkerManager(this.map, Object.values(this.props.shops));

    this.MarkerManager.drop();

  }

  render() {
    return (
      <Resizable enable={
        {
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        }
      }

      >
        <div id='map' ref='map'>

        </div>
      </Resizable>
    );
  }
}

export default TreatMap;
