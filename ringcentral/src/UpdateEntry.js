import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateEntry = () => {
  const [data, setData] = useState({
    id: "",
    timeInSeconds: "",
    ticketNumber: "",
    dateOfEntry: "",

    accountId: "",
    customer: "",
  });
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  let res = localStorage.getItem("arr");
  let arr = JSON.parse(res);

  const myData = arr.filter((item) => {
    console.log(item.id, id);
    return item.id === +id;
  });

  useEffect(() => {
    setData(...myData);
  }, []);

  console.log(data, "line 31");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let alldata = arr.filter((item) => {
      return item.id !== +id;
    });
    console.log(alldata, "all data");
    setAllData(alldata);

    const b = [...alldata, data];
    localStorage.setItem("arr", JSON.stringify(b));
    console.log(b, "combine data");

    navigate("/entries");
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

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEntry;
