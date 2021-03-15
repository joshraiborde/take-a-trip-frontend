import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyTrips = props => {
  const tripCards = props.trips.length > 0 ?
  props.trips.map(t => (<><Link key={t.id} to={`/trips/${t.id}`}>{t.attributes.name}</Link><br/></>)) :
  null

  return tripCards
}

// mapStateToProps tells Redux provide access to state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  return {
    trips: state.myTrips
  }
}

export default connect(mapStateToProps)(MyTrips)