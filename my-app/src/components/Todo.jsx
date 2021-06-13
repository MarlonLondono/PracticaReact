import React, {useState} from 'react';

export default function Todo({agregar}){
    const [ToDo,setToDo] = useState('');

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            agregar(ToDo);
        }}>
            <input type="text" value={ToDo} onChange={(e)=>setToDo(e.target.value)} />
            <input type="submit" value="guardar" />
        </form>
    )
}