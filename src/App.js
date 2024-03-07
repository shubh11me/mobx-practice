import './App.css';
import { Greet } from "./Greet";
import {Counter,arr} from './Counter'
import { useState } from "react";
function App() {

  // let a="Abhi";
const [a,setA]=useState("Abhi");


  function changer() {
// a="Mayur";
setA("mayur")
console.log(a)
  }

  return (
   <div>
    <h1>Hi</h1>
    <Greet name="shubham" age="10"></Greet>
    <Greet name="Sayali" age="12"></Greet>
    <Greet name={a}></Greet>
{a}
    <button onClick={changer}>Change</button>

    <Counter></Counter>
   </div>
  );
}

export default App;
