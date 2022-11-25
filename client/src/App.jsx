import React from 'react';
import { Container } from '@material-ui/core';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <GoogleOAuthProvider clientId='805132013708-tevue8nom2q1262l84i91464eid1ghr4.apps.googleusercontent.com'>
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;