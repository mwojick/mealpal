export default class MarkerManager {
  constructor(map, shops) {
    this.map = map;
    this.shops = shops;
    this.markers = [];
    this.infoWindows = [];
  }

  updateMarkers(shops) {
    console.log('time to update');
  }

  drop() {
    this.clearMarkers();
    for (let i = 0; i < this.shops.length; i++) {
      this.addMarkerWithTimeout({
        lat: this.shops[i].latitude,
        lng: this.shops[i].longitude
      }, i * 25, this.shops[i]);
    }
    google.maps.event.addListener(this.map, "click", (e) => {
      this.infoWindows.forEach(win => win.close());
    });
  }

  addMarkerWithTimeout(position, timeout, shop) {
    window.setTimeout( () => {

      let contentString = '<div >' +
        `${shop.name}` +
        '</div >';

      let infoWindow = new google.maps.InfoWindow({
        content: contentString
      });

      this.infoWindows.push(infoWindow);

      let marker = new google.maps.Marker({
        position: position,
        map: this.map,
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });

      this.markers.push(marker);
    }, timeout);
  }

  clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
}
