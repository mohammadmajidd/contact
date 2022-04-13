import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import {Add, LocalPhone} from "@mui/icons-material";
import {useState} from "react";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const idGenerator = () => {
    return Math.random() * 1000
}
export default function ModalForm({state, setState, openModalForm, setOpenModalForm, newContact, setNewContact}) {
    const [mood,setMood]=useState('Update')
    const handleOpen = () => setOpenModalForm(true);
    const handleClose = () => setOpenModalForm(false);
    const handleAddNewContact = (e) => {
        e.preventDefault()

        if (newContact.id) {
            setState(state.map(item => item.id === newContact.id ? newContact : item))
        } else {
            setState([...state, {id: idGenerator(), ...newContact}])
        }
        setNewContact({firstName: '', lastName: '', email: '', company: '', phone: ''})
        setOpenModalForm(false)

    }
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Box sx={{display:"flex",justifyContent: 'center'}}>
                <Button sx={{color: 'black'}} onClick={handleOpen}><Add/> Add New
                    Contact</Button>
            </Box>
            <Modal
                open={openModalForm}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <PersonIcon/>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField value={newContact.firstName} name={'firstName'} onChange={handleChange}
                                   id="outlined-basic" label="First Name" variant="outlined"/>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField value={newContact.lastName} name={'lastName'} onChange={handleChange}
                                   id="outlined-basic" label="Last Name" variant="outlined"/>
                    </Box>
                    <EmailIcon/>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField onChange={handleChange} value={newContact.email} name={'email'} id="outlined-basic"
                                   label="Email"
                                   variant="outlined"/>
                    </Box>
                    <LocalPhone/>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField value={newContact.phone} name={'phone'} onChange={handleChange} id="outlined-basic"
                                   label="Phone" variant="outlined"/>
                    </Box>
                    <BusinessIcon/>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField value={newContact.company} name={'company'} onChange={handleChange}
                                   id="outlined-basic" label="Company" variant="outlined"/>
                    </Box>
                    <Button type={"submit"} onClick={handleAddNewContact}>Add</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </Box>
            </Modal>
        </div>
    );
}
