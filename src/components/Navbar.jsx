import React from 'react'


function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav navbarlinks">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Testimonial">Testimonial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Contact">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;