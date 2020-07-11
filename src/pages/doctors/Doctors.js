import React from 'react';
import AddDoctor from './AddDoctor';
import DoctorTable from './DoctorTable'


const doctors =[
    {
        id:1,
        name: "John",
        lastName: "Snow",
        dateOfBirth: "1991-08-05",
        specialization: "laryngology",
    },
    {
        id:2,
        name: "Son",
        lastName: "Goku",
        dateOfBirth: "1993-10-25",
        specialization: "psychology",
    },
    {
        id:3,
        name: "James",
        lastName: "McCandy",
        dateOfBirth: "1989-02-05",
        specialization: "ortchopedist",
    },
]

const Doctors = () => {


    return ( 
        <div className="doctors">
            <AddDoctor/>
            <DoctorTable
            doctors={doctors}
            />
        </div>
     );
}
 
export default Doctors;