import React from 'react';
import { Link, IndexLink } from 'react-router';

class Menu extends React.Component {
    render() {
        return (
          <ul className="row around-xsmall middle-xsmall">
            <li className="column-xsmall-12 column-small-1">
              <IndexLink to="/">Home</IndexLink>
            </li>
            <li className="column-xsmall-12 column-small-1">
              <Link to='/about'>About</Link>
            </li>
            <li className="column-xsmall-12 column-small-1">
              <Link to='/projects'>Projects</Link>
            </li>
            <li className="column-xsmall-12 column-small-1">
              <Link to='/resume'>Resume</Link>
            </li>
            <li className="column-xsmall-12 column-small-1">
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        );
    }
}

export default Menu;
