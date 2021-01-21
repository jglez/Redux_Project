import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import actions

const Characters = ({ name, image, isFetching, error }) => {
  useEffect(() => {
  })

  if (error) {
    return <h2>We have an error: {error}</h2>
  }

  if (isFetching) {
    return <h2>Fetching Quote...</h2>
  }

  return (
    <>
      <h2>Character: {name}</h2>
      <h2>Image: {image}</h2>
      <button>Get new character</button>
    </>
  )
}

const mapStateToProps = state => {
  console.log(state)

  return {
    name: state.name,
    image: state.image,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps)(Characters)