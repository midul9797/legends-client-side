// ----------------------------
// |   Component: Legends     |
// ----------------------------


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import './Legends.css'
const Legends = (props) => {
    //Destructuring
    const { name, founder, profession, salary, country, image, facebook, instagram } = props.legend;
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
            <button className="button" onClick={()=> props.click(props.legend)}><FontAwesomeIcon icon={faCheck}/>   Hire</button>
            <div className="social">
                <li><a href={facebook} target="_blank" rel="noreferrer" ><FaFacebookSquare/></a></li>
                <li><a href={instagram} target="_blank" rel="noreferrer"><FaInstagramSquare/></a></li>
            </div>
        </div>
    );
};

export default Legends;