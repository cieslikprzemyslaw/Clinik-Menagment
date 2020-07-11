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

const AddDoctor = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(!showModal)
    }

    const body = (
        <form style={modalStyle} className={classes.paper} noValidate autoComplete="off">
            <section>
                <TextField required id="standard-required" label="Name" />
                <TextField required id="standard-required" label="Last Name" />
                <TextField required id="date" label="Birthday" type="date" defaultValue="2000-01-01" className={classes.TextField} InputLabelProps={{ shrink: true }} />
                <TextField required id="standard-required" label="Specialization" />
            </section>
            <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>Add</Button>
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