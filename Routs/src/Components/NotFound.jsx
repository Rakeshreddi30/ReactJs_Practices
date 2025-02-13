import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>404! Page not found.</h2>
        <button>
        <Link to="/">
         Home</Link>
        </button>
    </div>
  )
}

export default NotFound