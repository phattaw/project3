import React from "react";

export function H1( props ) {
    let curStyle = {
        borderColor:"white",
        borderWidth:"2px",
        borderLeft:"solid", 
        borderRight:"solid", 
        borderTop:"solid", 
        borderBottom:"solid", 
        width:"5em",
        color:"white",
        margin: "5px 5px 5px 5px",
        backgroundColor:"red",
        padding: "0px"
    }

    if(props.tileId % 2 === 0) {
        curStyle.backgroundColor = "black";
    }

    curStyle.borderColor = props.buttonStyle[props.tileId].borderColor;
    curStyle.boxShadow = props.buttonStyle[props.tileId].boxShadow;

    // switch(props.buttonStyle) {
    //     case "topLeft":
    //         curStyle.borderRight = "none";
    //         curStyle.borderBottom = "none";    
    //         break;
    //     case "topRight":
    //         curStyle.borderLeft = "none";
    //         curStyle.borderBottom = "none";
    //         break;
    //     case "bottomLeft":
    //         curStyle.borderTop = "none";
    //         curStyle.borderRight = "none";
    //         break;
    //     case "bottomRight":
    //         curStyle.borderLeft = "none";
    //         curStyle.borderTop = "none";
    //         break;
    //     case "single":
    //         break;
    //     case "topDouble":
    //         curStyle.borderBottom = "none";
    //         break;
    //     case "bottomDouble":
    //         curStyle.borderTop = "none";
    //         break;
    //     default:
    //         break;
    // }

    return(
        <button style={curStyle} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
        );            
}

export function H1G( props ) {
    let curStyle = {
        borderColor:"white",
        borderWidth:"2px",
        borderLeft:"solid", 
        borderRight:"solid", 
        borderTop:"solid",
        borderBottom:"solid", 
        width:"5em",
        color:"white",
        margin: "5px 5px 5px 5px",
        backgroundColor:"green",
        padding: "0px"
    }

    if(props.buttonStyle[props.tileId]) {
        curStyle.borderColor = props.buttonStyle[props.tileId].borderColor;
    }

    return(
        <button style={curStyle} onClick={() => props.passedOnClick(props.tileId)}>{props.children}</button>
        );            
}
