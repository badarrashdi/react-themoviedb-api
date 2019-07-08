import _ from 'lodash';
import React from 'react';


import MovieSearch from './Movie_Search';
import MovieList from './Movie_List';
import YTSearch from 'youtube-api-search';
import MovieDetail from './Movie_Detail';

const YOUTUBR_API='AIzaSyAAxsX0fqBkxJyJLPyiRRLLUrT5fmrCdm4';


class MovieApp extends React.Component {
  constructor() {
    super();
    this.state ={
      movies: [],
      selectedMovie: null,
      loading: false
    }

    this.apiKey = process.env.REACT_APP_API;
    this.movieSearch();

    
  }
  
  componentDidMount() {
    
  }

  movieSearch(term) {
    YTSearch({key: YOUTUBR_API, term: term}, (movies) => {
      console.log(movies);
      this.setState({
        movies: movies,
        selectedMovie: movies[1]
      })
    })
  }
 

  handleSubmit = (e) => {
    e.preventDefault();

  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }



  render() {
    const movieSearch = _.debounce((term) => {this.movieSearch(term)},300)
    return(
      <div className="App">
        <MovieSearch
        onSearchTerm={movieSearch}
        />
       <div className="container body-container">
         <div className="row">
          <MovieDetail movie={this.state.selectedMovie} />
          <MovieList 
          onselectetdMovie={selectedMovie => {
            this.setState({ selectedMovie })
          }}
          movies={this.state.movies} />
          </div>
        </div>
     </div>
    )
  }
}
  

export default MovieApp;
