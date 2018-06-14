export default class MarkerManager {
  constructor(map, shops) {
    this.map = map;
    this.shops = shops;
    this.markers = {};
    this.infoWindows = [];
  }

  updateMarkers(shops) {
  const shopsObj = {};

  shops.forEach((shop) => {
    shopsObj[shop.id] = shop;
  });

  shops
    .filter(shop => !this.markers[shop.id])
    .forEach(newShop =>
      this.createMarker(newShop));

  let filter1 = Object.keys(this.markers);
  // console.warn("1", filter1);
  let filter2 = filter1.filter(shopId => !shopsObj[shopId]);
  // console.warn("2", filter2);
  let filter3 = filter2.forEach((shopId) =>
    this.removeMarker(this.markers[shopId]));
  // console.warn("3", filter3);

  google.maps.event.addListener(this.map, "click", (e) => {
    this.infoWindows.forEach(win => win.close());
  });

  }

  createMarker(shop) {

    let contentString = '<div >' +
      `${shop.name}` +
      '</div >';

    let infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

    const position = new google.maps.LatLng(shop.latitude, shop.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      shopId: shop.id
    });

    marker.addListener('click', () => {
      this.infoWindows.forEach(win => win.close());
      infoWindow.open(this.map, marker);
      this.infoWindows.push(infoWindow);
    });

    this.markers[shop.id] = marker;
  }


  removeMarker(marker) {

    this.markers[marker.shopId].setMap(null);
    delete this.markers[marker.shopId];
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
        shopId: shop.id,
        icon: 'https://res.cloudinary.com/mwojick/image/upload/v1528938958/marker-32.ico',
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });

      this.markers[shop.id] = marker;


    }, timeout);
  }

  clearMarkers() {
    let keys = Object.keys(this.markers);
    keys.forEach((k) => {
      this.markers[k].setMap(null);
    });
    this.markers = {};
  }
}
