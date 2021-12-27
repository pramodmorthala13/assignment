import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";

const CardComp = React.memo(({ lawyer, decreaseslots, ind }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="bg-light">
        <Card.Body>
          <Card.Title>Lawyer Name :{lawyer.lawyerName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Lawyer Speciality :
            {lawyer.speciality.map((spe) => (
              <li>{spe}</li>
            ))}
          </Card.Subtitle>
          <Card.Text>
            <p className="h6">Cost for Apointment : <span className="text-secondary">{lawyer.payment.fee}</span></p>
            
            <p className="h6">Available Timmings : <span className="text-secondary ">{lawyer.availableTimings}</span></p> 
           <p className="h6">AppointMent Duration : <span className="text-secondary">{lawyer.appointmentDuration}</span></p>
           <p className="h6">No slots left : <span className="text-secondary">{lawyer.numberOfAppointmentsLeft}</span></p>

          </Card.Text>
          {lawyer.isAvailable ? (
            <Button
              className="btn btn-primary"
              disabled={lawyer.isAvailable ? false : true}
              onClick={() => decreaseslots(ind)}
            >
              Book Appointment
            </Button>
          ) : (
            <p className="text-danger">No Appointments</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
});

export default CardComp;
