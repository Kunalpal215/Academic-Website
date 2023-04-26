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
         <div className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.654652213991!2d77.0599191149329!3d29.02721228226381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db10377463789%3A0xf697cc2d804b8b8e!2sDeenbandhu%20Chhotu%20Ram%20University%20Of%20Science%20And%20Technology%2C%20Murthal%20Sonipat%20(Haryana)!5e0!3m2!1sen!2sin!4v1672397847138!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
    </div>
    <div className="copyright">
        &copy; Copyright 2022 HTML.am
    </div>
    </div>
  );
}

export default Foot