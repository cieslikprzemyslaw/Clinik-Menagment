import React, { useState } from 'react';
import MenageDoctors from './MenageDoctors';
import DoctorTable from './DoctorTable'

const Doctors = () => {

    let counter = 4;
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            name: "John",
            lastName: "Snow",
            dateOfBirth: "1991-08-05",
            specialization: "laryngology",
            email: "spooky@gmasl.com",
            phoneNumber: 7532443728
        },
        {
            id: 2,
            name: "Son",
            lastName: "Goku",
            dateOfBirth: "1993-10-25",
            specialization: "psychology",
            email: "spooky23@gmasl.com",
            phoneNumber: 7532443755
        },
        {
            id: 3,
            name: "James",
            lastName: "McCandy",
            dateOfBirth: "1989-02-05",
            specialization: "ortchopedist",
            email: "s343woky@gmasl.com",
            phoneNumber: 7532443734
        },
    ]);

    const [doctor, setDoctor] = useState({
        id: 0,
        name: "",
        lastName: "",
        dateOfBirth: "2000-01-01",
        specialization: "",
        email: "",
        phoneNumber: "",
    },
    );

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setDoctor({
            id:counter++,
            ...doctor,
            [name]: value
        })
    };

    const handleClickAddDoctor = () => {
        setDoctors([...doctors,doctor]);
        counter++
        console.log(doctors)
    };

    return (
        <div className="doctors">
            <MenageDoctors
                doctor={doctor}
                handleChange={handleChange}
                addDoctor={handleClickAddDoctor}
            />
            <DoctorTable
                doctors={doctors}
            />
        </div>
    );
}

export default Doctors;