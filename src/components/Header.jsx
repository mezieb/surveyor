import React from 'react'

function Header() {
  return (
   <div className="  header">
    <div className="container-fluid p-5">
    <img src="./images/landsurvey.jpg" className="img-fluid picture " alt="pic"/>
     <div className="header-title">
      <h1>Land Survey</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus</p>
      <a href="/Project" className="btn btn-light ">Projects</a>
      </div>
    </div>
  
   </div>
  )
}

export default Header;