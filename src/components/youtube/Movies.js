import React from 'react';

const Movies = ({movie, onselectetdMovie}) => {
    const imageUrl = movie.snippet.thumbnails.default.url;
    return(
        <div 
        onClick={() => onselectetdMovie(movie)}
        className="media">
            <img src={imageUrl} alt="{props.movie.snippet.title}" />
        <div className="media-body">
            <h5 className="mt-0">{movie.snippet.title}</h5>
        </div>
        </div>
    )
}

export default Movies;