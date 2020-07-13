import React, { useState } from 'react';
import { Fab, Modal, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const AddDoctor = ({ doctor, handleChange, addDoctor }) => {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal)
    }

    const body = (
        <form style={modalStyle} className={classes.paper} noValidate autoComplete="off">
            <section>
                <TextField required id="standard-required" label="id - use NIN to have sure it's unique id" name="id" value={doctor.id} onChange={handleChange} />
                <TextField required id="standard-required" label="Name" name="name" value={doctor.name} onChange={handleChange} />
                <TextField required id="standard-required" label="Last Name" name="lastName" value={doctor.lastName} onChange={handleChange} />
                <TextField required id="date" label="Birthday" type="date" defaultValue="2000-01-01" className={classes.TextField} InputLabelProps={{ shrink: true }} name="dateOfBirth" value={doctor.dateOfBirth} onChange={handleChange} />
                <TextField required id="standard-required" label="Specialization" name="specialization" value={doctor.specialization} onChange={handleChange} />
                <TextField required id="standard-required" label="e-mail" name="email" value={doctor.email} onChange={handleChange} />
                <TextField required id="standard-required" label="phone number" name="phoneNumber" value={doctor.phoneNumber} onChange={handleChange} />
            </section>
            <Button variant="contained" color="primary" style={{ marginTop: "20px" }} onClick={addDoctor}>Add</Button>
            <Button variant="contained" color="secondary" style={{ marginTop: "20px", marginLeft: "40px" }}>Cancel</Button>
        </form>

    )

    return (
        <section className="doctors__form">
            <article>
                <Fab color="primary" aria-label="add"><AddIcon onClick={handleClick} /></Fab>
                <Modal
                    open={showModal}
                    onClose={handleClick}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </article>

        </section>
    );
}

export default AddDoctor;