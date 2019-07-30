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
    const body = await this.getResource(`people/`);
    return body.results;
  }

  getPerson(id) {
    return this.getResource(`people/${id}`);
  }

  async getAllPlanets() {
    const body = await this.getResource(`planets/`);
    return body.results;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}`);
  }

  async getAllStarships() {
    const body = await this.getResource(`starships/`);
    return body.results;
  }

  getStarship(id) {
    return this.getResource(`starships/${id}`);
  }
}

// const ss = new SwapiService();
// ss.getStarship(3).then(people => {
//   console.log(people.name);
// });
