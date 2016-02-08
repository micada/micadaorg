import React from 'react';
import { RouteHandler, Link} from 'react-router';
import { link } from 'gatsby-helpers';

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div className='row align-middle'>
          <span className='columns small-4 medium-6'>
            <Link to={link('/')}>
              <h4>{this.props.config.siteTitle}</h4>
            </Link>
          </span>
          <span className='columns small-1'>
            <a href='http://github.com/micada' className='icon' target='_blank' title='circlegithubalt' />
          </span>
          <span className='columns small-1'>
            <a href='https://www.linkedin.com/in/micaalaniz' className='icon' target='_blank' title='circlelinkedin' />
          </span>
          <span className='columns small-1'>
            <a href='http://www.meetup.com/members/114046342/' className='icon' target='_blank' title='circlemeetup' />
          </span>
          <span className='columns small-1'>
            <a href='http://instagram.com/micada' className='icon' target='_blank' title='circleinstagram' />
          </span>
          <span className='columns small-1'>
            <a href='https://www.facebook.com/micada' className='icon' target='_blank' title='circlefacebook'/>
          </span>
          <span className='columns small-1'>
            <a href='https://twitter.com/micarbma' className='icon' target='_blank' title='circletwitterbird' />
          </span>
          </div>
          <div className='row align-center'>
            <div className='column small-8 content'> 
              <RouteHandler {...this.props}/>
            </div>
          </div>
      </div>
    );
  }
});
