export default class MarkerManager {
  constructor(map, shops) {
    this.map = map;
    this.shops = shops;
    this.markers = [];
  }

  updateMarkers(treats) {
    console.log('time to update');
  }

  drop() {
    this.clearMarkers();
    for (let i = 0; i < this.shops.length; i++) {
      this.addMarkerWithTimeout({
        lat: this.shops[i].latitude,
        lng: this.shops[i].longitude
      }, i * 20);
    }
  }

  addMarkerWithTimeout(position, timeout) {
    window.setTimeout(() => {
      this.markers.push(new google.maps.Marker({
        position: position,
        map: this.map,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  }

  clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
}
