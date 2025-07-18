import React, { useEffect, useState } from "react";
import '../costumStyles/StyleView.css'
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/AllApi";
const View = () => {

  const {id}=useParams()
  const navigate=useNavigate()
  const [user,setUser]=useState({})

  const fetchEmpDetails=async()=>{
    try {
      const userDetails=await getEmployeeById(id)
      if(userDetails.status==200){
        setUser(userDetails.data.isUser)
      }else{
        alert("Something went wrong!")
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!id){
      navigate('/')
    }

    fetchEmpDetails()


  },[])

  

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
            src={`http://localhost:3000/Photos/${user.employeePhoto}`}
            alt="Employee"
            className="profile-photo"
          />
          <div className="details">
            <div className="detail-row">
              <span>Name</span>
              <span>{user.employeeName} </span>
            </div>
            <div className="detail-row">
              <span>Passport No</span>
              <span>{user.employeePassportNumber}</span>
            </div>
            <div className="detail-row">
              <span>CDC No</span>
              <span>{user.employeeCDCNumber}</span>
            </div>
            <div className="detail-row">
              <span>Designation</span>
              <span>{user.employeeDesignation}</span>
            </div>
            <div className="detail-row">
              <span>Nationality</span>
              <span>{user.employeeDesignation}</span>
            </div>
            <div className="detail-row">
              <span>Joining Date</span>
              <span>{user.employeeJoiningDate}</span>
            </div>
            {/* <div className="detail-row">
              <span>Company</span>
              <span>CruiseTech Solutions</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
