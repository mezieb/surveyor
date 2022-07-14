import React from 'react'

function Contacts() {
  return (
    <div className="contacts">
        <div className="container-fluid p-5 ">
          <div className="contact-title"><h1>Contact US</h1></div>
        <div className="row">
                    <div className="col-md ">
                    <form action="https://formsubmit.co/0f27a5a50dd13cd9ae4e226bed15e0b3" method="POST">
  <div className="mb-3 mt-3">
    <label htmlFor="firstName" className="form-label">FirstName:</label>
    <input type="firstName" className="form-control" id="firstName" placeholder="Enter firstName" name="firstName"required/>
  </div>
  <div className="mb-3 ">
    <label htmlFor="lastName" className="form-label">LastName:</label>
    <input type="lastName" className="form-control" id="lastName" placeholder="Enter lastName" name="lastName"required/>
  </div>
  <div className="mb-3 ">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required/>
    <input type="hidden" name="_next" value="https://okorochimezie-surveyor.netlify.app//Thankyou"></input>
  </div>
  <div className="mb-3 ">
    <label htmlFor="subject" className="form-label">Subject:</label>
    <input type="subject" className="form-control" id="subject" placeholder="Enter subject" name="subject"required/>
  </div>
  <div className="mb-3 ">
  <label htmlFor="message" className="form-label">Message:</label>
<textarea className="form-control" rows={5} id="message" placeholder="Enter message" name="text"required></textarea>
  </div>
 
  <button type="submit" className="btn btn-light">Submit</button>
</form>


     </div>
      <div className="col">
          <div className="mb-3 mt-3 p-6 ">
            <img src="./images/icons8-call-64.png" className=" picture2 " alt="pic"/>
              <p>Hotline: +123456789</p>
              <img src="./images/icons8-gmail-logo-64.png" className=" picture2 " alt="pic"/>
                      <p>Email: example@gmail.com</p>
                      </div>
                    </div>
                    
                </div>
                
            
        </div>

    </div>
  )
}

export default Contacts;