import React, { useRef } from 'react';
import './Join.scss';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g826c8e', 'template_1t3nf0o', form.current, 'zVc2eG80TaiUdK1Mg').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    return (
        <div className="Join" id="join-us">
            <div className="top-j">
                <hr />

                <div>
                    <span className="stroke-text">READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>

            <div className="bot-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" id="" placeholder="Enter your email" />
                    <button type="submit" className="btn">
                        Join Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Join;
