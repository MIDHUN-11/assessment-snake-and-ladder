import React from 'react';

const Board=({players})=>{
    const renderBoard=()=>{
        const cells=[];
        for(let i=100;i>0;i--){
            cells.push(
                <div key={i}>
                    {i}
                    {players.map(player=>player.position ===i && <div key={player.id}>{`P${player.id+1}`}</div>)}
                </div>
            )
        }
        return cells;   
    }
    return <>{renderBoard()}</>
}
export default Board;