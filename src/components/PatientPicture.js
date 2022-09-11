import React from 'react';
import logo from '../th.jpeg';
import './PatientPicture.css'
function PatientPicture() {
  return (
    <img src={logo} className="patient-picture" alt="logo" />
  )
} 

export default PatientPicture;