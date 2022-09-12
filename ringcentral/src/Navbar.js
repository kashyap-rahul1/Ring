import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  const handleModal = () => {
    setShow(!show);
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("flag");
    navigate("/");
  };
  return (
    <>
      <div className="navbar">
        <div>RingCentral</div>
        <div>Time Track</div>
        <div>
          <Button onClick={handleModal}>Profile</Button>
          <Modal show={show}>
            <Modal.Header>User profile</Modal.Header>
            <Modal.Body>
             
              <Button onClick={()=>{
                handleModal();
                logout();
              }}>Logout</Button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleModal}>Save</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Navbar;
