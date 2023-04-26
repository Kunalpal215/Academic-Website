import React from 'react'
import './Placement.css'
import { Link } from 'react-router-dom'
import place1 from '../images/place1.png'
import place2 from '../images/place2.png'

const Placements = () => {
  return (
    <div class="placement">
        <div class="placeData">
            <p>
                K L Deemed to be University has meticulously planned to make all the eligible and interested students
                employed. The University had installed the infrastructure, employed well experienced faculty, designed
                and delivered programs that help enhancing the communication and soft skills which are required for
                making the students employable. An excellent system is in place that considers all the issues that make
                a student employable. The University has been successful for the last 12 years, in employing all the
                students who have registered and eligible for placement through its offices located across the country.
                About 50 trained personnel work extensively to make the students ready for recruitment by the Industry.
            </p>

            <img src={place1} alt="img" />
            <img src={place2} alt="img" />
        </div>
        <div class="PlacementTable">
            <h2>Companies</h2>
            <table>
                <tr>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    <td>
                        <Link>Company1</Link>
                    </td>
                    
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Placements