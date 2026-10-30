import "./App.css";
import { useState } from "react";


export default function App(){
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);
const incrementHandler = () => {
  setCount(count + 1);
}
const decrementHandler = () => {
  setCount((count) => Math.max(0, count - 1));
}
  return (
    <>
    <h1> Counter is {count} </h1>
    <div className="card">Count is {count}</div>
    <div>
      <button
      style={{margin: "0 5px"}}
      onClick={() => {
        incrementHandler();
      }}>Increment</button>
      <button
      style={{margin: "0 5px"}}
      onClick={() => {decrementHandler();}}>Decrement</button>
      <button
      style={{margin: "0 5px"}}
      onClick={() => {setCount(0);}}>Reset</button>
    </div>
    <div style={{marginTop: "10px 0"}}>
      <input
      style={{width:"100px", border: "3px solid black",margin: "8px 10px"  , padding:"0.6rem 1.2em"}}
      value={countToSet}
      onChange={(e) => setCountToSet(Number(e.target.value))}
      type="text"
      />
      <button style={{margin: "0 5px"}}
      onClick={() => {
        setCount(Number(countToSet));
        setCountToSet(0);
      }}
      >Set to {countToSet}</button>
      </div>
    </>
  );
}