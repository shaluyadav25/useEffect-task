import { useEffect,useState } from "react"
const Task3 = () => {
    const[name,setName]=useState('')
    useEffect(()=>{
        console.log(name);
    },[name])
  return (
    <div>
        <label htmlFor="name">Name: </label>
        <input type="text"  id="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default Task3