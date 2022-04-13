import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function ConfirmModal({
                                         deleteItem,
                                         openConfirmModal,
                                         setOpenConfirmModal,
                                         state,
                                         setState,
                                         accessId
                                     }) {

    const handleDelete = () => {
        setState(state.filter(item => item.id !== accessId))
        setOpenConfirmModal(false)
    }
    const handleClose = () => setOpenConfirmModal(false);

    return (
        <div>
            <Modal
                open={openConfirmModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Warning!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Are You Sure To Delete "{deleteItem}" ?
                    </Typography>
                    <Box sx={{mt: '20px'}}>
                        <Button sx={{
                            marginRight: '10px',
                            color: 'white',
                            backgroundColor: 'red',
                            border: 'none',
                            "&.MuiButtonBase-root:hover": {backgroundColor: 'red'}
                        }} onClick={handleDelete}>Yse</Button>
                        <Button sx={{
                            color: 'white',
                            backgroundColor: 'gray',
                            "&.MuiButtonBase-root:hover": {backgroundColor: 'gray'}
                        }} onClick={handleClose}>No</Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
}
