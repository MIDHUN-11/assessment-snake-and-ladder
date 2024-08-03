import './App.css';
import { useState } from 'react';
import Board from './components/Board';
import Dice from './components/Dice';
const snakesandLadder={
  snakes : { 17: 7, 54: 34, 62: 19, 98: 79 },
  ladders : { 3: 22, 5: 8, 20: 29, 27: 1, 45: 75, 70: 91, 79: 99 }
};
function App() {
  const [players,setPlayers]=useState([
    {id: 0,position:0,scores:[]},
    {id: 1,position:0,scores:[]}
   ]);
   const [currentPlayer,setCurrentPlayer]=useState(1);
   const [dice,setDice]=useState(1);
   const [winner,setWinner]=useState(null);
   const rollDice=()=>{
    const roll=Math.floor(Math.random()*6)+1;
    setDice(roll);
    movePlayer(roll);
   };
   const movePlayer=(roll)=>{
    setPlayers(prevPlayers=>{
      const updatedPlayers=[...prevPlayers];
      const player=updatedPlayers[currentPlayer];
      let newPosition=player.position+roll;
      if(newPosition>=100){
        newPosition=100;
        setWinner(player.id);
      }
      else if(snakesandLadder.snakes[newPosition]){
        newPosition= snakesandLadder.snakes[newPosition];
      }
      else if(snakesandLadder.ladders[newPosition]){
        newPosition=snakesandLadder.ladders[newPosition];
      }
      player.position=newPosition;
      player.scores.push(roll);
      updatedPlayers[currentPlayer]=player;
      return updatedPlayers;
    });
    if(roll!==6 || winner){
      setCurrentPlayer((currentPlayer+1)%players.length);
    }
   };
   console.log(players);
  return (
    <div className="App">
      {winner? (
        <p>winner is {winner}</p>

      ):(
        <>
        <Board players={players}/>
        <Dice rollDice={rollDice} value={dice}/>
        </>
      )}
    </div>
  );
}

export default App;
