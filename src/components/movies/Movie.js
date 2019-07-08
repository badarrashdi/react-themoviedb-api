import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    return(
        <div className="col-sm-3">
            <div className="card">
            <div className="card-image">
            <Link to={`/movie/${props.movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${props.image}`} className="img-thumbnail" alt="" />
            </Link>
            </div>
           
        </div>
        </div>
    )
}

export default Movie;