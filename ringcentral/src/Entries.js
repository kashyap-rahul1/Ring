import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Entries = () => {
  let [myData, setMyData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  // const arr = [
  //   {
  //     id: 309,
  //     timeInSeconds: "120",
  //     ticketNumber: "0",
  //     dateOfEntry: "2022-08-17",
  //     supportTypeId: 71,
  //     supportLevelId: null,
  //     dispositionId: null,
  //     accountId: "233",
  //     userId: 3,
  //     ticketUrl: null,
  //     ticketName: null,
  //     createdAt: "2022-08-17T12:06:27.558Z",
  //     updatedAt: "2022-08-17T12:06:27.558Z",
  //     account: { id: 28, name: "002828" },
  //     disposition: null,
  //     supportLevel: null,
  //     supportType: { name: "casework/tickets", type: "Support" },
  //     user: {
  //       id: 3,
  //       firstName: "Gaurav",
  //       lastName: "Sample",
  //       nickName: "sample",
  //     },
  //   },
  //   {
  //     id: 308,
  //     timeInSeconds: "60",
  //     ticketNumber: "0",
  //     dateOfEntry: "2022-08-17",
  //     supportTypeId: 71,
  //     supportLevelId: null,
  //     dispositionId: null,
  //     accountId: "233",
  //     userId: 3,
  //     ticketUrl: null,
  //     ticketName: null,
  //     createdAt: "2022-08-17T12:05:43.638Z",
  //     updatedAt: "2022-08-17T12:05:43.638Z",
  //     account: { id: 28, name: "002828" },
  //     disposition: null,
  //     supportLevel: null,
  //     supportType: { name: "casework/tickets", type: "Support" },
  //     user: {
  //       id: 3,
  //       firstName: "Gaurav",
  //       lastName: "Sample",
  //       nickName: "sample",
  //     },
  //   },
  //   {
  //     id: 307,
  //     timeInSeconds: "180",
  //     ticketNumber: "0",
  //     dateOfEntry: "2022-08-17",
  //     supportTypeId: 71,
  //     supportLevelId: null,
  //     dispositionId: null,
  //     accountId: "233",
  //     userId: 1,
  //     ticketUrl: null,
  //     ticketName: null,
  //     createdAt: "2022-08-17T12:04:19.441Z",
  //     updatedAt: "2022-08-17T12:04:19.441Z",
  //     account: { id: 28, name: "002828" },
  //     disposition: null,
  //     supportLevel: null,
  //     supportType: { name: "casework/tickets", type: "Support" },
  //     user: { id: 1, firstName: "Ali", lastName: "Hasan", nickName: "test" },
  //   },
  //   {
  //     id: 306,
  //     timeInSeconds: "180",
  //     ticketNumber: "0",
  //     dateOfEntry: "2022-08-17",
  //     supportTypeId: 71,
  //     supportLevelId: null,
  //     dispositionId: null,
  //     accountId: "233",
  //     userId: 1,
  //     ticketUrl: null,
  //     ticketName: null,
  //     createdAt: "2022-08-17T09:42:06.174Z",
  //     updatedAt: "2022-08-17T09:42:06.174Z",
  //     account: { id: 28, name: "002828" },
  //     disposition: null,
  //     supportLevel: null,
  //     supportType: { name: "casework/tickets", type: "Support" },
  //     user: { id: 1, firstName: "Ali", lastName: "Hasan", nickName: "test" },
  //   },
  //   {
  //     id: 305,
  //     timeInSeconds: "180",
  //     ticketNumber: "0",
  //     dateOfEntry: "2022-08-17",
  //     supportTypeId: 71,
  //     supportLevelId: null,
  //     dispositionId: null,
  //     accountId: "233",
  //     userId: 1,
  //     ticketUrl: null,
  //     ticketName: null,
  //     createdAt: "2022-08-17T09:41:04.734Z",
  //     updatedAt: "2022-08-17T09:41:04.734Z",
  //     account: { id: 28, name: "002828" },
  //     disposition: null,
  //     supportLevel: null,
  //     supportType: { name: "casework/tickets", type: "Support" },
  //     user: { id: 1, firstName: "Ali", lastName: "Hasan", nickName: "test" },
  //   },
  // ];

  // localStorage.setItem("arr", JSON.stringify(arr));
  useEffect(() => {
    const data = localStorage.getItem("arr");
    const result = JSON.parse(data);
    setMyData(result);
    console.log(result);
  }, []);

  const handleDelete = (id) => {
    let data;
    console.log("deleting.......");
    // debugger;
    let text = "Do you want to delete";
    if (window.confirm(text) === true) {
      data = myData.filter((item) => {
        return item.id !== id;
      });
      localStorage.setItem("arr", JSON.stringify(data));
      const res = localStorage.getItem("arr");
      const result = JSON.parse(res);
      setMyData(result);
    } else {
      text = "You canceled!";
    }
  };

  const handleChecbox = (id) => {
    console.log(id);
    if (selectedRows.includes(id)) {
      console.log("already present");
    } else {
      selectedRows.push(id);
    }
    // setSelectedRows(selectedRows);
    console.log(selectedRows, "array");
  };

  const multipleDelete = () => {
    console.log("multiple deleting...");
    console.log(selectedRows.length);
    const res = localStorage.getItem("arr");
    const result = JSON.parse(res);
    const filteredItems = result.filter((item) => {
      return !selectedRows.includes(item.id);
    });
    console.log(filteredItems, "filtered");
    setMyData(filteredItems);
    localStorage.setItem("arr", JSON.stringify(filteredItems));
  };

  const handleSelectAll = (e) => {
    console.log("Select all.......", e.target.checked);
    const { checked } = e.target;
    setSelectAll(checked);
    setSelectedRows(checked ? myData.map((item) => item.id) : []);
    console.log(selectedRows);
  };
  console.log(selectedRows);
  return (
    <>
      <div className="mt-3" style={{ paddingLeft: "250px" }}>
        <NavLink to="newentry" className="m-2">
          <button type="button" className="btn btn-outline-primary">
            <AddIcon />
            <b>Add Entry</b>
          </button>
        </NavLink>
        <button
          type="button"
          className="btn btn-outline-primary ml-2"
          onClick={multipleDelete}
        >
          <DeleteIcon />
          <b>Delete</b>
        </button>
      </div>

      <div
        className="container mt-3"
        style={{ width: "70vw", minheight: "30vw" }}
      >
        <table className="table table-dark ">
          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onClick={handleSelectAll}
                />
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
                <tr key={i}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      className="selectAll"
                      checked={selectedRows.includes(item.id)}
                      onClick={() => {
                        handleChecbox(item.id);
                      }}
                    />
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
                        handleDelete(item.id);
                      }}
                    >
                      delete
                    </DeleteIcon>
                  </td>
                  <td>
                    <NavLink to={`update/${item.id}`}>
                      <EditIcon />
                    </NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Entries;
