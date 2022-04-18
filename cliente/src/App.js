//components

//import React from 'react';
//import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess.js';
import ContextProvider from './context/ContextProvider';
//import Header from "./components/header/Header";
//import Home from './components/home/Home';
//import DetailView from './components/details/DetailView';
//import CreateView from './components/post/CreateView';
//import UpdateView from './components/post/UpdateView';
//import Login from './components/account/Login';
//import Update from './components/create/Update';
//import About from './components/about/About';
//import Contact from './components/contact/Contact';


function App() {
  return (
    <ContextProvider>
        <BrowserRouter>
          <AppWithRouterAccess/> 
      
        </BrowserRouter>
      </ContextProvider> 
  );
}

export default App; 