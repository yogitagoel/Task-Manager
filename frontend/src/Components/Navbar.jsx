import React from 'react';

function NavBar(){
    const navStyle={
        display: "flex",
        height: "10%",
        width:"100%",
        justifyContent: "space-between",
        alignItems:"center",
        color:"white",
        backgroundColor:"blue",
        padding:"1%",
    }
    return(
        <div style={navstyle} className='NavBar'>
            <h2>Taskify</h2>
            <button>Logout</button>
        </div>
    )
}

export default NavBar;