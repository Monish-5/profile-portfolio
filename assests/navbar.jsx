import React from 'react'
import NavbarCSS from "./Navbar.module.css"
import { Link,Outlet } from 'react-router-dom'


function Navbar(){
  return (<>
  
    <div className={NavbarCSS.nav}>
     
        <h1>MONISH</h1>
        <ul className={NavbarCSS.navMenu}>
            <li><Link to="/" className={NavbarCSS.link}>Home</Link></li>
            <li> <Link to="/profile" className={NavbarCSS.link}> Profile  </Link></li>
            <li> <Link to="/about" className={NavbarCSS.link}>About me</Link> </li>
            <li> <Link to='/contact' className={NavbarCSS.link}>Contact</Link> </li>
        </ul>
        <div className={NavbarCSS.navConnect}>91+ 6379751242</div>
        <div className={NavbarCSS.navConnect}>monishmuthu511@gmail.com</div>
        <Outlet/>
    </div>
    
    
    <div className={NavbarCSS.navbar} >
      
      <p> <h3>Home</h3>  
       <h1><span>I'm MONISH,</span> Fullstack developer.</h1>
           
             I am monish I Study Beachelor of Engeringing in electronic and communities engineering in hindusthan college of Engeringing and technology in Coimbatore. <br></br>Now I am search for job in full stack development<br></br>
            <br></br>
            <br></br>
     Desgend by <span>MONISH</span></p>
    
        </div>
        
    
    

    </>
  )
}

export default Navbar
