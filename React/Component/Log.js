import React from "react";

function Log(props){
    return(
        <p>{props.isLog ? "Logged In" : "Logged Out"}</p>
    );
}
export default Log;