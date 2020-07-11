import React from 'react';
import AddDoctor from './AddDoctor';
import Paper from '@material-ui/core/Paper';
import { TableContainer, Table } from '@material-ui/core';

const Doctors = () => {


    return ( 
        <div className="doctors">
            <AddDoctor/>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">

                </Table>
            </TableContainer>
        </div>
     );
}
 
export default Doctors;