import React, { Component } from "react";
import SwapiService from "./../../services/SwapiService";
import Spinner from "./../spinner";
import "./RandomPlanet.css";

export default class RandomPlanet extends Component {
  swapiServise = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
    // setInterval(this.updatePlanet, 3000);
  }

  // componentDidMount() {
  //   setInterval(this.updatePlanet, 3000);
  // }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiServise.getPlanet(id).then(planet => {
      this.setState({
        planet: planet,
        loading: false
      });
    });
  };

  render() {
    const {
      planet: { id, name, population, diameter, orbitalPeriod },
      loading
    } = this.state;
    if (loading) {
      return (
        <div className="RandomPlanet">
          <Spinner />
        </div>
      );
    } else {
      const imgUrl = id
        ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
        : "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";

      // const style = {
      //   background-image: url("https://starwars-visualguide.com/assets/img/planets/4.jpg"),
      // url("https://starwars-visualguide.com/assets/img/big-placeholder.jpg")}
      return (
        <div className="RandomPlanet">
          <div className="RandomPlanet-photo">
            <img src={imgUrl} alt="sw random planet" />
          </div>
          <div className="RandomPlanet-info">
            <h1 className="display-3">{name}</h1>

            <p>
              <span className="RandomPlanet-term font-weight-bold">
                Population
              </span>
              <span className="text-muted">{population}</span>
            </p>
            <p>
              <span className="RandomPlanet-term  font-weight-bold">
                Diameter
              </span>
              <span className="text-muted">{diameter}</span>
            </p>
            <p>
              <span className="RandomPlanet-term  font-weight-bold">
                Orbital period
              </span>
              <span className="text-muted">{orbitalPeriod}</span>
            </p>
          </div>
        </div>
      );
    }
  }
}
