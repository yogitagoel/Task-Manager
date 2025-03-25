import React from 'react';

const NavBar = () => {
    const navStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        color:"white",
        backgroundColor:"blue",
        padding:"1%",
    }
    return(
        <div style={navStyle} className='NavBar'>
            <h2>Taskify</h2>
            <button>Logout</button>
        </div>
    )
}

export default NavBar;