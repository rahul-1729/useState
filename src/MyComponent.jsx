import React, {useState} from 'react'

function MyComponent(){
    
    const [name,setName]= useState("Guest");
    const[age,setAge]=useState(0);
    const[isEmployed,setIsEmployed]=useState(false);

    const updateName =()=>{
        setName("Tekken")
    }
    const updateAge =()=>{
        setAge(age +1)
    }
    const Status =()=>{
        setIsEmployed(isEmployed ? 0:1);
    }
    return (
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>is employed : {isEmployed?"yes":"no"}</p>
            <button onClick={Status}>Are you employed?</button>
        </div>
    )
}
export default MyComponent