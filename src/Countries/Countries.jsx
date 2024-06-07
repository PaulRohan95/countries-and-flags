import React, { useEffect, useState } from 'react';
import styles from './Countries.module.css';
import FlagCard from '../FlagCard/FlagCard';

function Countries() {
    
const API_URL = 'https://restcountries.com/v3.1/all';

const [countries, setCountries] = useState([]);

 useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data => setCountries(data)))
        .catch((error) => console.error("Error:", error));
    }, [])

    
  return (
    <div className={styles.wrapperCard}>
        {countries.map((country) => (
            <FlagCard 
                name={country.name.common} 
                flagImg={country.flags.png} 
                flagAltTxt={country.flags.alt} 
            />
        ))}
    </div>
  )
}

export default Countries;