import React from 'react'

const Header = () => {

    /**
     * Gives capacity to change name request and give more detail.
     * @returns Array with names
     */
    const handleShopNameChange = () => {
        const shopArray = ['Carniceria list', 'Pescaderia list', 'Cosmeticos list'];
        const i = Math.floor(Math.random() * 4);

        return shopArray[i];
    }

    return (
        <h1>{handleShopNameChange()}</h1>
    )
}

export default Header