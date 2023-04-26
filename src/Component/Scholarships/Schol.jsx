import React from 'react'
import './Schol.css'
import Slide from '../Homepagestuf/slide/Slide'
import Comp3 from '../Homepagestuf/Comp3/Comp3'
import { Link } from 'react-router-dom'

const Schol = () => {
    return (
        <div className='Scholarships'>
            <Slide />
            <div className='scholHeading'>
                <h1>Supporting your future</h1>
                <p>Whether you are looking for financial support to start your studies or for help to move away from home for the first time, ANU has scholarship opportunities for you and your situation. Some of our scholarships recognise academic achievement and others athletic performance. We also offer scholarships that support unique challenges and experiences and recognise leadership, like the Tuckwell Scholarship Program, the most generous and transformative undergraduate scholarship in Australia.</p>
            </div>
            <div className='scholType'>
                <div className='scholType1'><h3> <Link className='scholLink' >ANU Scholarships</Link></h3>
                </div>
                <div className='scholType2'>
                    <div className='scholType1'><h3><Link className='scholLink'>Prestigious Scholarships</Link></h3>
                    </div>
                    <div className='scholType1'><h3><Link className='scholLink'>External Scholarships</Link></h3></div>
                </div>
            </div>
            <div className='scholBox'>
                <h1>Special Criteria Scholarships</h1>
                <p>we is here to help make your university aspirations a reality. We understand you have personal situations that require different types of support, and we want to make sure have access it.</p>
                <div className="scholComp3">
                    <Comp3 />
                    <Comp3 />
                    <Comp3 />

                </div>
            </div>
        </div>
    )
}

export default Schol