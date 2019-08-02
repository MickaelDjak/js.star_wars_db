export default class SwapiService {
  _apiBase = "https://swapi.co/api/";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (res.ok === false) {
      throw new Error(`Could not fetch ${url}, reveiceved ${res.status} `);
    }
    return await res.json();
  }

  async getAllPeople() {
    const people = await this.getResource(`people/`);
    return people.results.map(person => {
      return this._transformPerson(person);
    });
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}`);

    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const planets = await this.getResource(`planets/`);

    return planets.results.map(planet => this._transformPlanet(planet));
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const starships = await this.getResource(`starships/`);
    return starships.results.map(starship => {
      return this._transformStarship(starship);
    });
  }

  async getStarship(id) {
    const starship = await this.getResource(`starships/${id}`);

    return this._transformStarship(starship);
  }

  _transformPlanet(planet) {
    return {
      id: this._getIdBuUrl(planet.url),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      orbitalPeriod: planet.orbital_period
    };
  }

  _transformStarship(starship) {
    return {
      id: this._getIdBuUrl(starship.url),
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
      starshipClass: starship.starship_class
    };
  }

  _transformPerson(person) {
    return {
      id: this._getIdBuUrl(person.url),
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      gender: person.gender,
      hairColor: person.hair_color,
      height: person.height,
      mass: person.mass,
      name: person.name,
      skinColor: person.skin_color,
      created: person.created,
      edited: person.edited
    };
  }

  _getIdBuUrl(url) {
    const regex = /\/(\d*)\/$/;
    const id = url.match(regex)[1];
    return id;
  }
}

// const ss = new SwapiService();
// ss.getStarship(3).then(people => {
//   console.log(people.name);
// });
