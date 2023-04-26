import React from 'react'
import './Comp3.css'
import img from './Comp3img/Untitled-1.png'
const Comp3 = () => {
  return (
    <div className="cards">
        <div class="img"><img src={img} alt="img" /></div>
        <div class="con">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam molestias architecto, saepe nam voluptas voluptatibus!</p>
            <center><button class="btn">MORE</button></center>
        </div>

    </div>
  );
}

export default Comp3