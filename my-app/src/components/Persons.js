import React from 'react'


const Persons = ({filterPerson, deletePerson}) => {

    
    return(
        <div>
                <ul><div>
                    {filterPerson.map(person=><li key={person.id}>{person.name} {person.number}&nbsp;<button onClick={deletePerson} key={person.id} name={person.id}>delete</button></li>)}
                    </div>
                </ul>
        </div>
    )

}

export default Persons