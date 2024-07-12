import React from 'react'
import '../Compontes/Css/Home.css'
import kamal from "../Compontes/images/kamal1.png"
import htmllogo from './images/Skills-logo/html.png' 
import csslogo from './images/Skills-logo/css.png'
import javascriptlogo from './images/Skills-logo/javascript1.png'
import reactlogo from './images/Skills-logo/react.png'

const Main = () => {
  return (
    <>
    <div className="container-fluid main">
     <div className="row ">
    <div className="col-md-6 title">
      <div className="main-div">
        <h3 className='hello'>Hello,</h3>
        <b> <h1 className='name-text'>I'm <span>Kamal</span><br/> FrontEnd Developer </h1> </b> 
       <p className='pargraf-main'>Being a web developer is always difficult. It’s a creative job, but one where usually you aren’t the primary stakeholder.</p>
       <div className="button-bg text-center p-1 mt-4"><i class="fa-solid fa-bag-shopping"></i> <b>Hire Me</b> </div>
        <div className='p-3 logo-main-div mt-3'>
          <img className='logo-main me-3' src={htmllogo} alt="" />
          <img className='logo-main me-3' src={csslogo} alt="" />
          <img className='logo-main me-3' src={javascriptlogo} alt="" />
          <img className='logo-main' src={reactlogo} alt="" />
        </div>
       </div>
    </div>

    <div className="col-md-6 title">
      <div className="name">
          <img className='kamal-img' src={kamal} alt="kamal"  />
      </div>
    </div>
    </div>
    </div>
   
    </>
  )
}

export default Main