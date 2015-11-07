import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Main from './components/main/main';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="about" component={About}/>
      <Route path="resume" component={Resume}/>
      <Route path="projects" component={Projects}/>
      <Route path="contact" component={Contact}/>
    </Route>
);

export default routes;
