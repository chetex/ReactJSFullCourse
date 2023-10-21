import React from 'react'

const Body = () => {
    /**
     * Gives capacity to change name request.
     * @returns Array with names
     */
    const handleNameChange = () => {
        const nameArray = ['Leo', 'Vega', 'Mama', 'Papa'];
        const i = Math.floor(Math.random() * 4);

        return nameArray[i];
    }

    return (
        <div>Lista de ... {handleNameChange()}</div>
    )
}

export default Body