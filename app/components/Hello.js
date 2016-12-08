import React, { PropTypes } from 'react'

const Hello = ({name}) => (
  <div>
    <span>Hello</span>
    <span>{name}</span>
  </div>
)

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello
