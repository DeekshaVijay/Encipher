import React, { useState } from "react";

function Log() {
    const [login, setLogin] = useState(false);

    return (
        <>
            <button onClick={() => setLogin(!login)}>
                {login ? "Logout" : "Login"}
            </button>

            {login && <h2>LoggedIn</h2>}

        </>
    );
}

export default Log;