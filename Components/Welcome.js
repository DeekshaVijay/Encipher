import React, { useState } from "react";


// 1
function Welcome() {
    const [Login, setLogin] = useState(true);
    return (
        <div>
            {Login ? "Welcome User" : "Please Login"}
        </div>
    )
}
export default Welcome;
