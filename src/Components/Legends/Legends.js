import React from 'react';
import './Legends.css'
const Legends = (props) => {
    const { name, founder, profession, salary, country, image } = props.legend;
    return (
        <div className="legend">
                <img src={image} alt="" />

                <div className="legend-details">
                    <p>Name: <span>{name}</span></p>
                    <p>Founder of <span>{founder}</span></p>
                    <p>Profession: <span>{profession}</span></p>
                    <p>Country: <span>{country}</span></p>
                    <p>Salary: <span>${salary}</span></p>
                </div>
                <button className="button" onClick={()=> props.click(props.legend)}>Hire</button>
        </div>
    );
};

export default Legends;