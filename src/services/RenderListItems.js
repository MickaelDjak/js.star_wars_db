const renderPerson = ({ name, gender, birthYear }) => {
  return `${name}  (${gender}, ${birthYear})`;
};

const renderPlanet = ({ name, diameter }) => {
  return `${name}  (${diameter})`;
};

const renderStarship = ({ name, starshipClass }) => {
  return `${name}  (${starshipClass})`;
};

export { renderPerson, renderPlanet, renderStarship };
