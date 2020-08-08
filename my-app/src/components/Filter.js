import React from 'react'

const Filter = ({filterWord, handleFilter}) => {
    return(
        <div>
            filter shown with: <input value={filterWord} onChange={handleFilter} />
        </div>
    )
}

export default Filter 