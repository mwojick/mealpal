
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

In order to search for places within the bounds of the map, I add two event listeners when the map mounts on the page. One is for after the user drags somewhere else on the map, and one handles zooming. They execute the updateBounds function, which gets the bounds from the map. Then it calls updateFilter, which sends an action to update the bounds in the store (which is also used by the search bar). Then it makes an AJAX request to the server with information about the current city, search query, and map bounds. The treats/shops are filtered on the back-end based on this information and then sent back.

```javascript

registerListeners() {
  google.maps.event.addListener(this.map, 'dragend', this.updateBounds);
  google.maps.event.addListener(this.map, 'zoom_changed', this.updateBounds);

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

export const updateFilter = (city, search, filter, bounds) =>
 (dispatch, getState) => {

  dispatch(changeFilter(filter, bounds));

  return searchTreats({
    bounds: bounds,
    city: city,
    search: search
  })(dispatch);
};

```

##### Timezones, and selecting reservations for the past 5 days:

The differences in the way Ruby and Javascript handle timezones made it difficult to take times and dates from the back-end (Rails) and filter them on the front-end (JS/React), since by default the ruby methods for getting date/time are based on local time, whereas JS uses UTC. In order to get the reservations in the past 5 days, I had to create new date objects in JS and convert them to local time using getTimezoneOffset before comparing the current date with the ones received from Rails. I also had to change the timezone in my Heroku database to local time, since by default it uses UTC.


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
