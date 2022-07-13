import React from 'react'
import Header from "../components/Header";
import Main from "../components/Main";
import Servicess from "../components/Servicess";
import Abouts from "../components/Abouts";
import Testimonials from "../components/Testimonials";
import Contacts from "../components/Contacts";



function Home() {
  return (
    <div className="home ">
      <Header/>
      <Main/>
      <Servicess/>
      <Abouts/>
      <Testimonials/>
      <Contacts/>
      
      
        
    </div>
  )
}

export default Home;