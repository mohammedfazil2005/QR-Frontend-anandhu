import React from "react";
import '../costumStyles/StyleView.css'
const View = () => {
  return (
    <div className="cruise-background">
      
      <video autoPlay muted loop className="bg-video">
        <source
          src="https://cdn.pixabay.com/video/2024/10/20/237249_large.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>

      
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        alt="Company Logo"
        className="top-logo"
      />

     
      <div className="id-card" id="employee-id">
        <div className="card-header">
          <h2>Employee ID Card</h2>
        </div>

        <div className="card-body">
          <img
            src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="Employee"
            className="profile-photo"
          />
          <div className="details">
            <div className="detail-row">
              <span>Name</span>
              <span>Rahul </span>
            </div>
            <div className="detail-row">
              <span>Passport No</span>
              <span>M1234567</span>
            </div>
            <div className="detail-row">
              <span>CDC No</span>
              <span>IN123456</span>
            </div>
            <div className="detail-row">
              <span>Designation</span>
              <span>Dummy Data</span>
            </div>
            <div className="detail-row">
              <span>Nationality</span>
              <span>Indian</span>
            </div>
            <div className="detail-row">
              <span>Joining Date</span>
              <span>01-July-2025</span>
            </div>
            <div className="detail-row">
              <span>Company</span>
              <span>CruiseTech Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
