import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './containers/Home';
import Methodology from './containers/Methodology';
import MusicTheory from './containers/MusicTheory';
import UsefulLinks from './containers/UsefulLinks';
import Social from './containers/Social';
import Styles from './App.css';

function App() {
  return (
    <div className="App" style={Styles}>
      <Header />
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/methodology" component={Methodology} />
          <Route exact path="/music-theory" component={MusicTheory} />
          <Route exact path="/useful-links" component={UsefulLinks} />
          <Route exact path="/social" component={Social} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
