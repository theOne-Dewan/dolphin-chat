import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import Login from './components/login.jsx';
import Spinner from 'react-spinkit';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src='https://live.staticflickr.com/65535/51762790816_954336470a.jpg' alt='logo'/>
          <Spinner className='app__spinner' name='ball-spin-fade-loader' color='purple' fadeIn='none'/>
        </AppLoadingContents>
      </AppLoading>
    );
  };
  
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path='/'>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
