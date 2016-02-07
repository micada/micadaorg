import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import includes from 'underscore.string/include';
import { link } from 'gatsby-helpers';

module.exports = React.createClass({
  mixins: [State],
  render: function() {
    const routes = this.getRoutes().map(function(route) {
      return route.path;
    });
    const docsActive = (routes.indexOf(link("/docs/")) >= 0);
    const examplesActive = (routes.indexOf(link("/examples/")) >= 0);

    return (
      <div>
        <div className="row align-middle">
          <span className="columns small-4 medium-6">
            <Link to={link('/')}>
              <h4>{this.props.config.siteTitle}</h4>
            </Link>
          </span>
          <span className="columns small-1">
            <a href='http://github.com/micada' className='icon' target='_blank'>
              circlegithubalt
            </a>
          </span>
          <span className="columns small-1">
            <a href='https://www.linkedin.com/in/micaalaniz' className='icon' target='_blank'>
              circlelinkedin
            </a>
          </span>
          <span className="columns small-1">
            <a href='http://www.meetup.com/members/114046342/' className='icon' target='_blank'>
              circlemeetup
            </a>
          </span>
          <span className="columns small-1">
            <a href='http://instagram.com/micada' className='icon' target='_blank'>
              circleinstagram
            </a>
          </span>
          <span className="columns small-1">
            <a href='https://www.facebook.com/micada' className='icon' target='_blank'>
              circlefacebook
            </a>
          </span>
          <span className="columns small-1">
            <a href='https://twitter.com/micarbma' className='icon' target='_blank'>
              circletwitterbird
            </a>
          </span>
          </div>
          <div className="row align-center">
            <div className="column small-8 content"> 
              <RouteHandler {...this.props}/>
            </div>
          </div>
      </div>
    );
  }
});
