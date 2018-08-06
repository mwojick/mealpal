export default class MarkerManager {
  constructor(map, shops) {
    this.map = map;
    this.shops = shops;
    this.markers = {};
    this.openWindow = null;

    google.maps.event.addListener(this.map, "click", (e) => {
      if (this.openWindow) {
        this.openWindow.close();
        this.openWindow = null;
      }
    });
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

  Object.keys(this.markers)
    .filter(shopId => !shopsObj[shopId])
    .forEach((shopId) =>
    this.removeMarker(this.markers[shopId]));

  }

  createMarker(shop, animate = null) {

    let contentString = '<div >' +
      `${shop.name}` +
      '</div >';

    let infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

    const position = new google.maps.LatLng(shop.latitude, shop.longitude);

    // Marker icon from:
    // https://www.iconsdb.com/soylent-red-icons/marker-icon.html
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      shopId: shop.id,
      icon: 'https://res.cloudinary.com/mwojick/image/upload/v1533428003/TreatPal/icons/marker-32-orange.ico',
      animation: animate
    });
    
    marker.addListener('click', () => {
      if (this.openWindow) this.openWindow.close();
      this.openWindow = infoWindow;
      infoWindow.open(this.map, marker);
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
      this.addMarkerWithTimeout(this.shops[i], i * 25);
    }
  }


  addMarkerWithTimeout(shop, timeout) {
    window.setTimeout( () => {
      this.createMarker(shop, google.maps.Animation.DROP)

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
