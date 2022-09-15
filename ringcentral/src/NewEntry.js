import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NewEntry = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: Date.now(),
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
    const d = new Date().toLocaleTimeString();
    console.log(d);
    if (
      data.id &&
      data.timeInSeconds &&
      data.ticketNumber &&
      data.accountId &&
      data.customer &&
      data.dateOfEntry
    ) {
      localStorage.setItem("arr", JSON.stringify([...older, { ...data }]));
      navigate("/entries");
    } else {
      alert("Please enter detail");
    }
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
              required
              minLength={1}
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
              required
              minLength={1}
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
              required
              minLength={1}
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
              required
              minLength={1}
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
              required
              minLength={1}
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
