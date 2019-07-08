import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return (
            <div className="container">
                <div className="row">
                    { props.movies.length > 0 ? props.movies.map((movie,i) => {
                            return (
                                <Movie key={i} image={movie.poster_path} movie={movie} />
                            )
                        }) : 'no list'}
                </div>
            </div>
    )
}
export default MovieList;