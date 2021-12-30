import React from "react";
import { Modal,Button } from "react-bootstrap";

const ModalComp = (props) => {
    const {lawyer:{lawyerName},time}=props;
   
    

  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-center"
    >
      
      <Modal.Body>
      <h4 className="mx-auto">Lawyer Appointment Details</h4>

        <p>
          Your Appointment with Lawyer <strong>{lawyerName}</strong> Booked is at {time.radiobtn} O'clock
        </p>
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default ModalComp;
