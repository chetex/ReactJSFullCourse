import React from 'react'

const Header = () => {

    /**
     * Gives capacity to change name request.
     * @returns Array with names
     */
    const handleShopNameChange = () => {
        const shopArray = ['Carniceria list', 'Test list', 'Cosmeticos list'];
        const i = Math.floor(Math.random() * 4);

        return shopArray[i];
    };

    /**
     * Assing function to the variable header Style.
     */
    const headerStyles = {
        color: 'white'
    };

    return (
        <header style={headerStyles}>
            <h1>{handleShopNameChange()}</h1>
        </header>
    )
}

export default Header