import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { editEmployees } from "../../services/AllApi";
import { empContext } from "../contexts/EmployeeContext";
const EditingModal = ({ editshow, handleEditClose, newData, setRender }) => {
  const [imageTypeStatus, setImageTypeStatus] = useState(false);
  console.log(imageTypeStatus);

  const { setEmployee } = useContext(empContext);
  const [preview, setPreview] = useState();
  const [updated, setUpdated] = useState({
    employeeName: newData?.employeeName || "",
    employeePhoto: newData?.employeePhoto || "",
    employeeAddress: newData?.employeeAddress || "",
    employeePassportNumber: newData?.employeePassportNumber || "",
    employeeCDCNumber: newData?.employeeCDCNumber || "",
    employeeDesignation: newData?.employeeDesignation || "",
    employeeJoiningDate: newData?.employeeJoiningDate || "",
  });
  useEffect(() => {
    if (editshow && newData) {
      setUpdated({ ...newData });
      setPreview(null);
    }
  }, [editshow, newData]);

  useEffect(() => {
    if (updated.employeePhoto && typeof updated.employeePhoto !== "string") {
      const file = updated.employeePhoto;
      if (
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg"
      ) {
        const objectUrl = URL.createObjectURL(file);
        setImageTypeStatus(true);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
      } else {
        setImageTypeStatus(false);
        alert("Please upload only JPG, JPEG, or PNG images.");
        setPreview(null);
      }
    } else if (typeof updated.employeePhoto === "string") {
      setPreview(`http://localhost:3000/Photos/${updated.employeePhoto}`);
    } else {
      setPreview(null);
    }
  }, [updated.employeePhoto]);

  const onEdit = async () => {
    const payLoad = new FormData();
    payLoad.append("employeeName", updated.employeeName);
    payLoad.append("employeePhoto", updated.employeePhoto);
    payLoad.append("employeeAddress", updated.employeeAddress);
    payLoad.append("employeePassportNumber", updated.employeePassportNumber);
    payLoad.append("employeeCDCNumber", updated.employeeCDCNumber);
    payLoad.append("employeeDesignation", updated.employeeDesignation);
    payLoad.append("employeeJoiningDate", updated.employeeJoiningDate);

    try {
      let requestHeader = { "Content-Type": "multipart/form-data" };
      const ApiResp = await editEmployees(newData._id, payLoad, requestHeader);
      if (ApiResp.status == 200) {
        alert("Employee details edited succesfully");
        handleEditClose();
        setEmployee(ApiResp.data);
        setRender(Date.now());
      } else {
        alert("try again later");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal show={editshow} centered size="xl" onHide={handleEditClose}>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title className="fw-bold">Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <label style={{ cursor: "pointer" }}>
                <img
                  src={
                    preview
                      ? preview
                      : `http://localhost:3000/Photos/${
                          updated.employeePhoto
                        }?t=${Date.now()}`
                  }
                  alt="Employee Preview"
                  className="mb-3 shadow rounded"
                  style={{
                    width: "200px",
                    height: "150px",
                    objectFit: "cover",
                    border: "3px solid #0d6efd",
                  }}
                />
                <input
                  onChange={(e) =>
                    setUpdated({ ...updated, employeePhoto: e.target.files[0] })
                  }
                  type="file"
                  hidden
                />
              </label>
              <p className="fw-bold text-primary small mb-0">
                Click on image to Change the image
              </p>
            </div>
            <div className="col-md-8">
              <div className="mb-3">
                <label className="form-label fw-semibold">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  value={updated.employeeName}
                  onChange={(e) => {
                    setUpdated({ ...updated, employeeName: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Permenent Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={updated.employeeAddress}
                  onChange={(e) => {
                    setUpdated({ ...updated, employeeAddress: e.target.value });
                  }}
                  placeholder="Enter father's Permenent Address"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Passport Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Passport Number"
                  value={updated.employeePassportNumber}
                  onChange={(e) => {
                    setUpdated({
                      ...updated,
                      employeePassportNumber: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">CDC Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter CDC Number"
                  value={updated.employeeCDCNumber}
                  onChange={(e) => {
                    setUpdated({
                      ...updated,
                      employeeCDCNumber: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation"
                  value={updated.employeeDesignation}
                  onChange={(e) => {
                    setUpdated({
                      ...updated,
                      employeeDesignation: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Joining date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Joining date"
                  value={updated.employeeJoiningDate}
                  onChange={(e) => {
                    setUpdated({
                      ...updated,
                      employeeJoiningDate: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditingModal;
