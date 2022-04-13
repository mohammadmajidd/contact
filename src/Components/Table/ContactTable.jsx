import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from "@mui/material/TableBody";
import EditIcon from '@mui/icons-material/Edit';
import {Delete} from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function ContactTable({
                                         setOpenModalForm,
                                         state,
                                         handleOpenConfirmModal,
                                         setNewContact
                                     }) {


    return (
        <TableContainer sx={{width: 800, margin: "auto"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell component="th" align="center">First Name</StyledTableCell>
                        <StyledTableCell component="th" align="center">Last Name</StyledTableCell>
                        <StyledTableCell component="th" align="center">Phone</StyledTableCell>
                        <StyledTableCell component="th" align="center">Email</StyledTableCell>
                        <StyledTableCell component="th" align="center">Company</StyledTableCell>
                        <StyledTableCell component="th" align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.map((item) => (
                        <StyledTableRow key={item.id}>
                            <StyledTableCell align="center">{item.firstName}</StyledTableCell>
                            <StyledTableCell align="center">{item.lastName}</StyledTableCell>
                            <StyledTableCell align="center">{item.phone}</StyledTableCell>
                            <StyledTableCell align="center">{item.email}</StyledTableCell>
                            <StyledTableCell align="center">{item.company}</StyledTableCell>
                            <StyledTableCell sx={{display: "flex",textAlign:"center"}}><EditIcon onClick={()=>{setNewContact(item);setOpenModalForm(true)}}/><Delete
                                onClick={() => handleOpenConfirmModal(item.id,`${item.firstName} ${item.lastName}`)}/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


