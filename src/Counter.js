import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [name, Naavthev] = useState("");
function incre() {
    setCount(count+1);
    Naavthev("Shubham")
}
function decre() {
    setCount(count-1);
    Naavthev("Sayali")

}
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={decre}>-</button> 
      <label id="ans">{count}</label>
      <button onClick={incre}>+</button>

      {name}
    </div>
  );
}

