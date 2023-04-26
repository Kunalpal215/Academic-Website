import React from 'react'
import './Foot.css'
import { Link } from 'react-router-dom';
const Foot = () => {
  return (
    <div>
        <div className="footer">
        
        <div className="link1">
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/Courses'>Courses</Link></p>
            <p><Link to='/Admission'>Admission</Link></p>
        </div>
        <div className="link1">
            <p><Link to='/Schol'>Scholarship</Link></p>
            <p><Link to='/Contact'>Contact us</Link></p>
            <p><Link to='/Exams'>Exams</Link></p>
            <p><Link to='/Events'>Events</Link></p>
        </div>
        <div className="link1">
            <p><Link to='/Placements'>Placements</Link></p>
            <p><Link >Library</Link></p>
            <p><Link>join</Link></p>
            <p><Link>More</Link></p>
        </div>
    </div>
    <div className="copyright">
        &copy; Copyright 2022 HTML.am
    </div>
    </div>
  );
}

export default Foot