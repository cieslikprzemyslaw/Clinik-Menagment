import React, { useState } from 'react';
import { TableContainer, Table, Paper, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TableDoctor = ({ doctors }) => {

    const doctorList = doctors.map(doctorInfo => {
        return (
            <TableRow key={doctorInfo.id}>
                <TableCell component="th" scope="row">
                    {doctorInfo.id}
                </TableCell>
                <TableCell component="th" scope="row">
                    {doctorInfo.name}
                </TableCell>
                <TableCell component="th" scope="row">
                    {doctorInfo.lastName}
                </TableCell>
                <TableCell component="th" scope="row">
                    {doctorInfo.dateOfBirth}
                </TableCell>
                <TableCell component="th" scope="row">
                    {doctorInfo.specialization}
                </TableCell>
                <TableCell component="th" scope="row">
                    {doctorInfo.email}
                </TableCell>
                <TableCell component="th" scope="row">
                    {doctorInfo.phoneNumber}
                </TableCell>
                <TableCell component="th" scope="row">
                    <FontAwesomeIcon icon={faEdit} />
                </TableCell>
                <TableCell component="th" scope="row">
                    <FontAwesomeIcon icon={faTrashAlt} />
                </TableCell>
            </TableRow>)
    })

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <p>ID</p>
                        </TableCell>
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
                        <TableCell component="th" scope="row">
                            <p>E-mail</p>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <p>Phone number</p>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <p>Edit</p>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <p>Delete</p>
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