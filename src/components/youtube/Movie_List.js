import React from 'react';
import Movies from './Movies';
const MovieList = (props) => {
    return (
        <div className=" col-sm-4">
                
                    { props.movies.length > 0 ? props.movies.map((movie,i) => {
                            return (
                                <Movies 
                                onselectetdMovie={props.onselectetdMovie}
                                movie={movie} key={i}  />
                            )
                        }) : 'No Video Found'}
        </div>
    )
}

export default MovieList;