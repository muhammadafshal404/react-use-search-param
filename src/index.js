import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import ParamChild from './components/paramChild'

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact component={App} />
        <Route path="/:id" component={ParamChild} />
      </Routes>
      <Footer/>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

