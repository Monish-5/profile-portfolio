import React from "react";
import ContactCSS from "./Contact.module.css";


function Contact() {
  return (
    <div className={ContactCSS.contact}>
      <div className={ContactCSS.contactTitle} >
        <h1>Contact me</h1>
      </div>

      <div className={ContactCSS.contactSection}>
      <div className={ContactCSS.contactSectionLeft}>
        <h1>Let's Connect:</h1>
        <p>
          I'm actively seeking new opportunities to contribute my skills and
          expertise to innovative projects. If you're looking for a full
          developer who is passionate about creating exceptional user
          experiences, I'd love to connect!
        </p>

        <div className={ContactCSS.contactDetails}>
        <div className={ContactCSS.contactDetail}>
        </div>
        <div className={ContactCSS.contactDetail}>
          
        </div>
        <div className={ContactCSS.contactDetail}>
          
        </div>
      </div>
      </div>
      
      

      <div className={ContactCSS.contactSectionRight}>
        <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your name" name="name" />
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder="Enter your email" name="email" />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" placeholder="Write your message here..." rows="8" id=""></textarea>
        <button type="submit" className={ContactCSS.contactsubmit}>Submit</button>
        </form>
       

      </div>
      </div>
    </div>
  );
}

export default Contact;
