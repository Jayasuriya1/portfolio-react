import React from "react";
import { ContactUs } from "./contactform";

export default function ContactMe(){
    return(
        <div className="container contactme" id="contact-section">
            <div className="contactme-title">
            <h2 className="hr-lines hr-lines-3">REACH OUT ME</h2>
            
            </div>
            <div >
            <ContactUs/>
            </div>
            <div className="link">
                <div className="contact-link-container">
                    <div className="round">
                        <div className="round-2">
                            <i class='bx bxl-instagram bx-lg icon insta-icon' ></i>
                        </div>
                    </div>
                    <div className="links-div2">
                        <p className="link-name">Instagram</p>
                        <p className="links-para"><a className="links" href="https://www.instagram.com/iam.jayasuriya/" target="_blank">iam.jayasuriya</a></p>
                    </div>
                </div>
                <div className="contact-link-container">
                    <div className="round">
                        <div className="round-2">
                        <i class='bx bxl-gmail bx-lg icon insta-icon' ></i>
                        </div>
                    </div>
                    <div className="links-div2">
                        <p className="link-name">Email</p>
                        <p className="links-para"><a style={{fontSize:"11px"}} className="links" href="mailto:jaya1999suriya1@gmail.com" target="_blank">jaya1999suriya1@gmail.com</a></p>
                    </div>
                </div>
                <div className="contact-link-container">
                    <div className="round">
                        <div className="round-2">
                        <i class='bx bxl-linkedin-square bx-lg icon insta-icon'></i>
                        </div>
                    </div>
                    <div className="links-div2">
                        <p className="link-name">Linkedin</p>
                        <p className="links-para"><a className="links" href="https://www.linkedin.com/in/jaya-suriya-742bb0168/" target="_blank">jayasuriya</a></p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}