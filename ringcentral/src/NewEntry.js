import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NewEntry = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: "",
    timeInSeconds: "",
    ticketNumber: "",
    dateOfEntry: "",

    accountId: "",
    customer: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addData = (e) => {
    e.preventDefault();

    const res = localStorage.getItem("arr");
    const older = JSON.parse(res);
    console.log(data);
    localStorage.setItem("arr", JSON.stringify([...older, { ...data }]));
    // navigate("/entries");
  };

  return (
    <div>
      <div className="container my-3">
        <form>
          <div className="form-group">
            <label htmlFor="Customer UID">Customer UID</label>
            <input
              type="text"
              className="form-control"
              id="Customer UID"
              name="accountId"
              value={data.accountId}
              onChange={handleChange}
              placeholder="Enter Customer UID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Ticket Id">Ticket Id</label>
            <input
              type="text"
              className="form-control"
              id="Ticket Id"
              name="ticketNumber"
              value={data.ticketNumber}
              onChange={handleChange}
              placeholder="Enter Ticket Id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Customer">Customer</label>
            <input
              type="text"
              className="form-control"
              id="Customer"
              name="customer"
              value={data.customer}
              onChange={handleChange}
              placeholder="Enter Customer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Duration">Duration</label>
            <input
              type="text"
              className="form-control"
              id="Duration"
              name="timeInSeconds"
              value={data.timeInSeconds}
              onChange={handleChange}
              placeholder="Enter Duration"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Date">Date</label>
            <input
              type="text"
              className="form-control"
              id="Date"
              name="dateOfEntry"
              value={data.dateOfEntry}
              onChange={handleChange}
              placeholder="Enter date"
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={addData}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewEntry;
