import React from 'react'
import { useState } from 'react';

/**
 * Hooks are special functions that are only available while React is rendering (which we’ll get into in more detail on the next page). 
 * They let you “hook into” different React features.
 */
const Body = () => {
    /**
     * Set userState to set name by click
     * In React, useState, as well as any other function starting with ”use”, is called a Hook.
     */
    const [ name, setClickName] = useState('Nacho');
    const [ count, setCount] = useState(0);

    /**
     * Gives capacity to change name request.
     * @returns Array with names
     */
    const handleNameChange = () => {
        const nameArray = ['Leo', 'Vega', 'Mama', 'Papa'];
        const i = Math.floor(Math.random() * 4);
        setClickName(nameArray[i]);
    }

    /**
     * Update count using useState
     */
    const updateCount = () => {
        setCount(count + 1);
        console.log("Count is... " + count);
    }

    /**
     * Gives capacity to change name request.
     * @returns Array with names
     */
    const handleClickName = (nameSended) => {
        console.log(`Hola console...  + ${nameSended}`)
    }

    return (
        <body>
            <p>
                <div>Lista de ... {name}</div>
            </p>
            <p><button onClick={handleNameChange}>Change name</button></p>
            <button onClick={updateCount}>Update count</button>
            <button onClick={(event) => handleClickName(event)}>Click test</button>
        </body>
    )
}

export default Body


/**
 * LEARNING PATH
 * 
 * REACT-APP-05-USE-STATE-HOOK
 * 
 *  > The only argument to useState is the initial value of your state variable. 
 * In this example, the index’s initial value is set to 0 with useState(0).
 * 
 */