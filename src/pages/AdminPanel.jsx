import React, { useState } from "react";
import SideBar from "../componnets/SideBar";
import Data from "../componnets/Data";
import AddingModal from "../componnets/AddingModal";
import EditingModal from "../componnets/EditingModal";

const AdminPanel = () => {
  const [render,setRender]=useState("")
  const [show, setShow] = useState(false);
  const[newData,setNewData]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editshow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  
  return (
    <div style={{ height: "100vh" }} className="d-flex">
      <SideBar handleShow={handleShow} />
      <Data setEditShow={setEditShow} setNewData={setNewData} render={render} setRender={setRender} />
      <AddingModal show={show} handleClose={handleClose} />
      <EditingModal editshow={editshow} handleEditClose={handleEditClose} newData={newData}/>
     
    </div>
  );
};

export default AdminPanel;
