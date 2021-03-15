import React from 'react';

import { updateNewTripForm } from '../actions/newTripForm'
import { createTrip } from '../actions/myTrips'
import { connect } from 'react-redux'


const NewTripForm = ({ formData, history, updateNewTripForm, createTrip, userId }) => {
  const { name, startDate, endDate } = formData

  const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    updateNewTripForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createTrip({
      ...formData,
      userId
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={name}
      /><br/>
      <input
        placeholder="start date"
        name="startDate"
        onChange={handleChange}
        value={startDate}
      /><br/>
      <input
        placeholder="end date"
        name="endDate"
        onChange={handleChange}
        value={endDate}
      /><br/>
      <input
        type="submit"
        value="Create Trip"
      />
    </form>
)};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : "" 
  return {
    formData: state.newTripForm,
    userId
  }
}


export default connect(mapStateToProps, { updateNewTripForm, createTrip })(NewTripForm);