import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token")
  const Logout = () => {

    localStorage.removeItem("token")
    navigate("/Login");
  }


  if (token) {

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/CreatePost">CreatePost</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/UserPost">UserPost</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={Logout}>Logout</Link>
              </li>

            </ul>
          </div>
        </nav>
      </>
    )

  } else {

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">


          <div >
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>



              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>

            </ul>
          </div>

        </nav>

      </>
    )
  }



}

export default Navbar
