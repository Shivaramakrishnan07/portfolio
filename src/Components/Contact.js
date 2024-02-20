import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import BusinessIcon from '@mui/icons-material/Business';
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact() {
  function handleSubmit(e){
    e.preventDefault();
    emailjs.sendForm('service_z8y5h5v', 'template_3qphqma', e.target, 'VEqF9KAiE3cTcNCoe')
    .then((result)=>{
      window.location.reload()
    },(error)=>{
      console.log(error.text);
    });
    alert("Thank you! We'll contact you soon...")
  }
  return (
    <div className='contact'>
        <div className='container'>
          <div className='content'>
            <div className='col-2'>
              <div className='col2-container'>
                <div className='col2-title'>
                  <h2>Contact:</h2>
                </div>
                <div className='col2-content'>
                  <div className='col2-item'>
                    <PhoneIcon/><h4>Phone: +916381989834</h4>
                  </div>
                  <div className='col2-item'>
                    <SendIcon/>
                  <h4>Email: imbiju08@gmail.com</h4>
                  </div>
                  <div className='col2-item'>
                    <BusinessIcon/>
                  <h4>Address: 101, ABCD Apartments,<br/> 2nd Cross Street, Madurai</h4>
                  </div>
                </div>
              </div>
              {/* <div className='contact-container'>
                <div className='contact-icon-items'>
                  <EmailIcon fontSize='large' className='contact-icons'/>
                </div>
                <div className='contact-icon-items'>
                  <LinkedInIcon fontSize='large' className='contact-icons'/>
                </div>
                <div className='contact-icon-items'>
                  <InstagramIcon fontSize='large' className='contact-icons'/>
                </div>
                <div className='contact-icon-items'>
                  <label className='contact-icons-label'>Email</label>
                  </div>
                  <div className='contact-icon-items'>
                  <label className='contact-icons-label'>LinkedIn</label>
                  </div>
                  <div className='contact-icon-items'>
                  <label className='contact-icons-label'>Instagram</label>
                  </div>
                </div> */}
            </div>
            <div className='col-1'>
              <div className='col1-container'>
                <form className='form-container' onSubmit={handleSubmit}>
                  <h1 className='form-text'>Get in Touch...</h1>
                  <input type='text' placeholder='Name' className='line-box' name='name' required/>
                  <input type='text' placeholder='Email' className='line-box' name='email' required/>
                  <select className='line-box' name='role' required>
                    <option>Current role</option>
                    <option>Student</option>
                    <option>Working Professional</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder='Message' className='para-box' name='message' required />
                  <button type='submit' id='submit-button'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact