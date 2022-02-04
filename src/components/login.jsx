import React, { useEffect } from 'react';
import { auth, provider } from '../firebase';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

function Login(){
  useEffect(() => {
    alert("This is a Work In Progress. At this time you can create channels, multiple people can log in and chat in different channels at the same time. The top left 7 tabs above the channels and a few other buttons are just for the UI and are not functional yet. Functionality will be added in the next update. Thank you.");
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer className='login__container'>
        <img src='https://live.staticflickr.com/65535/51762790816_954336470a.jpg' alt='Logo'/>
        <div className='login__text'>
          <h1>Sign in to SONAR</h1>
          <p>sonar.com</p>
        </div>

        <Button type='submit' onClick={signIn}>
          Sign In With Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;