const renderListItems = {
  renderPerson({ name, gender, birthYear }) {
    return `${name}  (${gender}, ${birthYear})`;
  },

  renderPlanet({ name, diameter }) {
    return `${name}  (${diameter})`;
  },

  renderStarship({ name, starshipClass }) {
    return `${name}  (${starshipClass})`;
  }
};

export default renderListItems;
