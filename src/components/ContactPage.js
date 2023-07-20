import React from 'react'

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="container" id="contact-page-container">
          <h2 className="section-title reveal">Interested? Let's Talk!</h2>
          <div className="container reveal" id="contact-container">
            {/* <span>or you can contact via email: <a href="mailto:ritbanbarua2@gmail.com" target="_top">ritbanbarua2@gmail.com</a></span> */}
            <div className='container' id="contact-form-container">
              <h3>Contact Form</h3>
              <form action="mailto:ritbanbarua2@gmail.com" method="post" enctype="text/plain">
                <label>Name</label>
                <input type="text" placeholder='Enter Name' name="user_name" />
                <label>Email</label>
                <input type="email" placeholder='Enter Email' name="user_email" />
                <label>Message</label>
                <textarea placeholder='Enter Your Message' name="message" />
                <input type="submit" value="Send" />
              </form>
            </div>
            <div id="contact-other-container">
              <div id="contact-email">
                <i class="fa-regular fa-envelope fa-xl" style={{color: "#ffffff"}}></i>
                <a href="mailto:ritbanbarua2@gmail.com">ritbanbarua2@gmail.com</a>
              </div>
              <div id="contact-linkedin">
                <i class="fa-brands fa-linkedin fa-xl" style={{color: "#ffffff"}}></i>
                <a href="mailto:ritbanbarua2@gmail.com">ritbanbarua2@gmail.com</a>
              </div>
            </div>
          </div>
          {/* <form action="mailto:ritbanbarua2@gmail.com" method="post" enctype="text/plain">
            Student Name:<br /><input type="text" name="sname" /> <br />
            Student Subject:<br /><input type="text" name="ssubject" /><br />
            <input type="submit" value="Send" />
          </form> */}
        </div>
      </section>
    </>
  )
}
