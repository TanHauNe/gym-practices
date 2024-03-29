import React from 'react';
import './Reasons.scss';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>SOME REASONS</span>

                <div className='title-r'>
                    <span className="stroke-text">WHY </span>
                    <span>CHOSE US?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMATTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNER</span>
                    </div>
                </div>

                <div className='partner-r'>
                    <span>OUR </span>
                    <span className='stroke-text'>PARTNERS</span>
                </div>

                <div className="brands-r">
                    <img src={nike} alt="" />
                    <img src={nb} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Reasons;
