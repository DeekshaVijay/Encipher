import React from "react";
function Admin(){
    const isAdmin = true;
    return(
        <div>
            {isAdmin && "Admin user"}
        </div>
    );
}
export default Admin;