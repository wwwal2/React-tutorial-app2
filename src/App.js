import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';


import InputLine from './components/inputLine';
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles'


const App = () => {
 
    return (

        <BrowserRouter>
          <div>
            <div>
              <InputLine/>
            </div>

            <Route path="/posts" exact component={Posts} />
            <Route path="/home" exact component={Home} />
            <Route path="/profiles" exact component={Profiles} />
            <footer>
              <Link to="/">Start page</Link><br/>
              <Link to="/home">Home</Link><br/>
              <Link to="/profiles">Profiles</Link><br/>
              <Link to="/posts">Posts</Link><br/>
              <hr/>
            </footer>
          </div>          
        </BrowserRouter>
        
      
    );
  
}

export default App;
