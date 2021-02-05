import React ,{useState}from 'react'
import './App.css';

function App() {
let [count,setCount]=useState(0) //0 Will be initial value of count
//setCount to do the update to count value
  return (
    <div className="App">
      <h1>We are doing Counting Variable= {count}</h1>
      <button onClick={() => setCount(++count)}>Update Value</button>
    </div>
  );
}

export default App;
