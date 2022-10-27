import React from 'react';
import './Footer.scss';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />

            <div className="footer">
                <div className="social">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />
                </div>

                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur footer-blur"></div>
            <div className="blur footer-blur"></div>
        </div>
    );
};

export default Footer;
