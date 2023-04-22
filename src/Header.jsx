import React from 'react';

function Header() {
    return (
        <header style={
            { backgroundColor: '#333', color: '#fff', padding: '10px' }
        }>
            <h1 style={{ fontSize: '2rem' }}>My Awesome Site</h1>
        </header>
    );
}

export default Header;