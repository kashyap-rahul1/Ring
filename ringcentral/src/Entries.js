import React from "react";
// import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Entries = () => {
  let [myData, setMyData] = useState([]);
  let data;
  useEffect(() => {
    const data = localStorage.getItem("arr");
    const result = JSON.parse(data);
    setMyData(result);
    console.log(result);
  }, []);

  useEffect(() => {
    // setMyData(data);
    console.log("delete", data);
  }, []);

  const handleDelete = (duration) => {
    // debugger;
    alert(duration);
    console.log("deleting.......");
    data = myData.filter((item) => {
      return item.timeInSeconds !== duration;
    });
  };

  return (
    <>
      <NavLink to="newentry">
        <button type="button" class="btn btn-outline-primary">
          <AddIcon />
          <b>Add Entry</b>
        </button>
      </NavLink>

      <table className="table table-dark ">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Support Type</th>
            <th scope="col">Customer UID</th>
            <th scope="col">Ticket Id</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((item, i) => {
            return (
              <>
                <tr key={i}>
                  <th scope="row">
                    <input type="checkbox" />
                  </th>
                  <td>{item.customer}</td>
                  <td>{item.accountId}</td>
                  <td>{item.ticketNumber}</td>
                  <td>{item.timeInSeconds}</td>
                  <td>{item.dateOfEntry}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <DeleteIcon
                      onClick={() => {
                        handleDelete(item.timeInSeconds);
                      }}
                    >
                      delete
                    </DeleteIcon>
                  </td>
                  <td>
                    <MoreVertIcon />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Entries;
