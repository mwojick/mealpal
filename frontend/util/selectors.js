
export const getPreferredCity = (session, users, cities) => {
  let currentUser = users[session.id];

  let preferredCity = Object.values(cities).filter(city =>
    currentUser.preferredCity === city.name);

  preferredCity = preferredCity[Object.keys(preferredCity)[0]]
  || { latitude: 37.789232, longitude: -122.409499};

  return preferredCity;
};
