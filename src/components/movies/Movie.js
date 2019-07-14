import React from 'react';
import { Link } from 'react-router-dom';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgheight: 0
        }
        this.imgRef = React.createRef();
    }
    componentDidMount() {
        this.imgRef.current.addEventListener('load', this.loadedRed);
    }
    loadedRed = () => {
       const imgheight = this.imgRef.current.clientHeight
       this.setState({
        imgheight
       })
    }
render() {
    const {movie} = this.props;
    const {image} = this.props;
    
    return(
        <div className="col-sm-3">
            <div className="card">
            <div className="card-image">
            <Link to={`/movie/${movie.id}`}>
            <img style={{}}ref={this.imgRef} src={`https://image.tmdb.org/t/p/w500${image}`} className="img-thumbnail" alt="" />
            </Link>
            </div>
           
        </div>
        </div>
    )
}
   
}

export default Movie;