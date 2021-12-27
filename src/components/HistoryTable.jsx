import React from "react";
import { Table } from "react-bootstrap";

const HistoryTable = () => {
  const tableHead = [
    {
      id: 1,
      AppointmentBookedBy: "Appointment Booked By",
      LawyerName: "Lawyer Name",
      Lawyerid: "Lawyer Id",
      Date: "Date of Appointment",
      time: "Time Slot",
    },
  ];

  const history = [
    {
      id: 1,
      AppointmentBookedBy: "Nilesh",
      LawyerName: "Pramod",
      LawyerId: 123,
      Date: "10-01-2022",
      time: "10AM to 11AM",
    },
    {
      id: 2,
      AppointmentBookedBy: "Rohan",
      LawyerName: "Pramod",
      LawyerId: 123,
      Date: "10-02-2022",
      time: "10AM to 10:30AM",
    },
    {
      id: 3,
      AppointmentBookedBy: "Ram",
      LawyerName: "Sam",
      LawyerId: 124,
      Date: "10-02-2022",
      time: "10AM to 10:30AM",
    },
  ];
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            {tableHead.map((head, index) => (
              <>
                <th key={index}>{head.AppointmentBookedBy}</th>
                <th key={index}>{head.LawyerName}</th>
                <th key={index}>{head.Lawyerid}</th>
                <th key={index}>{head.Date}</th>
                <th key={index}>{head.time}</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {history.map((filhis) => (
            <tr key={filhis.id}>
              <td>{filhis.id}</td>
              <td>{filhis.AppointmentBookedBy}</td>
              <td>{filhis.LawyerName}</td>
              <td>{filhis.LawyerId}</td>
              <td>{filhis.Date}</td>
              <td>{filhis.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryTable;
