import React, {useState} from 'react';
import {data} from "./Components/Data/data";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import ContactsPage from "./Components/Pages/ContactsPage";
import AboutUs from "./Components/Pages/AboutUs";
import SideBar from "./Components/SideBar/SideBar";

const App = () => {
    const [state, setState] = useState(data)
    const [openModalForm, setOpenModalForm] = useState(false);
    const [accessId, setAccessId] = useState()
    const [deleteItem, setDeleteItem] = useState()
    const [newContact, setNewContact] = useState({firstName: '', lastName: '', email: '', company: '', phone: ''})
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const handleOpenConfirmModal = (id, name) => {
        setOpenConfirmModal(true);
        setAccessId(id)
        setDeleteItem(name)

    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Drawer/>}>
                    <Route index element={<h1 style={{textAlign:'center'}}>welcome to contact app</h1>}/>
                    <Route path='contacts' element={<ContactsPage state={state} setState={setState} accessId={accessId}
                                                                  openConfirmModal={openConfirmModal}
                                                                  setOpenConfirmModal={setOpenConfirmModal}
                                                                  deleteItem={deleteItem}
                                                                  newContact={newContact} setNewContact={setNewContact}
                                                                  setDeleteItem={setDeleteItem}
                                                                  handleOpenConfirmModal={handleOpenConfirmModal}
                                                                  openModalForm={openModalForm}
                                                                  setOpenModalForm={setOpenModalForm}/>}/>
                    <Route path='aboutUs' element={<AboutUs/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
const Drawer = () => (
    <>
        <SideBar/>
        <Outlet/>
    </>

);
export default App;
