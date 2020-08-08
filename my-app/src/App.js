import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
      ])
const [ newName, setNewName ] = useState('')
const [ newNumber, setNewNumber ] = useState('')
const [ filterPerson, setNewFilter ] = useState(persons)
const [ filterWord, setFilterWord] = useState('')
// handlers


const handleFilter = (event) => {
    setNewFilter(persons.filter(person => person.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1))
    setFilterWord(event.target.value)
}

const handleOnChange = (event) => {
    setNewName(event.target.value)
}

const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
}


// Forms 

const addPerson = (event) => {
    event.preventDefault()
    if(!checkValue(newName)) {
        const newPerson = {name: newName, number: newNumber}
        setPersons(persons.concat(newPerson))
        setNewFilter(persons.concat(newPerson).filter(person => person.name.toLowerCase().indexOf("") !== -1))
    }else{
        window.alert(`ERROR: El nombre ${newName} ya ha sido usado`);
    }
        
        setNewName('')
        setNewNumber('')
        setFilterWord('')
    
}

// Functions 

const checkValue = (value) =>{
    let result = false
    persons.forEach((item)=> item.name === value ? result = true : result = false)
    return result 
}

return (
    <div>
    <h2>Phonebook</h2>
    <Filter filterWord={filterWord} handleFilter={handleFilter} />

    <h2>Add new</h2>
    <PersonForm addPerson={addPerson} newName={newName} handleOnChange={handleOnChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
    
    <h2>Numbers</h2>
    <Persons filterPerson={filterPerson} />

    </div>
)
}

export default App