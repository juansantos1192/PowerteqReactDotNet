import React from 'react';

const Header = () => {

    const headerStyle = {

        width: '100%',
        backgroundColor: "steelblue",
        color: 'black',
        textAlign: 'center'
    }

    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>

    )
}
export default Header;