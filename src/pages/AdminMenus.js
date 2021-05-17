import React from 'react';
import AdminLayout from "../components/AdminLayout";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux";

import {updateState} from "../redux/actions/menusAction";

const AdminMenus = (props) => {
    return (
        <AdminLayout>
            <div className="d-flex align-items-center justify-content-between">
                <h5>Menus Page</h5>
                <button type="button" className="btn btn-success" onClick={() => props.updateState({modalOpen: true})}>Add</button>
            </div>

            <Modal isOpen={props.modalOpen}>
                <ModalHeader>

                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>


        </AdminLayout>
    );
};

const mapStateToProps = (state) =>{
    return {
        modalOpen: state.menus.modalOpen
    }
}

export default connect(mapStateToProps, {updateState})(AdminMenus);