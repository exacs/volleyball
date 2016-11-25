/**
 * Entry point for Client-side JS file.
 */
import './sass/referee.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import RefereeRoot from '../app/RefereeRoot'

ReactDOM.render(<RefereeRoot />, document.getElementById('root'))

module.hot.accept()
