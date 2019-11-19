import React, { memo } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import headerStyles from './header.module.scss';

const Header = (props) => {
  return (
    <nav className={headerStyles.nav}>
      Header
      <ul>
        <li>
          <Link to="/" >
            Home
          </Link>
        </li>
        <li>
          <Link to="/content">
            Content
          </Link>
        </li>
      </ul>
    </nav>
  )
};

Header.propTypes = {

}

export default Header
