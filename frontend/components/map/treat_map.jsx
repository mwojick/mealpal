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

    this.updateBounds = this.updateBounds.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: {
        lat: this.props.preferredCity.latitude,
        lng: this.props.preferredCity.longitude
      },
      zoom: 15,
      clickableIcons: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
  },
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

      this.updateBounds(newProps.search);

      this.props.changeFilter("center", false);
    }
  }

  updateBounds(search = this.props.search) {

    window.scrollTo(0, 280);
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat: north, lng: east },
      southWest: { lat: south, lng: west } };
    this.props.updateFilter(
      this.props.preferredCity.name, search, 'bounds', bounds);
  }


  registerListeners() {
    google.maps.event.addListener(this.map, 'dragend', this.updateBounds);
    google.maps.event.addListener(this.map, 'zoom_changed', this.updateBounds);

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
      <div className="map-resize">
        <div id='map' ref='map'>

        </div>
      </div>
      </Resizable>
    );
  }
}

export default TreatMap;
