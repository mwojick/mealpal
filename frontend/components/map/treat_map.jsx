import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import Resizable from 're-resizable';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class TreatMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
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
    // this.MarkerManager.updateMarkers(Object.values(this.props.shops));

    this.registerListeners();

  }

  componentDidUpdate() {

    // this.MarkerManager.updateMarkers(Object.values(this.props.shops));
  }

  componentWillReceiveProps(newProps) {

    if (newProps.center) {
      let latLng = new google.maps.LatLng(
        this.props.preferredCity.latitude,
        this.props.preferredCity.longitude);

      this.map.setCenter(latLng);
      this.map.setZoom(15);
      this.props.changeFilter("center", false);
    }
  }


  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter(
        this.props.preferredCity.name, '', 'bounds', bounds);
    });
  }

  render() {
    return (
      <Resizable enable={
        {
          top: false,
          right: false,
          bottom: false,
          left: false,
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
