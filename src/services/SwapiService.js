export default class SwapiService {
  _apiBase = "https://swapi.co/api/";

  _apiImageBase = "https://starwars-visualguide.com/assets/img/";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (res.ok === false) {
      throw new Error(`Could not fetch ${url}, reveiceved ${res.status} `);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const people = await this.getResource(`people/`);
    return people.results.map(person => {
      return this._transformPerson(person);
    });
  };

  getPerson = async id => {
    const person = await this.getResource(`people/${id}`);

    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const planets = await this.getResource(`planets/`);

    return planets.results.map(planet => this._transformPlanet(planet));
  };

  getPlanet = async id => {
    const planet = await this.getResource(`planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const starships = await this.getResource(`starships/`);
    return starships.results.map(starship => {
      return this._transformStarship(starship);
    });
  };

  getStarship = async id => {
    const starship = await this.getResource(`starships/${id}`);

    return this._transformStarship(starship);
  };

  _transformPlanet = planet => {
    const id = this._getIdBuUrl(planet.url);

    return {
      id: id,
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      orbitalPeriod: planet.orbital_period,
      climate: planet.climate,
      gravity: planet.gravity,
      rotationPeriod: planet.rotation_period,
      surfaceWater: planet.surface_water,
      terrain: planet.terrain,
      imageUrl: this._getImageUrl("planets", id),
      stabImageUrl: this._getStubImageUrl()
    };
  };

  _transformStarship = starship => {
    const id = this._getIdBuUrl(starship.url);

    return {
      id: id,
      MGLT: starship.MGLT,
      cargoCapacity: starship.cargo_capacity,
      consumables: starship.consumables,
      costInCredits: starship.cost_in_credits,
      created: starship.created,
      crew: starship.crew,
      edited: starship.edited,
      hyperdriveRating: starship.hyperdrive_rating,
      length: starship.length,
      manufacturer: starship.manufacturer,
      maxAtmospheringSpeed: starship.max_atmosphering_speed,
      model: starship.model,
      name: starship.name,
      passengers: starship.passengers,
      starshipClass: starship.starship_class,
      imageUrl: this._getImageUrl("starships", id),
      stabImageUrl: this._getStubImageUrl()
    };
  };

  _transformPerson = person => {
    const id = this._getIdBuUrl(person.url);

    return {
      id: id,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      gender: person.gender,
      hairColor: person.hair_color,
      height: person.height,
      mass: person.mass,
      name: person.name,
      skinColor: person.skin_color,
      created: person.created,
      edited: person.edited,
      imageUrl: this._getImageUrl("characters", id),
      stabImageUrl: this._getStubImageUrl()
    };
  };

  _getIdBuUrl = url => {
    const regex = /\/(\d*)\/$/;
    const id = url.match(regex)[1];
    return id;
  };

  _getImageUrl = (entityName, id) => {
    return `${this._apiImageBase}${entityName}/${id}.jpg`;
  };

  _getStubImageUrl = () => {
    return `${this._apiImageBase}big-placeholder.jpg`;
  };
}
