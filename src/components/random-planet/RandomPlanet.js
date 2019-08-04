import React, { Component } from "react";
import SwapiService from "./../../services/SwapiService";
import Spinner from "./../spinner";
import ErrorIndicator from "./../error-indicator";
import PlanetView from "./PlanetView";
import "./RandomPlanet.css";

export default class RandomPlanet extends Component {
  swapiServise = new SwapiService();

  timer;

  state = {
    planet: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  componentDidMount() {
    this.timer = setInterval(this.updatePlanet, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet: planet,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 1;

    this.swapiServise
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const errorIndicator = error ? <ErrorIndicator /> : null;

    const viewer = !(loading || error) ? <PlanetView planet={planet} /> : null;

    return (
      <div className="RandomPlanet">
        {spinner}
        {viewer}
        {errorIndicator}
      </div>
    );
  }
}
