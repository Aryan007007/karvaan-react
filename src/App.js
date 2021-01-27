import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withSplashScreen from './components/withSplashScreen';

import HomePage from './pages/home/homePage.component';

import './App.css';
import AboutUsPage from './pages/about-us/aboutUs.component';
import ShowsPage from './pages/shows/showsPage.component';
import ContactUsPage from './pages/contact-us/contactUs.component';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about-us' component={AboutUsPage} />
      <Route path='/shows' component={ShowsPage} />
      <Route path='/contact-us' component={ContactUsPage} />
    </Switch>
  )
}


export default withSplashScreen(App);
