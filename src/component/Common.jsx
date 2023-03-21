


import React from 'react'
import { Link } from 'react-router-dom';


const Common = (props) => {
  return (
    <>
 <section id='header' className='mt-5 common_height' >
    <div className='container-fluid nav_bg'>
    <div className='row' >
    <div className='col-10 mx-auto'>
<div className='row'>
 <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
 <h1> 💐 WELLCOME 💐</h1>
    <h1 className='my-3'>
        GROW YOUR BUSINESS WITH <strong className='mainname'> ADITYA TECHNICAL</strong>
        
    </h1>
    <h2 className='mt-3'>
       {props.name}
       </h2>
       <div className='mt-3'>
        <Link to={props.visit} className='btn-get-started'>
            <button type="button" class="btn btn-primary">{props.btnname}</button>
               
            
        </Link>
       </div>
    </div>
    <div className='col-lg-6 order-1 order-lg-2 header-img'>
<img src={props.images1} alt="hiimage" className='img-fluid animated'/>
    </div>
    </div>

    </div>

    </div>

    </div>
 </section>
    </>
  )
}

export default Common
