import React from 'react'
import './Comp2.css'
import { Link } from 'react-router-dom';

const Comp2 = () => {
  return (
    <div className="cantainer">
        <div className="box">
            <div className="b1"><Link to='/Login'  className='b'>Student</Link></div>
            <div className="b2"><Link to='/Admission' className='b'>Admission</Link></div>
            <div className="b3"><Link to='/Courses' className='b'>Courses</Link></div>
        </div>
        
        <div className="scroll">
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illum.</h5>
        </div>
    
    </div>
  );
}

export default Comp2