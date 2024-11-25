import contact_arrow from "../assets/image/contact_arrow.png"
import contact_design from "../assets/image/contact_design.png"
import "../styles/comphonents-styles/contact.css"

export default function Contact(){
    return(
        <>
            <section className="contact">
                <div className="contianer">
                    <div className="contact_wrapper">
                        <h2>Contact Form</h2>
                        <div className="contact_form">
                            <form action="#" className="homeForm">  
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