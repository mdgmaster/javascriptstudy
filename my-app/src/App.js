import React, { useState } from 'react'

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
// handlers


const handleFilter = (event) => {
    setNewFilter(persons.filter(person => person.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1))
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
        
    }else{
        window.alert(`ERROR: El nombre ${newName} ya ha sido usado`);
    }
        
        setNewName('')
        setNewNumber('')
    
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
            filter shown with: <input onChange={handleFilter} />

    <h2>Add new</h2>
    <form onSubmit={addPerson}>
        <div>
            name: <input value={newName} onChange={handleOnChange}/>
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} /> 
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    <h2>Numbers</h2>
    <ul>
        {filterPerson.map(person=><li key={person.name}>{person.name} {person.number}</li>)}
    </ul>
    </div>
)
}

export default App