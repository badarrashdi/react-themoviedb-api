import React from 'react';
import axios from 'axios';
import MOVIEDBAPI from '../api/moviedbapi';

class MovieDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            movie: ''
        }
        this.apiKey = '<API_KEY>'

    }

    componentDidMount() {
        const { match: {params}} = this.props;
        console.log(this.props)
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d547ee30f07b5fa5f6c5a2f0f099e635&language=en-US`)
        .then(res => {
          const movie = res.data;
          console.log(movie)
          this.setState({ movie });
        })
       
    }


    render() {
        const {movie} = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <h1>{movie.original_title}</h1>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail;