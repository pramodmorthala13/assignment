import React, {useState} from "react";
import CardComp from "./CardComp";
import { Row, Col } from "react-bootstrap";
const lawyerData = [
  {
    id: 1,
    lawyerName: "Pramod",
    speciality: ["Divorse lawyer", "Criminal lawyer"],
    payment: { fee: 5000, curency: "rupees" },
    availableTimings: "10AM-2PM",
    numberOfAppointmentsLeft: 10,
    isAvailable: true,
    appointmentDuration: "30min",
  },
  {
    id: 2,
    lawyerName: "Paddy",
    speciality: ["Divorse lawyer"],
    payment: { fee: 11000, curency: "rupees" },
    availableTimings: "10AM-2PM",
    numberOfAppointmentsLeft: 6,
    isAvailable: true,
    appointmentDuration: "45min",
  },
  {
    id: 3,
    lawyerName: "Sam",
    speciality: ["Divorse lawyer", "Propety lawyer"],
    payment: { fee: 2000, curency: "rupees" },
    availableTimings: "10AM-2PM",
    numberOfAppointmentsLeft: 15,
    isAvailable: true,
    appointmentDuration: "60min",
  },
  {
    id: 4,
    lawyerName: "Suraj",
    speciality: ["Divorse lawyer", "Propety lawyer"],
    payment: { fee: 7999, curency: "rupees" },
    availableTimings: "10AM-2PM",
    numberOfAppointmentsLeft: 17,
    isAvailable: true,
    appointmentDuration: "30min",
  },
  {
    id: 5,
    lawyerName: "Akshay",
    speciality: ["Divorse lawyer", "Propety lawyer"],
    payment: { fee: 4500, curency: "rupees" },
    availableTimings: "10AM-2PM",
    numberOfAppointmentsLeft: 3,
    isAvailable: true,
    appointmentDuration: "30min",
  },
];


const Home = () => {
    const [lawyers, setLawyers] = useState(lawyerData);

const decreaseslots = (ind) => {
  const obj = lawyers[ind];
  obj.numberOfAppointmentsLeft =
    obj.numberOfAppointmentsLeft > 0 ? obj.numberOfAppointmentsLeft - 1 : 0;
  obj.isAvailable = obj.numberOfAppointmentsLeft > 0;
  lawyers[ind] = obj;

  setLawyers([...lawyers]);
};
  return <div>
      <Row>
        {lawyers.map((lawyer,ind) => (
          <Col key={lawyer.id} sm={12} md={6} lg={4} xl={3} className="gy-4">
            <CardComp lawyer={lawyer} decreaseslots={decreaseslots} ind={ind} />
          </Col>
        ))}
      </Row>
  </div>;
};

export default Home;
