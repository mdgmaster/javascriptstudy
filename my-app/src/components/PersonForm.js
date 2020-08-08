import React from 'react'

const PersonForm = ({addPerson, newName, handleOnChange, newNumber, handleNumberChange}) => {
    return(
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
        )
}
export default PersonForm