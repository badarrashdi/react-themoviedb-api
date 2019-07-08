import React from 'react';

class SearchArea extends React.Component {

constructor(){
  super();
  this.state ={
    term: ''
  }

}

onInputChange = (term) => {
  this.setState({
    term
})
this.props.handleSubmit(term)
}

render() {
    return (
        <div className=" container">
          <form name="search">
            <div className="form-group">
              <input
              type="text" 
              onChange={event => this.onInputChange(event.target.value)} 
              placeholder="search movies..." 
              className="form-control" />
            </div>
          </form>
      </div>    
    )
}
}
export default SearchArea;