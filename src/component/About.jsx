import React from "react";

import Common from "./Common";
import img2 from "./image/services.jpg";

const About = () => {
  return (
    <>
      <Common
        name={" WELLCOME TO ABOUT PAGE"}
        images1={img2}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;

// <>
// <section id='header' className='mt-5'>
//    <div className='container-fluid nav_bg'>
//    <div className='row'>
//    <div className='col-10 mx-auto'>
// <div className='row'>

//    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
//    <h1 className='my-3'>
//        GROW YOUR BUSINESS WITH <strong className='mainname'> ADITYA TECHNICAL</strong>

//    </h1>
//    <h2 className='mt-3'>
//        we are the team of telented dewloper
//       </h2>
//       <div className='mt-3'>
//        <Link to="/service" className='btn-get-started'>
//            <button type="button" class="btn btn-primary">Get started</button>

//        </Link>
//       </div>
//    </div>
//    <div className='col-lg-6 order-1 order-lg-2 header-img'>
// <img src={img1} alt="hiimage" className='img-fluid animated'/>
//    </div>
//    </div>

//    </div>

//    </div>

//    </div>
// </section>
//    </>
