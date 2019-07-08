import React, { Component } from "react";

class MovieSearch extends Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({
            term
        })
        this.props.onSearchTerm(term)
    }

    render() {
      return(
        <form name="search" className="container">
          <div className="form-group">
            <input 
            onChange={event => this.onInputChange(event.target.value)}
            type="text" 
            value={this.state.term} 
            placeholder="search..." 
            required 
            className="form-control" 
            />
          </div>
        </form>
      )
    }
}

export default MovieSearch;