import React from "react";

function Detail(){
    let detail = [{name:'Deeksha', id:1}, {name:"Deepika", id:2},{name:"Arya", id:3}];

    return(
        <div>
            <h2>Student Data</h2>
            <ol>
                {
                    detail.map((details,index)=>(
                      <li key={index}>{details.name}</li>
                    ))
                }
            </ol>
        </div>
    )
}
export default Detail;