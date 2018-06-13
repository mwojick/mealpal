
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

};
