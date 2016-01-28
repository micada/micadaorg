import React from 'react';
import DocumentTitle from 'react-document-title';

import { link } from 'gatsby-helpers';

// Style code
require ('styles/main.scss');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      body: ""
    };
  },

  render: function() {
    var title
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon} />
        </head>
        <body className="landing-page" style={{background: '#000', color: '#fff', fontFamily: 'Verdana'}} >
          <div id="react-mount" className="app-view" dangerouslySetInnerHTML={{__html: this.props.body}} />
            <svg viewBox="0 0 85 18" className="city">
              <g transform="translate(-10.000000, 0.000000)" fill="#fff">
                <path d="M94.699,15.079 L94.699,12.528 L92.947,12.528 L92.947,15.079 L92.661,15.079 L92.272,15.079 L92.272,12.002 L92.06,12.002 L92.06,5.803 L92.03,5.803 L92.03,2.825 L91.586,2.825 L91.512,0 L91.44,2.826 L90.704,2.826 L90.631,0 L90.559,2.826 L90.024,2.826 L90.024,5.804 L89.204,5.804 L89.204,12.003 L88.9,12.003 L88.9,15.08 L88.51,15.08 L88.468,15.08 L88.078,15.08 L88.078,7.271 L86.325,7.271 L86.325,12.529 L85.157,12.529 L85.157,15.08 L84.767,15.08 L84.458,15.08 L84.068,15.08 L84.068,5.778 L80.38,5.778 L80.38,9.129 L78.778,9.129 L78.778,12.529 L78.388,12.529 L75.463,12.529 L75.074,12.529 L75.074,8.577 L73.866,7.74 L73.866,7.657 L73.414,7.657 L73.414,7.74 L72.207,8.577 L72.207,15.079 L71.817,15.079 L71.716,15.079 L71.33,15.079 L71.33,7.27 L69.577,7.27 L69.577,12.528 L68.408,12.528 L68.408,15.079 L68.018,15.079 L67.758,15.079 L67.368,15.079 L67.368,5.907 L65.616,5.907 L65.616,15.079 L65.226,15.079 L64.795,15.079 L64.405,15.079 L64.405,12.724 L61.94,12.724 L61.94,8.569 L58.74,8.569 L58.74,15.079 L58.35,15.079 L58.281,15.079 L57.891,15.079 L57.891,12.528 L56.138,12.528 L56.138,15.079 L56.074,15.079 L55.684,15.079 L55.684,5.907 L53.931,5.907 L53.931,15.079 L53.541,15.079 L53.347,15.079 L52.957,15.079 L52.957,7.595 L51.204,7.595 L51.204,15.079 L50.858,15.079 L50.47,15.079 L50.47,12.398 L48.826,12.398 L48.826,13.891 L48.69,13.891 L48.3,13.891 L48.3,3.116 L46.353,1.765 L46.353,1.632 L45.623,1.632 L45.623,1.765 L43.675,3.116 L43.675,15.079 L43.351,15.079 L43.351,7.595 L43.286,7.595 L41.598,7.595 L41.598,15.079 L41.209,15.079 L41.014,15.079 L41.014,7.595 L39.261,7.595 L39.261,15.079 L38.871,15.079 L38.849,15.079 L38.459,15.079 L38.459,12.398 L36.815,12.398 L36.815,13.891 L36.253,13.891 L36.253,13.502 L36.253,12.527 L34.047,12.527 L33.657,12.527 L33.657,8.575 L32.45,7.738 L32.45,7.655 L31.997,7.655 L31.997,7.738 L30.79,8.575 L30.79,12.527 L30.775,12.527 L30.775,15.078 L30.4,15.078 L30.385,15.078 L30.04,15.078 L29.651,15.078 L29.651,7.269 L27.899,7.269 L27.899,12.527 L26.73,12.527 L26.73,15.078 L26.341,15.078 L26.297,15.078 L25.907,15.078 L25.907,3.625 L24.294,1.939 L24.246,0 L24.196,1.939 L22.565,3.625 L22.565,12.724 L22.175,12.724 L20.264,12.724 L20.264,8.569 L17.063,8.569 L17.063,15.079 L16.674,15.079 L16.605,15.079 L16.215,15.079 L16.215,12.528 L14.463,12.528 L14.463,15.079 L14.073,15.079 L13.85,15.079 L13.46,15.079 C13.396,13.732 13.322,12.263 13.293,11.9 C13.236,11.194 12.87,5.058 12.87,5.058 L12.584,5.058 L12.475,0.827 L12.367,5.058 L10.89,5.058 L10.782,0.827 L10.674,5.058 L10.387,5.058 C10.387,5.058 10.021,11.194 9.964,11.9 C9.935,12.262 9.862,13.732 9.797,15.079 L9.407,15.079 L9.183,15.079 L8.793,15.079 L8.793,12.398 L7.149,12.398 L7.149,13.891 L6.436,13.891 L6.436,15.079 L6.046,15.079 L5.17,15.079 L5.17,18 L6.045,18 L8.467,18 L35.712,18 L38.134,18 L47.722,18 L50.144,18 L78.39,18 L82.857,18 L94.83,18 L94.83,17.397 L94.83,15.079 L94.699,15.079 L94.699,15.079 Z"></path>
              </g>
            </svg>        
          <script src={link("/bundle.js")} />
        </body>
      </html>
    );
  }
});
