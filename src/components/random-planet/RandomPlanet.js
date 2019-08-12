import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "./../../services/SwapiService";
import Spinner from "./../spinner";
import PlanetView from "./PlanetView";
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
    return (
      <div className="row">
        <div className="col-12">
          <div className="RandomPlanet">
            <ErrorHandler>
              {loading ? <Spinner /> : <PlanetView planet={planet} />}
            </ErrorHandler>
          </div>
        </div>
      </div>
    );
  }
}
