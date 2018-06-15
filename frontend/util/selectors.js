
export const getPreferredCity = (session, users, cities) => {
  let currentUser = users[session.id];

  let preferredCity = Object.values(cities).filter(city =>
    currentUser.preferredCity === city.name);

  preferredCity = preferredCity[Object.keys(preferredCity)[0]]
  || { latitude: 37.789232, longitude: -122.409499};

  return preferredCity;
};

export const getFavIds = (favorites) => {
  let favArr = Object.values(favorites);
  let favs = {};

  favArr.forEach((f) => {
    favs[f.shopId] = f.id;
  });
  return favs;
};

export const getFavorites = (favorites) => {
  let favArr = Object.values(favorites);
  let favs = {};

  favArr.forEach((f) => {
    favs[f.shopId] = true;
  });
  return favs;
};

export const getFavTreats = (treats, favs, isFav) => {
  if (isFav) {

    let treatsFav = [];
    treats.forEach((tr) => {
      if (favs[tr.shopId]) {
        treatsFav.push(tr);
      }
    });

    return treatsFav;

  } else {
    return treats;
  }
};

export const getCityReservations = (reservations, treats) => {
  let treatIds = [];
  Object.values(treats).forEach((tr) => {
    treatIds.push(tr.id);
  });

  let cityReses = [];
  Object.values(reservations).forEach((res) => {
    if (treatIds.includes(res.treatId)) {
      cityReses.push(res);
    }
  });

  while (cityReses.length < 5) {
    cityReses.push([]);
  }
  return cityReses;
};

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

const compareDates = (dr, djs) => {

  djs = djs.split("T")[0];

  if (djs !== dr) {
    return false;
  }

  return true;
};

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





//
