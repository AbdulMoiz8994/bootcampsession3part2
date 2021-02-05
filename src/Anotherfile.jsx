import React,{useState} from 'react'

export const Anotherfile = () => {
    let [number,setNumber]=useState(0)
    let[color,changeColor]=useState()
    return (
        <div className={color ? 'sunny' : 'dark'}>
            <h2>{color ? 'Good Morning' : 'Good Night'}</h2>
         <h2>This is another Counter variable= {number}</h2>   
         <button onClick={() => setNumber(++number)}>Update Number</button>
         <button onClick={() => changeColor(!color)}>Update Day</button>
        </div>
    )
}
