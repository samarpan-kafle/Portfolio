import React from 'react'
import logo from "./../assets/samarpan.png"


export default function Home() {
  return (
    <div className="d-flex flex-row justify-content-center gap-5  pt-5"  style={{height:"90vh",}}>
      <div className='pt-5 text-end'>
        <p className="pt-5" style={{fontSize:"40px"}}>Hi! </p>
        <p style={{ fontSize: "50px", fontWeight:'bold' }}>
              Samarpan Kafle
            </p>
            <p style={{ fontSize: "25px" }}>Junior React Develover<br/> at Wiseyak Solutions Pvt. Ltd.</p>
      </div>
      <div className='d-flex ' >
      <img  src={logo} height={500} alt="im"/> 
      </div>
    </div>
  )
}
