import React from "react";
import './Footer.css';
import insta from "../assets/instagramLogo.png";
import discord from "../assets/transparentDiscord.png";

const Footer=()=> {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>ToGoBot</h4>
                        <div>
                            <h2>Hello, This is text to fill out</h2>
                        </div>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Pages</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/">
                            <p>Home</p>
                        </a>
                        <a href="/order">
                            <p>Order</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Socials</h4>
                        <div className="socialmedia">
                        <p><a href="https://www.instagram.com/pnms24" target="_blank"><img src={insta} alt="Instagram"/></a></p>

                        <p><a href="https://www.discord.com" target="_blank"><img src={discord} alt="Discord"/></a></p>

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
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;