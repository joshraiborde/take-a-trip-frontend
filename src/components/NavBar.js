import React from 'react'
import { connect } from 'react-redux'



const NavBar = ({ currentUser }) => {
    return (
      <div className="NavBar">
        { currentUser ? <strong>Welcome, {currentUser.attributes.name} from {currentUser.attributes.hometown.city}</strong> : "" }
      </div>
    )
  }

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

  export default connect(mapStateToProps)(NavBar)