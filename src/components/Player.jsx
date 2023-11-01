import React, { useState, useRef } from "react";
export default function Player() {
const playerName = useRef()
  const [enteredName,setEnteredName] = useState(null)
  
 function  handleNameChange(event) {
  setEnteredName(event.target.value)
 }
 function handleClick() {
  setEnteredName(playerName.current.value)
 }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
