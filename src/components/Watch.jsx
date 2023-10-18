import React from "react";


export const Watch=({title,Category,Desc,Price})=>{
    return(
        <div className="sub">
            <h1>{title}</h1>
            <h3>{Category}</h3>
            <h1>{Price}</h1>
            <h4>{Desc}</h4>
            {/* <h4></h4> */}
        </div>
    );
}