import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav';
import MovieApp from './youtube/MovieApp';
import MovieDApp from './movies/MovieDApp';
import MovieDetail from './movies/MovieDetail';

const Home = () => {
    return (
     <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">The Movie Db &amp; Youtube Video search</h1>
      </div>
     </div>
    )
}

class App extends React.Component {
 

 

  render() {
    return(
      <div className="App">
        <Router>
          <Nav  />
          <Route exact path="/" component={Home} />
          <Route path="/youtube" component={MovieApp} />
          <Route path="/movies" component={MovieDApp} />
          <Route path="/movie/:id" component={MovieDetail} />
          </Router>
     </div>
    )
  }
}
  

export default App;
