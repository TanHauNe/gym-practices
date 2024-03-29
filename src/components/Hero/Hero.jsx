import React from 'react';
import Header from '../Header/Header';
import './Hero.scss';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero">
            <div className="blur"></div>

            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '157px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">SHAPE </span>YOUR
                    </div>
                    <div>IDEAL BODY</div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your live to fullest
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>EXPERT COACHS</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>Heart rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back}
                    alt=""
                    className="hero_image_back"
                />

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
