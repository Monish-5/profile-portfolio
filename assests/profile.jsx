import React from 'react'
import ProfileCSS from './Profile.module.css';
import img1 from '../image/download.jpg';

function Profile(){
   
  return (
    <div className={ProfileCSS.profile}>
     
        <h1><span>I'm MONISH,</span> Fullstack developer.</h1>
       <h3> I am a fullstack developer with a proven ability to collaborate effectively with Junior developers.</h3>
       <h5>I am monish I Study Beachelor of Engeringing in electronic and communities engineering 2024 passout</h5>
        <div >
          <h3>SKILLS</h3>
          <ul className={ProfileCSS.profileAction}> 
           <div className={ProfileCSS.profileConnect}>JAVA</div>
           <div className={ProfileCSS.profileConnect}>HTML</div> 
            <div className={ProfileCSS.profileConnect}>CSS</div>
            <div className={ProfileCSS.profileConnect}>JAVA SCRIPT</div>
            <div className={ProfileCSS.profileConnect}>REACT JS</div>
            <div className={ProfileCSS.profileConnect}>SQL</div>
            </ul>
            <h3>Language</h3>
            <div className={ProfileCSS.profileConnect}>ENGLISH</div>
            <div className={ProfileCSS.profileConnect}>TAMIL</div>
        </div>
        <div className={ProfileCSS.username}><h1>User name :Monish </h1></div>
    </div>

    
  )
}

export default Profile
