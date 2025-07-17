import React, { useContext, useEffect } from "react";
import { deleteEmployee, getEmployee } from "../../services/AllApi";
import { empContext } from "../contexts/EmployeeContext";

const Table = ({setEditShow,setNewData,}) => {

  const {employee, setEmployee}=useContext(empContext)


  const getAllEmp = async () => {
    const ApiResponse = await getEmployee();
    setEmployee(ApiResponse.data);
  };
  useEffect(() => {
    getAllEmp();
  }, [employee]);

  const onDelete = async (id) => {
    try {
      const ApiResponse = await deleteEmployee(id);
      if (ApiResponse.status == 200) {
        alert("Employee deleted successfully");
        getAllEmp();
      } else {
        alert("try again later");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditShow = (details) =>{
    setNewData(details)

     setEditShow(true)
    };

  return (
    <div
      className="container-fluid py-5 px-4"
      style={{ minHeight: "100vh", backgroundColor: "#5C5C5C" }}
    >
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-dark text-white py-3">
              <h3 className="mb-0 text-center">
                <i className="fas fa-users me-2"></i>Employee Management System
              </h3>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-dark table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th className="text-center py-3">
                        <i className="fas fa-image me-2"></i>Photo
                      </th>
                      <th className="py-3">
                        <i className="fas fa-user me-2"></i>Employee Name
                      </th>
                      <th className="py-3">
                        <i className="fas fa-user me-2"></i>Permanent Address
                      </th>
                      <th className="py-3">
                        <i className="fas fa-passport me-2"></i>Passport Number
                      </th>
                      <th className="text-center py-3">
                        <i className="fas fa-id-card me-2"></i>CDC Number
                      </th>
                      <th className="py-3">
                        <i className="fas fa-briefcase me-2"></i>Designation
                      </th>
                      <th className="py-3">
                        <i className="fas fa-calendar-alt me-2"></i>Joining Date
                      </th>
                      <th className="text-center py-3">
                        <i className="fas fa-qrcode me-2"></i>QR Code
                      </th>
                      <th className="text-center py-3">
                        <i className="fas fa-cogs me-2"></i>Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.length > 0
                      ? employee?.map((details) => (
                          <tr className="border-bottom">
                            <td className="text-center py-3">
                              <div className="position-relative d-inline-block">
                                <img
                                  src={`http://localhost:3000/Photos/${details.employeePhoto}`}
                                  alt="Employee"
                                  className="rounded-circle shadow-sm"
                                  style={{
                                    width: "65px",
                                    height: "65px",
                                    objectFit: "cover",
                                    border: "3px solid #28a745",
                                  }}
                                />
                                <span
                                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                                  style={{ fontSize: "0.6rem" }}
                                >
                                  Active
                                </span>
                              </div>
                            </td>
                            <td className="py-3">
                              <div>
                                <h6 className="mb-0 text-white fw-bold">
                                  {details.employeeName}
                                </h6>
                              </div>
                            </td>
                            <td className="py-3">
                              <span className="text-light">
                                {details.employeeAddress}
                              </span>
                            </td>
                            <td className="py-3 text-light">
                              {details.employeePassportNumber}
                            </td>
                            <td className="text-center py-3 text-light">
                              {details.employeeCDCNumber}
                            </td>
                            <td className="py-3">
                              <span className="badge bg-warning text-dark px-3 py-2 fs-6">
                                <i className="fas fa-tools me-1"></i>
                                {details.employeeDesignation}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="text-light">
                                <i className="fas fa-calendar-day me-1"></i>
                                {details.employeeJoiningDate}
                              </div>
                            </td>
                            <td className="text-center py-3">
                              <div className="d-inline-block position-relative">
                                <img
                                  src="https://api.qrserver.com/v1/create-qr-code/?data=EMP001"
                                  alt="QR Code"
                                  className="rounded shadow-sm"
                                  style={{
                                    width: "65px",
                                    height: "65px",
                                    objectFit: "cover",
                                    border: "2px solid #fff3",
                                  }}
                                />
                              </div>
                            </td>
                            <td className="text-center py-3">
                              <div
                                className="btn-group-vertical btn-group-sm gap-1"
                                role="group"
                              >
                                <button className="btn btn-outline-light btn-sm px-3">
                                  <i className="fas fa-download me-1"></i>
                                  Download QR
                                </button>
                                <button
                                  className="btn btn-primary btn-sm px-3"
                                  onClick={()=> handleEditShow(details)}
                                >
                                  <i className="fas fa-edit me-1"></i>Edit
                                </button>
                                <button
                                  className="btn btn-danger btn-sm px-3"
                                  onClick={() => onDelete(details._id)}
                                >
                                  <i className="fas fa-trash me-1"></i>Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer bg-dark text-center py-3">
              <small className="text-muted">
                <i className="fas fa-info-circle me-1"></i>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
