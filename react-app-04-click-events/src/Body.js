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

    /**
     * Interceps click from button
     * @returns Array with names
     */
    const handleClick = () => {
        console.log("Hola console... ");
    }

    /**
     * Gives capacity to change name request.
     * @returns Array with names
     */
    const handleClickName = (nameSended) => {
        console.log(`Hola console...  + ${nameSended}`)
    }

    /**
     * Gives capacity to change name request.
     * @returns Array with names
     */
    const handleClickName3 = (event) => {
        console.log(event.target.innerText);
    }

    return (
        <body>
            <p onDoubleClick={handleClick}>
                <div>Lista de ... {handleNameChange()}</div>
            </p>
            <button onClick={handleClick}>Click test</button>
            <button onClick={() => handleClickName('Nacho')}>Click test</button>
            <button onClick={(event) => handleClickName3(event)}>Click test</button>
        </body>
    )
}

export default Body