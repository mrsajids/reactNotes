import React from 'react'
import { Link } from "react-router-dom";
import "./todo.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow p-2 mb-5 rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href=""><b> Notes App✍🏻</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">

                <Link to="todo" className="nav-link active">Home</Link>

              </li>
              <li className="nav-item mx-3">

                <Link to="about" className="nav-link active">About</Link>

              </li>
              <li className="nav-item mx-3">

                <Link to="contact" className="nav-link active">Contact</Link>
      

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
