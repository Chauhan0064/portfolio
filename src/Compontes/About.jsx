// import React from 'react'
// import './Css/Home.css'
// import devine1 from './project-img/devine/devine1.png'
// import devine2 from './project-img/devine/devine2.png'
// import devine3 from './project-img/devine/devine3.png'
// import devine4 from './project-img/devine/devine4.png'
// import devine5 from './project-img/devine/devine5.png'
// import devine6 from './project-img/devine/devine6.png'

// import aarti1 from './project-img/aarti/aarti1.png'
// import aarti2 from './project-img/aarti/aarti2.png'
// import aarti3 from './project-img/aarti/aarti3.png'
// import aarti4 from './project-img/aarti/aarti4.png'
// import aarti5 from './project-img/aarti/aarti5.png'
// import aarti6 from './project-img/aarti/aarti6.png'

// import busines1 from './project-img/busines/busines1.png'
// import busines2 from './project-img/busines/busines2.png'
// import busines3 from './project-img/busines/busines3.png'
// import busines4 from './project-img/busines/busines4.png'
// import busines5 from './project-img/busines/busines5.png'
// import busines6 from './project-img/busines/busines6.png'
// const About = () => {
//   return (
//     <>
//      <div className="main pb-5">
//         <h1 className="technology-about p-3">
//            Project-1
//         </h1> 
//         <div className="container">
//           <div className="row">
//              <div className="col-md-6 mt-4">
//             <h1> Devine Scools</h1>  
//              </div>
//              <div className="col-md-6 mt-4">
//                <img className='devine-img p-2' src={devine1} alt="" />
//                <img className='devine-img p-2' src={devine2} alt="" />
//                <img className='devine-img p-2' src={devine3} alt="" />
//                <img className='devine-img p-2' src={devine4} alt="" />
//                <img className='devine-img p-2' src={devine5} alt="" />
//                <img className='devine-img p-2' src={devine6} alt="" />
//              </div>
//           </div>
//         </div>

//         <h1 className="technology-about p-3">
//            Project-2
//         </h1> 
//         <div className="container">
//           <div className="row">
//              <div className="col-md-6 mt-4">
//               <h1>Aarti Fashion </h1> 
//              </div>
//              <div className="col-md-6 mt-4">
//                <img className='devine-img p-2' src={aarti1} alt="" />
//                <img className='devine-img p-2' src={aarti2} alt="" />
//                <img className='devine-img p-2' src={aarti3} alt="" />
//                <img className='devine-img p-2' src={aarti4} alt="" />
//                <img className='devine-img p-2' src={aarti5} alt="" />
//                <img className='devine-img p-2' src={aarti6} alt="" />
//              </div>
//           </div>
//         </div>

//         <h1 className="technology-about p-3">
//            Project-3
//         </h1> 
//         <div className="container">
//           <div className="row">
//              <div className="col-md-6 mt-4">
//                <h1>Businex</h1>
//              </div>
//              <div className="col-md-6 mt-4">
//                <img className='devine-img p-2' src={busines1} alt="" />
//                <img className='devine-img p-2' src={busines2} alt="" />
//                <img className='devine-img p-2' src={busines3} alt="" />
//                <img className='devine-img p-2' src={busines4} alt="" />
//                <img className='devine-img p-2' src={busines5} alt="" />
//                <img className='devine-img p-2' src={busines6} alt="" />
//              </div>
//           </div>
//         </div>
//      </div>
//     </>
//   )
// }

// export default About


import React from 'react'
import './Css/Home.css'
import linkdin from './images/logo/linkdin.webp'
import facebook from './images/logo/Facebook.png'
import instgram from './images/logo/instgram.avif'
import twiiter from './images/logo/twiiter.png'
import kamal from './images/Pic1.jpg'
const About = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12 col-12">
              <img src={kamal} className='about-kamal-img' alt="" srcset="" />
            </div>
            <div className="col-md-6 about-style"> 
                 <h1>About Me</h1>
                <h6 className='about-name'>Hi,My Name Is Kamal</h6><br/>
              <div className='about-na-em'>
                <div className="about-button-bg text-center">Mr. KamalKumar N Chauhan </div>
                <div className="about-button-bg text-center mt-3">darjikamal558@gmail.com </div>
                <div className="about-button-bg text-center mt-3">+91 9173097530</div>
                <div className="about-button-bg text-center mt-3">At.Chandisar</div> 
              
              </div>
                 

                <div className='text-center mt-4'>
                My frontend development skills enable me to transform design concepts into functional and visually appealing websites and web applications. I am passionate about crafting seamless user experiences through clean code and innovative solutions.               <div/><br/> 
        
               <ol className='d-flex justify-content-between '>

                 {/* <div className="">
                  <li>kamal</li>
                  <li>kamal</li>
                 </div>
                 <div className="about-list">
                  <li>kamal</li>
                  <li>kamal</li>
                 </div> */}

               </ol>
               
               <div className='logo-sol'>
                   <img className='about-linkdin-logo' src={linkdin} alt="" />
                  <img className='about-facebook-logo m-2' src={facebook} alt="" />
                  <img className='about-instgram-logo m-2' src={instgram} alt="" />
                  <img className='about-twiiter-logo m-2' src={twiiter} alt="" />
               </div>
               
               </div>

             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About