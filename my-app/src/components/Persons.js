import React from 'react'


const Persons = ({filterPerson}) => {
    return(
        <div>
                <ul>
                    {filterPerson.map(person=><li key={person.name}>{person.name} {person.number}</li>)}
                </ul>
        </div>
    )

}

export default Persons