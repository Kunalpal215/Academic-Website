import React from 'react'
import './Comp5part.css'
import { Link } from 'react-router-dom'
const Comp5part = (props) => {
  return (
    <div className='comp5part'>
        <h2><Link to={props.link}>{props.name}</Link></h2>        
    </div>
  );
}

export default Comp5part