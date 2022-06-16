import React from 'react'

const GetDataButton = (props) => (
  <button
    onClick={props.handleGetRequest}
  >
    Get Data
  </button>
)

export default GetDataButton;