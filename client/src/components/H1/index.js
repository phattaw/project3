import React from "react";

//export function H1({ tileId, passedOnClick, children }) {
export function H1( props ) {
    if(props.tileId % 2 === 0) {
        return(
            <button style={{width : "60px", color:"white", height: "60px", margin: "5px 5px 5px 5px",  backgroundColor:"black"}} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
          );        
    } else {
        return(
            <button style={{width : "60px", color:"white", height: "60px", margin: "5px 5px 5px 5px",  backgroundColor:"red", padding: "0px"}} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
          );        
    }
}

export function H1G( props ) {
    return(
        <button style={{width : "60px", color:"white", height: "60px", margin: "5px 5px 5px 5px",  backgroundColor:"green"}} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
        );        
}
