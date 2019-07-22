import React from "react";

//export function H1({ tileId, passedOnClick, children }) {
export function H1( props ) {
    if(props.tileId % 2 === 0) {
        return(
            <button style={{ width:"5em", color:"white", margin: "5px 5px 5px 5px",  backgroundColor:"black", padding: "0px"}} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
          );        
    } else {
        return(
            <button style={{ width:"5em", color:"white", margin: "5px 5px 5px 5px",  backgroundColor:"red", padding: "0px"}} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
          );        
    }
}

export function H1G( props ) {
    return(
        <button style={{ borderColor:"orange", width:"5em", color:"white", margin: "5px 5px 5px 5px",  backgroundColor:"green", padding: "0px"}} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
        );        
}
