import contact_arrow from "../assets/image/contact_arrow.png"
import contact_design from "../assets/image/contact_design.png"
import "../styles/comphonents-styles/contact.css"
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact(){
    const form = useRef(null);
    const [status, setStatus] = useState("");
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm(
        "service_zadl9vr", // Replace with your EmailJS Service ID
        "template_i0p4chm", // Replace with your EmailJS Template ID
        form.current,
        "B0rpYpTv_oIPG1xti" // Replace with your EmailJS Public Key
      ).then(
        (response) => {
          //console.log("Email sent successfully!", response);
          setStatus("You will get a response mail by 2 hour!");
          form.current.reset();
        },
        (error) => {
          //console.error("Error sending email:", error);
          setStatus("Failed to send message.");
        }
      );
    };
    return(
        <>
         
            <section className="contact">
                <div className="contianer">
                    <div className="contact_wrapper">
                        <h2>Contact Form</h2>
                        <div className="contact_form">
                            <form className="homeForm" ref={form} onSubmit={sendEmail}>  
                                    <div className="field">
                                        <label htmlFor="name">Full Name:</label>
                                        <input type="text" id="name" name="name" placeholder="enter your name" required/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="enter your email" required/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="message">Message:</label>
                                        <textarea id="message" name="message" placeholder="enter your message" required></textarea>
                                    </div>
                                    <input type="submit" className="submit"></input>
                                    {status && <p style={{padding:'10px'}}>{status}</p>}
                                </form>

                                <img src={contact_arrow}alt=""/>
                                <img src={contact_design} alt=""/>
                       </div> 
                    </div>
                </div>
            </section>
        </>
    )
}