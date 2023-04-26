import React from "react";
import './Upperlogo.css';
import image from './images/logo4.png'
const logo = () => {
    return (

        <div class="logo">
            <div class="image">
                <img src={image} alt="" width="120px" />
            </div>
            <div class="name">
                <h2>DeenBandhu Chhotu Ram University of Science and Technology</h2>
                <p id="para1">Murthal Sonipat,Haryana,India</p>
                <p id="para2">[ A Harayana State Government NAAC accredited 'A' grade University ]</p>
                <div class="contact1">
                    <p><i class="bi bi-telephone">  999-999-999</i></p>

                    <p><i class="bi bi-envelope"> Dcrust@dcrustm.org</i></p>
                </div>
            </div>
            <div class="contact">
                <p><i class="bi bi-telephone">  999-999-999</i></p>
                <br />
                <p><i class="bi bi-envelope"> Dcrust@dcrustm.org</i></p>
            </div>
        </div>
    );
}

export default logo

