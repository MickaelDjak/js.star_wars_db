import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "./../../services/SwapiService";
import Spinner from "./../spinner";
import PlanetView from "./PlanetView";
import ErrorGenerator from "../error-generator";
import ErrorHandler from "../error-handler/ErrorHandler";

export default class RandomPlanet extends Component {
  swapiServise = new SwapiService();

  timer;

  state = {
    planet: {},
    loading: true
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
      loading: false
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
    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const viewer = !loading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="RandomPlanet">
        <ErrorHandler>
          {spinner}
          {viewer}
          <ErrorGenerator />
        </ErrorHandler>
      </div>
    );
  }
}
