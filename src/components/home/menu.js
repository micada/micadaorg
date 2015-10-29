import React from 'react';
import { Link, IndexLink } from 'react-router';

class Menu extends React.Component {
    render() {
        return (
              <div className="row">
                <div className="col-xs-3">
                  <img src="images/logo.png" />
                  <nav className="top-bar">
                    <section className="top-bar-section">
                      <ul className="right">
                        <li className="active"><IndexLink to="/">Home</IndexLink></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/docs'>Docs</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                      </ul>
                    </section>
                  </nav>
                </div>
              </div>
        );
    }
}

export default Menu;
