import React from 'react';
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

    this.mapOptions = {
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

  }

  componentDidMount() {

    const mapRef = this.refs.map;
    this.map = new google.maps.Map(mapRef, this.mapOptions);

    this.MarkerManager =
      new MarkerManager(this.map);

    // this.MarkerManager.drop(this.props.shops, this.props.treats);
    this.MarkerManager.updateMarkers(this.props.shops, this.props.treats);

    this.registerListeners();

  }

  componentDidUpdate() {

    this.MarkerManager.updateMarkers(this.props.shops, this.props.treats);
    this.MarkerManager.highlightMarker(this.props.marker);
    
    if (this.props.center) {

      let latLng = new google.maps.LatLng(
        this.props.preferredCity.latitude,
        this.props.preferredCity.longitude);

      this.map.setCenter(latLng);
      this.map.setZoom(15);

      this.updateBounds();

      this.props.changeFilter("center", false);
    }
  }


  updateBounds() {

    let mapBounds = this.map.getBounds();

    //handle edge case where bounds are sometimes not defined on refresh
    if (mapBounds) {
      window.scrollTo(0, 280);

      const { north, south, east, west } = mapBounds.toJSON();

      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };

      this.props.updateFilter(
        this.props.preferredCity.name, this.props.search, 'bounds', bounds);
    }
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
