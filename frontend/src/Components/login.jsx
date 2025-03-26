import React from 'react';

const SignUp = () => {
    const style = {
        display:"flex",
        justifyContent:"center",
        alignitems:"center",
        height:"20rem",
        width:"40rem",
    }
    return(
        <div style={style}>
            <h1>Welcome to Taskify</h1>
            <h2>Signup</h2>
            <input placeholder='Username' type='email'>Username</input>
            <input placeholder='Password' type='password'>Password</input>
            <p>Already Have account?<link href='Login'>SignIn</link></p>
        </div>
    )
}

export default SignUp;