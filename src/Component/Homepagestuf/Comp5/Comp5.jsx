import React from 'react'
import Comp5part from './Comp5part'

const data=[
    {
        id :'1',
        name :"Exams",
        link:'/Exams'
    },
    {
        id :'2',
        name :"Events",
        link :"/Events"

    },
    {
        id :'3',
        name :"Placements",
        link :"/Placements"

    },
    {
        id :'4',
        name :"Scholarships",
        link :"/Schol"

    },
    {
        id :'5',
        name :"About University",
        link :"/UniversityComp1"

    },
    {
        id :'6',
        name :"Contact us",
        link :"/Contact"

    },
    {
        id :'7',
        name :"About us",
        link :"/UniversityComp1"

    }
]

export const Comp5 = () => {
  return (
    <div className='comp5s'>
        <Comp5part name={data[0].name} link={data[0].link} />
        <Comp5part name={data[1].name} link={data[1].link}  />
        <Comp5part name={data[2].name} link={data[2].link}  />
        <Comp5part name={data[3].name} link={data[3].link}  />
        <Comp5part name={data[4].name} link={data[4].link}  />
        <Comp5part name={data[5].name} link={data[5].link}  />
        <Comp5part name={data[6].name} link={data[6].link}  />

        

        
        
    </div>
  );
}
export default Comp5