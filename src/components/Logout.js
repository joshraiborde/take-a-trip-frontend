import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { withRouter } from 'react-router-dom'


const Logout = ({ logout, history }) => {

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      logout()
      history.push('/')
    }
  }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}
// when submitted, send a request to the backend and logs out
export default withRouter(connect(null, { logout } )(Logout))