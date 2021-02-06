import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/homePage.component';

import './App.css';
import AboutUsPage from './pages/about-us/aboutUs.component';
import ShowsPage from './pages/shows/showsPage.component';
import ContactUsPage from './pages/contact-us/contactUs.component';
import ContentManagement from './components/content-management/content-management.component';
import BookNow from './pages/book-ticket/book-ticket.component';



const App = () => {

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about-us' component={AboutUsPage} />
      <Route path='/shows' component={ShowsPage} />
      <Route path='/contact-us' component={ContactUsPage} />
      <Route path='/cms' component={ContentManagement} />
      <Route path='/book-tickets' component={BookNow} />
    </Switch>
  )
}


export default App;
