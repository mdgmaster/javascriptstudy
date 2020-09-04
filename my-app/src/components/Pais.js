import React, { useState } from 'react'
import Weather from './Weather'

const Pais = ({countries, search}) =>{
    
    const [soloCountry, setSoloCountry] = useState('')

    const checkLength = (paises) =>{

        if(countries.length === 1) { return true }
        else { return false  }
    }

    const showCountry = (event) =>{
        setSoloCountry(countries.filter(country => country.name.indexOf(event.target.value) !== -1))
    }

    const resetButton = (event) =>{
        setSoloCountry('')
    }

    if (checkLength(countries) || (soloCountry !== '') ){

        if (soloCountry !== ''){
            countries = soloCountry
        }
        
        return(
            <div>
                <h2>{countries[0].name}</h2>
                <p>
                    Capital: {countries[0].capital}<br/>
                    Population: {countries[0].population}<br/>
                </p>
                <h3>Languages</h3>
                <ul>
                    {countries[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
                </ul>
                <img src={countries[0].flag} alt="flag" width="150" /><br/>
                <button type="submit" onClick={resetButton} >back</button>
                <Weather country={countries[0].capital} />
            </div>
        )
    }else{
        return(
            <div>
                <ul>
                    {countries.map(country =><li>{country.name}<button type="submit" value={country.name} onClick={showCountry}>show</button></li>)}
                </ul>
            </div>
        )
    }
}


export default Pais