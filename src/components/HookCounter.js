import React,{useState} from 'react'

export default function HookCounter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h6>You clicked {count} times</h6>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
