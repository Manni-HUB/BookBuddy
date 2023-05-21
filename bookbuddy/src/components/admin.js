import React from 'react'
import { Link } from 'react-router-dom'
function admin() {
  return (
    <div><div class="jumbotron">
    <h1 class="display-4">Hello, Admin!</h1>
    <p class="lead">Go to the table you want to Edit</p>
    <hr class="my-4"/>
    <Link class="btn btn-primary btn-lg" to="/admin/user" role="button">User</Link>
    <Link class="btn btn-primary btn-lg mx-2" to="admin/hotel" role="button">Hotel</Link>
    <Link class="btn btn-primary btn-lg mx-2" to="admin/plane" role="button">Plane</Link>

  </div></div>

  )
}

export default admin