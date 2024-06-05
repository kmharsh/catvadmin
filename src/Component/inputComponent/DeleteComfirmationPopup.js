/**
 * The DeleteConfirmationPopup component is a React component that displays a modal popup with a label,
 * message, and buttons for confirming or canceling a delete action.
 * @returns The DeleteComfirmationPopup component is being returned. It is a React functional component
 * that renders a modal popup with a title, message, and buttons for confirming or canceling an action.
 * The component takes props such as isOpen, label, message, handleCancel, and handleConfirm to control
 * its behavior.
 */
import React from 'react';
const DeleteComfirmationPopup = ({ isOpen, lable, message, handleCancle, handleConfirm }) => {
    const showHideClassName = isOpen ? "show fade" : "";

    return (


        <div className={"modal " + showHideClassName} tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className='d-flex justify-content-between align-items-baseline w-100'>
                        <h5 className="modal-title">{lable}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCancle}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary btn-danger" onClick={handleConfirm}>Delete</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={handleCancle}>Close</button>
                    </div>
                </div>
            </div>
        </div>





    );
};

export default DeleteComfirmationPopup;

