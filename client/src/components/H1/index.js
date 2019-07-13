import React from "react";

//export function H1({ tileId, passedOnClick, children }) {
export function H1( props ) {
    if(props.tileId % 2 === 0) {
        return(
            <button style={{width : "50px", color:"white", height: "50px", margin: "5px 5px 5px 5px",  backgroundColor:"black"}} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
          );        
    } else {
        return(
            <button style={{width : "50px", color:"white", height: "50px", margin: "5px 5px 5px 5px",  backgroundColor:"red", padding: "0px"}} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
          );        
    }
}
