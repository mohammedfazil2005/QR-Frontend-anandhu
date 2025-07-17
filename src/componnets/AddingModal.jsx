import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEmployee } from "../../services/AllApi";

const AddingModal = ({ show, handleClose }) => {
  const [imageTypeStatus, setImageTypeStatus] = useState(false);

  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    employeeName: "",
    employeePhoto: "",
    employeeAddress: "",
    employeePassportNumber: "",
    employeeCDCNumber: "",
    employeeDesignation: "",
    employeeJoiningDate: "",
  });
  useEffect(() => {
    if (data.employeePhoto) {
      if (
        data.employeePhoto.type == "image/png" ||
        data.employeePhoto.type == "image/jpeg" ||
        data.employeePhoto.type == "image/jpg"
      ) {
        setImageTypeStatus(true);
        setPreview(URL.createObjectURL(data.employeePhoto));
      } else {
        setImageTypeStatus(false);
        alert("please upload only specified type");
      }
    }
  }, [data.employeePhoto]);
  const onAddingEmployee = async () => {
    if (
      data.employeeName &&
      data.employeePhoto &&
      data.employeeAddress &&
      data.employeePassportNumber &&
      data.employeeCDCNumber &&
      data.employeeDesignation &&
      data.employeeJoiningDate
    ) {
      const payload = new FormData();
      payload.append("employeeName", data.employeeName);
      payload.append("employeePhoto", data.employeePhoto);
      payload.append("employeeAddress", data.employeeAddress);
      payload.append("employeePassportNumber", data.employeePassportNumber);
      payload.append("employeeCDCNumber", data.employeeCDCNumber);
      payload.append("employeeDesignation", data.employeeDesignation);
      payload.append("employeeJoiningDate", data.employeeJoiningDate);
      try {
        let requestHeader = { "Content-Type": "multipart/form-data" };
        const Apiresponse = await postEmployee(payload, requestHeader);
        if (Apiresponse.status == 201) {
          alert("data Added succesfully");
          handleClose();
        } else {
          alert("try again later");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Modal show={show} centered size="xl" onHide={handleClose}>
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
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-qXGe68S4PVh5NR3vb4QE3xnpdvJ0bMVTw&s"
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
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setData({
                      ...data,
                      employeePhoto: file,
                    });
                  }}
                  hidden
                />
              </label>
              <p className="fw-bold text-primary small mb-0">
                {preview
                  ? ""
                  : " Click on image to upload image of jpeg jpg or png formats"}
              </p>
            </div>
            <div className="col-md-8">
              <div className="mb-3">
                <label className="form-label fw-semibold">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  onChange={(e) =>
                    setData({ ...data, employeeName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Permenent Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setData({ ...data, employeeAddress: e.target.value })
                  }
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
                  onChange={(e) =>
                    setData({ ...data, employeePassportNumber: e.target.value })
                  }
                  placeholder="Enter Passport Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">CDC Number</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setData({ ...data, employeeCDCNumber: e.target.value })
                  }
                  placeholder="Enter CDC Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Designation</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, employeeDesignation: e.target.value })
                  }
                  className="form-control"
                  placeholder="Enter Designation"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Joining date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Joining date"
                  onChange={(e) =>
                    setData({ ...data, employeeJoiningDate: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={onAddingEmployee}
            disabled={!imageTypeStatus}
          >
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddingModal;
