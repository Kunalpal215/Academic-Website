import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar=()=>{
    return(
        <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">D . C . R . U . S . T</a>
          <button className="navbar-toggler color" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon color"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">SOURABH KUMAR</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  {/* <NavLink className="nav-link " aria-current="page" to="/Login">Student Login</NavLink> */}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/Courses">Courses</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/Admission">Admission</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/Schol">Scholarships</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/Contact" >Contact us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/Exams" >Exams</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/Events" >Events</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/Placements" >Placements</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/UniversityComp1">About us</NavLink>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
        </div>
    );

}
export default Navbar