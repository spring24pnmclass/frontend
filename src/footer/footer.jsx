import React from "react";
import './footer.css';
import insta from "../assets/instagramLogo.png";
import github from "../assets/githubicon.png";


const Footer=()=> {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4 className="footerName">To-Go Bot</h4>
                        <div>
                            <h2>For your <br></br>convenience!</h2>
                        </div>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Navigation</h4>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                        <a href="/">
                            <p>Home</p>
                        </a>
                        <a href="/order">
                            <p>Order</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4 className = "socials">Socials</h4>
                        <div className="socialmedia">
                            <p><a href="https://www.instagram.com/pnms24" target="_blank"><img src={insta} alt="Instagram"/></a></p>
                            <p><a href="https://github.com/spring24pnmclass/frontend" target="_blank"><img src={github} alt="GitHub"/></a></p>
                        </div>
                    </div>
                </div>
                <hr></hr>


                <div className="sb__footer-below">


                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} To-Go Bot. All rights reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
