import React from 'react'

function Testimonials() {
  return (
    <div className="testimonials">
        <div className="container-fluid p-5">
        <h1 className="testimonial-title ">Our Testimonial</h1>
            <div className="row ">
                 {/* card1 */}
                 <div className="col-md mt-3">
                <div className="card ">
                <div className="card-inner">
                    <div className="front-face">
                        <img src="./images/profile1.jpg" alt="pic1" />
                    </div>
                    <div className="back-face ">
                       <span><i className="fa-solid fa-quote-left mt-5 "></i></span>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellendusa</p>
                       <span><i className="fa-solid fa-quote-right"></i></span>
                       <p>Client Name</p>
                        <p>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            </p>
                        <a href="/Contact" className="btn btn-light" >get in touch</a>
                <div className="social-media ">
                <a href="https://github.com/mezieb" target="blank">  <i className="fab fa-facebook-f"></i></a>
                <a href="https://github.com/mezieb" target="blank">  <i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/chimezie-okoro-767581107/" target="blank">  <i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                </div>
                </div>
            </div>
                </div>
                     {/* end of card1 */}

                    {/* card2 */}
                <div className="col-md mt-3">
                <div className="card">
                <div className="card-inner">
                    <div className="front-face">
                        <img src="./images/profile2a.jpg" alt="pic2" />
                    </div>
                    <div className="back-face">
                    <span><i className="fa-solid fa-quote-left mt-5"></i></span>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellendusa</p>
                       <span><i className="fa-solid fa-quote-right"></i></span>
                       <p>Client Name</p>
                        <p>
                        <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </p>
                        <a href="/Contact" className="btn btn-light" >get in touch</a>
                        <div className="social-media">
                            <a href="https://github.com/mezieb" target="blank"> <i className="fab fa-facebook-f"></i></a>
                            <a href="https://github.com/mezieb" target="blank">  <i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/chimezie-okoro-767581107/" target="blank">  <i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                </div>
            </div>
                </div>
                 {/* end of card2 */}

                {/* card3 */}
                <div className="col mt-3">
                <div className="card">
                <div className="card-inner">
                    <div className="front-face">
                        <img src="./images/profile3.jpg" alt="pic3" />
                    </div>
                    <div className="back-face">
                    <span><i className="fa-solid fa-quote-left mt-5"></i></span>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellendusa</p>
                       <span><i className="fa-solid fa-quote-right"></i></span>
                       <p>Client Name</p>
                        <p>
                        <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </p>
                        <a href="/Contact" className="btn btn-light" >get in touch</a>
                        <div className="social-media">
                            <a href="https://github.com/mezieb" target="blank"> <i className="fab fa-facebook-f"></i></a>
                            <a href="https://github.com/mezieb" target="blank">  <i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/chimezie-okoro-767581107/" target="blank">  <i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                </div>
            </div>
                
                
                </div>
                 {/* end of card3 */}
            </div>

        </div>
        
    </div>
  )
}

export default Testimonials;