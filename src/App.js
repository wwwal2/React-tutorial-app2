import React, { Component } from 'react';
import './App.css';

import NewsList from './components/newsList'
import DATA from './components/db.json'

class App extends Component {
  
  state={
    DATA: DATA,
    input: '',
  }

  render() {

    const showInput = (a) => {
      console.log(a.target.value);
      this.setState({input: a.target.value});
    }

    const style = {
      background: 'rgb(153, 204, 255)',
    }

    if (this.state.input != '') {
      style.background = 'aqua';
    }

    return (
      <div className="App" style={style}>
        <input 
        type="text"
        onChange={showInput}
         />
         
        {this.state.input}

        <NewsList transfer={this.state.DATA}/>

      </div>
    );
  }
}

export default App;
