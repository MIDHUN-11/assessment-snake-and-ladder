import React from "react";
const Dice=({rollDice,value})=>{
    return(
        <div>
            <button onClick={rollDice}>
                Roll
            </button>
            <p>{value}</p>
        </div>
    )
}
export default Dice;