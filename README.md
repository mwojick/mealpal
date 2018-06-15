
- [Introduction](#introduction)
- [Features](#features)
- [Screenshot](#screenshot)
- [Technologies Used](#technologies-used)
- [Technical Challenges](#technical-challenges)
- [Build Process](#build-process)

## Introduction

[TreatPal](https://treat-pal.herokuapp.com/) is a clone of [MealPal](https://mealpal.com/) where you can search for treats/desserts in your preferred location and reserve one at most once per day, and get a discount off the normal price.

## Features

A few of the things you can do with TreatPal:

* See all available treats in the preferred city.
* Change the preferred city.
* Search for treats based on treat name and shop.
* Search based on the map boundaries.
* Favorite/unfavorite shops, and filter by favorites.
* Create, update, and cancel reservations for the next day.
* Menu with links to account page, reservation history, and list of favorites in your city.
* Mobile responsive design.

## Screenshot

![alt text](https://res.cloudinary.com/mwojick/image/upload/v1529086951/TreatPal-ScreenShot1.png "TreatPal")

## Technologies Used

* Ruby / Ruby on Rails
* [PostgreSQL](https://www.postgresql.org/)
* HTML / CSS
* Javascript
* [React](https://reactjs.org/) / [Redux](https://redux.js.org/)
* Webpack
* NPM
* [Heroku](https://heroku.com/)
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
* [Faker gem](https://github.com/stympy/faker)
* [Geocoder gem](http://www.rubygeocoder.com/)
* [Animate.css](https://daneden.github.io/animate.css/)

## Technical Challenges

##### Google map updates bounds in state and sends a search request:



```javascript

registerListeners() {
  google.maps.event.addListener(this.map, 'dragend', this.updateBounds);
  google.maps.event.addListener(this.map, 'zoom_changed', this.updateBounds);

}

updateBounds() {
  window.scrollTo(0,360);
  const { north, south, east, west } = this.map.getBounds().toJSON();
  const bounds = {
    northEast: { lat: north, lng: east },
    southWest: { lat: south, lng: west } };
    this.props.updateFilter(
      this.props.preferredCity.name, '', 'bounds', bounds);
    }

    ```

##### Selecting reservations for the past 5 days:



```javascript

export const getPastFive = (reses) => {
  let djs = new Date().addDays(1);

  djs = new Date(djs.getTime() - (djs.getTimezoneOffset() * 60000)).toJSON();

  let fiveReses = [];
  let j = 0;
  for (let i = 0; i < 5; i++) {

    if ( compareDates(reses[j].date, djs) ) {
      fiveReses.push(reses[j]);
      j = j + 1;
    } else {
      fiveReses.push([]);
    }
    djs = new Date(djs);
    djs = djs.addDays(-1);
    djs = djs.toJSON();
  }
  return fiveReses;
};

```

## Build Process

1. `npm install` - installs node packages, and runs Webpack post-install.
2. `rails db:create db:migrate db:seed` - create and seed db.
3. `rails server` - starts rails server.
4. open `localhost:3000` in browser.
