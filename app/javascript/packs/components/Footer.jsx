import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import CSSModules from 'react-css-modules'
import styles from '../styles/Footer.scss'

const Footer = (props) => {
  return (
    <UncontrolledDropdown dropup styleName="container">
      <DropdownToggle caret color="link" className="btn-block">
        {props.currentUser.name}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>User Menu</DropdownItem>
        <Link to="#" className="dropdown-item">Account</Link>
        <DropdownItem divider />
        <Link to="/sign_out" className="dropdown-item">Sign Out</Link>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

Footer.propTypes = {
  currentUser: PropTypes.object.isRequired
}

export default CSSModules(Footer, styles)