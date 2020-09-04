import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pais from './components/Pais'

const Country = () =>{
    
    const [results, setResults] = useState([])
    const [countries, setCountries] = useState([])
    

    const changeHandler = (event) =>{
        setResults(event.target.value)
        setResults(countries.filter(country => country.name.toLowerCase().indexOf(event.target.value.toLowerCase())!== -1))
    }

    useEffect(() =>{
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            setCountries(response.data)
        })
    },[])

    return(
        <div>
            Find Countries: <input onChange={changeHandler} />
            <Pais countries={results} />
            
            
        </div>
    )
}


export default Country