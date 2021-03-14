import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"


const NavBar = ({ currentUser }) => {
    return (
      <div className="NavBar">
        { currentUser ? <strong>Welcome, {currentUser.attributes.name} from {currentUser.attributes.hometown.city}</strong> : "" }
        <button> Log In </button>
      OR
      <button> Sign Up </button>
      </div>
    )
  }

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

  export default connect(mapStateToProps)(NavBar)