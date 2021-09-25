import React, { useEffect, useState } from 'react';
import Legends from '../Legends/Legends';
import './Hire.css';
const Hire = () => {
    const [legends, setLegends] = useState([]);
    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/midul9797/my-portfolio/main/legends.json')
        .then(res => res.json())
        .then(data => setLegends(data))
    }, []);
    return (
        <div>
           {
               legends.map(legend => console.log(legend))
           } 
        </div>
    );
};

export default Hire;