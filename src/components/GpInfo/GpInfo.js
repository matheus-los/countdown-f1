import React from 'react';
import './GpInfo.css';

const GpInfo = ({ info }) => {
    return (
        <div className="info-container">
            <h2>{info.title}</h2>
            <div className="info-text">
                <p>{info.text}</p><br/>
            </div>
            <img
                src={info.image}
                alt={info.title}
                className="gp-info-img"
            />
        </div>
    );
};

export default GpInfo;