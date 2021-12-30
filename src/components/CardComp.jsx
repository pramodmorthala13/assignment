import Button from "@restart/ui/esm/Button";
import React,{useState} from "react";
import { Card } from "react-bootstrap";
import ModalComp from "./ModalComp";


const CardComp = React.memo(({ lawyer, decreaseslots, ind }) => {
  const [timming, setTimming] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setTimming({
      ...timming,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Card style={{ width: "18rem" }} className="bg-light mycard">
        <Card.Body>
          <Card.Title className="card_title">
          <img
              src="/assets/profile.png"
              alt="image"
              className="img-fluid w-25 profile_image"
            />
            <div>
              <p>{lawyer.lawyerName}</p>
              <small>SR Lawyer at High Court</small>
            </div>
          </Card.Title>
         
          <Card.Subtitle className="mb-2 law_speciality">
            Lawyer Speciality :
            {lawyer.speciality.map((spe) => (
              <li>{spe}</li>
            ))}
          </Card.Subtitle>
          <hr />
          <Card.Text>
            <p className="h6">Cost for Appointment : <span className="cost"> ₹ {lawyer.payment.fee}</span></p>
            <p className="h6">
              Appointment Duration :{" "}
              <span className="text-secondary">
                {lawyer.appointmentDuration}
              </span>
            </p>
            <p className="h6">
              No slots left :{" "}
              <span className="slots">
                {lawyer.numberOfAppointmentsLeft}
              </span>
            </p>

            <div className="radiobtn_section" onChange={handleChange}>
              <label
                className={`${
                  timming.radiobtn === "10" ? "active_class" : "radio_btn_label"
                } `}
              >
                <input
                  type="radio"
                  name="radiobtn"
                  value="10"
                  className="m-1 p-1 radio_btn"
                />
                10AM-11AM
              </label>
              <label
                className={`${
                  timming.radiobtn === "11" ? "active_class" : "radio_btn_label"
                } `}
              >
                <input
                  type="radio"
                  name="radiobtn"
                  value="11"
                  className="m-1 p-1 radio_btn"
                />{" "}
                11AM-12PM
              </label>
              <label
                className={`${
                  timming.radiobtn === "12" ? "active_class" : "radio_btn_label"
                } `}
              >
                <input
                  type="radio"
                  name="radiobtn"
                  value="12"
                  className="m-1 p-1 radio_btn"
                />{" "}
                12PM-01PM
              </label>
              <label
                className={`${
                  timming.radiobtn === "01" ? "active_class" : "radio_btn_label"
                } `}
              >
                <input
                  type="radio"
                  name="radiobtn"
                  value="01"
                  className="m-1 p-1 radio_btn"
                />{" "}
                01PM-02PM
              </label>
            </div>
          </Card.Text>
          {lawyer.isAvailable ? (
            <>
              <Button className="btn btn-success" variant="primary" onClick={() => {setModalShow(true);decreaseslots(ind)}}>
                Book Appointment
              </Button>

              <ModalComp show={modalShow} onHide={() => setModalShow(false)} time={timming} lawyer={lawyer} />

              
            </>
          ) : (
            <p className="text-danger">No Appointments</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
});

export default CardComp;
