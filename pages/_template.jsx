import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import includes from 'underscore.string/include';
import { link } from 'gatsby-helpers';

import typography from 'utils/typography';

// Style code
import 'styles/styles.css';

const { rhythm, fontSizeToPx } = typography;

module.exports = React.createClass({
  mixins: [State],
  render: function() {
    const routes = this.getRoutes().map(function(route) {
      return route.path;
    });
    const docsActive = (routes.indexOf(link("/docs/")) >= 0);
    const examplesActive = (routes.indexOf(link("/examples/")) >= 0);

    return (
      <div style={{
            background: '#000',
            color: '#fff',
            fontFamily: 'Verdana'
          }}>
        <div
          style={{
            marginBottom: rhythm(1.5)
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              padding: `${rhythm(1/2)}`,
              paddingBottom: `${rhythm(1/2)}`
            }}
          >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(1/2)} 0`
              }}
            >
              <Span
                columns={4}
                style={{
                  height: 24 // Ugly hack. How better to constrain height of div?
                }}
              >
                <Link
                  to={link('/')}
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    fontSize: fontSizeToPx("25.5px").fontSize
                  }}
                >
                  {this.props.config.siteTitle}
                </Link>
              </Span>
              <Span columns={8} last={true}>
                <a
                  style={{
                    float: 'right',
                    color: '#fff',
                    textDecoration: 'none',
                    marginLeft: rhythm(1/2)
                  }}
                  href="https://github.com/gatsbyjs/gatsby"
                >
                </a>
                <Link
                  to={link('/examples/')}
                  style={{
                    background: '#000',
                    color: '#fff',
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(1),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1)
                  }}
                >
                </Link>
                <Link
                  to={link('/docs/')}
                  style={{
                    background: '#000',
                    color: '#fff',
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(1),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1)
                  }}
                >
                </Link>
              </Span>
            </Grid>
          </Container>
        </div>
        <Container
          style={{
            background: '#000',
            color: '#fff',
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0
          }}
        className="content">
          <RouteHandler {...this.props}/>
        </Container>
      </div>
    );
  }
});
