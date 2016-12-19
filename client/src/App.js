import React, { PropTypes } from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      show:[]
    }
  }
  handleClick(e){
    e.preventDefault();
    axios.get('http://localhost:4000/posts'){
      
    }
  }
  render () {
    return(
      <div onClick={this.handleClick.bind(this)}>
        clickme
      </div>
    )

  }
}

export default App;
