import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import Home from './containers/Home';
import Methodology from './containers/Methodology';
import MusicTheory from './containers/MusicTheory';
import UsefulLinks from './containers/UsefulLinks';
import Social from './containers/Social';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

const history = createHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export default class AppRoutes extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Router history={history}>
        <Header />
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/methodology" component={Methodology} />
          <Route exact path="/music-theory" component={MusicTheory} />
          <Route exact path="/useful-links" component={UsefulLinks} />
          <Route exact path="/social" component={Social} />
        </div>
        <Footer />
      </Router>
    );
  }
}
