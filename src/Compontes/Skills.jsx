import React from 'react'
import './Css/Home.css'
import htmllogo from './images/Skills-logo/html.png' 
import csslogo from './images/Skills-logo/css.png'
import javascriptlogo from './images/Skills-logo/javascript1.png'
import reactlogo from './images/Skills-logo/react.png'
import sasslogo from './images/Skills-logo/sass1.png'
import boostrap from './images/Skills-logo/boostrap.jpeg'
const Skills = () => {
  return (
    <>
    <div className="main skills-main">
        <h1 className="technology p-3">
           My Skills
        </h1> 
        <div className="container">
               <div className="row pb-5 mt-4 ">

             <div className="col-md-4 col-sm-6">
                <div className="card main">
                    <img className='logo-img w-25' src={htmllogo} alt="" />    
                   <h2 className='header-skills p-2'>HTML 5</h2>
                   <p>I Fix Things Now And Then, More Often Tweak HTML And Make Scripts to do Things.</p>
                </div>
             </div>
             <div className="col-md-4 col-sm-6">
                <div className="card main">
                    <img className='logo-img w-25' src={csslogo} alt="" />    
                   <h2 className='header-skills p-2'>CSS 3</h2>
                   <p>Intuitive Design Bappens When Current Knowledge is The Same As The Target Knowledge..</p>
                 </div>
             </div>
             <div className="col-md-4 col-sm-6">
                <div className="card main">
                    <img className='logo-img logo-img-javascript w-25' src={javascriptlogo} alt="" />    
                   <h2 className='header-skills-javascript p-2'>JAVASCRIPT</h2>
                  <p> Javascript is The World's Most MisunderStood Programming Language..</p>
                 </div>
             </div>
             

             <div className="col-md-4 col-sm-6 mt-4">
                <div className="card main">
                    <img className='logo-img w-25' src={reactlogo} alt="" />    
                   <h2 className='header-skills p-2'>REACT</h2>
                    <p>It is Not Necessary to React to Everything you Notice..</p>
                   </div>
             </div>
             <div className="col-md-4 col-sm-6 mt-4">
                <div className="card main">
                    <img className='logo-img w-25' src={sasslogo} alt="" />    
                   <h2 className='header-skills p-2'>SASS</h2>
                   <p>"I'm Not Always Sassy, But When I am, it's Because I've Had Enough."</p>
                </div>
             </div>
             <div className="col-md-4 col-sm-6 mt-4">
                <div className="card main">
                    <img className='logo-img w-25' src={boostrap} alt="" />    
                   <h2 className='header-skills-javascript p-2'>BOOSTRAP</h2>
                   <p>People Who Think They Know EveryThing are a Great Annoyance to Those of Us Who Do.. </p>
                </div>
             </div>
          </div>
        </div>
     
      </div>  

    </>
  )
}

export default Skills