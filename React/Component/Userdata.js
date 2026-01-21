import React from "react";

function Userdata({ user }) {
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.mail}</p>
        </div>
    )
}

export default Userdata;