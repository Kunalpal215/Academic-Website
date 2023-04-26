import React from 'react'
import AdmissionDate from './Admissiondate/AdmissionDate'
import AdmissionLink from './admission link/AdmissionLink'
import './Admission.css'
const Admission = () => {
  return (
    <div>
      <AdmissionDate />
      <AdmissionLink />
    </div>
  )
}

export default Admission