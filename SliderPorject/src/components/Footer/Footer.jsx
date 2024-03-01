import React from 'react'
import '/src/css/footer.css'
import { FaRegEnvelope } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <img src="logo.png" className='logo' />
                    <p>subscribe tuturials youtube chanel to watch more videos on website</p>
                </div>
                <div className="col">
                    <h3>Office <div className="underline"><span></span></div></h3>
                    <p>ITPL POAD</p>
                    <p>whitefield</p>
                    <p>karnataka,pın 560066, India</p>
                    <p className='email-id'>hasçelik@gmail.com</p>
                    <h4>+90 - 05528956365</h4>
                </div>
                <div className="col">
                    <h3>Links <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">services</a></li>
                        <li><a href="">about us</a></li>
                        <li><a href="">features</a></li>
                        <li><a href="">contacts</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Wesletter <div className="underline"><span></span></div></h3>
                    <div className="social-icons">
                        <a href="#" className='fc'><i><FaFacebookF /></i></a>
                        <a href="#"className='tw'><i><FaXTwitter /></i></a>
                        <a href="#" className='wp'><i ><FaWhatsapp /></i></a>
                        <a href="#" className='in'><i ><FaInstagram /></i></a>
                    </div>
                </div>

            </div>
            <hr />
            <p className='copyright'>footer tutorials 2021 - all right reserved</p>
        </footer>

    )
}

export default Footer