import React from "react";

const SideBar = ({handleShow}) => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#696969", width: "250px" }}
      className="d-flex flex-column justify-content-between text-white"
    >
        <div   className="d-flex flex-column justify-content-center align-items-center mt-5 fs-3 fw-bolder" >
            <i className="fa-solid fa-table-columns"></i>    Dashboard
            <button className="btn  btn-outline-light w-75 mt-5 rounded-5" onClick={handleShow}>Add employees<i class="fa-solid fa-user-plus ms-2"></i></button>

            

        </div >
        <div className="d-flex justify-content-center align-items-center mb-3 ">
          <button className="btn btn-danger ">LOG OUT <i class="fa-solid fa-right-from-bracket"></i></button>

        </div>


    </div>
  );
};

export default SideBar;
