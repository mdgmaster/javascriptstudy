import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import NotificationPerson from './components/NotificationPerson'
import Notification from './components/Notification'
import personsService from './services/persons'



const App = () => {
    const [persons, setPersons] = useState([])
const [ newName, setNewName ] = useState('')
const [ newNumber, setNewNumber ] = useState('')
const [ filterPerson, setNewFilter ] = useState([])
const [ filterWord, setFilterWord] = useState('')
const [notification, setNotification] = useState(null)
const [errorMessage, setErrorMessage] = useState(null)

// initialization
useEffect(()=>{
    personsService.getAll()
    .then(initialPersons => {
        setPersons(initialPersons)
        setNewFilter(initialPersons)
    })
},[])

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

// Delete module 

const deletePerson = (event) => {
    const deletedValue = event.target.name
    personsService.deletePerson(deletedValue)
    .then(deletedNumber => {
        setPersons(persons.filter(person => person.id.toString() !== deletedValue))
        setNewFilter(filterPerson.filter(person => person.id.toString() !== deletedValue))

    }).catch(error => {
        const user = getName(deletedValue)
        setErrorMessage(
            `Information of '${user[0].name}' has already been removed from server`
        )
        setTimeout(()=>{
            setErrorMessage(null)
        },5000)
        setPersons(persons.filter(person => person.id.toString() !== deletedValue))
        setNewFilter(filterPerson.filter(person=>person.id.toString() !== deletedValue))

    })

    setNewName('')
    setNewNumber('')
    setFilterWord('')

}

const getName = (value) => {
    const result = persons.filter(person => person.id.toString() === value)
    return result
}

// Forms 

const addPerson = (event) => {
    event.preventDefault()
    if(!checkValue(newName)) {   
        const newPerson = {name: newName, number: newNumber} 
        personsService.create(newPerson)
            .then(updatedPersons => {
                setPersons(persons.concat(updatedPersons))
                setNewFilter(persons.concat(updatedPersons))

                setNotification(
                    `User '${newName}' has been successfully added`
                )
                setTimeout(()=>{
                    setNotification(null)
                },5000)



            })
      }else{
        const newPerson = {name: newName, number: newNumber}
        let id = 0
        persons.forEach((item) => {if(item.name === newName) id = item.id })
        if(window.confirm(`¿Quieres actualizar el número de ${newName}?`)){
            personsService.update(id, newPerson)
            .then(updatedPersons => {
                personsService.getAll()
                    .then(initialPersons => {
                        setPersons(initialPersons)
                        setNewFilter(initialPersons)
    })
            })
                
        }
    }
        
        setNewName('')
        setNewNumber('')
        setFilterWord('')
    
}

// Functions 

const checkValue = (value) =>{
    let result = false
    persons.forEach((item)=>{ if(item.name === value) result = true })
    return result 
}

return (
    <div>
    <h2>Phonebook</h2>
    <NotificationPerson message={notification} />
    <Notification message={errorMessage} />
    <Filter filterWord={filterWord} handleFilter={handleFilter} />

    <h2>Add new</h2>
    <PersonForm addPerson={addPerson} newName={newName} handleOnChange={handleOnChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
    
    <h2>Numbers</h2>
    <Persons filterPerson={filterPerson} deletePerson={deletePerson} />

    </div>
)
}

export default App