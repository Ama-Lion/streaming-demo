//TODO-------IMPORT MODULES--------
import React, { Component } from "react";

//TODO-------CREATE DISPLAY--------
export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }
  //TODO-------FETCH DATA--------
  componentDidMount() {
    fetch("http://127.0.0.1:3000/movies")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movies: result,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  //TODO-------RENDER DISPLAY--------
  render() {
    const { error, isLoaded, movies } = this.state;
    console.log(movies);

    if (error) {
      return (
        <div className="center red">
          <h1>Error in loading</h1>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="center blue">
          <h1>Loading ...</h1>
        </div>
      );
    } else {
      return (
        <div className="carding">
          <div className="title">
            <h1> Top Series</h1>
          </div>
          <div className="cards">
            {movies.map((movie) => (
              <div className="card">
                <img
                  className="card-img-top"
                  src={movie.images}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text" id="description">
                    {movie.description}
                  </p>
                  <a href="#" className="btn btn-primary">
                    More Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
