import React ,{useState}from 'react'
import './App.css';
//import Component
import {Child} from './Child'

function App() {
let [count,setCount]=useState(0) //0 Will be initial value of count
let[isMorning, updateDay]=useState()
// console.log(count)
//setCount to do the up date to count value
  return (
    <div className={ isMorning ? 'morning' : 'night'}>
      <h2>Day Time= {isMorning ? "Good Morning" : "Good Night"}</h2>
      <Child counter={count}/>
      {/* <h1>We are doing Counting Variable= {count}</h1> */}
      <button onClick={() => setCount(++count)}>Update Value</button>
      <button onClick={() => updateDay(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
