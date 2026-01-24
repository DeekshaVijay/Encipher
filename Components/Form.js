import React, { useState } from "react";

function Form(){
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const clickSubmit = (e) =>{
        e.preventDefault();

        if(!name){
            setError("Username is Required");
            return;
        }

        setError("");
        alert("Form Submitted");
    };

    return(
        <form onSubmit={clickSubmit}>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Submit</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default Form;