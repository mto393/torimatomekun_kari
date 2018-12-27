import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GlobalStyle from './components/GlobalStyle'
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Header>とりまとめくん</Header>
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route 
              path='/create'
              render={props => <Create type={"create"} {...props} />}
            />
            <Route 
              path='/edit'
              render={props => <Create type={"edit"} {...props} />}
            />
          </div>
        </Router>
        <Footer>©2018 とりまとめくん制作チーム</Footer>
      </Wrapper>
    );
  }
}

export default App;
