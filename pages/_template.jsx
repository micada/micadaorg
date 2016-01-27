import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import includes from 'underscore.string/include';
import { link } from 'gatsby-helpers';

// Style code
import 'styles/styles.css';

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
        <div>
          <Container>
            <Grid columns={12}>
              <Span columns={4}>
                <Link to={link('/')}>
                <h4>{this.props.config.siteTitle}</h4>
                </Link>
              </Span>
              <Span columns={8} last={true}>
              </Span>
            </Grid>
          </Container>
        </div>
        <Container className="content">
          <RouteHandler {...this.props}/>
        </Container>
      </div>
    );
  }
});
