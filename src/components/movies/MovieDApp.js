import React, { Component } from "react";
import MovieList from './MoviesList';
import SearchArea from './Search';
import MOVIEDBAPI from '../api/moviedbapi';

class MovieDApp extends Component {

    constructor() {
        super();
        this.state ={
            movies: {},
            //handleSubmit:'bollywood'
        }
    }

    componentDidMount() {
        MOVIEDBAPI.get(`india`)
        .then(res => {
          const movies = res.data.results;
          console.log(movies)
          this.setState({ movies });
        })
       
    }

    handleSubmit = (term = 'bollywood') => {
        MOVIEDBAPI.get(term)
        .then(res => {
          const movies = res.data.results;
          this.setState({ movies });
        })
    }

    render() {
        return(
            <div className="main">
            <SearchArea handleSubmit={this.handleSubmit} />
                <MovieList movies={this.state.movies} term={this.state.term}  />
            </div>
        )
    }

}

export default MovieDApp;