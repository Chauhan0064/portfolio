import React from 'react'
import './Css/Home.css'
import devine1 from './project-img/devine/devine1.png'
import devine2 from './project-img/devine/devine2.png'
import devine3 from './project-img/devine/devine3.png'
import devine4 from './project-img/devine/devine4.png'
import devine5 from './project-img/devine/devine5.png'
import devine6 from './project-img/devine/devine6.png'

import aarti1 from './project-img/aarti/aarti1.png'
import aarti2 from './project-img/aarti/aarti2.png'
import aarti3 from './project-img/aarti/aarti3.png'
import aarti4 from './project-img/aarti/aarti4.png'
import aarti5 from './project-img/aarti/aarti5.png'
import aarti6 from './project-img/aarti/aarti6.png'

import busines1 from './project-img/busines/busines1.png'
import busines2 from './project-img/busines/busines2.png'
import busines3 from './project-img/busines/busines3.png'
import busines4 from './project-img/busines/busines4.png'
import busines5 from './project-img/busines/busines5.png'
import busines6 from './project-img/busines/busines6.png'
const Project = () => {
  return (
    <>
     <div className="main skills-main pb-5">
        <h1 className="technology-about p-3">
           Project-1
        </h1> 
        <div className="container">
          <div className="row">
             <div className="col-md-6 text-center mt-4">
            <h1> Divine  School</h1>   
             <div className="row">
                <div className='mt-4 col-md-6'>
                <ul className='d-block'>
                  <li className='divine-event'>Slider-Pages</li>
                  <li className='divine-event'>Kids-Academy</li>
                  <li className='divine-event'>Popular-Class</li>
                  <li className='divine-event'>School-Gallary</li>
                  <li className='divine-event'>Loading...</li>
                </ul>
              
              </div>
              <div className='col-md-6 mt-4'>
              <ul className='d-block'>
                  <li className='divine-event'>Map</li>
                  <li className='divine-event'>Event</li>
                  <li className='divine-event'>Fastival</li>
                  <li className='divine-event'>Activties</li>
                  <li className='divine-event'>Footer</li>
                </ul>
              </div>
             </div>
             </div>

             <div className="col-md-6 col-sm-12 text-center mt-4">
               <img className='devine-img p-2' src={devine1} alt="" />
               <img className='devine-img p-2' src={devine2} alt="" />
               <img className='devine-img p-2' src={devine3} alt="" />
               <img className='devine-img p-2' src={devine4} alt="" />
               <img className='devine-img p-2' src={devine5} alt="" />
               <img className='devine-img p-2' src={devine6} alt="" />
             </div>
          </div>
        </div>

        <h1 className="technology-about p-3">
           Project-2
        </h1> 

        <div className="container">
          <div className="row">

             <div className="col-md-6 text-center mt-4">
              <h1>Aarti Fashion </h1> 
              <div className="row">
                <div className='mt-4 col-md-6'>
                <ul className='d-block'>
                  <li className='aarti-event'>Slider-Pages</li>
                  <li className='aarti-event'>Navbar-Fixed</li>
                  <li className='aarti-event'>Featured-Products</li>
                  <li className='aarti-event'>Sall (off 70%)</li>
                  <li className='aarti-event'>New Arrivals</li>
                  <li className='aarti-event'>Footer</li>
                </ul>
              
              </div>
              <div className='col-md-6 mt-4'>
              <ul className='d-block'>
                  <li className='aarti-event'>Map</li>
                  <li className='aarti-event'>Kids Cothing</li>
                  <li className='aarti-event'>Online-Order</li>
                  <li className='aarti-event'>Support-24/7</li>
                  <li className='aarti-event'>Free-Shoppind</li>
                  <li className='aarti-event'>UpComing Seson..</li>
                </ul>
              </div>
             </div>
             </div>

             <div className="col-md-6 col-sm-12 text-center mt-4">
               <img className='devine-img p-2' src={aarti1} alt="" />
               <img className='devine-img p-2' src={aarti2} alt="" />
               <img className='devine-img p-2' src={aarti3} alt="" />
               <img className='devine-img p-2' src={aarti4} alt="" />
               <img className='devine-img p-2' src={aarti5} alt="" />
               <img className='devine-img p-2' src={aarti6} alt="" />
             </div>
          </div>
        </div>

        <h1 className="technology-about p-3">
           Project-3
        </h1> 

        <div className="container">
          <div className="row">
             <div className="col-md-6 text-center mt-4">
               <h1>Businex</h1>
               <div className="row">
                <div className='mt-4 col-md-6'>
                <ul className='d-block'>
                  <li className='businex-event'>Slider-Pages</li>
                  <li className='businex-event'>Provider-best</li>
                  <li className='businex-event'>Creative Team</li>
                  <li className='businex-event'>Best Service</li>
                  <li className='businex-event'>Footer</li>
                </ul>
              
              </div>
              <div className='col-md-6 mt-4'>
              <ul className='d-block'>
                 <li className='businex-event'>Online Support</li>
                 <li className='businex-event'>Testimonials</li>
                 <li className='businex-event'>Brand-Logo</li>
                 <li className='businex-event'>Happy-Clients</li>
                 <li className='businex-event'>Feedback</li>
                </ul>
              </div>
             </div>
             </div>

             <div className="col-md-6 col-sm-12 text-center mt-4">
               <img className='devine-img p-2' src={busines1} alt="" />
               <img className='devine-img p-2' src={busines2} alt="" />
               <img className='devine-img p-2' src={busines3} alt="" />
               <img className='devine-img p-2' src={busines4} alt="" />
               <img className='devine-img p-2' src={busines5} alt="" />
               <img className='devine-img p-2' src={busines6} alt="" />
             </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Project