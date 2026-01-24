import React from "react";

function Fruit() {
    let fruit = ['Apple', 'Banana', 'Orange'];

    return (
        <div>
            <h2>Fruits</h2>
            {
                fruit.map((item , index) => (
                     <p key ={index}>{item}</p>
                ))
            }
        </div>
    );
}
export default Fruit;