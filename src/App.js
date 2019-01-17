import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';

import Reset from './assets/styles/Base';
import Base from './assets/styles/Reset';

// import './assets/Globals.scss';
//import './assets/style.scss';
//import './assets/reset.scss';
//import './assets/icon.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Reset />
        <Base />
        <Sidebar /> 
        <Container/>
      </Fragment>
    );
  }
}

export default App;
