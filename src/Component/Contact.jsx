import React from "react";
import ContactCard from "./Contactpagestuf/ContactCard";
import './Contact.css'

const Contact = () => {
    return (
        <div className="contacts"> 
          <h1>Contact us</h1> 
          <br /> 
          <p>We would be happy to talk about your specific situation and answer any questions you have about courses, admissions or collaborations.</p>
          <br />
          <br />
          <h3>Enquiries</h3>
          <br />
          
          <p>Get in touch with any questions you have about the College, courses, collaboration opportunities, or media events.</p>
          <br />
          <div className="contactCards">
            < ContactCard />
            < ContactCard />
            < ContactCard />
          </div>
          <div className="contactCards">
            < ContactCard />
            < ContactCard />
            < ContactCard />
          </div>

        </div>
    );
}

export default Contact