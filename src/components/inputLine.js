import React, {Component} from 'react';
import NewsList from './newsList'
import DATA from './db.json'


    class InputLine extends Component {

        state={
            DATA: DATA,
            input: '',
            filteredState: [],
          }
    
      render() { 

        const showInput = (a) => {
            console.log(a.target.value);
            this.setState({input: a.target.value});
            
            let filtered = this.state.DATA.filter((item) => {
              return (
                item.title.indexOf(a.target.value) > -1
              )});
            this.setState({
              filteredState: filtered
            })
          }
          
          const style = {
            background: 'rgb(153, 204, 255)',
          }
      
          if (this.state.input !== '') {
            style.background = 'aqua';
          }

          return (
            <div style={style}>
                <input 
                type="text"
                onChange={showInput}
                />

                {this.state.input}

                <NewsList transfer={this.state.filteredState.length === 0 ? this.state.DATA : this.state.filteredState}  />

              
              
            </div>
          );
      }
  }

export default InputLine;