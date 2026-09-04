import { useEffect ,useState } from "react"
const Task1 = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log(``);
    },[count]
);
  return (
    <div>
        <h1>Count:{count} </h1>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        <button onClick={()=>setCount(count-1)}>Decreament</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Task1