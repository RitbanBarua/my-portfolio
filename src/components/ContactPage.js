import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function ContactPage() {

  // const submitContactForm = () => {
  //   let name = document.getElementById('input-name').value;
  //   let email = document.getElementById('input-email').value;
  //   let message = document.getElementById('input-msg').value;

  //   window.Email.send({
  //     Host: "smtp.elasticemail.com",
  //     Username: "8nm0som3ll@pirolsnet.com",
  //     Password: "1F06B07781702ACBA6F0AA03751F298F31AA",
  //     To: '8nm0som3ll@pirolsnet.com',
  //     From: "8nm0som3ll@pirolsnet.com",
  //     Subject: "Portfolio Contact Form Submission",
  //     Body: `Name: ${name},
  //     Email: ${email},
  //     Message:${message}`
  //   }).then(
  //     message => console.log(message)
  //   );
  // }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio_contact_form', 'portfolio_contact_temp', form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <section>
        <div className="container" id="contact-page-container">
          <h2 className="section-title reveal">Interested? Let's Talk!</h2>
          <div className="container reveal" id="contact-container">
            <div className='container reveal' id="contact-form-container">
              <h3>Contact Form</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-input-wrapper" id="contact-name-wrapper">
                  <input type="text" id='input-name' name="user_name" required />
                  <label htmlFor="input-name">Name</label>
                </div>
                <div className="contact-input-wrapper" id="contact-email-wrapper">
                  <input type="email" id='input-email' name="user_email" required />
                  <label htmlFor="input-email">Email</label>
                </div>
                <div className="contact-input-wrapper" id="contact-desc-wrapper">
                  <textarea id='input-msg' rows={1} name="message" required />
                  <label htmlFor='input-msg'>Message</label>
                </div>
                <input className='btn submit-btn' type="submit" value="Send" />
              </form>
            </div>
            {/* <div className="border-divider"></div> */}
            <div className='reveal' id="contact-other-container">
              <div id="contact-email">
                <i className="fa-regular fa-envelope fa-xl" style={{ color: "#ffffff" }}></i>
                <a href="mailto:ritbanbarua2@gmail.com">ritbanbarua2@gmail.com</a>
              </div>
              <div id="contact-linkedin">
                <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#ffffff" }}></i>
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


// // install @emailjs/browser
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
// const form = useRef();

// const sendEmail = (e) => {
// e.preventDefault();
// // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
// emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current,
// 'YOUR_PUBLIC_KEY')
//   .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });
// };

// return (
// <form ref={form} onSubmit={sendEmail}>
//   <label>Name</label>
//   <input type="text" name="user_name" />
//   <label>Email</label>
//   <input type="email" name="user_email" />
//   <label>Message</label>
//   <textarea name="message" />
//   <input type="submit" value="Send" />
// </form>
// );
// };
// https://stackoverflow.com/questions/71892144/how-to-send-form-data-to-email-in-react-js