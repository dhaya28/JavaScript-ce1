import {useState} from 'react'

export default function StateFunction() {
    const[carName,setCarName]=useState("Thar");
    const ChangeCarName=()=>setCarName("BMW")
    const[count,setCount]=useState(0);
    const countPlus=()=>setCount(count+1)
  return (
    <div>
       <h1>my car name is {carName}</h1>
       <button onClick={ChangeCarName}>carname</button>
       <h1>Count : {count}</h1>
       <button onClick={countPlus}>plus</button>
       <button onClick={()=>setCount(count-1)}>Minus</button>
    </div>
  )
}
