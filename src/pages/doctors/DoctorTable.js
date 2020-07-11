import React from 'react';
import { TableContainer, Table, Paper, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';

const TableDoctor = ({doctors}) => {

    const doctorList = doctors.map(doctor => {
        return(
        <TableRow key={doctor.id}>
            <TableCell component="th" scope="row">
                {doctor.name}
            </TableCell>
            <TableCell component="th" scope="row">
                {doctor.lastName}
            </TableCell>
            <TableCell component="th" scope="row">
                {doctor.dateOfBirth}
            </TableCell>
            <TableCell component="th" scope="row">
                {doctor.specialization}
            </TableCell>
        </TableRow>)
    })

    return ( 
        <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <p>Name</p>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <p>Last Name</p>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <p>Date of Birth</p>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <p>Specialization</p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctorList}
                    </TableBody>
                </Table>
            </TableContainer>
     );
}
 
export default TableDoctor;