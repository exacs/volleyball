/**
 * Entry point for Client-side JS file.
 */
import './sass/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../app/components/Hello'
console.log('Hello from client side JS')

ReactDOM.render(<Hello name='world' />, document.getElementById('root'))
