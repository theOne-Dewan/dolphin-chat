import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <AppBody>
          <Sidebar/>
          <Switch>
            <Route exact path='/'>
              <h1>chat</h1>
            </Route>
            <Route path='/about'>
              About
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;