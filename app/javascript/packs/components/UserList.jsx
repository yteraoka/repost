import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../styles/UserList.scss'

const User = (user, key) => {
  return (
    <li key={key}><img src={user.avatar} /></li>
  )
}

const UserList = (props) => {
  return (
    <div styleName="container">
      <h3>Users</h3>
      <ul>
        {props.users.map((user, key) => {
          return User(user, key)
        })}
      </ul>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default CSSModules(UserList, styles)