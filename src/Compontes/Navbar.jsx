import React from 'react'
import '../Compontes/Css/Home.css'
import { Link } from 'react-router-dom'
import img from '../Compontes/images/logo-kam1.png'

const Navbar = () => {

  return (
    <>

      {/* <nav class="navbar navbar-expand-lg navbar-white ">
  <div class="container">
    <div className="col-md-4">
        <a class="navbar-brand" href="#"><img className='w-25' src={img}/></a>
    <button class="navbar-toggler" type="button"><span class="navbar-toggler-icon"></span> </button>
    </div>
    
     <div className="col-md-6">
         <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav navbar-hower p-1">
            
            <li class="nav-item p-2">
              <Link class="nav-link" to="/">Home</Link>
            </li>

            <li class="nav-item p-2">
              <Link class="nav-link" to= "/about">About</Link>
            </li> 
            <li class="nav-item p-2">
              <Link class="nav-link" to= "/project">Project</Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" to="/skills">My Skills</Link>
            </li>
            <div className="button-bg mt-2 text-center p-1">
           <Link to="/contact" className='contact-link'><i class="fa-regular fa-message p-1"></i><b> Contact Me  </b> </Link>
            </div>
           </ul> 
         </div>
     </div>

   

    </div>
     </nav>   */}

<nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo"><img className='w-25' src={img} alt="" /></label>
        <ul>
            <li><Link class="nav-link" to="/">Home</Link></li>
            <li><Link class="nav-link" to= "/about">About</Link></li>
            <li><Link class="nav-link" to= "/project">Project</Link></li>
            <li><Link class="nav-link" to="/skills">Skills</Link></li>
            <li>
              <div className="button-bg text-center p-1"><Link to="/contact" className='contact-link'>
                  <i class="fa-regular fa-message p-1"></i><b> Contact Me  </b> </Link>
              </div>
            </li>
        </ul>
    </nav>
    </>

  )
}

export default Navbar


