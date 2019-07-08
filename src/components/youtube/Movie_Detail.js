import React from 'react';
const MovieDetail = ({movie}) => {

    if(!movie) {
        return (
            <div>Loading...</div>
        )
    }

    const movieId = movie.id.videoId;
    const movieurl = `https://www.youtube.com/embed/${movieId}`;
    console.log('id',movieId);
    console.log('url',movieurl);
    return (
  
                 <div className="col-sm-8 ">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={movieurl}></iframe>
                    </div>
                    <div className="capstion">
                     <h1>{movie.snippet.title}</h1>
                 </div>
                </div>
                

    )
}

export default MovieDetail;