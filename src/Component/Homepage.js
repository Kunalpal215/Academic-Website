import React from "react";
import Slide from './Homepagestuf/slide/Slide'
import Comp1 from './Homepagestuf/Comp1/Comp1'
import Comp2 from "./Homepagestuf/Comp2/Comp2";
import Comp3 from "./Homepagestuf/Comp3/Comp3";
import Comp4 from "./Homepagestuf/Comp4/Comp4";
import Comp5 from "./Homepagestuf/Comp5/Comp5";
import Comp6 from "./Homepagestuf/Comp6/Comp6";




import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <div>
                <Slide />
            </div>

            <Comp1 />

            <Comp2 />
            <div className="comp3">
                <Comp3 />
                <Comp3 />
                <Comp3 />

            </div>

            <div className="multi">
                <div className="video">
                    <Comp4 />
                </div>
                <div className="comp5card">
                    < Comp5 />
                </div>
            </div>

            < Comp6 />

           

            



        </div>
    );
}

export default Homepage