export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.openWindow = null;
    this.highlight = null;

    this.orangeIcon = "https://res.cloudinary.com/mwojick/image/upload/v1533428003/TreatPal/icons/marker-32-orange.ico";
    this.blueIcon = "https://res.cloudinary.com/mwojick/image/upload/v1533428003/TreatPal/icons/marker-32-blue.ico";

    google.maps.event.addListener(this.map, "click", (e) => {
      if (this.openWindow) {
        this.openWindow.close();
        this.openWindow = null;
      }
    });
  }

  updateMarkers(shops, treats) {
  const shopsObj = {};

  shops.forEach((shop) => {
    shopsObj[shop.id] = shop;
  });

  shops
    .filter(shop => !this.markers[shop.id])
    .forEach(newShop =>
      this.createMarker(newShop, treats[newShop.id]));

  Object.keys(this.markers)
    .filter(shopId => !shopsObj[shopId])
    .forEach((shopId) =>
    this.removeMarker(this.markers[shopId]));

  }

  createMarker(shop, treat, animate = null) {

    let contentString = 
      `<div class="info-window">

        <img class="info-win-img" src="${treat.imageUrl}"/>
      
        <div class="info-win-desc">
          <div class="info-win-name">
            ${treat.name.toUpperCase()}
          </div >
          <div class="info-win-name">
            ${shop.name.toUpperCase()}
          </div >
          <div class="info-win-name info-win-reserve">
            RESERVE
          </div >
        </div >
      </div >`;

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
      icon: this.orangeIcon,
      animation: animate
    });
    
    marker.addListener('click', () => {
      if (this.openWindow) this.openWindow.close();
      this.openWindow = infoWindow;
      infoWindow.open(this.map, marker);
    });

    marker.addListener('mouseover', () => {
      marker.setIcon(this.blueIcon);
    });
    
    marker.addListener('mouseout', () => {
      marker.setIcon(this.orangeIcon);
    });

    this.markers[shop.id] = marker;
  }


  removeMarker(marker) {
    this.markers[marker.shopId].setMap(null);
    delete this.markers[marker.shopId];
  }

  highlightMarker(shopId) {
    if (shopId !== this.highlight) {
      if (this.highlight && this.markers[this.highlight]) {
        this.markers[this.highlight].setIcon(this.orangeIcon);
      }
      if (shopId && this.markers[shopId]) {
        this.markers[shopId].setIcon(this.blueIcon);
      }

      this.highlight = shopId;
    }
  }

  


  drop(shops, treats) {
    this.clearMarkers();
    for (let i = 0; i < shops.length; i++) {
      this.addMarkerWithTimeout(shops[i], treats[shops[i].id], i * 25);
    }
  }


  addMarkerWithTimeout(shop, treat, timeout) {
    window.setTimeout( () => {
      this.createMarker(shop, treat, google.maps.Animation.DROP)

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
