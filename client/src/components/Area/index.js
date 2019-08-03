import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Area(props) {
    let curStyle = {
        borderColor:"red",
        borderWidth:"2px",
        borderLeft:"solid", 
        borderRight:"solid", 
        borderTop:"solid",
        borderBottom:"solid", 
        width:"5em",
        color:"red",
        margin: "5px 5px 5px 5px",
        padding: "0px"
    }

    // console.log(`props: ${JSON.stringify(props, null, 2)}`);
    let imgStyle = {
        top: props.numCoords.top,
        bottom: props.numCoords.bottom,
        left: props.numCoords.left,
        right: props.numCoords.right,
        zIndex: 2,
        position: "absolute"
    };  

        
    let touchableStyle = {
        zIndex: 3,
        position: "absolute"
    }

    // console.log(`imgStyle: ${JSON.stringify(imgStyle, null, 2)}`);
    let id = props.id;
    if(props.visible || (props.buttonStyle[props.id - 1] && props.buttonStyle[props.id - 1].visible)) {
        // if(props.buttonStyle[props.tileId]) {
        //     defaultZ.borderColor = props.buttonStyle[props.tileId].borderColor;
        // }
    
        return (
            // <div width="50px" height="50px" style={imgStyle}>
                <img className="icon" style={imgStyle} src={props.buttonStyle[props.id - 1].chipColor} width="50px" onClick={() => props.passedOnClick(props.id)}></img>
            // </div>
        )
    } else {
        return (
            // <div style={touchableStyle}>
                <area style={touchableStyle} key={props.id} shape="rect" coords={props.coords} onClick={() => props.passedOnClick(props.id)}></area>
            // </div>
        );    
    }
}

export default Area;
