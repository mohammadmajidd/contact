import React from 'react';
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import ContactTable from "../Table/ContactTable";
import ModalForm from "../Modal/ModalForm/ModalForm";

const ContactsPage = ({
                          state,
                          setState,
                          accessId,
                          openConfirmModal,
                          deleteItem,
                          setDeleteItem,
                          setOpenConfirmModal,
                          newContact,
                          setNewContact,
                          handleOpenConfirmModal,
                          openModalForm,
                          setOpenModalForm
                      }) => {
    return (
        <>
            <ModalForm state={state} setState={setState} newContact={newContact} setNewContact={setNewContact}
                       openModalForm={openModalForm} setOpenModalForm={setOpenModalForm}/>
            <ContactTable newContact={newContact} setNewContact={setNewContact}
                          handleOpenConfirmModal={handleOpenConfirmModal} state={state} setState={setState}
                          openConfirmModal={openConfirmModal} setOpenConfirmModal={setOpenConfirmModal}
                          openModalForm={openModalForm} setOpenModalForm={setOpenModalForm}/>
            <ConfirmModal accessId={accessId} state={state} setState={setState}
                          openConfirmModal={openConfirmModal}
                          setOpenConfirmModal={setOpenConfirmModal} deleteItem={deleteItem}
                          setDeleteItem={setDeleteItem}/>
        </>
    );
};

export default ContactsPage;