import React from "react";
import Area from "../Area";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RouletteBoard(props) {
    return (
        <div>
            <img src="../../../images/rouletteLayout.png" width="1200" height="576" alt="Planets" useMap="#rouletteMap"></img>

            <map name="rouletteMap">
                {
                props.touchables.forEach((touchable) => {
                    (
                    <Area coords={touchable}></Area>
                    )
                })
                }
            </map>
        </div>
    );
}

export default RouletteBoard;
