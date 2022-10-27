import React from 'react';
import './Plans.scss';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur"></div>
            <div className="blur blur-r"></div>
            
            <div className="plans-header">
                <span>READY TO START</span>
                <span className="stroke-text">YOUR JOURNEY</span>
                <span>NOW WITH US</span>
            </div>

            <div className="plans-course">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}

                        <span>{plan.name}</span>
                        <span><span className='stroke-text'>$ </span>{plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <a href="#home">See more benefits</a>
                        </div>

                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
