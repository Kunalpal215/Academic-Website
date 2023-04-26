import React from 'react'
import './Comp1.css'
import img from './image/logo4.png'
import { Link } from 'react-router-dom'

const Comp1 = () => {
  return (
    <div>
      <div className="Comp1part1">
        <div className="p1">
          <img src={img} alt='img' />
        </div>
        <div className="p2">
          <h1>About University</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis corrupti fuga  quibusdam accusantium.</p>  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis corrupti fuga impedit facilis amet ducimus odio aperiam quisquam x.</p>
          <Link to='/UniversityComp1'>more</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Comp1