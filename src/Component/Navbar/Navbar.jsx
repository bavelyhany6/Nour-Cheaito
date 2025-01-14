import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import Contact from './../Contact/Contact';

export default function Navbar() {
  return<>
  
  <nav className="navbar navbar-expand-lg bg-black testmo navo ">
  <div className="container">
    <Link className="navbar-brand" to={"/Home"} ><img src={require("../Images/logo.png")} className='logo' alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white text-center hov" aria-current="page" to={"/Home"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white text-center hov" aria-current="page" to={"/About"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white text-center hov" aria-current="page" to={"/Programs"}>Programs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white text-center hov" aria-current="page" to={"/Downloads"}>Transformations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white text-center hov" aria-current="page" to={"/Consultation"}>Consultation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white text-center hov" aria-current="page" to={"/Contact"}>Contact Us</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  
  
  
  
  
  </>
}
