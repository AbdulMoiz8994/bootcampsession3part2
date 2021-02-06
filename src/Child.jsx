import React from 'react'

export const Child = (props) => {
    console.log(props)
    return (
        <div>
        <h1>The Counter's Variable value= {props.counter[0]}</h1>         
        <button onClick={() => props.counter[1](++props.counter[0])}>Update Counter</button>
        </div>
    )
}
