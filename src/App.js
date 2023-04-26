import React from "react";
import Homepage from "./Component/Homepage";
import Contact from "./Component/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar';
import Upperlogo from './Component/Upperlogo';
import Foot from './Component/Footer/Foot'
import UniversityComp1 from "./Component/about university/UniversityComp1";
import Chairmen from "./Component/Chairmen/Chairmen";
import Admission from "./Component/Admission/Admission";
import Courses from "./Component/Courses/Courses";
import Schol from './Component/Scholarships/Schol';
import Library from "./Component/Library/Library";
import Exams from "./Component/Exams/Exams";
import Events from "./Component/Events/Events";
import Placements from "./Component/Placements/Placements";


function App() {



  return (
    <div >
      < Navbar />
      <br />
      <br />

      < Upperlogo />


      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/UniversityComp1' element={<UniversityComp1 />} />
        <Route path='/Chairmen' element={<Chairmen />} />
        <Route path='/Admission' element={<Admission />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Schol' element={<Schol />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Exams' element={<Exams />} />
        <Route path='/Library' element={<Library />} />
        <Route path='/Library' element={<Library />} />
        <Route path='/Placements' element={<Placements />} />
       

      </Routes>





      < Foot />
    </div>
  );
}

export default App;
